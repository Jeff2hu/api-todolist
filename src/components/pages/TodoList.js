import React,{ useContext, useEffect } from 'react';

import Navigation from './pages-items/Navigation';
import TodoAddInput from './pages-items/TodoAddInput';
import TodoList_Item from './pages-items/TodoList_Item';
import TodoTabs from './pages-items/TodoTabs';
import { LoginContext } from '../store/login/LoginContext';
import { api_deleteItem } from '../store/todolist/API_TodoList';

const TodoList = () => {

  const { message,setMessage,errorMessage,setErrorMessage,data } = useContext(LoginContext)
  
  useEffect(()=>{
    setTimeout(()=>{
      setMessage("")
      setErrorMessage("")
    },2000)
  },[message,errorMessage])


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
                        onClick={async()=>{
                          const completed_at = data.todos?.filter((item)=>item.completed_at)
                          if(completed_at.length>0){
                            for (const item of completed_at){
                              const { id } = item;
                              await api_deleteItem(localStorage.getItem("token"),id)
                            }
                              setMessage("清除已完成項目")
                          }else{
                            setErrorMessage("目前無已完成項目")
                          }
                        }}
                      >
                        清除已完成項目
                      </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className={errorMessage?"alertMessage_container":""}><p><span className='errorMessage'>X</span>{errorMessage}</p></div>
          <div className={message?"alertMessage_container":""}><p><span className='correctMessage'>✓</span>{message}</p></div>
    </div>
  )
}

export default TodoList