import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import AppRoutes from './routes';
import Chatbot from './components/Chatbot/Chatbot';
import WhatsAppButton from './components/Common/WhatsAppButton';
import './styles/global.css';
import './styles/themes.css';
import './styles/animations.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate premium resource loading transition
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className={`premium-loader-wrapper ${!loading ? 'loaded' : ''}`}>
        <div className="loader-logo-container">
          <img src="/images/logo.png" alt="KICKINBANANA Logo" className="loader-logo" />
          <h2 className="loader-brand">KICKIN<span>BANANA</span></h2>
        </div>
        <div className="loader-spinner"></div>
      </div>

      <Router>
        <div className="app">
          <Header />
          <main>
            <AppRoutes />
          </main>
          <Footer />
          <Chatbot />
          <WhatsAppButton />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
