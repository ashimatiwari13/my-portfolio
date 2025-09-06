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
          className="glass-effect rounded-2xl p-8 md:p-12 neon-border matrix-bg relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute top-4 left-4 text-primary/30 font-mono text-sm">
            <span className="text-secondary">const</span> <span className="text-accent">developer</span> = {'{'}
          </div>
          <div className="absolute bottom-4 right-4 text-primary/30 font-mono text-sm">
            {'};'}
          </div>
          <div className="relative z-10">
            <p className="text-lg text-muted-foreground leading-relaxed text-center" data-testid="text-about-description">
              <span className="text-primary font-mono">&quot;</span>
              Hi, I'm Ashima 👋 — a Computer Science undergrad who loves turning ideas into interactive and meaningful digital experiences. Whether it's crafting sleek user interfaces or solving tough programming problems, I enjoy building projects that combine creativity with technology. Always eager to learn, experiment, and contribute to impactful solutions.
              <span className="text-primary font-mono">&quot;</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
