import { motion } from "framer-motion";

export default function CertificationsSection() {
  const certifications = [
    {
      title: "Accenture",
      subtitle: "Software Engineering Virtual Experience",
      icon: "fas fa-certificate",
      color: "text-primary",
      link: "https://drive.google.com/file/d/1GmBJYgwz0vHJgK3sKcStm4y7rryP6o5F/view"
    },
    {
      title: "AWS",
      subtitle: "Solutions Architecture Job Simulation",
      icon: "fab fa-aws",
      color: "text-secondary",
      link: "https://drive.google.com/file/d/1f3EHvv7p2LQaDTQ6jNu2pG3Aw445cIJ9/view"
    },
    {
      title: "Cisco",
      subtitle: "Introduction to Cybersecurity",
      icon: "fas fa-shield-alt",
      color: "text-accent",
      link: "https://drive.google.com/file/d/1Gih-S1FYvvT2LWmAiSFrMhQgZyPDaKPk/view"
    },
    {
      title: "Udemy",
      subtitle: "Python for Beginners",
      icon: "fab fa-python",
      color: "text-primary",
      link: "https://www.udemy.com/certificate/UC-f59d0746-4aef-4a2b-bd86-4a1dd58105ad/"
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect rounded-xl p-6 neon-border block transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              data-testid={`card-certification-${cert.title.toLowerCase()}`}
            >
              <div className="text-center">
                <motion.i 
                  className={`${cert.icon} text-3xl ${cert.color} mb-4`}
                  whileHover={{ scale: 1.2 }}
                ></motion.i>
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.subtitle}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
