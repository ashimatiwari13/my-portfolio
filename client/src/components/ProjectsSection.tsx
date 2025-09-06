import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Predicting Early Stages of Alzheimer's Disease",
      icon: "fas fa-brain",
      color: "text-primary",
      technologies: ["Python", "Scikit-learn", "Matplotlib"],
      link: "https://github.com/ashimatiwari13/PREDICTING-EARLY-STAGES-OF-ALZHEIMER-S-DISEASE"
    },
    {
      title: "Personal Portfolio",
      icon: "fas fa-user",
      color: "text-secondary",
      technologies: ["React.js"],
      link: "https://github.com/ashimatiwari13/ashimatiwari-portfolio"
    },
    {
      title: "Travel AI Agent",
      icon: "fas fa-plane",
      color: "text-accent",
      technologies: ["IBM Cloud Lite", "Watsonx.ai"],
      link: "https://github.com/ashimatiwari13/TravelAI-Agent"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass-effect rounded-xl p-6 neon-border transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)"
              }}
              data-testid={`card-project-${index}`}
            >
              <div className="text-center mb-4">
                <motion.i 
                  className={`${project.icon} text-4xl ${project.color} mb-4`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                ></motion.i>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-center">
                {project.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="skill-badge px-3 py-1 rounded-full text-xs"
                    whileHover={{ scale: 1.05 }}
                    data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              
              <div className="text-center">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center ${project.color} hover:opacity-80 transition-colors`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid={`link-project-code-${index}`}
                >
                  <i className="fab fa-github mr-2"></i>
                  View Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
