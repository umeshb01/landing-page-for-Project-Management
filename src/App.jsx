import React, { useState } from 'react';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DashboardPreview from './components/DashboardPreview';
import SocialProofSection from './components/SocialProofSection';
import AnalyticsSection from './components/AnalyticsSection';
import FeaturesSection from './components/Features';
import TestimonialSection from './components/Testimonials';
import CTASection from './components/PromoSection';
import Footer from './components/Footer';

function App() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  return (
    <div className="min-h-screen font-sans bg-slate-50">
      {/* Announcement Banner */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isBannerVisible ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <Banner isVisible={isBannerVisible} setIsVisible={setIsBannerVisible} />
      </div>

      {/* Navigation */}
      <Navbar isBannerVisible={isBannerVisible} />

      {/* Hero Section */}
      <Hero />

      {/* Dashboard Preview */}
      <DashboardPreview />

      {/* Social Proof Logos */}
      <SocialProofSection />

      {/* Analytics Section */}
      <AnalyticsSection />
      <FeaturesSection />
      <TestimonialSection />
      <CTASection />
      <Footer />

      {/* Spacer */}
      <div className="h-10 bg-slate-50" />
    </div>
  );
}

export default App;
