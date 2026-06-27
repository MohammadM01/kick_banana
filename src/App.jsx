import React from 'react';
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
  return (
    <ThemeProvider>
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
