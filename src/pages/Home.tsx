import EventsSection from '@/components/home/EventsSection'
import HeroSection from '@/components/home/HeroSection'
import StatsSection from '@/components/home/StatsSection'
import React from 'react'
import News from '@/components/home/News'
import ImpLinks from '@/components/home/ImpLinks'
import About from '@/components/home/About'
import UniversitySongs from '@/components/home/UniversitySongs'
import GalleryPreview from '@/components/home/GalleryPreview'
import ChancellorNoticesSection from '@/components/home/ChancellorNoticesSection'
import ViceChancellorNoticesSection from '@/components/home/ViceChancellorNoticesSection'
import MITSHeroSection from '@/components/home/AdditionalSection'


const Home = () => {
  return (
    <div className="antialiased bg-white">
      {/* NO FLOATING BUTTON COMPONENT HERE! It's already in App.tsx */}
      <HeroSection />
      <About/>
      {/* Replace the existing <div className='heads ...'> block in Home.tsx with this */}

<div className="heads-section" style={{ padding: '3rem 2.5rem 0' }}>
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700&family=DM+Sans:wght@300;400;500&display=swap');

    .heads-section-header {
      text-align: center;
      margin-bottom: 2.5rem;
    }

    .heads-section-header h2 {
      font-family: 'DM Sans', sans-serif;
      font-size: 0.72rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: #9ca3af;
      font-weight: 400;
      margin: 0 0 14px;
    }

    .heads-ornament {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14px;
    }

    .heads-ornament .o-line {
      width: 72px;
      height: 0.5px;
      background: rgba(218,165,32,0.45);
    }

    .heads-ornament .o-crest {
      font-family: 'Playfair Display', serif;
      font-size: 1.2rem;
      color: #B8860B;
      line-height: 1;
    }

    .heads-cards-wrap {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    /* Thin gold divider between the two cards */
    .heads-separator {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 0;
      position: relative;
      z-index: 10;
    }

    .heads-separator-badge {
      position: absolute;
      width: 32px;
      height: 32px;
      background: #ffffff;
      border: 0.5px solid #e5e7eb;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      box-shadow: 0 0 0 4px #ffffff;
    }

    .heads-separator-badge span {
      font-size: 11px;
      color: #B8860B;
      line-height: 1;
    }
  `}</style>

  {/* Section Header */}
  <div className="heads-section-header">
    <h2>University Leadership</h2>
    <div className="heads-ornament">
      <div className="o-line" />
      <div className="o-crest">✦</div>
      <div className="o-line" />
    </div>
  </div>

  {/* Cards */}
  <div className="heads-cards-wrap">
    <ChancellorNoticesSection />
    <div className="heads-separator">
      <div className="heads-separator-badge">
        <span>✦</span>
      </div>
    </div>
    <ViceChancellorNoticesSection />
  </div>
</div>
      <StatsSection />
      <EventsSection />

      {/* <News/> */}
      <MITSHeroSection/>
      {/* <ImpLinks/> */}
      <UniversitySongs/>

      <GalleryPreview/>
      
      {/* <div className='flex flex-col px-10 gap-10'>
        <ChancellorNoticesSection/>
        <ViceChancellorNoticesSection/>
      </div> */}
      
      {/* <OurInstitutions/> */}
      {/* <AboutSection /> */}

      {/* <LinkItem/> */}
      
     
      {/* <AdmissionEnquiry/> */}
      {/* <CampusLife />
      <Upcomingevents/>
      <TestimonialsSection />
      <CTASection /> */}
    </div>
  )
}

export default Home