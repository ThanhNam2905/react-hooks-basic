import React, { useState, useEffect } from 'react';
import './App.scss';
import ColorBox from './Component/ColorBox';
import TodoList from './Component/TodoList';
import TodoForm from './Component/TodoForm';
import PostList from './Component/PostList';
import Pagination from './Component/Pagination';
import queryString from 'query-string';

function App() {

  const [todoList, setTodoList] = useState([
      { id: 1, title: "ReactJS with NodeJS"},
      { id: 2, title: "ReactJS with Redux"},
      { id: 3, title: "ReactJS with FireBase"},
  ])

  // Pagination
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 31
  })
  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1
  })

  // PostList
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    
      async function fetchPostList() {
        try {
          // package queryString convert obj => string
          const paramsString = queryString.stringify(filter);
          const requestURL = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
          const response = await fetch(requestURL);
          const responseJSON = await response.json();
          console.log({ responseJSON });
  
          const { data, pagination } = responseJSON;
          setPostList(data);
          setPagination(pagination);
        }
        catch (error) {
          console.log("Failed to fetch POST LIST ", error.message);
        }
        } 
        fetchPostList();
        console.log("POST LIST useEffect()");
  }, [filter])
  useEffect(() => {
    console.log("TODO LIST useEffect()");
  }, )
  // End Post List

  // Pagination
  
  function handlePageChange(newPage){
    console.log("New Page ", newPage);
    setFilter({
      ...filter,
      _page: newPage,
    })
  }

  // End Pagination
  
  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    // console.log('Form Submit ' + formValues);
    // add new todo to current todo list

    const newTodo = {
      id: todoList.length + 1,
      ...formValues
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      WelCome to React Hooks: useEffect
      {/* <ColorBox/>
      <TodoForm onSubmit={handleTodoFormSubmit}/>
      <TodoList todos={todoList} onTodoClick={handleTodoClick}/> */}
      <PostList posts={postList}/>
      <Pagination 
          pagination={pagination}
          onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
