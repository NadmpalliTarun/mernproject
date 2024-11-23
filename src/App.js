import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TrendingBlogs from './components/TrendingBlogs';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  // State to track which component should be visible
  const [activeSection, setActiveSection] = useState('home');
  return (
    <div className="App">
      {/* Header component for navigation */}
      <Header setActiveSection={setActiveSection} />

      {/* Main content area with conditional rendering */}
      <div className="main-content">
        {activeSection === 'home' && (
          <>
            <TrendingBlogs />
            <Features />
            <AboutUs />
          </>
        )}
        {activeSection === 'login' && <Login />}
        {activeSection === 'register' && <Register />}
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
export default App;
