import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import DashboardHeader from './components/DashboardHeader';
import Login from './pages/User_auth/Login';
import Register from './pages/User_auth/Register';
import Home from './pages/Frontend/Home';
import AdminDashboard from './pages/SuperAdmin/AdminDashboard';
import './assets/scss/Global.scss'; // Global styles
import About from './pages/Frontend/About';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const loadStyles = async () => {
      if (location.pathname === '/') {
        await import('./assets/scss/MainStyle.scss');
      } else if (location.pathname.startsWith('/dashboard')) {
        await import('./assets/scss/Admin.scss');
      }
    };

    loadStyles();
  }, [location.pathname]);

  const renderHeader = () => {
    if (location.pathname === '/login' || location.pathname === '/register') {
      return null;
    } else if (location.pathname.startsWith('/dashboard')) {
      return <DashboardHeader className="dashboard-header" />;
    }
    return <Header className="header" />;
  };

  function usePageViews() {
    let location = useLocation();

    useEffect(() => {
        document.title = `Homeopathy | ${location.pathname.slice(1) || 'Home'} `;
    }, [location]);

    return null;
}

  return (
    <>
      {renderHeader()}
      {usePageViews()}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<About />} />
      </Routes>
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
