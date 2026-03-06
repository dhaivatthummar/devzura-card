import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { LuMail, LuMessageSquare } from 'react-icons/lu';

const Contact = () => {
  const contactInfo = [
    { icon: LuMail, label: 'Email', value: 'dev.devzuraitlabs@gmail.com', href: 'mailto:dev.devzuraitlabs@gmail.com' },
    { icon: LuMessageSquare, label: 'WhatsApp', value: '+91 97233 71971', href: 'https://wa.me/919723371971?text=Hello%20Devzura%20IT%20Labs,%20I%20came%20across%20your%20digital%20profile%20and%20I%20would%20like%20to%20discuss%20a%20project%20idea%20with%20you.%20Please%20let%20me%20know%20if%20you%20are%20available.' }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-[#0F172A]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="mb-10">
              <span className="text-[#2563EB] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                Get in Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                Let's Build Something <span className="text-blue-600">Amazing</span>
              </h2>
              <div className="h-1.5 w-24 bg-[#2563EB] rounded-full mb-8"></div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-lg">
                Have a project in mind or looking to collaborate? We're here to help you turn your vision into reality. Reach out to us today.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all duration-300 group overflow-hidden relative"
                >
                  <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">{info.label}</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
