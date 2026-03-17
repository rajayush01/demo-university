import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, BookOpen, Globe, LucideIcon } from 'lucide-react';

interface Stat {
  icon: LucideIcon;
  number: string;
  label: string;
}

const stats: Stat[] = [
  { icon: Award, number: "100+", label: "Years of Excellence" },
  { icon: Users, number: "50,000+", label: "Active Students" },
  { icon: BookOpen, number: "3,000+", label: "Expert Faculty" },
  { icon: Globe, number: "150+", label: "Global Partners" }
];

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = '', duration = 4000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return (
    <div ref={counterRef}>
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function StatsSection() {
  const parseNumber = (numStr: string): { value: number; suffix: string } => {
    const match = numStr.match(/^([\d,]+)(.*)$/);
    if (match) {
      const value = parseInt(match[1].replace(/,/g, ''));
      const suffix = match[2];
      return { value, suffix };
    }
    return { value: 0, suffix: '' };
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const { value, suffix } = parseNumber(stat.number);
            return (
              <div key={index} className="text-center group ">
                <div className="flex justify-center mb-4 transition-colors group-hover:scale-110 transform duration-300">
                  <stat.icon className="w-8 h-8" />
                </div>
                <p className="text-4xl lg:text-5xl font-bold text-blue-900 mb-2 ">
                  <Counter end={value} suffix={suffix} />
                </p>
                <p className="text-black font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}