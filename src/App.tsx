import { Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import Login from './pages/Login';
import Otp from './pages/Otp';
import MainPage from './pages/MainPage';
import Searchpage from './pages/Searchpage';
import LandingPage from './pages/LandingPage';
import Blogs from './pages/Blogs';
import BlogSingle from './pages/BlogSingle';
import TermsCondition from './pages/TermsandCondition';
import ContactUs from './pages/ContactUs';
import Privacypolicy from './pages/Privacypolicy';

// Components
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {



  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogDetail/:id" element={<BlogSingle />} />

        {/* contact,terms and privacy */}

        <Route path="/termsCondition" element={<TermsCondition />} />
        <Route path="/privacyPolicy" element={<Privacypolicy />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* Auth Routes */}
        <Route path="/restaurant/:id/:tableNo/login" element={<Login />} />
        <Route path="/restaurant/:id/:tableNo/login/otp" element={<Otp />} />

        {/* Main Pages and Search Routes */}
        <Route
          path="/restaurant/:id/:tableNo"
          element={<ProtectedRoute element={MainPage} />}
        />
        <Route
          path="/restaurant/:id/:tableNo/search"
          element={<ProtectedRoute element={Searchpage} />}
        />

        {/* 404 Redirect */}
        {/* <Route path="*" element={<Navigate to="/restaurant/:id/login" />} /> */}
      </Routes>
    </>
  );
};

export default App;
