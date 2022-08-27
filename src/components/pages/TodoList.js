import React,{ useContext } from 'react';

import Navigation from './pages-items/Navigation';
import TodoAddInput from './pages-items/TodoAddInput';
import TodoList_Item from './pages-items/TodoList_Item';
import TodoTabs from './pages-items/TodoTabs';
import { LoginContext } from '../store/login/LoginContext';
import { TodoListContext } from '../store/todolist/TodoListContext';

const TodoList = () => {

  const { message,setMessage,data } = useContext(LoginContext)

  setTimeout(()=>{
    setMessage("")
  },2000)

  return (
    <div id="todoListPage" className="bg-half">
      <Navigation />
        <div className="conatiner todoListPage vhContainer">
            <div className="todoList_Content">
              <TodoAddInput />
                <div className="todoList_list">
                <TodoTabs />
                <div className="todoList_items">
                  <TodoList_Item />
                    <div className="todoList_statistics">
                      <p>{data.todos?.filter((item)=>!item.completed_at).length}個待完成項目</p>
                      <button
                        onClick={()=>{
                          
                        }}
                      >
                        清除已完成項目
                      </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className={message?"alertMessage_container":""}><p>{message}</p></div>
    </div>
  )
}

export default TodoList