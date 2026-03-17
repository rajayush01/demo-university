import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import bhoj1 from '../../assets/bhoj1.jpeg';
import bhoj2 from '../../assets/bhoj2.jpeg';
import bhoj3 from '../../assets/bhoj3.jpeg';
import bhoj4 from '../../assets/bhoj4.jpg';
import bhoj5 from '../../assets/bhoj5.jpg';
import bhoj6 from '../../assets/bhoj6.jpg';
import bhoj7 from '../../assets/bhoj7.jpeg';
import bhoj8 from '../../assets/bhoj8.jpg';

interface GalleryPreviewProps {
  title?: string;
  subtitle?: string;
}

const images = [
  { id: 1, url: bhoj1, thumb: bhoj1, alt: 'Campus Life', label: 'Campus' },
  { id: 2, url: bhoj2, thumb: bhoj2, alt: 'University Events', label: 'Events' },
  { id: 3, url: bhoj3, thumb: bhoj3, alt: 'Academic Excellence', label: 'Academics' },
  { id: 4, url: bhoj4, thumb: bhoj4, alt: 'Student Activities', label: 'Students' },
  { id: 5, url: bhoj5, thumb: bhoj5, alt: 'Cultural Programs', label: 'Culture' },
  { id: 6, url: bhoj6, thumb: bhoj6, alt: 'Campus Facilities', label: 'Facilities' },
  { id: 7, url: bhoj7, thumb: bhoj7, alt: 'Research & Innovation', label: 'Research' },
  { id: 8, url: bhoj8, thumb: bhoj8, alt: 'Community Life', label: 'Community' },
];

const GalleryPreview: React.FC<GalleryPreviewProps> = ({
  title = 'Campus Life Gallery',
  subtitle = 'Capturing moments that define our community',
}) => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const goTo = useCallback(
    (index: number, dir: 'next' | 'prev' = 'next') => {
      if (animating || index === active) return;
      setDirection(dir);
      setPrev(active);
      setAnimating(true);
      setActive(index);
      setTimeout(() => {
        setPrev(null);
        setAnimating(false);
      }, 700);
    },
    [active, animating]
  );

  const goNext = useCallback(() => {
    goTo((active + 1) % images.length, 'next');
  }, [active, goTo]);

  const goPrev = useCallback(() => {
    goTo((active - 1 + images.length) % images.length, 'prev');
  }, [active, goTo]);

  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext]);

  const getSlideStyle = (i: number): React.CSSProperties => {
    if (i === active) return { display: 'block' };
    if (i === prev) return { display: 'block' };
    return { display: 'none' };
  };

  const getSlideClass = (i: number) => {
    const base = 'absolute inset-0 overflow-hidden';
    if (i === active) {
      return base + (animating ? (direction === 'next' ? ' animate-slide-in-right' : ' animate-slide-in-left') : '');
    }
    if (i === prev) {
      return base + (direction === 'next' ? ' animate-slide-out-left' : ' animate-slide-out-right');
    }
    return base;
  };

  return (
    <>
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to   { transform: translateX(0);   opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
        @keyframes slideOutLeft {
          from { transform: translateX(0);    opacity: 1; }
          to   { transform: translateX(-60%); opacity: 0; }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0);   opacity: 1; }
          to   { transform: translateX(60%); opacity: 0; }
        }
        @keyframes progressBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes kenBurns {
          from { transform: scale(1); }
          to   { transform: scale(1.06); }
        }
        .animate-slide-in-right  { animation: slideInRight  0.7s cubic-bezier(0.77,0,0.18,1) forwards; }
        .animate-slide-in-left   { animation: slideInLeft   0.7s cubic-bezier(0.77,0,0.18,1) forwards; }
        .animate-slide-out-left  { animation: slideOutLeft  0.7s cubic-bezier(0.77,0,0.18,1) forwards; }
        .animate-slide-out-right { animation: slideOutRight 0.7s cubic-bezier(0.77,0,0.18,1) forwards; }
        .animate-progress        { animation: progressBar   5s linear infinite; }
        .animate-ken-burns       { animation: kenBurns      8s ease forwards; }
      `}</style>

      <section className="bg-white py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">

          {/* ── Header ── */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="block w-12 h-px bg-gradient-to-r from-transparent to-[#B8860B]" />
              <span className="text-[#B8860B] text-[11px] font-semibold tracking-[0.3em] uppercase">
                Visual Stories
              </span>
              <span className="block w-12 h-px bg-gradient-to-l from-transparent to-[#B8860B]" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-3 leading-tight">
              {title}
            </h2>
            <div className="w-16 h-0.5 bg-[#B8860B] mx-auto mb-4" />
            <p className="text-gray-500 text-base max-w-xl mx-auto tracking-wide">
              {subtitle}
            </p>
          </div>

          {/* ── Carousel Stage ── */}
          <div className="relative max-w-5xl mx-auto px-12 md:px-16">

            {/* Left Arrow */}
            <button
              onClick={goPrev}
              aria-label="Previous"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-500 hover:border-[#B8860B] hover:text-[#B8860B] hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={goNext}
              aria-label="Next"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-500 hover:border-[#B8860B] hover:text-[#B8860B] hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Main Frame */}
            <div className="relative w-full rounded-xl overflow-hidden bg-gray-100 shadow-2xl shadow-gray-300/60 ring-1 ring-gray-200" style={{ aspectRatio: '16/9', minHeight: '320px' }}>

              {/* Progress Bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/20 z-10">
                <div
                  key={active}
                  className="h-full bg-gradient-to-r from-[#1e3a8a] to-[#B8860B] animate-progress"
                />
              </div>

              {/* Slides */}
              {images.map((img, i) => (
                <div key={img.id} className={getSlideClass(i)} style={getSlideStyle(i)}>
                  <img
                    src={img.url}
                    alt={img.alt}
                    className={`w-full h-full object-contain ${i === active ? 'animate-ken-burns' : ''}`}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                  {/* Slide Info */}
                  <div className="absolute bottom-0 left-0 right-0 px-6 pb-5 flex items-end justify-between">
                    <div>
                      <p className="text-[#B8860B] text-[10px] font-semibold tracking-[0.3em] uppercase mb-1">
                        {img.label}
                      </p>
                      <p className="text-white text-xl font-semibold leading-tight">
                        {img.alt}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-white/90 text-2xl font-light tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-white/40 text-sm"> / {String(images.length).padStart(2, '0')}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2.5 justify-center mt-4">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => goTo(i, i > active ? 'next' : 'prev')}
                  className={`relative w-16 md:w-20 aspect-video rounded overflow-hidden flex-shrink-0 transition-all duration-300 ring-offset-2 ring-offset-white ${
                    i === active
                      ? 'opacity-100 ring-2 ring-[#B8860B] shadow-md shadow-[#B8860B]/20'
                      : 'opacity-40 hover:opacity-70 ring-1 ring-gray-200'
                  }`}
                >
                  <img
                    src={img.thumb}
                    alt={img.alt}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* ── Dot Indicators ── */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > active ? 'next' : 'prev')}
                className={`transition-all duration-300 rounded-full ${
                  i === active
                    ? 'w-6 h-2 bg-[#B8860B]'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* ── CTA ── */}
          <div className="text-center mt-10">
            <button
              onClick={() => navigate('/gallery')}
              className="inline-flex items-center gap-3 px-8 py-3.5 border border-[#B8860B]/50 text-[#B8860B] text-sm font-semibold tracking-[0.15em] uppercase rounded-lg hover:bg-[#B8860B] hover:text-white hover:shadow-lg hover:shadow-[#B8860B]/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Explore Full Gallery</span>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default GalleryPreview;