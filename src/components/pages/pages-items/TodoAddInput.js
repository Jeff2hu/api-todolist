import React, { useState } from 'react';

const TodoAddInput = () => {

  const [ userInput,setUserInput ] = useState("")

  const addTodoHandler = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="inputBox">
      <input 
        type="text" 
        placeholder="請輸入待辦事項"
        onChange={addTodoHandler}
      />
      <button>
        <i className="fa fa-plus"></i>
      </button>
    </div>
  )
}

export default TodoAddInput