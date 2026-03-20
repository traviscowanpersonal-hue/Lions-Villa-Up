import React from 'react';
import './App.css';
import { Toaster } from './components/ui/sonner';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { RoomsSection } from './components/RoomsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { FooterSection } from './components/FooterSection';
import { StickyMobileBar } from './components/StickyMobileBar';
import { WaveDivider } from './components/WaveDivider';

// SEO structured data
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: "Lion's Villa Guest House",
  description: 'Clean, affordable rooms in May Pen, Clarendon Jamaica. Quick easy check-in, quiet and secure stay.',
  url: 'https://local-service-hub-28.preview.emergentagent.com',
  telephone: '+18769867353',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '17 Chapleton Road Clarendon',
    addressLocality: 'May Pen',
    addressRegion: 'Clarendon',
    addressCountry: 'JM',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '3.8',
    reviewCount: '36',
    bestRating: '5',
  },
  image: 'https://images.unsplash.com/photo-1700807310372-8c22762add79?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85',
};

function App() {
  return (
    <div className="App">
      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Toaster
        position="top-center"
        richColors
        toastOptions={{
          style: {
            background: 'hsl(28 28% 8%)',
            border: '1px solid hsl(35 25% 20%)',
            color: '#FFF9EE',
          },
        }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Page wrapper with mobile padding for sticky bar */}
      <main className="page-wrapper">
        <HeroSection />
        <AmenitiesSection />
        <WaveDivider />
        <RoomsSection />
        <WaveDivider flip />
        <ReviewsSection />
        <GallerySection />
        <AboutSection />
        <ContactSection />
      </main>

      <FooterSection />

      {/* Mobile sticky bar */}
      <StickyMobileBar />
    </div>
  );
}

export default App;
