import { Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import Login from './pages/Login';
import Otp from './pages/Otp';
import MainPage from './pages/MainPage';
import Searchpage from './pages/Searchpage';

// Components
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {

 

  return (
    <>
      <Routes>
        {/* Auth Routes */}
        <Route path="/restaurant/:id/login" element={<Login />} />
        <Route path="/restaurant/:id/login/otp" element={<Otp />} />

        {/* Main Pages and Search Routes */}
        <Route
          path="/restaurant/:id"
          element={<ProtectedRoute element={MainPage} />}
        />
        <Route
          path="/restaurant/:id/search"
          element={<ProtectedRoute element={Searchpage}  />}
        />

        {/* 404 Redirect */}
        {/* <Route path="*" element={<Navigate to="/restaurant/:id/login" />} /> */}
      </Routes>
    </>
  );
};

export default App;
