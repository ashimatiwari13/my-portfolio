import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        
        <motion.div 
          className="glass-effect rounded-2xl p-8 md:p-12 neon-border"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2" data-testid="text-college-name">
              Government Mahila Engineering College, Ajmer
            </h3>
            <p className="text-xl text-primary mb-2" data-testid="text-degree">
              B.Tech in Computer Science
            </p>
            <p className="text-muted-foreground mb-4" data-testid="text-duration">
              2022 – 2026
            </p>
            <motion.div 
              className="inline-block bg-gradient-to-r from-primary to-secondary px-6 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-lg font-semibold" data-testid="text-cgpa">
                CGPA: 8.53 / 10
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
