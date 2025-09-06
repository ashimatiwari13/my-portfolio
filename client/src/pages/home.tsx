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
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-24 h-24 border border-secondary/20 rounded-lg"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: -3 }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-40 h-40 border border-accent/20 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-40 w-28 h-28 border border-primary/20 rounded-lg"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: -3 }}
        />
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
