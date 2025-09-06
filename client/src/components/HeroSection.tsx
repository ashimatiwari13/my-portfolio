import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Frontend Developer", "Software Developer"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setDisplayText(isDeleting 
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, roles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="tech-grid absolute inset-0 opacity-30"></div>
      
      {/* Developer Stats Card */}
      <div className="absolute top-24 left-8 repo-card max-w-sm hidden lg:block">
        <div className="repo-header">
          <h3 className="repo-title text-base">
            <i className="fas fa-chart-line mr-2"></i>
            Developer Stats
          </h3>
          <div className="badge badge-success">Live</div>
        </div>
        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Commits</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Repos</span>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Ashima Tiwari
            </span>
          </motion.h1>
          
          <motion.div 
            className="text-xl md:text-2xl text-muted-foreground mb-8 h-8 flex items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-primary font-semibold">{displayText}</span>
            <motion.span
              className="text-primary ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            >
              |
            </motion.span>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="button-contact-me"
            >
              Contact Me
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="button-view-projects"
            >
              View Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
