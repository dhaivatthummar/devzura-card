import { motion } from 'framer-motion';
import { LuArrowRight } from 'react-icons/lu';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0F19] pt-20">
      {/* Background blobs for premium feel */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 mb-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium tracking-wide">
            Next-Gen Digital Solutions
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Devzura IT Labs
          </h1>
          <p className="text-xl md:text-2xl text-blue-400 font-medium mb-4 max-w-3xl mx-auto">
            Building scalable digital products for startups and businesses
          </p>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Devzura IT Labs is a software development company focused on building modern web applications, SaaS platforms, and custom digital solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-[#2563EB] text-white font-bold rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center"
            >
              Start a Project
              <LuArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-transparent border border-gray-700 text-gray-300 font-bold rounded-lg transition-all duration-300 hover:bg-gray-800 hover:text-white"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-gray-500 text-xs uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
