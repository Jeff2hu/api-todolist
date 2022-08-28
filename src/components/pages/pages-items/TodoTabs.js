import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TodoListContext } from '../../store/todolist/TodoListContext';

const TodoTabs = () => {

  const { tabs,setClickTab,clickTab } = useContext(TodoListContext)

  return (
    <ul className="todoList_tab">
      { tabs.map(({title,id})=>{
        return(
          <li 
            key={id}
            className={clickTab===id?"active":""}
            onClick={()=>{
              setClickTab(id)
            }}>{title}</li>
        )
      }) }  
    </ul>
  )
}

export default TodoTabs