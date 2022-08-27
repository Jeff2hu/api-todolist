import { useContext } from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import TodoList from './components/pages/TodoList';

import { LoginContext } from './components/store/login/LoginContext';

function App() {

  const { token } = useContext(LoginContext)

  const NoMatch = () => {
    return(
      <h2>No Match!</h2>
    )
  }

  const Loading = () => {
    return(
      <h2>Loading...</h2>
    )
  }

  return (
    <>
      {token
      ?<Routes>
        <Route path="todolist" element={<TodoList />} />
        <Route path="*" element={<NoMatch />} />
      </Routes> 

      :<Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="todolist" element={<Loading />} />
        <Route path="*" element={<noMatch />} />
        </Routes> 
      }
    </>
  );
}

export default App;
