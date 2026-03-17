import React from 'react';
import TestimonialCard from './TestimonialCard';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Alumni, Class of 2018",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format",
    quote: "The university shaped my career and gave me opportunities to excel in research and innovation. The mentorship I received was invaluable."
  },
  {
    name: "Priya Sharma",
    role: "Current Student, MBA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format",
    quote: "World-class faculty, excellent infrastructure, and a vibrant campus life make this university exceptional. I'm growing every day."
  },
  {
    name: "Prof. Anil Verma",
    role: "Faculty, Computer Science",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&auto=format",
    quote: "A place where innovation meets tradition, and where we nurture the brightest minds of tomorrow with cutting-edge research."
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Voices of Excellence
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Hear from our students, alumni, and faculty about their transformative experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}