import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { ArrowLeft, CheckCircle, Calendar, ShieldCheck, ClipboardCheck } from 'lucide-react';

interface WorkDetailViewProps {
  project: Project;
  onBackToWork: () => void;
}

export default function WorkDetailView({ project, onBackToWork }: WorkDetailViewProps) {
  // Auto scroll to top of viewport when entering a project detail view
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.id]);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark pt-40 md:pt-44 pb-24 px-6 md:px-12 lg:px-24 font-sans selection:bg-rose-500 selection:text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
         {/* Left column: Sticky project metadata and business details */}
         <div className="lg:col-span-5 lg:sticky lg:top-40 lg:h-[calc(100vh-14rem)] flex flex-col justify-between">
          <div className="space-y-8">
            {/* Back button */}
            <button
              onClick={onBackToWork}
              className="group flex items-center space-x-2 font-mono text-xs text-neutral-500 hover:text-rose-500 transition-colors duration-300 focus:outline-none cursor-pointer"
            >
              <ArrowLeft size={14} className="transform group-hover:-translate-x-1 transition-transform" />
              <span>[ VIEW ALL WORK ]</span>
            </button>

            {/* Project Title */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-900 leading-tight">
              {project.title}
            </h1>

            {/* Project Description */}
            <div className="font-sans text-neutral-700 text-sm md:text-base leading-relaxed">
              <p>{project.description}</p>
            </div>

            {/* Year / Client / Industry / Assigned Role under detailed description with ample space */}
            <div className="pt-12 border-t border-neutral-200/60 space-y-6">
              <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-1">Year</span>
                  <span className="font-sans text-sm text-neutral-800 font-medium">{project.year}</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-1">Client</span>
                  <span className="font-sans text-sm text-neutral-800 font-medium">{project.client}</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-1">Industry</span>
                  <span className="font-sans text-sm text-neutral-800 font-medium">{project.industry}</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-1">Assigned Role</span>
                  <span className="font-sans text-sm text-rose-600 font-medium">{project.role}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Beautiful scrollable list of vertical project images */}
        <div className="lg:col-span-7 space-y-12">
          {project.detailImages.map((imgUrl, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative aspect-[3/4] overflow-hidden bg-neutral-200 border border-neutral-200"
            >
              {/* Corner Margins */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/60 pointer-events-none z-10" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/60 pointer-events-none z-10" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white/60 pointer-events-none z-10" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/60 pointer-events-none z-10" />
              
              <img
                src={imgUrl}
                alt={`${project.title} Spec Detail ${index + 1}`}
                className="w-full h-full object-cover filter contrast-105 hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-6 font-mono text-[9px] text-white/60 z-10 bg-black/30 px-2 py-1 select-none">
                DETAIL ASSET // 0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
