import React, { useState } from 'react';
import './App.scss';
import ColorBox from './Component/ColorBox';
import TodoList from './Component/TodoList';

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

  return (
    <div className="app">
      WelCome to React Hooks
      <ColorBox/>
      <TodoList todos={todoList} onTodoClick={handleTodoClick}/>
    </div>
  );
}

export default App;
