import React, { useContext } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { LoginContext } from '../../store/login/LoginContext';

const Navigation = () => {

  const navigate = useNavigate();
  const { setToken } = useContext(LoginContext)

  return (
    <nav>
      <h1><a style={{cursor:"pointer"}}>ONLINE TODO LIST</a></h1>
      <ul>
        <li className="todo_sm">
          <a style={{cursor:"pointer"}}>
            <span>{localStorage.getItem("name")} 的代辦</span>
          </a>
        </li>
        <li>
          <a 
            style={{cursor:"pointer"}}
            onClick={()=>{
              setToken(localStorage.removeItem("token"))
              localStorage.removeItem("name")
              navigate("/")
            }}  
          >登出
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation