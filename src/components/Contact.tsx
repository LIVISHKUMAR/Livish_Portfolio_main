import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { data } from '../data';

const Contact: React.FC = () => {
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "d1bd821c-8b7a-4ca0-adbd-69d0836c8ef4", // Securely linked to your email
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          subject: `New Portfolio Message from ${formData.get("name")}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="min-h-screen py-24 bg-gray-50 dark:bg-neutral-900 transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16 text-black dark:text-white"
        >
          <div className="w-12 h-1 bg-brand"></div>
          <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter transition-colors">Contact Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight mb-8 text-black dark:text-white transition-colors">Let's Talk!</h3>
              <p className="text-gray-500 dark:text-neutral-400 leading-relaxed mb-8 transition-colors">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to contact me via the information below or the form.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white dark:bg-neutral-800 flex items-center justify-center text-brand shadow-sm border border-gray-100 dark:border-neutral-700 transition-colors hover:bg-brand hover:text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest text-gray-400 dark:text-neutral-500 mb-1 underline decoration-brand/50 transition-colors">Email</div>
                    <a href={`mailto:${data.personal.email}`} className="text-sm font-bold uppercase text-black dark:text-white hover:text-brand transition-colors">{data.personal.email}</a>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white dark:bg-neutral-800 flex items-center justify-center text-brand shadow-sm border border-gray-100 dark:border-neutral-700 transition-colors hover:bg-brand hover:text-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest text-gray-400 dark:text-neutral-500 mb-1 underline decoration-brand/50 transition-colors">Phone</div>
                    <a href={`tel:${data.personal.phone}`} className="text-sm font-bold uppercase text-black dark:text-white hover:text-brand transition-colors">{data.personal.phone}</a>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white dark:bg-neutral-800 flex items-center justify-center text-brand shadow-sm border border-gray-100 dark:border-neutral-700 transition-colors hover:bg-brand hover:text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest text-gray-400 dark:text-neutral-500 mb-1 underline decoration-brand/50 transition-colors">Location</div>
                    <div className="text-sm font-bold uppercase text-black dark:text-white transition-colors">Salem, Tamil Nadu, India</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href={data.personal.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-brand/10 dark:bg-brand flex items-center justify-center text-brand dark:text-black transition-transform hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a href={data.personal.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-brand/10 dark:bg-brand flex items-center justify-center text-brand dark:text-black transition-transform hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-neutral-800 p-8 lg:p-12 shadow-2xl relative transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 w-16 lg:w-24 h-16 lg:h-24 bg-brand lg:-translate-y-8 lg:translate-x-8 -z-10 hidden sm:block"></div>
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-20 h-20 bg-brand/10 text-brand rounded-full flex items-center justify-center">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black uppercase text-black dark:text-white">Message Sent!</h3>
                <p className="text-gray-500 dark:text-neutral-400">Thank you for Reaching out. I'll get back to you shortly.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-brand font-black uppercase text-xs tracking-widest underline decoration-brand/50"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-neutral-500 transition-colors">Your Name</label>
                    <input name="name" required type="text" className="w-full bg-gray-50 dark:bg-neutral-700 border-0 border-b-2 border-gray-100 dark:border-neutral-600 text-black dark:text-white focus:border-brand outline-none p-4 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-neutral-500 transition-colors">Email Address</label>
                    <input name="email" required type="email" className="w-full bg-gray-50 dark:bg-neutral-700 border-0 border-b-2 border-gray-100 dark:border-neutral-600 text-black dark:text-white focus:border-brand outline-none p-4 transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-neutral-500 transition-colors">Message</label>
                  <textarea name="message" required rows={6} className="w-full bg-gray-50 dark:bg-neutral-700 border-0 border-b-2 border-gray-100 dark:border-neutral-600 text-black dark:text-white focus:border-brand outline-none p-4 transition-all resize-none"></textarea>
                </div>
                <button
                  disabled={status === 'submitting'}
                  type="submit"
                  className="group flex items-center justify-center gap-3 bg-brand text-white px-10 py-5 font-black uppercase text-xs tracking-widest w-full hover:bg-black dark:hover:bg-white hover:text-brand dark:hover:text-black transition-all shadow-xl disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                {status === 'error' && (
                  <p className="text-red-500 text-xs font-bold uppercase text-center mt-4">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <div className="mt-24 text-center pb-12">
        <p className="text-[10px] font-black uppercase tracking-widest text-gray-300 dark:text-neutral-600 transition-colors">© 2024 LIVISH KUMAR. ALL RIGHTS RESERVED.</p>
      </div>
    </section>
  );
};

export default Contact;
