import React, { useState, useEffect, useRef, WheelEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { ArrowDown, CornerDownRight } from 'lucide-react';

interface MainSliderProps {
  onSelectProject: (projectId: string) => void;
}

export default function MainSlider({ onSelectProject }: MainSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = down, -1 = up
  const isTransitioning = useRef(false);
  const touchStartY = useRef(0);

  // Wheel event listener for scroll-to-slide
  useEffect(() => {
    const handleWheel = (e: any) => {
      e.preventDefault();
      if (isTransitioning.current) return;

      const delta = e.deltaY;
      if (Math.abs(delta) < 30) return; // ignore subtle scrolls

      if (delta > 0) {
        // Scroll down -> Next Slide
        if (currentIndex < PROJECTS.length - 1) {
          setDirection(1);
          isTransitioning.current = true;
          setCurrentIndex((prev) => prev + 1);
          setTimeout(() => {
            isTransitioning.current = false;
          }, 1000); // lock transition for 1s
        }
      } else {
        // Scroll up -> Prev Slide
        if (currentIndex > 0) {
          setDirection(-1);
          isTransitioning.current = true;
          setCurrentIndex((prev) => prev - 1);
          setTimeout(() => {
            isTransitioning.current = false;
          }, 1000);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentIndex]);

  // Touch handlers for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isTransitioning.current) return;
    const touchEndY = e.touches[0].clientY;
    const diff = touchStartY.current - touchEndY;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe up -> Next Slide
        if (currentIndex < PROJECTS.length - 1) {
          setDirection(1);
          isTransitioning.current = true;
          setCurrentIndex((prev) => prev + 1);
          setTimeout(() => {
            isTransitioning.current = false;
          }, 1000);
        }
      } else {
        // Swipe down -> Prev Slide
        if (currentIndex > 0) {
          setDirection(-1);
          isTransitioning.current = true;
          setCurrentIndex((prev) => prev - 1);
          setTimeout(() => {
            isTransitioning.current = false;
          }, 1000);
        }
      }
    }
  };

  const handleDotClick = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const project = PROJECTS[currentIndex];

  // Animation variants
  const imageVariants = {
    initial: (dir: number) => ({
      y: dir > 0 ? '100%' : '-100%',
      scale: 1.1,
      opacity: 0.8
    }),
    animate: {
      y: '0%',
      scale: 1,
      opacity: 1,
      transition: {
        y: { type: 'spring', stiffness: 80, damping: 18 },
        scale: { duration: 1.2, ease: 'easeOut' },
        opacity: { duration: 0.8 }
      }
    },
    exit: (dir: number) => ({
      y: dir > 0 ? '-30%' : '30%',
      scale: 0.95,
      opacity: 0,
      transition: {
        y: { duration: 0.8, ease: 'easeInOut' },
        scale: { duration: 0.8 },
        opacity: { duration: 0.5 }
      }
    })
  };

  return (
    <div
      className="relative w-full h-screen bg-black overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {/* Background Slideshow Image with Zoom effect */}
      <div className="absolute inset-0 w-full h-full z-0 bg-black">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 w-full h-full bg-black flex items-center justify-center"
          >
            {/* Dark overlay for optimal text readability */}
            <div className="absolute inset-0 bg-black/45 z-10" />
            <img
              src={project.mainImage}
              alt={project.title}
              className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.75] transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Decorative Camera Viewfinder Brackets */}
      <div className="absolute inset-6 md:inset-12 border-0 pointer-events-none z-20">
        {/* Top-left */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/50" />
        {/* Top-right */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/50" />
        {/* Bottom-left */}
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/50" />
        {/* Bottom-right */}
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/50" />
      </div>

      {/* Slide Content Layer */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end px-12 pb-20 md:px-24 md:pb-28">
        <div className="max-w-4xl text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="space-y-4"
            >
              {/* Project Counter / Index */}
              <div className="flex items-center space-x-3 font-mono text-xs md:text-sm text-neutral-300">
                <span className="text-rose-500 font-bold">{project.number}</span>
                <span className="w-8 h-[1px] bg-neutral-500" />
                <span>05</span>
                <span className="ml-4 uppercase tracking-widest">{project.category}</span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-5xl md:text-8xl tracking-tight leading-none font-medium text-white">
                {project.title}
              </h1>

              {/* Subtitle & Role */}
              <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-8 pt-2">
                <p className="font-sans text-neutral-300 text-sm md:text-base tracking-wide max-w-md">
                  {project.subtitle}
                </p>
                <div className="hidden md:flex items-center space-x-2 font-mono text-xs text-rose-400">
                  <CornerDownRight size={14} />
                  <span>{project.role}</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <button
                  onClick={() => onSelectProject(project.id)}
                  className="group flex items-center space-x-3 bg-white hover:bg-rose-600 hover:text-white text-brand-dark px-6 py-3.5 rounded-none font-mono text-xs tracking-widest uppercase cursor-pointer transition-all duration-300 shadow-lg"
                >
                  <span>Explore Case Study</span>
                  <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      {currentIndex === 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.7, y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1 font-mono text-[9px] text-white tracking-widest uppercase z-20 pointer-events-none"
        >
          <span>Scroll to navigate</span>
          <ArrowDown size={12} className="text-rose-400" />
        </motion.div>
      )}

      {/* Side Dot Navigation */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-20">
        {PROJECTS.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => handleDotClick(idx)}
            className="group flex items-center justify-end focus:outline-none cursor-pointer"
            aria-label={`Go to slide ${idx + 1}`}
          >
            {/* Hover text label */}
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/0 group-hover:text-white/80 mr-3 transition-all duration-300">
              {p.title}
            </span>
            <div
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 border ${
                idx === currentIndex
                  ? 'bg-rose-500 border-rose-500 scale-125'
                  : 'bg-transparent border-white/40 group-hover:border-white group-hover:scale-110'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Bottom status bar indicator */}
      <div className="absolute left-12 bottom-6 font-mono text-[10px] text-white/50 tracking-widest z-20 hidden md:block">
        PORTFOLIO SYSTEM // UTC ACTIVE
      </div>
    </div>
  );
}
