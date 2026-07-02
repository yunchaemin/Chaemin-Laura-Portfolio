import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import MainSlider from './components/MainSlider';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import WorkView from './components/WorkView';
import WorkDetailView from './components/WorkDetailView';
import GalleryView from './components/GalleryView';
import ContactView from './components/ContactView';
import { PROJECTS } from './data';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Helper handler when user clicks a project in home slider or work list
  const handleSelectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentTab('work-detail');
  };

  const handleBackToWork = () => {
    setCurrentTab('work');
    setSelectedProjectId(null);
  };

  const renderContent = () => {
    switch (currentTab) {
      case 'home':
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-screen"
          >
            <MainSlider onSelectProject={handleSelectProject} />
          </motion.div>
        );

      case 'about':
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full min-h-screen bg-brand-cream"
          >
            <AboutView />
          </motion.div>
        );

      case 'services':
        return (
          <motion.div
            key="services"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full min-h-screen bg-brand-cream"
          >
            <ServicesView />
          </motion.div>
        );

      case 'work':
        return (
          <motion.div
            key="work"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full min-h-screen bg-brand-cream"
          >
            <WorkView onSelectProject={handleSelectProject} />
          </motion.div>
        );

      case 'work-detail':
        const currentProject = PROJECTS.find((p) => p.id === selectedProjectId) || PROJECTS[0];
        return (
          <motion.div
            key="work-detail"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full min-h-screen bg-brand-cream"
          >
            <WorkDetailView project={currentProject} onBackToWork={handleBackToWork} />
          </motion.div>
        );

      case 'gallery':
        return (
          <motion.div
            key="gallery"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full min-h-screen bg-brand-cream"
          >
            <GalleryView />
          </motion.div>
        );

      case 'contact':
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full min-h-screen bg-brand-cream"
          >
            <ContactView />
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-brand-cream antialiased font-sans selection:bg-rose-500 selection:text-white">
      {/* Persistent top-level navigation */}
      <Navbar currentTab={currentTab} onTabChange={setCurrentTab} />

      {/* Main content body with smooth transitions */}
      <main className="w-full">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>

      {/* Persistent mini branding tag on all non-home views */}
      {currentTab !== 'home' && (
        <footer className="w-full bg-brand-cream py-8 border-t border-neutral-200/50 text-center font-mono text-[9px] text-neutral-400 select-none z-10">
          CHAEMIN YUN // PORTFOLIO INTEL 2026 // ALL RIGHTS RESERVED ©
        </footer>
      )}
    </div>
  );
}
