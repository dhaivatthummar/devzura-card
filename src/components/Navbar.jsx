import { useState, useEffect } from 'react';
import { LuMenu, LuX, LuRocket } from 'react-icons/lu';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'CEO', href: '#ceo' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-[#0B0F19]/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-blue-500 text-white shadow-lg group-hover:scale-110 transition-transform">
            <LuRocket className="w-6 h-6" />
          </div>
          <span className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter">
            DEVZURA
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 dark:text-gray-300 hover:text-[#2563EB] dark:hover:text-[#2563EB] font-bold text-sm tracking-widest uppercase transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 bg-[#2563EB] text-white font-bold rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]"
          >
            Work with Us
          </a>
        </div>

        {/* Toggle Mobile Menu */}
        <button
          className="md:hidden text-gray-900 dark:text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <LuX className="w-8 h-8" /> : <LuMenu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#0B0F19] border-t border-gray-100 dark:border-gray-800 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-200 text-lg font-bold hover:text-blue-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 bg-[#2563EB] text-white text-center font-bold rounded-xl shadow-lg shadow-blue-500/30"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
