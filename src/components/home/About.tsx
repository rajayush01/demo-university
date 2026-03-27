import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from "../../assets/bhoj9.jpg";
import img2 from "../../assets/logo_bhoj.png";
import img3 from "../../assets/bhoj11.jpeg";
import img4 from "../../assets/bhoj12.jpeg";
import { ArrowRight, MapPin, BookOpen, Award, TrendingUp, Target, Users, Globe } from 'lucide-react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Nunito+Sans:wght@300;400;600&display=swap');

  @keyframes fadeUp {
    from { opacity:0; transform:translateY(36px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity:0; }
    to   { opacity:1; }
  }
  @keyframes lineGrow {
    from { transform:scaleX(0); }
    to   { transform:scaleX(1); }
  }
  @keyframes countUp {
    from { opacity:0; transform:translateY(10px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
  @keyframes orbit {
    from { transform: rotate(0deg) translateX(6px) rotate(0deg); }
    to   { transform: rotate(360deg) translateX(6px) rotate(-360deg); }
  }

  .about-wrap { font-family:'Nunito Sans',sans-serif; }
  .baskerville { font-family:'Libre Baskerville',serif; }

  /* reveal */
  .rv   { opacity:0; }
  .rv.on { animation: fadeUp 0.85s cubic-bezier(0.22,1,0.36,1) forwards; }

  /* gold shimmer text */
  .gold-shimmer {
    background: linear-gradient(90deg, #B8860B 0%, #f0c040 40%, #B8860B 60%, #9a6e00 100%);
    background-size: 400px 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 4s linear infinite;
  }

  /* image parallax */
  .img-pan img { transition: transform 0.8s cubic-bezier(0.22,1,0.36,1); }
  .img-pan:hover img { transform: scale(1.07); }

  /* stat card hover */
  .stat-card-hover {
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  }
  .stat-card-hover:hover {
    transform: translateY(-6px);
    box-shadow: 0 24px 60px rgba(30,58,138,0.15);
    border-color: #B8860B !important;
  }

  /* mission card */
  .mission-card {
    transition: transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease;
    cursor: default;
  }
  .mission-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(30,58,138,0.12);
    background: #fff !important;
  }
  .mission-card:hover .mission-icon-wrap {
    background: #1e3a8a !important;
    color: #fff !important;
  }
  .mission-icon-wrap { transition: background 0.3s ease, color 0.3s ease; }

  /* highlight card */
  .highlight-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .highlight-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 36px rgba(30,58,138,0.1);
  }

  /* CTA button */
  .cta-pill {
    transition: all 0.35s cubic-bezier(0.22,1,0.36,1);
    letter-spacing: 0.08em;
  }
  .cta-pill:hover {
    background: #0f2460 !important;
    letter-spacing: 0.16em;
    box-shadow: 0 12px 40px rgba(15,36,96,0.3);
  }
  .cta-pill:hover .cta-arrow { transform: translateX(6px); }
  .cta-arrow { transition: transform 0.3s ease; }

  /* timeline dot pulse */
  .tl-dot::after {
    content:'';
    position:absolute;
    inset:-4px;
    border-radius:50%;
    border: 1.5px solid #B8860B;
    opacity:0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    transform: scale(0.6);
  }
  .tl-dot:hover::after { opacity:1; transform:scale(1); }

  /* quote mark */
  .big-quote::before {
    content:'"';
    font-family:'Libre Baskerville',serif;
    font-size:9rem;
    line-height:0.7;
    color:#1e3a8a;
    opacity:0.06;
    position:absolute;
    top:0; left:-8px;
    pointer-events:none;
    user-select:none;
  }
`;

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setOn(true); }, { threshold });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return { ref, on };
}

function Counter({ end, duration = 1500 }: { end: number; duration?: number }) {
  const [val, setVal] = useState(0);
  const { ref, on } = useReveal(0.5);
  useEffect(() => {
    if (!on) return;
    let s = 0;
    const step = Math.ceil(end / (duration / 16));
    const t = setInterval(() => { s = Math.min(s + step, end); setVal(s); if (s >= end) clearInterval(t); }, 16);
    return () => clearInterval(t);
  }, [on, end, duration]);
  return <span ref={ref}>{val}</span>;
}

const About: React.FC = () => {
  const s1 = useReveal(0.15);
  const s2 = useReveal(0.15);
  const s3 = useReveal(0.15);
  const s4 = useReveal(0.15);
  const s5 = useReveal(0.15);
  const s6 = useReveal(0.15);
  const s7 = useReveal(0.15);

  return (
    <>
      <style>{styles}</style>

      <section className="about-wrap bg-white overflow-hidden">

        {/* ══════════════════════════════════════
            HERO BAND — full-bleed diagonal split
        ══════════════════════════════════════ */}
        <div className="relative min-h-[540px] flex items-center">
          {/* left half white, right half navy — hidden on small screens */}
          <div className="absolute inset-0 hidden md:flex">
            <div className="w-1/2 bg-white" />
            <div className="w-1/2 bg-[#0f2460]" />
          </div>
          {/* mobile solid bg */}
          <div className="absolute inset-0 md:hidden" />
          {/* diagonal cut — hidden on small screens */}
          <div
            className="absolute inset-0 pointer-events-none hidden md:block"
            style={{
              background: 'linear-gradient(108deg, #fff 48%, #0f2460 48.01%)',
            }}
          />

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full py-10 md:py-20 flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 items-center">
            {/* Left: eyebrow + giant title */}
            <div
              ref={s1.ref}
              className={`rv ${s1.on ? 'on' : ''}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-px bg-[#B8860B] block" />
                <span className="text-[#B8860B] text-[10px] tracking-[0.35em] uppercase font-semibold">
                  Est. October 1992
                </span>
              </div>
              <h2 className="baskerville text-[clamp(2.2rem,6vw,5rem)] md:text-[clamp(2.8rem,3vw,5rem)] font-bold text-white md:text-[#0f2460] leading-[1.04] mb-6">
                <span className="text-[clamp(1.1rem,3vw,2.2rem)] md:text-[clamp(1.4rem,3vw,2.2rem)] font-normal">Welcome to</span><br />
                <span className="gold-shimmer">Madhya Pradesh</span><br />
                <span className="italic font-normal text-[#0f2460]">Bhoj (Open) University</span>
              </h2>
              <p className="text-black/70 md:text-gray-500 font-light text-sm md:text-base leading-relaxed max-w-md mb-7">
                Inaugurated by President Dr. Shankar Dayal Sharma on October 19, 1992 — a premier UGC-recognized State Open University committed to transforming lives through accessible education.
              </p>
              {/* Recognition badges */}
              <div className="flex flex-wrap gap-3">
                <div className="bg-[#f4f8ff] border border-[#dbe8ff] px-4 py-2.5 rounded-lg">
                  <p className="text-[9px] text-black/50 md:text-gray-400 uppercase tracking-widest mb-0.5">Recognized by</p>
                  <p className="font-bold text-[#1e3a8a] text-xs">UGC · DEB · AICTE</p>
                </div>
                <div className="bg-[#fdf8ee] border border-[#B8860B]/40 px-4 py-2.5 rounded-lg">
                  <p className="text-[9px] text-black/50 md:text-gray-400 uppercase tracking-widest mb-0.5">Accredited by</p>
                  <p className="font-bold text-[#f0c040] md:text-[#B8860B] text-xs">NCTE · RCI · AIU</p>
                </div>
              </div>
            </div>

            {/* Right: campus image card floated over the diagonal */}
            <div
              ref={s2.ref}
              className={`rv ${s2.on ? 'on' : ''} md:ml-20`}
              style={{ animationDelay: '0.15s' }}
            >
              <div className="img-pan relative rounded-2xl overflow-hidden bg-white shadow-[0_32px_80px_rgba(0,0,0,0.35)]">
                <img src={img2} alt="Campus" className="w-full h-[200px] sm:h-[260px] md:h-[340px] object-contain" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2460]/60 to-transparent" />
                {/* floating badge */}
                <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur rounded-xl px-5 py-3 shadow-lg">
                  <p className="baskerville text-2xl font-bold text-[#1e3a8a]">30<span className="text-[#B8860B]">+</span></p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400">Years of Excellence</p>
                </div>
                <div className="absolute top-4 left-4 bg-[#B8860B] text-white text-[10px] tracking-[0.2em] uppercase font-semibold px-3 py-1.5 rounded-full">
                  UGC Recognized
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            STATS ROW — floating cards on a light band
        ══════════════════════════════════════ */}
        <div
          ref={s3.ref}
          className={`rv ${s3.on ? 'on' : ''} bg-[#f4f8ff] py-14 px-6`}
          style={{ animationDelay: '0.1s' }}
        >
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: <TrendingUp className="w-5 h-5" />, val: '30+',  label: 'Years of Excellence', isText: true  },
              { icon: <Award      className="w-5 h-5" />, val: 'UGC',  label: 'Recognized',          isText: true  },
              { icon: <MapPin     className="w-5 h-5" />, val: 11,     label: 'Regional Centers',    isText: false },
              { icon: <BookOpen   className="w-5 h-5" />, val: 612,    label: 'Study Centers',       isText: false },
            ].map(({ icon, val, label, isText }, i) => (
              <div
                key={label}
                className="stat-card-hover bg-white rounded-2xl p-6 text-center border border-[#dbe8ff] shadow-sm"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div className="w-10 h-10 rounded-full bg-[#eef3ff] flex items-center justify-center text-[#1e3a8a] mx-auto mb-4">
                  {icon}
                </div>
                <p className="baskerville text-4xl font-bold text-[#0f2460] mb-1">
                  {isText ? val : <Counter end={val as number} />}
                </p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            STORY SECTION — logo + rich text side by side
        ══════════════════════════════════════ */}
        <div className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div
              ref={s4.ref}
              className={`rv ${s4.on ? 'on' : ''} grid md:grid-cols-2 gap-16 items-center`}
            >
              {/* Image collage */}
              <div className="relative h-[380px]">
                {/* outer glow ring */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#dbe8ff] to-[#f4f0e6] blur-xl opacity-60" />
                {/* main large image */}
                <div className="img-pan absolute top-0 left-0 w-[68%] h-[75%] rounded-2xl overflow-hidden border border-[#dbe8ff] shadow-xl">
                  <img src={img1} alt="University Campus" className="w-full h-full object-cover" />
                </div>
                {/* smaller image bottom-right */}
                <div className="img-pan absolute bottom-0 right-0 w-[48%] h-[55%] rounded-2xl overflow-hidden border-2 border-white shadow-xl">
                  <img src={img3} alt="University Life" className="w-full h-full object-cover" />
                </div>
                {/* tiny accent image top-right */}
                <div className="img-pan absolute top-4 right-0 w-[28%] h-[36%] rounded-xl overflow-hidden border-2 border-white shadow-lg">
                  <img src={img4} alt="Campus Events" className="w-full h-full object-cover" />
                </div>
                {/* corner bracket accent */}
                <span className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#1e3a8a]/30 rounded-tl z-10" />
              </div>

              {/* Text story */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#4a90c8] font-semibold">Our Foundation</span>
                  <span className="flex-1 h-px bg-gradient-to-r from-[#dbe8ff] to-transparent" />
                </div>
                <h3 className="baskerville text-4xl font-bold text-[#0f2460] leading-tight mb-6">
                  A Legacy Rooted<br />
                  <em className="italic font-normal text-[#B8860B]">in Purpose</em>
                </h3>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  Madhya Pradesh Bhoj (Open) University was established on{' '}
                  <span className="text-[#1e3a8a] font-semibold">October 1, 1992</span> under the Madhya Pradesh University Act 1991, and inaugurated by President Dr. Shankar Dayal Sharma on October 19, 1992.
                </p>
                <p className="text-gray-500 font-light leading-relaxed mb-4">
                  The university's emblem draws inspiration from a verse in Raja Bhoj's{' '}
                  <em className="baskerville text-[#1e3a8a]">"Saraswati Kanthabharan"</em> — a testament to our deep connection to India's rich intellectual heritage and the pursuit of knowledge.
                </p>
                <p className="text-gray-500 font-light leading-relaxed mb-8">
                  Located in Bhopal, MPBOU extends quality education to underserved regions of Madhya Pradesh through the Open and Distance Learning System, with a network spanning <span className="text-[#1e3a8a] font-semibold">11 regional centers</span> and <span className="text-[#1e3a8a] font-semibold">612 study centers</span> across the state.
                </p>

                {/* Quote pull */}
                <div className="big-quote relative pl-6 border-l-4 border-[#B8860B]">
                  <p className="baskerville text-xl italic text-[#1e3a8a] leading-relaxed">
                    "Embrace, Engage, Enlighten, and Empower."
                  </p>
                  <p className="text-xs text-gray-400 mt-2 tracking-widest uppercase">University Motto</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            MISSION — card grid on tinted bg
        ══════════════════════════════════════ */}
        <div className="bg-[#f8faff] py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div
              ref={s5.ref}
              className={`rv ${s5.on ? 'on' : ''}`}
            >
              {/* heading */}
              <div className="text-center mb-14">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#4a90c8] font-semibold block mb-4">Our Purpose</span>
                <h3 className="baskerville text-5xl font-bold text-[#0f2460] mb-4">
                  Core <em className="italic font-normal text-[#B8860B]">Objectives</em>
                </h3>
                <div className="w-16 h-0.5 mx-auto bg-gradient-to-r from-[#1e3a8a] to-[#B8860B]" />
              </div>

              {/* 2x2 card grid */}
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { num: '01', title: 'Promotion of Learning',               desc: 'Utilizing diverse resources, including cutting-edge technology, for effective knowledge dissemination and innovative pedagogical approaches across all demographics.', icon: <BookOpen className="w-5 h-5" /> },
                  { num: '02', title: 'Inclusive Higher Education',          desc: 'Enhancing educational standards by offering opportunities to various segments of society, breaking barriers of geography and economic background.', icon: <Users className="w-5 h-5" /> },
                  { num: '03', title: 'Integration of Distance Education',   desc: 'Incorporating open and distance learning into the state\'s educational framework, making quality higher education accessible to all corners of Madhya Pradesh.', icon: <Globe className="w-5 h-5" /> },
                  { num: '04', title: 'Human Resource Development',          desc: 'Enabling National Education Policy 2020 implementation across courses, fostering skilled professionals and supporting India\'s ambitious GER target of 50% by 2035.', icon: <Award className="w-5 h-5" /> },
                ].map(({ num, title, desc, icon }, i) => (
                  <div
                    key={num}
                    className="mission-card rounded-2xl p-8 bg-[#f0f5ff] border border-[#dbe8ff]"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    <div className="flex items-start gap-5">
                      <div className="mission-icon-wrap w-12 h-12 rounded-xl bg-[#eef3ff] border border-[#dbe8ff] flex items-center justify-center text-[#1e3a8a] flex-shrink-0">
                        {icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="baskerville text-xs text-[#B8860B] font-bold tracking-widest">{num}</span>
                          <span className="flex-1 h-px bg-[#dbe8ff]" />
                        </div>
                        <h4 className="text-[#0f2460] font-semibold text-base mb-2">{title}</h4>
                        <p className="text-gray-500 font-light text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            KEY HIGHLIGHTS — compact strip
        ══════════════════════════════════════ */}
        <div className="bg-white py-16 px-6 border-t border-[#f0f4ff]">
          <div className="max-w-7xl mx-auto">
            <div
              ref={s7.ref}
              className={`rv ${s7.on ? 'on' : ''}`}
            >
              <div className="text-center mb-10">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#4a90c8] font-semibold block mb-3">Why Choose Us</span>
                <h3 className="baskerville text-3xl font-bold text-[#0f2460]">
                  Key <em className="italic font-normal text-[#B8860B]">Highlights</em>
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: <Target className="w-5 h-5" />, text: 'Premier UGC-recognized State Open University' },
                  { icon: <MapPin  className="w-5 h-5" />, text: 'Focused on underserved and rural regions of MP' },
                  { icon: <TrendingUp className="w-5 h-5" />, text: 'Transformative ICT-based education model' },
                  { icon: <Award  className="w-5 h-5" />, text: 'Committed to NEP 2020 full implementation' },
                ].map(({ icon, text }, i) => (
                  <div
                    key={i}
                    className="highlight-card flex items-start gap-4 bg-[#f8faff] border border-[#dbe8ff] rounded-xl p-5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#eef3ff] flex items-center justify-center text-[#1e3a8a] flex-shrink-0">
                      {icon}
                    </div>
                    <p className="text-gray-600 text-sm font-light leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            CTA — immersive full-bleed banner
        ══════════════════════════════════════ */}
        <div
          ref={s6.ref}
          className={`rv ${s6.on ? 'on' : ''} relative overflow-hidden`}
          style={{
            background: 'linear-gradient(135deg, #0a1a4a 0%, #1e3a8a 50%, #0f2460 100%)',
          }}
        >
          {/* decorative geometry */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-white/5" />
            <div className="absolute -top-16 -right-16 w-[300px] h-[300px] rounded-full border border-white/5" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[200px] rounded-full bg-[#4a90c8]/10 blur-3xl" />
            {/* gold bar accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B8860B] via-[#f0c040] to-[#B8860B]" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#B8860B]/60 block" />
              <span className="text-[#B8860B] text-[10px] tracking-[0.35em] uppercase font-semibold">Explore Further</span>
              <span className="w-10 h-px bg-[#B8860B]/60 block" />
            </div>
            <h3 className="baskerville text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
              Discover More About<br />
              <em className="italic font-normal gold-shimmer">MP Bhoj Open University</em>
            </h3>
            <p className="text-white/50 text-sm mb-10 tracking-wider">30+ Years of Academic Excellence · 4.3 Million+ Students Served</p>

            <Link to="/about">
              <button className="cta-pill inline-flex items-center gap-4 bg-[#B8860B] text-white px-10 py-4 rounded-full font-semibold text-sm uppercase shadow-xl shadow-[#B8860B]/30">
                Learn More About Us
                <ArrowRight className="cta-arrow w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>

      </section>
    </>
  );
};

export default About;