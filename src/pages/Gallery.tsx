import React, { useState } from 'react';
import bhoj1 from '../assets/bhoj1.jpeg';
import bhoj2 from '../assets/bhoj2.jpeg';
import bhoj3 from '../assets/bhoj3.jpeg';
import bhoj4 from '../assets/bhoj4.jpg';
import bhoj5 from '../assets/bhoj5.jpg';
import bhoj6 from '../assets/bhoj6.jpg';
import bhoj7 from '../assets/bhoj7.jpeg';
import bhoj8 from '../assets/bhoj8.jpg';
import bhoj9 from '../assets/bhoj9.jpg';
import bhoj10 from '../assets/bhoj10.jpg';
import bhoj11 from '../assets/bhoj11.jpeg';
import bhoj12 from '../assets/bhoj12.jpeg';

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  category: string;
}

interface GalleryCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  images: GalleryImage[];
}

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories: GalleryCategory[] = [
    {
      id: 'campus',
      name: 'Campus & Facilities',
      description: 'Explore our state-of-the-art campus infrastructure and beautiful grounds',
      icon: '🏛️',
      images: [
        { id: 1, url: bhoj1, alt: 'Main Campus Building', category: 'campus' },
        { id: 2, url: bhoj2, alt: 'University Library', category: 'campus' },
        { id: 3, url: bhoj3, alt: 'Campus Grounds', category: 'campus' },
        { id: 4, url: bhoj4, alt: 'Study Areas', category: 'campus' },
        { id: 5, url: bhoj5, alt: 'Technology Center', category: 'campus' },
        { id: 6, url: bhoj6, alt: 'Science Laboratory', category: 'campus' },
      ],
    },
    {
      id: 'events',
      name: 'Events & Ceremonies',
      description: 'Memorable moments from our university celebrations and gatherings',
      icon: '🎉',
      images: [
        { id: 7, url: bhoj7, alt: 'Graduation Ceremony', category: 'events' },
        { id: 8, url: bhoj8, alt: 'Annual Convocation', category: 'events' },
        { id: 9, url: bhoj9, alt: 'Cultural Festival', category: 'events' },
        { id: 10, url: bhoj10, alt: 'Academic Conference', category: 'events' },
        { id: 11, url: bhoj11, alt: 'Sports Day', category: 'events' },
        { id: 12, url: bhoj12, alt: 'Freshers Welcome', category: 'events' },
      ],
    },
    {
      id: 'students',
      name: 'Student Life',
      description: 'A glimpse into the vibrant student community and daily campus activities',
      icon: '👨‍🎓',
      images: [
        { id: 13, url: bhoj1, alt: 'Student Collaboration', category: 'students' },
        { id: 14, url: bhoj3, alt: 'Group Study Session', category: 'students' },
        { id: 15, url: bhoj5, alt: 'Campus Recreation', category: 'students' },
        { id: 16, url: bhoj7, alt: 'Team Discussion', category: 'students' },
        { id: 17, url: bhoj9, alt: 'Student Presentations', category: 'students' },
        { id: 18, url: bhoj11, alt: 'Outdoor Activities', category: 'students' },
      ],
    },
    {
      id: 'research',
      name: 'Research & Innovation',
      description: 'Cutting-edge research and innovative projects by our faculty and students',
      icon: '🔬',
      images: [
        { id: 19, url: bhoj2, alt: 'Research Laboratory', category: 'research' },
        { id: 20, url: bhoj4, alt: 'Scientific Equipment', category: 'research' },
        { id: 21, url: bhoj6, alt: 'Data Analysis', category: 'research' },
        { id: 22, url: bhoj8, alt: 'Engineering Projects', category: 'research' },
        { id: 23, url: bhoj10, alt: 'Innovation Lab', category: 'research' },
        { id: 24, url: bhoj12, alt: 'Research Symposium', category: 'research' },
      ],
    },
  ];

  const allImages = categories.flatMap((cat) => cat.images);
  const displayedImages = activeCategory === 'all' 
    ? allImages 
    : categories.find(cat => cat.id === activeCategory)?.images || [];

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = displayedImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % displayedImages.length;
    } else {
      newIndex = (currentIndex - 1 + displayedImages.length) % displayedImages.length;
    }
    
    setSelectedImage(displayedImages[newIndex]);
  };

  return (
    <div className="min-h-screen bg-white  mt-10 md:mt-36">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#1e3a8a]/90 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">Photo Gallery</h1>
          <div className="w-32 h-1 bg-[#B8860B] mx-auto mb-6 animate-slideIn"></div>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fadeIn">
            Discover the essence of our university through these captivating moments
          </p>
        </div>
      </div>

      {/* Category Filter Buttons */}
      <div className="sticky top-0 z-40 bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === 'all'
                  ? 'bg-[#1e3a8a] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">🌟</span>
              All Photos
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-[#1e3a8a] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Category Description */}
          {activeCategory !== 'all' && (
            <div className="text-center mt-4 animate-fadeIn">
              <p className="text-gray-600 text-lg">
                {categories.find(cat => cat.id === activeCategory)?.description}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(image)}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 aspect-[4/3] animate-scaleIn"
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              {/* Direct image render */}
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/90 via-[#1e3a8a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.alt}
                  </p>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-300">
                  <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center bg-[#B8860B]/20 backdrop-blur-sm">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No images message */}
        {displayedImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">No images found in this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-[#B8860B] transition-colors duration-200 z-10 bg-black/30 rounded-full p-2 hover:bg-black/50"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('prev');
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#B8860B] transition-colors duration-200 bg-black/30 rounded-full p-3 hover:bg-black/50"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('next');
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#B8860B] transition-colors duration-200 bg-black/30 rounded-full p-3 hover:bg-black/50"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Image */}
          <div className="max-w-6xl w-full animate-scaleIn">
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-center mt-6">
              <p className="text-white text-xl font-semibold mb-2">
                {selectedImage.alt}
              </p>
              <p className="text-white/70 text-sm">
                {displayedImages.findIndex(img => img.id === selectedImage.id) + 1} / {displayedImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .animate-slideIn {
          animation: slideIn 0.6s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out backwards;
        }
      `}</style>
    </div>
  );
};

export default Gallery;