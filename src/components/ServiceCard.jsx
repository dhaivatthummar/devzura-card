import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 group-hover:bg-blue-500/10 rounded-bl-full transition-colors flex items-center justify-center p-4">
        <Icon className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform" />
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-500 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
