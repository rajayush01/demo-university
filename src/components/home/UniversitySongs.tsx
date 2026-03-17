import React from 'react';

interface UniversitySongSectionProps {
  videoId?: string;
  title?: string;
  description?: string;
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;0,700;1,300;1,600&family=Jost:wght@300;400;500;600&display=swap');

  .song-wrap { font-family: 'Jost', sans-serif; }
  .cormorant { font-family: 'Cormorant Garamond', serif; }

  @keyframes shimmer {
    0%   { background-position: -600px 0; }
    100% { background-position:  600px 0; }
  }
  .gold-text {
    background: linear-gradient(90deg, #9a6e00, #B8860B, #f0c040, #B8860B, #9a6e00);
    background-size: 600px 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 5s linear infinite;
  }

  @keyframes wave1 { 0%,100%{height:6px}  50%{height:22px} }
  @keyframes wave2 { 0%,100%{height:16px} 50%{height:5px}  }
  @keyframes wave3 { 0%,100%{height:10px} 50%{height:26px} }
  @keyframes wave4 { 0%,100%{height:22px} 50%{height:8px}  }
  @keyframes wave5 { 0%,100%{height:8px}  50%{height:18px} }
  .bar1 { animation: wave1 1.1s ease-in-out infinite; }
  .bar2 { animation: wave2 0.9s ease-in-out infinite; }
  .bar3 { animation: wave3 1.3s ease-in-out infinite; }
  .bar4 { animation: wave4 1.0s ease-in-out infinite; }
  .bar5 { animation: wave5 0.8s ease-in-out infinite; }

  @keyframes ringPulse {
    0%,100% { box-shadow: 0 0 0 0   rgba(184,134,11,0.10), 0 32px 80px rgba(30,58,138,0.10); }
    50%     { box-shadow: 0 0 0 8px rgba(184,134,11,0.0),  0 40px 100px rgba(30,58,138,0.16); }
  }
  .glow-frame { animation: ringPulse 3.5s ease-in-out infinite; }

  .song-iframe-wrap {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border-radius: 20px;
  }
  .song-iframe-wrap iframe {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    border: 0;
  }
`;

const UniversitySongs: React.FC<UniversitySongSectionProps> = ({
  videoId = 'SnDQjCKGKRg',
  title = 'Our University Song',
  description = 'Experience the spirit and pride of our institution through our cherished university song.',
}) => {
  return (
    <>
      <style>{styles}</style>

      <section className="song-wrap bg-white py-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto">

          {/* ── Header ── */}
          <div className="text-center mb-14">

            {/* Animated equaliser bars */}
            <div className="flex items-end justify-center gap-1 mb-8" style={{ height: '32px' }}>
              {['bar1','bar2','bar3','bar4','bar5','bar4','bar3','bar2','bar1','bar2','bar3'].map((cls, i) => (
                <div
                  key={i}
                  className={`${cls} w-1 rounded-full`}
                  style={{
                    background: 'linear-gradient(to top, #1e3a8a, #4a90c8)',
                    minHeight: '4px',
                  }}
                />
              ))}
            </div>

            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#B8860B] block" />
              <span className="text-[#B8860B] text-[10px] tracking-[0.35em] uppercase font-semibold">
                Pride &amp; Tradition
              </span>
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#B8860B] block" />
            </div>

            {/* Title */}
            <h2 className="cormorant text-6xl md:text-7xl font-bold leading-tight mb-5">
              <span className="text-[#0f2460]">Our University </span>
              <em className="italic font-light gold-text">Song</em>
            </h2>

            {/* Underline */}
            <div className="w-20 h-0.5 mx-auto mb-5 bg-gradient-to-r from-[#1e3a8a] to-[#B8860B]" />

            <p className="text-gray-500 font-light text-base max-w-xl mx-auto leading-relaxed tracking-wide">
              {description}
            </p>
          </div>

          {/* ── Video ── */}
          <div className="relative max-w-4xl mx-auto">
            {/* outer glow card */}
            <div
              className="glow-frame rounded-2xl p-1.5"
              style={{
                background: 'linear-gradient(135deg, #1e3a8a, #B8860B, #1e3a8a)',
              }}
            >
              <div className="song-iframe-wrap bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            {/* decorative corner accents outside the frame */}
            <span className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#1e3a8a] rounded-tl" />
            <span className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#B8860B] rounded-tr" />
            <span className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#B8860B] rounded-bl" />
            <span className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#1e3a8a] rounded-br" />
          </div>

          {/* ── Quote ── */}
          <div className="text-center mt-12">
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-gray-200 block" />
              <span className="cormorant text-2xl italic text-[#B8860B] select-none">❝</span>
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-gray-200 block" />
            </div>
            <p className="cormorant text-xl italic text-gray-400 tracking-wide">
              A melody that unites generations of scholars and leaders
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default UniversitySongs;