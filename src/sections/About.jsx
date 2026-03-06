import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0B0F19]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 dark:text-white">
              About Us
            </h2>
            <div className="h-1.5 w-24 bg-[#2563EB] mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-900/50 p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl dark:shadow-[0_0_30px_rgba(0,0,0,0.4)]"
          >
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed text-center italic mb-4">
              "Devzura IT Labs helps businesses transform their ideas into powerful digital products."
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-center max-w-2xl mx-auto">
              We specialize in building scalable software solutions including web applications, SaaS products, APIs, and cloud-based systems. Our goal is to deliver reliable and efficient technology solutions that help businesses grow faster.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
