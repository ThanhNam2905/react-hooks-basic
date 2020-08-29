import React, { useState } from 'react';
import './App.scss';
import ColorBox from './Component/ColorBox';
import TodoList from './Component/TodoList';
import TodoForm from './Component/TodoForm';

function App() {

  const [todoList, setTodoList] = useState([
      { id: 1, title: "ReactJS with NodeJS"},
      { id: 2, title: "ReactJS with Redux"},
      { id: 3, title: "ReactJS with FireBase"},
  ])
  
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
      WelCome to React Hooks
      <ColorBox/>
      <TodoForm onSubmit={handleTodoFormSubmit}/>
      <TodoList todos={todoList} onTodoClick={handleTodoClick}/>
      
    </div>
  );
}

export default App;
