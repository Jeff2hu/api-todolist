import React, { useContext } from 'react'
import { LoginContext } from '../../store/login/LoginContext'
import { api_changeCheckbox,api_deleteItem } from '../../store/todolist/API_TodoList'
import { TodoListContext } from '../../store/todolist/TodoListContext'

const TodoList_Item = () => {

  const { getList } = useContext(LoginContext)
  const { filterData } = useContext(TodoListContext)

  const checkboxHandler = async(id) => {
    await api_changeCheckbox(localStorage.getItem("token"),id)
    getList()
  }
  const deleteHandler = async(id) => {
    await api_deleteItem(localStorage.getItem("token"),id)
    getList()
  }

  return (
    <ul className="todoList_item">
      {filterData?.length>0
      ?filterData?.map(({id,completed_at,content})=>{
        return(
          <li key={id}>
            <label className="todoList_label">
            <input 
              className="todoList_input" 
              type="checkbox" 
              value={completed_at?true:false}
              defaultChecked={completed_at ?"checked" :""}
              onClick={()=>{
                checkboxHandler(id)
              }}
            />
            <span>{content}</span>
          </label>
          <a 
            href='#'
            onClick={(e)=>{
              e.preventDefault();
              deleteHandler(id)
              }} 
          >
            <i className="fa fa-times"></i>
          </a>
        </li>
        )
      })
      :<p className='noTodoList'>~ 目前尚無待辦事項 ~</p>
    }
    </ul>
  )
}

export default TodoList_Item