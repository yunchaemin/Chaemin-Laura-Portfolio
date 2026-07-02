import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export default function Navbar({ currentTab, onTabChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Skills' },
    { id: 'work', label: 'Works' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tabId: string) => {
    onTabChange(tabId);
    setIsOpen(false);
  };

  const isDarkHomeTheme = currentTab === 'home' && !isScrolled;
  const isSolidHeader = currentTab !== 'home' || isScrolled;

  const headerClass = isSolidHeader
    ? 'fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-300 pointer-events-auto'
    : 'fixed top-0 left-0 w-full z-50 bg-transparent mix-blend-difference transition-all duration-300 pointer-events-none';

  const logoTextClass = isSolidHeader
    ? 'text-neutral-900'
    : 'text-white';

  const logoSubTextClass = isSolidHeader
    ? 'text-neutral-500 group-hover:text-rose-500'
    : 'text-neutral-400 group-hover:text-rose-500';

  const navItemClass = isSolidHeader
    ? 'relative py-2 text-sm tracking-widest uppercase font-mono text-neutral-600 hover:text-neutral-900 cursor-pointer transition-colors duration-300 focus:outline-none'
    : 'relative py-2 text-sm tracking-widest uppercase font-mono text-neutral-300 hover:text-white cursor-pointer transition-colors duration-300 focus:outline-none';

  const hamburgerClass = isSolidHeader
    ? 'md:hidden p-2 text-neutral-900 hover:text-rose-500 transition-colors duration-300 focus:outline-none cursor-pointer'
    : 'md:hidden p-2 text-white hover:text-rose-500 transition-colors duration-300 focus:outline-none cursor-pointer';

  return (
    <header className={headerClass}>
      <div className="max-w-7xl mx-auto px-6 py-4 md:px-12 md:py-5 flex justify-between items-center pointer-events-auto">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex flex-col items-start cursor-pointer focus:outline-none"
        >
          <span className={`font-serif text-2xl md:text-3xl tracking-tight font-medium transition-colors duration-300 ${logoTextClass}`}>
            Portfolio<Heart className="inline-block w-3 h-3 text-rose-500 ml-0.5 align-super" />
          </span>
          <span className={`font-mono text-[10px] tracking-widest uppercase transition-colors duration-300 ${logoSubTextClass}`}>
            Chaemin Yun
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-between items-center max-w-2xl ml-12 lg:ml-24">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={navItemClass}
            >
              {item.label}
              {(currentTab === item.id || (item.id === 'work' && currentTab === 'work-detail')) && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-rose-500"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={hamburgerClass}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`absolute top-full left-0 w-full border-b px-6 py-8 flex flex-col space-y-6 md:hidden pointer-events-auto shadow-2xl ${
              isDarkHomeTheme 
                ? 'bg-brand-dark border-neutral-900' 
                : 'bg-brand-cream border-neutral-200'
            }`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-lg tracking-widest uppercase font-mono py-2 border-b transition-colors duration-300 focus:outline-none cursor-pointer ${
                  isDarkHomeTheme ? 'border-neutral-900' : 'border-neutral-200'
                } ${
                  currentTab === item.id || (item.id === 'work' && currentTab === 'work-detail')
                    ? 'text-rose-500 font-medium'
                    : isDarkHomeTheme
                      ? 'text-neutral-400 hover:text-white'
                      : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
