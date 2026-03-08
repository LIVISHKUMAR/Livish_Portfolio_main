import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Layers } from 'lucide-react';
import { data } from '../data';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="min-h-screen py-24 bg-gray-50 dark:bg-neutral-900 transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16 text-black dark:text-white"
        >
          <div className="w-12 h-1 bg-brand"></div>
          <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter transition-colors">Resume</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-4 mb-8 text-black dark:text-white transition-colors">
              <Briefcase className="w-5 h-5 lg:w-6 lg:h-6 text-brand" />
              <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight">Professional Experience</h3>
            </div>
            {data.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative pl-8 border-l-4 border-brand mb-12"
              >
                <div className="absolute top-0 -left-[10px] w-4 h-4 rounded-full bg-brand border-4 border-gray-50 dark:border-neutral-900 transition-colors"></div>
                <div className="text-xs uppercase font-black text-gray-400 dark:text-neutral-500 mb-2 transition-colors">{exp.period}</div>
                <h4 className="text-xl font-bold uppercase mb-1 text-black dark:text-white transition-colors">{exp.role}</h4>
                <div className="text-brand font-bold mb-4 uppercase text-xs">{exp.company}</div>
                <ul className="list-disc list-inside text-gray-500 dark:text-neutral-400 space-y-2 text-sm transition-colors">
                  {exp.tasks.map((task, idx) => (
                    <li key={idx} className="leading-relaxed">{task}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-4 mb-8 text-black dark:text-white transition-colors">
              <GraduationCap className="w-5 h-5 lg:w-6 lg:h-6 text-brand" />
              <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight">Education</h3>
            </div>
            {data.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative pl-8 border-l-4 border-brand mb-12"
              >
                <div className="absolute top-0 -left-[10px] w-4 h-4 rounded-full bg-brand border-4 border-gray-50 dark:border-neutral-900 transition-colors"></div>
                <div className="text-xs uppercase font-black text-gray-400 dark:text-neutral-500 mb-2 transition-colors">{edu.period}</div>
                <h4 className="text-xl font-bold uppercase mb-1 text-black dark:text-white transition-colors">{edu.degree}</h4>
                <div className="text-brand font-bold mb-4 uppercase text-xs">{edu.school}</div>
                <div className="text-sm font-bold text-black dark:text-white transition-colors">{edu.grade}</div>
              </motion.div>
            ))}

            {/* Language Skills */}
            <div className="mt-16">
              <div className="flex items-center gap-4 mb-8 text-black dark:text-white transition-colors">
                <Layers className="w-5 h-5 lg:w-6 lg:h-6 text-brand" />
                <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight ">Languages</h3>
              </div>
              <div className="space-y-4">
                {data.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center bg-white dark:bg-neutral-800 p-4 shadow-sm border border-gray-100 dark:border-neutral-700 transition-colors duration-500">
                    <span className="font-bold uppercase text-xs tracking-widest text-black dark:text-white transition-colors">{lang.name}</span>
                    <span className="text-brand text-xs font-bold">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills - Detailed */}
        <div className="mt-24">
          <div className="flex items-center gap-4 mb-12 text-black dark:text-white transition-colors">
            <Code className="w-5 h-5 lg:w-6 lg:h-6 text-brand" />
            <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tighter">Technical Skills</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(data.skills).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-neutral-800 p-8 border-b-4 border-brand shadow-sm transition-colors duration-500"
              >
                <h4 className="text-xs uppercase font-black tracking-widest text-brand mb-6">{category.replace(/([A-Z])/g, ' $1').trim()}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-50 dark:bg-neutral-700 border border-gray-200 dark:border-neutral-600 text-xs font-bold uppercase tracking-tighter text-black dark:text-white hover:bg-black dark:hover:bg-brand dark:hover:text-black hover:text-white transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
