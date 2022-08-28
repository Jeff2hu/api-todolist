import React, { useContext, useState } from 'react';
import { LoginContext } from '../../store/login/LoginContext';
import { api_addTodo } from '../../store/todolist/API_TodoList';
import { api_todoList } from '../../store/todolist/API_TodoList';

const TodoAddInput = () => {

  const [ userInput,setUserInput ] = useState("")

  const addTodoHandler = (e) => {
    setUserInput(e.target.value)
  }

  const addHandler = async() => {
    await api_addTodo(localStorage.getItem("token"),userInput)
    setUserInput("")
  }

  return (
    <div className="inputBox">
      <input 
        value={userInput}
        type="text" 
        placeholder="請輸入待辦事項"
        onChange={addTodoHandler}
      />
      <button onClick={addHandler}>
        <i className="fa fa-plus"></i>
      </button>
    </div>
  )
}

export default TodoAddInput