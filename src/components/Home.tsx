import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { data } from '../data';

interface HomeProps {
  onNext: () => void;
}

const Home: React.FC<HomeProps> = ({ onNext }) => {
  return (
    <section id="home" className="min-h-screen relative flex items-center bg-gray-50 dark:bg-neutral-900 transition-colors duration-500 overflow-hidden pt-20 lg:pt-0">
      <div className="container mx-auto px-6 lg:px-12 z-10 grid grid-cols-1 md:grid-cols-2 lg:items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <motion.p
            initial={{ letterSpacing: "0.2em", opacity: 0 }}
            animate={{ letterSpacing: "0.4em", opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-brand font-bold tracking-widest text-xs lg:text-sm uppercase"
          >
            Hi There!
          </motion.p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-black dark:text-white transition-colors leading-tight uppercase">
            I'M <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-neutral-500">LIVISH</span>
            <br />
            <span className="text-brand"></span>
          </h1>
          <div className="inline-block px-3 py-1 bg-brand/10 dark:bg-brand text-brand dark:text-black font-bold text-xs tracking-tighter uppercase transition-colors">
            Backend Software Engineer
          </div>
          <p className="text-gray-500 dark:text-neutral-400 max-w-lg mx-auto md:mx-0 leading-relaxed text-sm lg:text-base transition-colors">
            Architecting scalable enterprise systems with Java and Spring Boot. Specialist in Microservices, high-performance API design, and cloud infrastructure optimization.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNext}
              className="group flex items-center justify-center bg-brand text-white px-8 py-4 font-black uppercase text-xs tracking-widest transition-all hover:bg-black hover:text-brand dark:hover:bg-white dark:hover:text-black shadow-xl"
            >
              More About Me
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const link = document.createElement('a');
                link.href = data.personal.resumeUrl;
                link.setAttribute('download', 'Livish_Kumar_Resume.pdf');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="group flex items-center justify-center bg-white dark:bg-neutral-800 text-black dark:text-white border-2 border-black dark:border-neutral-700 px-8 py-4 font-black uppercase text-xs tracking-widest transition-all hover:bg-black hover:text-white dark:hover:bg-brand dark:hover:text-black cursor-pointer"
            >
              Download CV
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-full flex justify-center items-center"
        >
          <div className="absolute inset-0 bg-brand/10 -rotate-3 rounded-3xl"></div>
          <div className="relative z-10 w-full max-w-md aspect-[3/4] bg-gray-200 dark:bg-neutral-800 border-8 border-white dark:border-neutral-700 shadow-2xl overflow-hidden transition-colors duration-500">
            <img
              src={data.personal.homeImage}
              alt={data.personal.name}
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = data.personal.image;
              }}
            />
          </div>
          {/* Sidebar icon overlay style as in design */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 p-4 bg-brand shadow-lg">
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-black rounded-full"></div>
          </div>
        </motion.div>
      </div>

      {/* Decorative large text */}
      <div className="absolute bottom-10 right-10 text-[100px] md:text-[200px] font-black text-gray-100/50 dark:text-neutral-800/30 select-none pointer-events-none z-0 transition-colors hidden sm:block">
        LK
      </div>
    </section>
  );
};

export default Home;
