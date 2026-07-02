import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data';
import { CornerDownRight } from 'lucide-react';

interface WorkViewProps {
  onSelectProject: (projectId: string) => void;
}

export default function WorkView({ onSelectProject }: WorkViewProps) {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark pt-40 md:pt-44 pb-24 px-6 md:px-12 lg:px-24 font-sans selection:bg-rose-500 selection:text-white relative flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col space-y-12">
        

        {/* Vertical Scroll Grid (Works beautifully on both Mobile and Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              onClick={() => onSelectProject(project.id)}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: 'easeOut' }}
              className="group relative bg-white border border-neutral-200/50 p-6 md:p-8 flex flex-col justify-between cursor-pointer hover:shadow-2xl hover:border-neutral-400 transition-all duration-300"
            >
              {/* Red corner brackets */}
              <div className="absolute -top-[1px] -left-[1px] w-5 h-5 border-t-2 border-l-2 border-rose-500 opacity-80 group-hover:opacity-100 transition-all" />
              <div className="absolute -top-[1px] -right-[1px] w-5 h-5 border-t-2 border-r-2 border-rose-500 opacity-80 group-hover:opacity-100 transition-all" />
              <div className="absolute -bottom-[1px] -left-[1px] w-5 h-5 border-b-2 border-l-2 border-rose-500 opacity-80 group-hover:opacity-100 transition-all" />
              <div className="absolute -bottom-[1px] -right-[1px] w-5 h-5 border-b-2 border-r-2 border-rose-500 opacity-80 group-hover:opacity-100 transition-all" />

              <div className="space-y-4">
                {/* Image container */}
                <div className="aspect-[4/3] overflow-hidden bg-neutral-100 relative">
                  <img
                    src={project.mainImage}
                    alt={project.title}
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-colors duration-300" />
                </div>

                {/* Text details */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-rose-500 font-bold uppercase tracking-widest">{project.category}</span>
                  <h3 className="font-serif text-2xl lg:text-xl font-medium text-neutral-900 group-hover:text-rose-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-neutral-500 tracking-wide line-clamp-2 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* View details CTA */}
              <div className="pt-6 flex justify-start">
                <div className="py-2.5 px-5 bg-neutral-900 text-white font-mono text-[10px] tracking-widest uppercase flex items-center space-x-2 group-hover:bg-rose-600 transition-all duration-300">
                  <CornerDownRight size={12} className="text-rose-400 group-hover:text-white group-hover:translate-x-[-2px] transition-transform duration-300" />
                  <span>View Details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
