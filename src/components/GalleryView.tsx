import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { GALLERY_IMAGES } from '../data';
import { Move } from 'lucide-react';

export default function GalleryView() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  // Drag constraints state
  const [constraints, setConstraints] = useState({ left: 0, right: 0, top: 0, bottom: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateConstraints = () => {
      if (viewportRef.current && canvasRef.current) {
        const vWidth = viewportRef.current.offsetWidth;
        const vHeight = viewportRef.current.offsetHeight;
        const cWidth = canvasRef.current.offsetWidth;
        const cHeight = canvasRef.current.offsetHeight;

        // Allow some comfortable margin/padding so images are never permanently hidden under the Navbar or screen edges
        const marginX = Math.max(100, vWidth * 0.1);
        const marginY = 160; // Safe height to clear fixed navigation bar

        setConstraints({
          left: -(cWidth - vWidth) - marginX,
          right: marginX,
          top: -(cHeight - vHeight) - marginY,
          bottom: marginY,
        });
      }
    };

    updateConstraints();
    // Add event listener to adjust constraints on window resize
    window.addEventListener('resize', updateConstraints);
    return () => window.removeEventListener('resize', updateConstraints);
  }, []);

  const handlePointerMove = (e: React.PointerEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="relative w-full h-screen bg-brand-cream text-brand-dark font-sans selection:bg-rose-500 selection:text-white overflow-hidden flex flex-col justify-between">
      
      {/* Custom Mouse Follower 'Drag' Badge */}
      <motion.div
        style={{
          position: 'fixed',
          left: mousePos.x,
          top: mousePos.y,
          x: 15,
          y: 15,
          pointerEvents: 'none',
          zIndex: 50,
        }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        className="bg-neutral-900 text-white border border-neutral-850 px-3 py-1.5 font-mono text-xs tracking-widest uppercase select-none shadow-2xl flex items-center space-x-1.5"
      >
        <Move size={12} className="text-rose-400" />
        <span>Drag</span>
      </motion.div>

      {/* Full screen Viewport Frame wrapping the large canvas */}
      <div 
        ref={viewportRef}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        onPointerMove={handlePointerMove}
        className="absolute inset-0 w-full h-full bg-neutral-100/30 overflow-hidden cursor-grab active:cursor-grabbing z-0"
      >
        {/* Subtle blueprint grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Draggable canvas (Larger than viewport, e.g. 2200px width, 1400px height) */}
        <motion.div
          ref={canvasRef}
          drag
          dragConstraints={constraints}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 400, bounceDamping: 35 }}
          initial={{ x: -300, y: -200 }} // start center-ish
          className="absolute w-[2200px] h-[1400px] bg-neutral-100/20 select-none z-10"
        >
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              style={{
                position: 'absolute',
                top: `${img.top}%`,
                left: `${img.left}%`,
                width: img.aspect === 'landscape' ? '320px' : img.aspect === 'square' ? '240px' : '200px',
                transform: `scale(${img.scale || 1})`,
              }}
              className="group p-3 bg-white border border-neutral-200 shadow-lg hover:z-30 pointer-events-auto"
            >
              {/* Thin camera-bracket lines */}
              <div className="absolute top-1 left-1 w-3 h-3 border-t border-l border-neutral-300" />
              <div className="absolute top-1 right-1 w-3 h-3 border-t border-r border-neutral-300" />
              <div className="absolute bottom-1 left-1 w-3 h-3 border-b border-l border-neutral-300" />
              <div className="absolute bottom-1 right-1 w-3 h-3 border-b border-r border-neutral-300" />

              <div className="relative overflow-hidden aspect-auto bg-neutral-50 mb-2">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full object-cover select-none pointer-events-none filter contrast-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Micro Metadata */}
              <div className="flex justify-between items-center font-mono text-[9px] text-neutral-400 select-none">
                <span className="uppercase tracking-wider truncate max-w-[120px]">{img.title}</span>
                <span>[ {img.id.toUpperCase()} ]</span>
              </div>
            </div>
          ))}

          {/* Scattered Decorative coordinate tags */}
          <div className="absolute top-10 left-10 font-mono text-[10px] text-neutral-300 select-none">[ GRID_COORD_X01_Y01 ]</div>
          <div className="absolute top-10 right-10 font-mono text-[10px] text-neutral-300 select-none">[ GRID_COORD_X05_Y01 ]</div>
          <div className="absolute bottom-10 left-10 font-mono text-[10px] text-neutral-300 select-none">[ GRID_COORD_X01_Y04 ]</div>
          <div className="absolute bottom-10 right-10 font-mono text-[10px] text-neutral-300 select-none">[ GRID_COORD_X05_Y04 ]</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-mono text-[12px] text-rose-500/10 select-none font-bold tracking-[0.5em]">CHAEMIN YUN EXHIBIT</div>
        </motion.div>
      </div>



    </div>
  );
}
