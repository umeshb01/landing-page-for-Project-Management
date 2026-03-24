import React, { useState } from 'react';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  return (
    <div className="min-h-screen font-sans bg-slate-50">
      {/* Announcement Banner */}
      <div 
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isBannerVisible ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <Banner isVisible={isBannerVisible} setIsVisible={setIsBannerVisible} />
      </div>

      {/* Navigation */}
      <Navbar isBannerVisible={isBannerVisible} />

      {/* Hero Section */}
      <Hero />

      {/* Optional: Spacer for scrolling behavior check */}
      <div className="h-96 bg-slate-50" />
    </div>
  );
}

export default App;
