import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="profile-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-2xl font-bold">
              AT
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">Ashima Tiwari</h3>
              <p className="text-muted-foreground">Computer Science Student & Developer</p>
            </div>
            <div className="ml-auto flex gap-2">
              <div className="badge badge-success">Available for work</div>
              <div className="badge badge-primary">B.Tech CS</div>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6" data-testid="text-about-description">
            Hi, I'm Ashima 👋 — a Computer Science undergrad who loves turning ideas into interactive and meaningful digital experiences. Whether it's crafting sleek user interfaces or solving tough programming problems, I enjoy building projects that combine creativity with technology. Always eager to learn, experiment, and contribute to impactful solutions.
          </p>
          
          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-number">8.53</span>
              <span className="stat-label">CGPA</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4+</span>
              <span className="stat-label">Certifications</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Internships</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
