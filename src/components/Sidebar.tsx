import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  User,
  FileText,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Sun,
  Moon,
  LucideIcon,
  Menu,
  X
} from 'lucide-react';
import { data } from '../data';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

interface MenuItemProps {
  label: string;
  icon: LucideIcon;
  active: boolean;
  isDarkMode: boolean;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, icon: Icon, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center px-6 py-4 transition-all duration-300 relative group ${active
      ? 'text-black dark:text-white'
      : 'text-gray-500 dark:text-neutral-500 hover:text-black dark:hover:text-white'
      }`}
  >
    {active && (
      <motion.div
        layoutId="activeTab"
        className="absolute left-0 w-1.5 h-full bg-brand"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    )}
    <Icon className={`w-5 h-5 mr-4 transition-transform group-hover:scale-110 ${active ? 'text-brand' : ''}`} />
    <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
  </button>
);

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection, isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* Mobile Menu Button - Fixed at top right */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`lg:hidden fixed top-6 right-6 z-[120] p-3 rounded-full shadow-2xl transition-all duration-300 ${isDarkMode ? 'bg-brand text-black' : 'bg-black text-white'
          }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/80 z-[100]"
          />
        )}
      </AnimatePresence>

      <div className={`w-64 h-full flex flex-col border-r fixed left-0 top-0 z-[110] transition-all duration-500 ease-in-out transform 
        ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'}
        ${isDarkMode ? 'bg-black border-neutral-800' : 'bg-white border-gray-100'}`}>
        <div className="p-8 pb-4">
          <div className="relative group">
            <div className="w-full aspect-square bg-gray-200 overflow-hidden relative">
              <img
                src={data.personal.actualImage}
                alt={data.personal.name}
                className="w-full h-full object-cover filter grayscale"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = data.personal.image;
                }}
              />
              <div className="absolute inset-0 border-b-8 border-brand"></div>
            </div>
          </div>
        </div>

        <div className="px-8 mt-4">
          <button
            onClick={toggleDarkMode}
            className="w-full flex items-center justify-between p-2 rounded-lg bg-gray-100 dark:bg-neutral-800 text-gray-500 dark:text-brand hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
          >
            <span className="text-[10px] font-black uppercase tracking-widest px-2">
              {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </span>
            {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
        </div>

        <nav className="flex-grow mt-4">
          {menuItems.map((item) => (
            <MenuItem
              key={item.id}
              label={item.label}
              icon={item.icon}
              active={activeSection === item.id}
              isDarkMode={isDarkMode}
              onClick={() => {
                setActiveSection(item.id);
                setIsOpen(false);
              }}
            />
          ))}
        </nav>

        <div className="p-8 flex justify-between">
          <a href={data.personal.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={data.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={`mailto:${data.personal.email}`} className="text-gray-400 hover:text-brand transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
