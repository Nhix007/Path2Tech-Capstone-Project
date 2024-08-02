import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/singup';

function App() {
  return (  
      <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
</Routes>
    
  );
}

export default App;
