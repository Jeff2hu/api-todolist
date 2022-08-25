import { Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import TodoList from './components/pages/TodoList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="todolist" element={<TodoList />} />
    </Routes>
  );
}

export default App;
