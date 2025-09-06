import { useState } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 glass-effect"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="text-2xl font-bold text-primary border-2 border-primary/50 rounded-lg px-3 py-1 relative overflow-hidden cursor-pointer"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)",
              textShadow: "0 0 10px rgba(99, 102, 241, 0.8)"
            }}
            whileTap={{ scale: 0.95 }}
            style={{ fontFamily: 'monospace' }}
            data-testid="nav-logo"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10 font-black tracking-wider">AT</span>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {[
              { label: "About", id: "about" },
              { label: "Skills", id: "skills" },
              { label: "Projects", id: "projects" },
              { label: "Achievements", id: "achievements" },
              { label: "Contact", id: "contact" }
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
          
          <div className="flex space-x-4">
            <motion.a 
              href="https://github.com/ashimatiwari13" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              data-testid="nav-github"
            >
              <i className="fab fa-github text-xl"></i>
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/ashima-tiwari-259b312a8/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              data-testid="nav-linkedin"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </motion.a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button 
              className="text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
              data-testid="nav-mobile-toggle"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden mt-2 pb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="space-y-3">
              {[
                { label: "About", id: "about" },
                { label: "Skills", id: "skills" },
                { label: "Projects", id: "projects" },
                { label: "Achievements", id: "achievements" },
                { label: "Contact", id: "contact" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left hover:text-primary transition-colors py-2"
                  data-testid={`nav-mobile-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
