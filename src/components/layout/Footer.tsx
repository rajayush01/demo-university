import React from 'react';
import {  MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import logo from '../../assets/logo_bhoj.png'

export default function Footer() {
  const quickLinks1 = [
    { name: 'BHOJ Online Knowledge Portal', href: '#' },
    { name: 'Indian Nursing Council', href: '#' },
    { name: 'Department Of Ayush, GoI', href: '#' },
    { name: 'Anti Ragging', href: '#' },
    { name: 'Online Fee Payment', href: '#' },
    { name: 'Hon\'ble Governor : Raj Bhavan MP', href: '#' },
    { name: 'Photo Gallery', href: '#' },
    { name: 'Feedback', href: '#' }
  ];

  const quickLinks2 = [
    
    { name: 'Department Of Ayush, M.P.', href: '#' },
    { name: 'All India Council For Technical Education', href: '#' },
    { name: 'Central Coucil Of Indian Medicine', href: '#' },
    { name: 'Directorate Of Medical Education', href: '#' },
    { name: 'Department Of Higher Education', href: '#' },
    { name: 'Madhya Pradesh Medical Science University', href: '#' },
    { name: 'Central Council For Research In Homoeopathy', href: '#' }
  ];

  const announcements = [
    { title: 'Covid19 Information', href: '#' },
    { title: 'Recruitment For The Upcoming Paramedical Courses', href: '#' },
    { title: 'Virtual Seminar On "Artificial Intelligence" 20 September 2020', href: '#' }
  ];

  return (
    <footer id="contact" className="bg-slate-900 text-white py-12">
      <div className=" mx-auto px-4 sm:px-8 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Quick Links Column 1 */}
          <div>
            <img src={logo} alt="" className='h-32 w-32' />
            <p>BHOJ University, Bhopal</p>
            <p>One of the most prestigious University around the country.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-900">
              {quickLinks1.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white text-slate-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              {quickLinks2.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white text-slate-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Announcements */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Announcements</h4>
            <ul className="space-y-2 text-slate-400">
              {announcements.map((announcement, index) => (
                <li key={index}>
                  <a href={announcement.href} className="hover:text-white text-slate-400 transition-colors">
                    {announcement.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  BHOJ University, Airport Rd, Abbas Nagar, Gandhi Nagar, Bhopal, Madhya Pradesh, India<br />
                  Pin Code - 462033
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Tollfree : 18002700320</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>BHOJuniversitybpl@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm w-full text-center  gap-8">
              © 2024 - BHOJ University | All ® rights reserved | 
              <a href="#" className="hover:text-white transition-colors gap-8"> Terms & Conditions</a> | 
              <a href="#" className="hover:text-white transition-colors"> Privacy Policy</a> | 
              <a href="#" className="hover:text-white transition-colors"> Refund and Cancellation Policy</a> | 
              Last Updated: 03-Aug-2022
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-slate-500 text-xs">
              Internal Release - 02 - Build v1.00.0045 Date: 03-Aug-2022
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


// import React from 'react';
// import { BookOpen, MapPin, Phone, Mail } from 'lucide-react';

// export default function Footer() {
//   return (
//     <footer id="contact" className="bg-slate-900 text-white py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           <div>
//             <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
//               <BookOpen className="w-6 h-6" />
//               <span>University</span>
//             </h3>
//             <p className="text-slate-400 leading-relaxed">
//               Empowering minds, transforming futures since 1922.
//             </p>
//           </div>

//           <div>
//             <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
//             <ul className="space-y-2 text-slate-400">
//               <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
//               <li><a href="#academics" className="hover:text-white transition-colors">Admissions</a></li>
//               <li><a href="#academics" className="hover:text-white transition-colors">Academic Programs</a></li>
//               <li><a href="#campus-life" className="hover:text-white transition-colors">Campus Life</a></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-bold mb-4 text-lg">Resources</h4>
//             <ul className="space-y-2 text-slate-400">
//               <li><a href="#" className="hover:text-white transition-colors">Library</a></li>
//               <li><a href="#" className="hover:text-white transition-colors">Campus Map</a></li>
//               <li><a href="#" className="hover:text-white transition-colors">Student Portal</a></li>
//               <li><a href="#" className="hover:text-white transition-colors">Career Services</a></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-bold mb-4 text-lg">Contact Us</h4>
//             <ul className="space-y-3 text-slate-400">
//               <li className="flex items-start space-x-2">
//                 <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
//                 <span>University Road, Academic City, India - 452001</span>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <Phone className="w-5 h-5" />
//                 <span>+91 731-2527532</span>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <Mail className="w-5 h-5" />
//                 <span>info@excellence.edu.in</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-slate-800 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <p className="text-slate-400 text-sm">
//               © 2026 Excellence University. All rights reserved.
//             </p>
//             <div className="flex space-x-6">
//               <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
//               <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
//               <a href="#" className="text-slate-400 hover:text-white transition-colors">Sitemap</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }