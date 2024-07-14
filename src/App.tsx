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

// Example: Assuming you have an isAuthenticated state
const isAuthenticated = true; // Replace with actual authentication logic

const App = () => {

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
