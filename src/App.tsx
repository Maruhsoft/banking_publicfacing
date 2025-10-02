import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import LiveChat from './components/LiveChat';
import Personal from './pages/Personal';
import SmallBusiness from './pages/SmallBusiness';
import Commercial from './pages/Commercial';
import Investments from './pages/Investments';
import DigitalServices from './pages/DigitalServices';
import { useBankData } from './hooks/useBankData';

function App() {
  const { bankData } = useBankData();

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
            </>
          } />
          <Route path="/personal" element={<Personal />} />
          <Route path="/small-business" element={<SmallBusiness />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/digital-services" element={<DigitalServices />} />
        </Routes>
        <Footer />
        {bankData?.liveChatKey_smartsupp && (
          <LiveChat smartsuppKey={bankData.liveChatKey_smartsupp} />
        )}
      </div>
    </Router>
  );
}

export default App;