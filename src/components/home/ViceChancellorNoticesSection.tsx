import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import vc from '../../assets/vc.jpg';

export default function ViceChancellorNoticesSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        .vc-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
          border-radius: 0 0 16px 16px;
          background: #ffffff;
          border: 0.5px solid #e5e7eb;
          border-top: none;
          position: relative;
          font-family: 'DM Sans', sans-serif;
        }

        @media (max-width: 768px) {
          .vc-card {
            grid-template-columns: 1fr;
            border-radius: 16px;
            border-top: 0.5px solid #e5e7eb;
          }
          .vc-panel-image {
            min-height: 320px !important;
            order: 1 !important;
          }
          .vc-panel-content {
            order: 2 !important;
            padding: 2rem 1.5rem !important;
          }
          .vc-bg-number {
            display: none;
          }
        }

        .vc-panel-content {
          padding: 3rem 3.5rem 3rem 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.4rem;
          background: #ffffff;
          position: relative;
          order: 1;
        }

        .vc-panel-content::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          width: 1px;
          background: linear-gradient(180deg, transparent, rgba(218,165,32,0.28) 30%, rgba(218,165,32,0.4) 60%, transparent);
        }

        .vc-panel-image {
          position: relative;
          min-height: 480px;
          overflow: hidden;
          background: #0d1b35;
          order: 2;
        }

        .vc-panel-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        .vc-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(225deg, rgba(13,27,53,0.45) 0%, rgba(13,27,53,0.05) 60%);
          z-index: 2;
        }

        .vc-img-pattern {
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

        .vc-img-accent {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 4px;
          background: linear-gradient(180deg, #B8860B 0%, #DAA520 50%, #B8860B 100%);
          z-index: 3;
        }

        .vc-image-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.5rem 1.75rem;
          background: linear-gradient(0deg, rgba(8,15,30,0.92) 0%, transparent 100%);
          z-index: 4;
        }

        .vc-image-caption h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 4px;
        }

        .vc-image-caption p {
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #DAA520;
          margin: 0;
          font-family: 'DM Sans', sans-serif;
        }

        .vc-bg-number {
          position: absolute;
          font-family: 'Playfair Display', serif;
          font-size: 13rem;
          font-weight: 900;
          color: #f3f4f6;
          line-height: 1;
          user-select: none;
          pointer-events: none;
          left: 1.5rem;
          bottom: -2rem;
          z-index: 0;
        }

        .vc-desk-label {
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

        .vc-desk-label::before {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: #B8860B;
        }

        .vc-person-name {
          font-family: 'Playfair Display', serif;
          font-size: 2.4rem;
          font-weight: 700;
          line-height: 1.1;
          color: #111827;
          margin: 0;
        }

        .vc-person-role {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #1e3a8a;
          margin-top: 6px;
          font-family: 'DM Sans', sans-serif;
        }

        .vc-divider {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 120px;
        }

        .vc-divider .d-line {
          flex: 1;
          height: 0.5px;
          background: rgba(218,165,32,0.5);
        }

        .vc-divider .d-diamond {
          width: 6px;
          height: 6px;
          background: #DAA520;
          transform: rotate(45deg);
          opacity: 0.7;
        }

        .vc-quote-mark {
          font-family: 'Playfair Display', serif;
          font-size: 4.5rem;
          line-height: 0.5;
          color: rgba(218,165,32,0.3);
          display: block;
          margin-bottom: 4px;
        }

        .vc-message-text {
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

        .vc-cta-btn {
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

        .vc-cta-btn:hover {
          background: #1e3a8a;
          color: #ffffff;
        }

        .vc-cta-btn svg {
          transition: transform 0.2s;
        }

        .vc-cta-btn:hover svg {
          transform: translateX(4px);
        }
      `}</style>

      <div className="vc-card">
        {/* Content Panel */}
        <div className="vc-panel-content">
          <div className="vc-bg-number">02</div>

          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <span className="vc-desk-label">From the Vice-Chancellor's Desk</span>

            <div>
              <h2 className="vc-person-name">
                Dr. Milind D.<br />Dandekar
              </h2>
              <p className="vc-person-role">Vice-Chancellor</p>
            </div>

            <div className="vc-divider">
              <div className="d-line" />
              <div className="d-diamond" />
              <div className="d-line" />
            </div>

            <div>
              <span className="vc-quote-mark">"</span>
              <p className="vc-message-text">
                कार्यपालिक के रूप में उच्च शिक्षा के प्रति विश्वविद्यालय के दायित्वों
                एवं इन दायित्वों के निर्वाहन के लिए अपनी प्रतिबद्धता व्यक्त करता हूँ।
                रोज़गार की व्यस्तता अथवा किन्हीं अपरिहार्य कारणों से वंचित विद्यार्थियों
                को उच्च शिक्षा सुलभ कराना हमारा संकल्प है...
              </p>
            </div>

            <Link to="/vice-chancellor-message" className="vc-cta-btn">
              <span>Read Full Message</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>

        {/* Image Panel */}
        <div className="vc-panel-image">
          <div className="vc-img-pattern" />
          <img src={vc} alt="Dr. Milind Dattatray Dandekar" />
          <div className="vc-img-overlay" />
          <div className="vc-img-accent" />
          <div className="vc-image-caption">
            <h3>Dr. Milind D. Dandekar</h3>
            <p>Vice-Chancellor, MP Bhoj Open University</p>
          </div>
        </div>
      </div>
    </>
  );
}