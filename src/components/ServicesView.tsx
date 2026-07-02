import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data';
import { Sparkles, RefreshCw, Layers } from 'lucide-react';

export default function ServicesView() {
  const getIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Sparkles className="text-rose-500 w-5 h-5" />;
      case '02':
        return <RefreshCw className="text-rose-500 w-5 h-5" />;
      case '03':
        return <Layers className="text-rose-500 w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark pt-40 md:pt-44 lg:pt-48 pb-24 font-sans selection:bg-rose-500 selection:text-white flex flex-col justify-between relative">
      {/* Colorful Abstract Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=80" 
          alt="Vibrant Colorful Background" 
          className="w-full h-full object-cover opacity-45 mix-blend-multiply"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-cream/50" />
      </div>

      {/* Main Content inside wider container */}
      <div className="max-w-[96vw] mx-auto px-4 md:px-8 lg:px-12 w-full flex-1 flex flex-col justify-center py-4 lg:py-2 z-10 relative">
        <div className="space-y-6 lg:space-y-4">
          

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.map((srv, index) => (
              <motion.div
                key={srv.number}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                className="group relative bg-white p-8 md:p-10 lg:p-8 min-h-[320px] lg:min-h-[360px] flex flex-col justify-between transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              >
                 <div className="space-y-6 lg:space-y-4">
                  {/* Number & Icon Header */}
                  <div className="flex justify-between items-center pb-3 border-b border-neutral-100">
                    <span className="font-serif text-xl lg:text-2xl text-neutral-300 group-hover:text-rose-500 transition-colors duration-500 font-medium">
                      [{srv.number}]
                    </span>
                    <div className="p-2.5 bg-neutral-50 rounded-full group-hover:bg-rose-50/50 transition-all duration-500">
                      {getIcon(srv.number)}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3 lg:space-y-2">
                    <h3 className="font-serif text-xl lg:text-2xl font-semibold text-neutral-900 leading-tight">
                      {srv.title}
                    </h3>
                    <p className="font-sans text-neutral-500 text-sm leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA Panel (Full width matching screen width in the footer area) */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full bg-white py-8 lg:py-6 px-4 md:px-8 lg:px-12 z-10 relative border-t border-neutral-100 mt-20"
      >
        <div className="max-w-[96vw] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-base lg:text-lg font-medium text-neutral-900 leading-none">
              Need a bespoke coordination model?
            </h4>
            <p className="font-sans text-xs text-neutral-500">
              Let's tailor an integrated management workflow to fit your specific organizational design and goals.
            </p>
          </div>
          <button className="px-6 py-2 bg-neutral-900 hover:bg-rose-600 text-white font-mono text-xs tracking-widest uppercase transition-colors duration-300 cursor-pointer rounded-none shrink-0">
            Inquire Details
          </button>
        </div>
      </motion.div>
    </div>
  );
}
