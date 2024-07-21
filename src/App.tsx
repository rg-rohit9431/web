import { Routes, Route } from 'react-router-dom';
import './App.css'

//image

//pages
import Login from './pages/Login';
import Otp from './pages/Otp';
import MainPage from './pages/MainPage';
import Searchpage from './pages/Searchpage';

//components
import ProtectedRoute from './components/ProtectedRoute';
import { useEffect, useState } from 'react';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

useEffect(() => {
  const userData = localStorage.getItem('user');
  if (userData) {
    setIsAuthenticated(true);
  }
}, []);
  return (
    <>
      <Routes>
        {/* auth: */}
        <Route path="/restaurant/:id/login" element={<Login />} />
        <Route path="/restaurant/:id/login/otp" element={<Otp />} />

        {/* main pages and search Routes */}
        <Route path="/restaurant/:id" element={<ProtectedRoute element={MainPage} isAuthenticated={isAuthenticated} />} />
        <Route path="/restaurant/:id/search" element={<ProtectedRoute element={Searchpage} isAuthenticated={isAuthenticated} />} />

        {/* 404 */}
        {/* <Route path="*" element={<Navigate to="login" />} /> */}
      </Routes>
    </>
  )
}

export default App