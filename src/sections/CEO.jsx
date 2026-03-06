import { motion } from 'framer-motion';

const CEO = () => {
  return (
    <section id="ceo" className="py-24 bg-gray-50 dark:bg-[#0F172A]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0"
          >
            <div className="relative w-full h-full bg-blue-500 rounded-full overflow-hidden border-4 border-white dark:border-[#2563EB] shadow-2xl group transition-all duration-300 hover:scale-105">
              <img 
                src="https://i.ibb.co/Wv6Zg0Qh/Whats-App-Image-2026-03-03-at-16-53-13.jpg" 
                alt="Dhaivat Thummar" 
                className="w-full h-full object-cover filter contrast-125 saturate-125"
              />
              <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay group-hover:bg-blue-600/10 transition-colors"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
              Dhaivat Thummar
            </h2>
            <p className="text-[#2563EB] text-xl font-semibold mb-6 uppercase tracking-widest">
              Founder & CEO
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed italic mb-4">
              "Building scalable digital products and helping startups turn ideas into successful technology platforms."
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg">
              Dhaivat Thummar is a software developer and entrepreneur focused on building scalable digital products and helping startups turn ideas into successful technology platforms.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CEO;
