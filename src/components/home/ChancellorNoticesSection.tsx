import { ChevronRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import chancellor from '../../assets/chancellor.png';

export default function ChancellorNoticesSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        .chancellor-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
          border-radius: 16px 16px 0 0;
          background: #ffffff;
          border: 0.5px solid #e5e7eb;
          position: relative;
          font-family: 'DM Sans', sans-serif;
        }

        @media (max-width: 768px) {
          .chancellor-card {
            grid-template-columns: 1fr;
            border-radius: 16px;
          }
          .chancellor-panel-image {
            min-height: 320px !important;
            order: 1 !important;
          }
          .chancellor-panel-content {
            order: 2 !important;
            padding: 2rem 1.5rem !important;
          }
          .chancellor-bg-number {
            display: none;
          }
        }

        .chancellor-panel-image {
          position: relative;
          max-height: 600px;
          min-height: 380px;
          overflow: hidden;
          background: #0d1b35;
          order: 1;
        }

        .chancellor-panel-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        .chancellor-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(13,27,53,0.45) 0%, rgba(13,27,53,0.05) 60%);
          z-index: 2;
        }

        .chancellor-img-pattern {
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            -45deg,
            rgba(255,255,255,0.018) 0px,
            rgba(255,255,255,0.018) 1px,
            transparent 1px,
            transparent 12px
          );
          z-index: 1;
        }

        .chancellor-img-accent {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          width: 4px;
          background: linear-gradient(180deg, #B8860B 0%, #DAA520 50%, #B8860B 100%);
          z-index: 3;
        }

        .chancellor-image-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.5rem 1.75rem;
          background: linear-gradient(0deg, rgba(8,15,30,0.92) 0%, transparent 100%);
          z-index: 4;
        }

        .chancellor-image-caption h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 4px;
        }

        .chancellor-image-caption p {
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #DAA520;
          margin: 0;
          font-family: 'DM Sans', sans-serif;
        }

        .chancellor-panel-content {
          padding: 3rem 3rem 3rem 3.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.4rem;
          background: #ffffff;
          position: relative;
          order: 2;
        }

        .chancellor-panel-content::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 1px;
          background: linear-gradient(180deg, transparent, rgba(218,165,32,0.28) 30%, rgba(218,165,32,0.4) 60%, transparent);
        }

        .chancellor-bg-number {
          position: absolute;
          font-family: 'Playfair Display', serif;
          font-size: 13rem;
          font-weight: 900;
          color: #f3f4f6;
          line-height: 1;
          user-select: none;
          pointer-events: none;
          right: 1.5rem;
          bottom: -2rem;
          z-index: 0;
        }

        .chancellor-desk-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #B8860B;
          font-weight: 500;
          font-family: 'DM Sans', sans-serif;
        }

        .chancellor-desk-label::before {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: #B8860B;
        }

        .chancellor-person-name {
          font-family: 'Playfair Display', serif;
          font-size: 2.4rem;
          font-weight: 700;
          line-height: 1.1;
          color: #111827;
          margin: 0;
        }

        .chancellor-person-role {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #1e3a8a;
          margin-top: 6px;
          font-family: 'DM Sans', sans-serif;
        }

        .chancellor-divider {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 120px;
        }

        .chancellor-divider .d-line {
          flex: 1;
          height: 0.5px;
          background: rgba(218,165,32,0.5);
        }

        .chancellor-divider .d-diamond {
          width: 6px;
          height: 6px;
          background: #DAA520;
          transform: rotate(45deg);
          opacity: 0.7;
        }

        .chancellor-quote-mark {
          font-family: 'Playfair Display', serif;
          font-size: 4.5rem;
          line-height: 0.5;
          color: rgba(218,165,32,0.3);
          display: block;
          margin-bottom: 4px;
        }

        .chancellor-message-text {
          font-size: 0.96rem;
          line-height: 1.85;
          color: #6b7280;
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          position: relative;
          padding-left: 1.25rem;
          border-left: 2px solid rgba(218,165,32,0.28);
          font-style: italic;
          margin: 0;
        }

        .chancellor-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #0d1b35;
          color: #DAA520;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 12px 24px;
          border-radius: 4px;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
          width: fit-content;
          font-family: 'DM Sans', sans-serif;
        }

        .chancellor-cta-btn:hover {
          background: #1e3a8a;
          color: #ffffff;
        }

        .chancellor-cta-btn svg {
          transition: transform 0.2s;
        }

        .chancellor-cta-btn:hover svg {
          transform: translateX(4px);
        }
      `}</style>

      <div className="chancellor-card">
        {/* Image Panel */}
        <div className="chancellor-panel-image">
          <div className="chancellor-img-pattern" />
          <img src={chancellor} alt="Mangubhai Patel" />
          <div className="chancellor-img-overlay" />
          <div className="chancellor-img-accent" />
          <div className="chancellor-image-caption">
            <h3>Mangubhai Patel</h3>
            <p>Chancellor, MP Bhoj Open University</p>
          </div>
        </div>

        {/* Content Panel */}
        <div className="chancellor-panel-content">
          <div className="chancellor-bg-number">01</div>

          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <span className="chancellor-desk-label">From the Chancellor's Desk</span>

            <div>
              <h2 className="chancellor-person-name">
                Mangubhai<br />Patel
              </h2>
              <p className="chancellor-person-role">Chancellor</p>
            </div>

            <div className="chancellor-divider">
              <div className="d-line" />
              <div className="d-diamond" />
              <div className="d-line" />
            </div>

            <div>
              <span className="chancellor-quote-mark">"</span>
              <p className="chancellor-message-text">
                मध्यप्रदेश भोज (मुक्त) विश्वविद्यालय, भोपाल की ओर से आप सभी का
                हार्दिक अभिनन्दन! एक मुक्त विश्वविद्यालय का मुख्य दायित्व ऐसे
                विद्यार्थियों को उच्च शिक्षा उपलब्ध कराना है जो सामाजिक कारणों से
                वंचित रह जाते हैं। अतः मध्यप्रदेश भोज (मुक्त) विश्वविद्यालय के प्रमुख उद्देश्य...
              </p>
            </div>

            <Link to="/chancellor-message" className="chancellor-cta-btn">
              <span>Read Full Message</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}