import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('isDarkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'resume', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`flex min-h-screen font-sans transition-colors duration-500 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Fixed Sidebar */}
      <Sidebar
        activeSection={activeSection}
        setActiveSection={scrollToSection}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Main Content */}
      <main className={`lg:ml-64 flex-grow transition-colors duration-500 ${isDarkMode ? 'bg-neutral-900' : 'bg-gray-50'}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Home onNext={() => scrollToSection('about')} />
            <About />
            <Resume />
            <Portfolio />
            <Contact />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Action Buttons or Decorative Elements */}
      <div className="fixed right-10 bottom-10 z-50 hidden lg:flex flex-col gap-4">
        <motion.div
          className={`w-1 h-24 relative overflow-hidden ${isDarkMode ? 'bg-neutral-800' : 'bg-gray-200'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="absolute top-0 left-0 w-full bg-brand"
            style={{
              height: '100%',
              scaleY: activeSection === 'home' ? 0.2 :
                activeSection === 'about' ? 0.4 :
                  activeSection === 'resume' ? 0.6 :
                    activeSection === 'portfolio' ? 0.8 : 1
            }}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </motion.div>
        <span className={`[writing-mode:vertical-rl] text-[10px] font-black uppercase tracking-widest ${isDarkMode ? 'text-neutral-500' : 'text-gray-400'}`}>
        </span>
      </div>
    </div>
  );
}

export default App;
