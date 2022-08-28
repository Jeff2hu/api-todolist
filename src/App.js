import { useContext } from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import TodoList from './components/pages/TodoList';
import NotLogin from './components/pages/NotLogin';
import IsLogin from './components/pages/IsLogin';

import { LoginContext } from './components/store/login/LoginContext';

function App() {

  const { token } = useContext(LoginContext)

  return (
    <>
      {token
      ?<Routes>
        <Route path="todolist" element={<TodoList />} />
        <Route path="*" element={<IsLogin />} />
      </Routes> 

      :<Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotLogin />} />
        </Routes> 
      }
    </>
  );
}

export default App;
