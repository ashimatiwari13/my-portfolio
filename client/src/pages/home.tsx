import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Navigation */}
      <Navigation />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Code Rain Effect */}
        <div className="code-rain" />
        
        {/* Floating Geometric Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-24 h-24 border border-secondary/20 rounded-lg"
          animate={{ y: [0, -20, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: -3 }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-40 h-40 border border-accent/20 rounded-full"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-40 w-28 h-28 border border-primary/20 rounded-lg"
          animate={{ y: [0, -20, 0], rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: -3 }}
        />
        
        {/* Floating Code Elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 text-primary/20 font-mono text-lg"
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          &lt;/&gt;
        </motion.div>
        <motion.div 
          className="absolute top-2/3 right-1/4 text-secondary/20 font-mono text-xl"
          animate={{ y: [0, -25, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: -2 }}
        >
          { }
        </motion.div>
        <motion.div 
          className="absolute top-1/2 left-1/6 text-accent/20 font-mono text-lg"
          animate={{ y: [0, -20, 0], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: -1 }}
        >
          =&gt;
        </motion.div>
        <motion.div 
          className="absolute bottom-1/3 right-1/6 text-primary/20 font-mono text-lg"
          animate={{ y: [0, -35, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: -4 }}
        >
          [ ]
        </motion.div>
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <CertificationsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
