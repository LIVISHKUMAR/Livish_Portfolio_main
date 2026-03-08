import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Cloud, Database } from 'lucide-react';
import { data } from '../data';

const About: React.FC = () => {
  const stats = [
    { label: "Month's of Experience", value: "9+" },
    { label: "Techs", value: "15+" },
    { label: "CGPA", value: "7.5" },
    { label: "Main Projects", value: "5+" }
  ];

  const whatIDo = [
    {
      title: "Backend Development",
      description: "Expertise in architecting scalable enterprise systems using Java, Python, and Spring Boot.",
      icon: Server
    },
    {
      title: "Microservices Architecture",
      description: "Building resilient microservices systems with RESTful APIs and JWT authentication.",
      icon: Code2
    },
    {
      title: "Cloud Infrastructure",
      description: "Deploying and managing cloud resources on AWS and Docker for high availability.",
      icon: Cloud
    },
    {
      title: "Database Design",
      description: "Optimizing data storage and retrieval with PostgreSQL, Neo4j, and Apache Solr.",
      icon: Database
    }
  ];

  return (
    <section id="about" className="min-h-screen py-24 bg-white dark:bg-neutral-900 transition-colors duration-500 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-4 text-black dark:text-white transition-colors">
            <div className="w-12 h-1 bg-brand"></div>
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter transition-colors">About Me</h2>
          </div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-neutral-300 mb-8 transition-colors">
            I'm <span className="text-brand transition-colors">Livish Kumar</span>, Backend Software Engineer
          </h3>
          <p className="text-gray-500 dark:text-neutral-400 text-lg leading-relaxed mb-16 transition-colors">
            {data.personal.summary}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white dark:bg-neutral-800 text-black dark:text-white flex flex-col items-center justify-center text-center shadow-xl border border-gray-100 dark:border-neutral-700 relative overflow-hidden group transition-all duration-500"
            >
              <div className="absolute inset-0 bg-brand translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="text-4xl font-black mb-2 group-hover:text-white dark:group-hover:text-black transition-colors">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors font-bold">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tighter mb-12 flex items-center gap-4 text-black dark:text-white transition-colors">
            What I Do?
            <div className="flex-grow h-px bg-gray-200 dark:bg-neutral-800 transition-colors"></div>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {whatIDo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0 w-14 h-14 lg:w-16 lg:h-16 bg-gray-100 dark:bg-neutral-800 flex items-center justify-center rounded-sm transition-colors group-hover:bg-brand">
                  <item.icon className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase mb-2 tracking-tight text-black dark:text-white transition-colors">{item.title}</h4>
                  <p className="text-gray-500 dark:text-neutral-400 text-sm leading-relaxed transition-colors">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
