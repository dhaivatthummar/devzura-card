import { LuLayoutGrid, LuCodepen, LuSmartphone, LuServer, LuCloud, LuRocket } from 'react-icons/lu';
import ServiceCard from '../components/ServiceCard';
import { motion } from 'framer-motion';

const services = [
  {
    icon: LuLayoutGrid,
    title: "Web Application Development",
    description: "Building modern, responsive, and high-performance web applications using the latest technologies."
  },
  {
    icon: LuCodepen,
    title: "SaaS Product Development",
    description: "Scale your ideas with powerful SaaS architectures designed for growth and reliability."
  },
  {
    icon: LuSmartphone,
    title: "Mobile App Development",
    description: "Creating sleek and intuitive mobile experiences across iOS and Android platforms."
  },
  {
    icon: LuServer,
    title: "API Development",
    description: "Designing robust and secure APIs for seamless integrations and high-load performance."
  },
  {
    icon: LuCloud,
    title: "Cloud Solutions",
    description: "Leveraging cloud infrastructure to optimize costs, security, and scalability for your business."
  },
  {
    icon: LuRocket,
    title: "Startup MVP Development",
    description: "Helping startups move from concept to launch with highly efficient MVP development cycles."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-[#0B0F19]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#2563EB] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            What We Do
          </h2>
          <div className="h-1.5 w-24 bg-[#2563EB] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
