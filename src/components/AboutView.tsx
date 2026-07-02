import React from 'react';
import { motion } from 'motion/react';
import { Target, Award, Calendar, ExternalLink } from 'lucide-react';

export default function AboutView() {
  // Experience timeline for Chaemin Yun
  const experiences = [
    {
      role: 'Integrated Marketing & Project Manager Coordinator',
      company: 'Solenne Atelier / Premium Retail House',
      period: '2024 - Present',
      details: [
        'Coordinate workflow of marketing assets, supervising digital & print production across European & Asian hubs.',
        'Manage campaigns and digital advertising budgets, over-achieving targeted ROI/KPI metrics by 140%.',
        'Direct multi-functional team meetings ensuring cohesive brand storytelling and on-time asset delivery.'
      ]
    },
    {
      role: 'Marketing Associate & PR Specialist',
      company: 'Reveal Beauty & Wellness Co.',
      period: '2022 - 2024',
      details: [
        'Boosted brand recognition by 210% via influencer matrices and synchronized public relations.',
        'Designed layout guidelines for global skincare packaging and led UI/UX layout improvements.',
        'Managed campaign workflows with 15+ external content creators.'
      ]
    },
    {
      role: 'Visual Communications Lead',
      company: 'Scarlett Media & Publishing',
      period: '2020 - 2022',
      details: [
        'Coordinated layout styling and asset management for a special 200-page anniversary edition.',
        'Decreased asset-creation cycles by 25% by standardizing cloud templates.',
        'Created custom print & web collateral for leading luxury fragrance clients.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark pt-40 md:pt-44 pb-24 px-6 md:px-12 lg:px-24 font-sans selection:bg-rose-500 selection:text-white relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        {/* Left column: Portrait image with appearing motion */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              type: 'spring', 
              stiffness: 45, 
              damping: 15, 
              delay: 0.2 
            }}
            className="relative group aspect-[3/4] overflow-hidden bg-neutral-200 border border-neutral-300 shadow-2xl"
          >
            {/* Camera crosshair markings */}
            <div className="absolute top-4 left-4 font-mono text-[9px] text-neutral-500 select-none z-10">
              FOCUS [AUTOFRAME]
            </div>
            <div className="absolute bottom-4 right-4 font-mono text-[9px] text-neutral-500 select-none z-10">
              ISO 400 // F2.8
            </div>
            {/* Elegant Corner margins */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-neutral-400 z-10 pointer-events-none" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-neutral-400 z-10 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-neutral-400 z-10 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-neutral-400 z-10 pointer-events-none" />

            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
              alt="Chaemin Yun Portrait"
              className="w-full h-full object-cover filter grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <div className="mt-4 flex justify-between items-center font-mono text-xs text-neutral-500">
            <span>© CHAEMIN YUN PORTRAIT // 2026</span>
            <span>SHANGHAI - SEOUL</span>
          </div>
        </div>

        {/* Right column: Copywriting, Biography & Career highlights */}
        <div className="lg:col-span-7 space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 font-mono text-xs text-rose-500 uppercase tracking-widest font-bold">
              <span>Biography</span>
              <span className="w-12 h-[1px] bg-rose-500" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight text-neutral-900">
              Chaemin Yun
            </h1>
            <p className="font-mono text-xs uppercase tracking-wider text-rose-500">
              Integrated Marketing & Project Management Coordinator
            </p>
          </div>

          {/* About pitch */}
          <div className="font-sans text-neutral-700 text-base md:text-lg leading-relaxed space-y-6">
            <p>
              I am a results-oriented and structurally minded <strong>Marketing & Project Management Coordinator</strong>.
              I specialize in orchestrating elegant, high-impact creative campaigns and streamlining communication pipelines across global channels.
            </p>
            <p>
              By aligning visual production values with strict strategic insights, I bridges the gap between creative excellence and ROI execution. I have successfully managed multi-channel marketing campaigns, supervised budgets, coordinated high-profile events, and helped global brands over-achieve their KPIs.
            </p>
          </div>

          {/* Philosophy Section */}
          <div className="p-6 md:p-8 bg-neutral-100/70 border border-neutral-200/50 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-900 font-bold flex items-center space-x-2">
              <Target size={14} className="text-rose-500" />
              <span>Core Philosophy</span>
            </h3>
            <p className="font-serif text-xl italic text-neutral-800 font-light leading-relaxed">
              "Great campaigns are built on precise structure. Every creative asset must serve a strategic purpose, and every communication must build trust."
            </p>
          </div>

          {/* Career Experience Section */}
          <div className="space-y-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-900 font-bold flex items-center space-x-2">
              <Award size={14} className="text-rose-500" />
              <span>Selected Experience</span>
            </h3>

            <div className="space-y-8 divide-y divide-neutral-200">
              {experiences.map((exp, index) => (
                <div key={index} className={`pt-8 ${index === 0 ? 'pt-0' : ''} space-y-4`}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-1 md:space-y-0">
                    <div>
                      <h4 className="font-serif text-2xl font-medium text-neutral-900">
                        {exp.role}
                      </h4>
                      <p className="font-mono text-xs text-neutral-500">{exp.company}</p>
                    </div>
                    <span className="inline-block font-mono text-xs text-neutral-400 border border-neutral-300 px-3 py-1 rounded-full self-start">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="list-none space-y-2.5 pl-0">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="font-sans text-sm text-neutral-600 flex items-start space-x-2">
                        <span className="text-rose-500 font-mono mt-0.5">▪</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
