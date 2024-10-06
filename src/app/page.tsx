// src/app/page.tsx
import HeroSection from './components/HeroSection';
import Slideshow from './components/Slideshow';
import VideoSection from './components/VideoSection';
import WhatIsStammering from './components/WhatIsStammering';
import ContactUsSection from './components/ContactUsSection';
export default function Home() {
  return (
    <div>
      <HeroSection />
      <Slideshow/>
      <VideoSection/>
      <WhatIsStammering/>
      <ContactUsSection/>
    </div>
  );
}
