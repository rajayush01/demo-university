import { useState, useEffect, useRef } from "react";

const CARDS = [
  { id: "academics", label: "Academics", icon: "🎓",
    sub: ["Academic Calendar", "Flexible Curriculum", "Academic Workflow", "Academic Council"] },
  { id: "quality", label: "Quality Initiatives", icon: "📊",
    sub: ["NAAC Accreditation", "NBA Approval", "NIRF Rankings", "ISO Certification"] },
  { id: "grievances", label: "Students Grievances & Counselling", icon: "🖥️",
    sub: ["Submit Grievance", "Counselling Schedule", "Anti-Ragging Cell", "Ombudsman"] },
  { id: "activities", label: "Student Activities", icon: "🎯",
    sub: ["Clubs & Societies", "Sports Events", "Cultural Fests", "Tech Competitions"] },
  { id: "admission", label: "Admission", icon: "🪪",
    sub: ["UG Admission", "PG Admission", "PhD Admission", "Fee Structure"] },
  { id: "drone", label: "Drone School", icon: "🚁",
    sub: ["About Drone School", "Courses Offered", "Certification", "Apply Now"] },
];

function LeafDecor() {
  return (
    <svg className="absolute right-[-10px] bottom-[-10px] w-[90px] h-[90px] opacity-20" viewBox="0 0 100 100">
      <path d="M85 80 Q25 60 15 15 Q70 35 85 80Z" fill="#B8860B" />
    </svg>
  );
}

function NavCard({ card, delay }: { card: typeof CARDS[0]; delay: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative rounded-2xl overflow-hidden cursor-pointer h-[168px] shadow-lg transition-all duration-250"
      style={{
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.4)" : "0 8px 28px rgba(0,0,0,0.25)",
        animation: `fadeUp 0.5s ${delay}ms ease both`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Default face */}
      <div
        className="absolute inset-0 flex flex-col justify-between p-4 pb-9 transition-opacity duration-300"
        style={{
          background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%)",
          opacity: hovered ? 0 : 1,
        }}
      >
        <span className="text-[14px] font-semibold text-yellow-300 leading-snug max-w-[85%] relative z-10">
          {card.label}
        </span>
        <LeafDecor />
      </div>

      {/* Hover face */}
      <div
        className="absolute inset-0 flex flex-col justify-center px-4 pb-9 pt-4 gap-[2px] transition-opacity duration-300"
        style={{
          background: "linear-gradient(145deg, #0f2460 0%, #1e3a8a 60%, #1e40af 100%)",
          opacity: hovered ? 1 : 0,
        }}
      >
        {card.sub.map((s) => (
          <div key={s} className="flex items-center gap-2 text-white text-[12.5px] py-1 border-b border-white/10 last:border-0 hover:text-yellow-300 transition-colors">
            <span className="text-yellow-400 font-bold text-xs">›</span>
            {s}
          </div>
        ))}
      </div>

      {/* Gold icon bubble */}
      <div
        className="absolute bottom-0 left-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center text-base transition-transform duration-250"
        style={{
          transform: hovered ? "translate(-50%, 50%) scale(1.12)" : "translate(-50%, 50%)",
          background: "linear-gradient(135deg, #f0c040, #B8860B)",
          boxShadow: "0 4px 14px rgba(184,134,11,0.5)",
        }}
      >
        {card.icon}
      </div>
    </div>
  );
}

export default function MITSHeroSection() {
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax via scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (!heroBgRef.current || !heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      heroBgRef.current.style.transform = `translateY(${-rect.top * 0.35}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatParticle {
          0%,100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(-30px) scale(1.1); }
        }
        .mits-root { font-family: 'DM Sans', sans-serif; }
        .mits-serif { font-family: 'Playfair Display', serif; }
      `}</style>

      <div className="mits-root w-full overflow-x-hidden">
        {/* ── HERO SECTION ── */}
        <div
          ref={heroRef}
          className="relative min-h-[520px] flex items-center px-8 py-10 gap-7 overflow-hidden"
        >
          {/* Parallax background */}
          <div
            ref={heroBgRef}
            className="absolute bg-cover bg-center z-0"
            style={{
              inset: "-60px -20px",
              backgroundImage: "url('https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1600&q=80')",
              willChange: "transform",
            }}
          />
          {/* Dark overlay */}
          <div
            className="absolute inset-0 z-[1] bg-black bg-opacity-50"
          />

          {/* Floating particles */}
          {[
            { s: 8,  color: "#f0c040", top: "15%", left: "12%", dur: 5, del: 0 },
            { s: 5,  color: "#B8860B", top: "65%", left: "22%", dur: 7, del: 1 },
            { s: 10, color: "#fde68a", top: "30%", right: "15%", dur: 6, del: 2 },
            { s: 6,  color: "#f0c040", top: "75%", right: "25%", dur: 8, del: 0.5 },
          ].map((p, i) => (
            <div
              key={i}
              className="absolute rounded-full pointer-events-none z-[1]"
              style={{
                width: p.s, height: p.s,
                background: p.color,
                opacity: 0.15,
                top: p.top,
                left: (p as any).left,
                right: (p as any).right,
                animation: `floatParticle ${p.dur}s ${p.del}s linear infinite`,
              }}
            />
          ))}

          {/* Main content */}
          <div
            className="relative z-[2] flex items-start gap-7 w-full"
            style={{ animation: "fadeUp 0.7s ease both" }}
          >
            {/* Video card */}
            <div
              className="w-[300px] min-w-[260px] rounded-2xl overflow-hidden flex-shrink-0"
              style={{
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div
                className="relative h-[210px] flex flex-col items-center justify-center gap-2"
                style={{
                  background: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80') center/cover",
                }}
              >
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.55))" }} />
                <div className="mits-serif relative z-10 text-yellow-400 text-xl font-bold tracking-[2px] uppercase"
                  style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
                  Aerial View
                </div>
                <p className="relative z-10 text-white text-[13px] font-medium text-center px-4 leading-snug"
                  style={{ textShadow: "0 1px 4px rgba(0,0,0,0.7)" }}>
                  Madhav Institute of Technology &amp; Science, Gwalior
                </p>
                <button
                  className="relative z-10 w-[52px] h-[52px] rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    border: "2.5px solid rgba(255,255,255,0.9)",
                    background: "rgba(255,255,255,0.12)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              <div className="flex justify-center items-center py-3" style={{ background: "rgba(15,36,96,0.95)" }}>
                <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold px-6 py-2 rounded-lg text-[13px] transition-all hover:-translate-y-px">
                  Take A Campus Tour
                </button>
              </div>
            </div>

            {/* Nav cards */}
            <div className="flex-1 grid grid-cols-3 gap-3">
              {CARDS.map((card, i) => (
                <NavCard key={card.id} card={card} delay={150 + i * 70} />
              ))}
            </div>
          </div>
        </div>

      
      </div>
    </>
  );
}