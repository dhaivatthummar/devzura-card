import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import CEO from './sections/CEO';
import Services from './sections/Services';
import Contact from './sections/Contact';
import { LuMail, LuMessageSquare, LuRocket } from 'react-icons/lu';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0B0F19] transition-colors duration-500 selection:bg-blue-500/30">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <CEO />
        <Services />
        <Contact />
      </main>

      <footer className="py-16 bg-[#0B0F19] text-white border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-blue-500 text-white shadow-lg">
                  <LuRocket className="w-5 h-5" />
                </div>
                <span className="text-2xl font-black tracking-tighter">
                  DEVZURA IT LABS
                </span>
              </div>
              <p className="text-gray-400 max-w-xs font-medium leading-relaxed italic">
                Building scalable digital products for startups and businesses.
              </p>
            </div>

            <div className="flex items-center gap-6">
              {[
                { icon: LuMail, href: 'mailto:dev.devzuraitlabs@gmail.com' },
                { icon: LuMessageSquare, href: 'https://wa.me/919723371971?text=Hello%20Devzura%20IT%20Labs,%20I%20came%20across%20your%20digital%20profile%20and%20I%20would%20like%20to%20discuss%20a%20project%20idea%20with%20you.%20Please%20let%20me%20know%20if%20you%20are%20available.' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:bg-blue-600 hover:scale-110 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-300"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm font-medium">
            <p>© {new Date().getFullYear()} Devzura IT Labs. All rights reserved.</p>
            <div className="flex items-center gap-6 uppercase tracking-widest text-[10px]">
              <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
