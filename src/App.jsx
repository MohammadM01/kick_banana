import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import AppRoutes from './routes';
import Chatbot from './components/Chatbot/Chatbot';
import WhatsAppButton from './components/Common/WhatsAppButton';
import PageTransition from './components/Common/PageTransition';
import ScrollToTop from './components/Common/ScrollToTop';
import './styles/global.css';
import './styles/themes.css';
import './styles/animations.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {/* ─── Premium Loading Screen ─── */}
      <div className={`premium-loader-wrapper ${!loading ? 'loaded' : ''}`}>
        {/* Cinematic corner accents */}
        <div className="loader-corner loader-corner--tl" />
        <div className="loader-corner loader-corner--tr" />
        <div className="loader-corner loader-corner--bl" />
        <div className="loader-corner loader-corner--br" />

        <div className="loader-logo-container">
          <img src="/images/logo.png" alt="KICKINBANANA Logo" className="loader-logo" />
          <h2 className="loader-brand">KICKIN<span>BANANA</span></h2>
          <p className="loader-tagline">Premium Jerseys</p>
        </div>

        {/* Progress bar */}
        <div className="loader-progress-track">
          <div className="loader-progress-bar" />
        </div>
      </div>

      {/* ─── Main App ─── */}
      <Router>
        <ScrollToTop />
        <div className="app">
          <Header />
          <main>
            <PageTransition>
              <AppRoutes />
            </PageTransition>
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
