import { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ServiceBar } from './components/ServiceBar';
import { Home } from './pages/Home';
import { Personal } from './pages/Personal';
import { Business } from './pages/Business';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Checking } from './pages/Checking';
import { Savings } from './pages/Savings';
import { Credit } from './pages/Credit';
import { Cards } from './pages/Cards';
import { Mortgages } from './pages/Mortgages';
import { Investments } from './pages/Investments';
import { Specialty } from './pages/Specialty';
import { Digital } from './pages/Digital';

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
      case 'checking':
        return <Checking />;
      case 'savings':
        return <Savings />;
      case 'credit':
        return <Credit />;
      case 'cards':
        return <Cards />;
      case 'mortgages':
        return <Mortgages />;
      case 'investments':
        return <Investments />;
      case 'specialty':
        return <Specialty />;
      case 'digital':
        return <Digital />;
      default:
        return <Home />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />
        <ServiceBar onNavigate={setCurrentPage} />
        <main className="flex-grow">{renderPage()}</main>
        <Footer onNavigate={setCurrentPage} />
      </div>
    </LanguageProvider>
  );
}

export default App;
