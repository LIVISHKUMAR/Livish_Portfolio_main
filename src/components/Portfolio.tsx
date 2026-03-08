import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Layout, Server, ShieldCheck } from 'lucide-react';
import { data } from '../data';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="min-h-screen py-24 bg-white dark:bg-neutral-900 transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16 text-black dark:text-white"
        >
          <div className="w-12 h-1 bg-brand"></div>
          <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter transition-colors">Portfolio</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {data.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-neutral-800 group hover:shadow-2xl transition-all duration-500 overflow-hidden relative border-t-8 border-brand"
            >
              <div className="p-6 lg:p-10 space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tight text-black dark:text-white mb-2 transition-colors">{project.title}</h3>
                    <div className="inline-block px-3 py-1 bg-brand text-white font-black uppercase text-xs tracking-tighter">
                      {project.role}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="p-2 bg-white dark:bg-neutral-700 rounded-full text-black dark:text-white hover:bg-black dark:hover:bg-brand dark:hover:text-black hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 bg-white dark:bg-neutral-700 rounded-full text-black dark:text-white hover:bg-black dark:hover:bg-brand dark:hover:text-black hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white dark:bg-neutral-700 flex items-center gap-3 transition-colors">
                    <div className="p-2 bg-brand/10 text-brand rounded">
                      <Server className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold uppercase text-gray-500 dark:text-neutral-400">Backend</span>
                  </div>
                  <div className="p-4 bg-white dark:bg-neutral-700 flex items-center gap-3 transition-colors">
                    <div className="p-2 bg-brand/10 text-brand rounded">
                      <Layout className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold uppercase text-gray-500 dark:text-neutral-400">UI/UX</span>
                  </div>
                  <div className="p-4 bg-white dark:bg-neutral-700 flex items-center gap-3 transition-colors">
                    <div className="p-2 bg-brand/10 text-brand rounded">
                      <Database className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold uppercase text-gray-500 dark:text-neutral-400">Database</span>
                  </div>
                  <div className="p-4 bg-white dark:bg-neutral-700 flex items-center gap-3 transition-colors">
                    <div className="p-2 bg-brand/10 text-brand rounded">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold uppercase text-gray-500 dark:text-neutral-400">Security</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-gray-500 dark:text-neutral-400 leading-relaxed transition-colors">
                      <span className="text-brand font-black">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-2 w-full bg-brand translate-y-2 group-hover:translate-y-0 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
