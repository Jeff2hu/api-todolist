import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Navigation = () => {

  const navigate = useNavigate();

  return (
    <nav>
      <h1><a style={{cursor:"pointer"}}>ONLINE TODO LIST</a></h1>
      <ul>
        <li className="todo_sm">
          <a style={{cursor:"pointer"}}>
            <span> 的代辦</span>
          </a>
        </li>
        <li>
          <a 
            style={{cursor:"pointer"}}
            onClick={()=>{navigate("/")}}  
          >登出
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation