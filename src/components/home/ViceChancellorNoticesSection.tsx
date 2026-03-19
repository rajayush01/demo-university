import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import vc from '../../assets/vc.jpg';

export default function ViceChancellorNoticesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-b-2xl bg-white border border-t-0 border-gray-200 relative font-sans">
      {/* Content Panel */}
      <div className="relative flex flex-col justify-center gap-5 px-12 py-12 md:px-14 bg-white order-2 md:order-1">
        {/* Right border accent */}
        <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-[#DAA520]/40 to-transparent" />

        {/* Background number */}
        <span className="hidden md:block absolute font-serif text-[13rem] font-black text-gray-100 leading-none select-none pointer-events-none left-6 -bottom-8 z-0">
          02
        </span>

        <div className="relative z-10 flex flex-col gap-5">
          {/* Desk label */}
          <span className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.18em] uppercase text-[#B8860B] font-medium before:block before:w-6 before:h-px before:bg-[#B8860B]">
            From the Vice-Chancellor's Desk
          </span>

          {/* Name & role */}
          <div>
            <h2 className="font-serif text-[2.4rem] font-bold leading-[1.1] text-gray-900">
              Dr. Milind D.<br />Dandekar
            </h2>
            <p className="text-[0.75rem] font-medium tracking-[0.14em] uppercase text-[#1e3a8a] mt-1.5">
              Vice-Chancellor
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-2.5 w-[120px]">
            <div className="flex-1 h-px bg-[#DAA520]/50" />
            <div className="w-1.5 h-1.5 bg-[#DAA520] rotate-45 opacity-70" />
            <div className="flex-1 h-px bg-[#DAA520]/50" />
          </div>

          {/* Quote */}
          <div>
            <span className="font-serif text-[4.5rem] leading-[0.5] text-[#DAA520]/30 block mb-1">"</span>
            <p className="text-[0.96rem] leading-[1.85] text-gray-500 font-light italic pl-5 border-l-2 border-[#DAA520]/28 m-0">
              कार्यपालिक के रूप में उच्च शिक्षा के प्रति विश्वविद्यालय के दायित्वों
              एवं इन दायित्वों के निर्वाहन के लिए अपनी प्रतिबद्धता व्यक्त करता हूँ।
              रोज़गार की व्यस्तता अथवा किन्हीं अपरिहार्य कारणों से वंचित विद्यार्थियों
              को उच्च शिक्षा सुलभ कराना हमारा संकल्प है...
            </p>
          </div>

          {/* CTA */}
          <Link
            to="/vice-chancellor-message"
            className="inline-flex items-center gap-2.5 bg-[#0d1b35] text-[#DAA520] text-[0.75rem] font-medium tracking-[0.1em] uppercase px-6 py-3 rounded transition-colors duration-200 w-fit hover:bg-[#1e3a8a] hover:text-white [&>svg]:transition-transform [&:hover>svg]:translate-x-1"
          >
            <span>Read Full Message</span>
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>

      {/* Image Panel */}
      <div className="relative max-h-[500px] min-h-[320px] md:min-h-[300px] overflow-hidden bg-[#0d1b35] order-1 md:order-2">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.018)_0px,rgba(255,255,255,0.018)_1px,transparent_1px,transparent_12px)] z-[1]" />
        <img
          src={vc}
          alt="Dr. Milind Dattatray Dandekar"
          className="w-full h-full object-contain object-top block"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-bl from-[#0d1b35]/45 to-[#0d1b35]/5 z-[2]" />
        {/* Left accent bar */}
        <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-[#B8860B] via-[#DAA520] to-[#B8860B] z-[3]" />
        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 px-7 py-6 bg-gradient-to-t from-[#080f1e]/92 to-transparent z-[4]">
          <h3 className="font-serif text-[1.35rem] font-bold text-white mb-1">Dr. Milind D. Dandekar</h3>
          <p className="text-[0.72rem] tracking-widest uppercase text-[#DAA520]">
            Vice-Chancellor, MP Bhoj Open University
          </p>
        </div>
      </div>
    </div>
  );
}
