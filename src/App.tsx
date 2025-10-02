import { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ServiceBar } from './components/ServiceBar';
import { SmartSuppChat } from './components/SmartSuppChat';
import { Home } from './pages/Home';
import { Personal } from './pages/Personal';
import { Business } from './pages/Business';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'personal':
        return <Personal />;
      case 'business':
        return <Business />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />
        <ServiceBar />
        <main className="flex-grow">{renderPage()}</main>
        <Footer onNavigate={setCurrentPage} />
        <SmartSuppChat />
      </div>
    </LanguageProvider>
  );
}

export default App;
