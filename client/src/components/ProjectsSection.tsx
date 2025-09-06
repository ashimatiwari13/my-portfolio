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
              className="terminal-window"
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
              <div className="terminal-header">
                <div className="terminal-dots">
                  <div className="terminal-dot red"></div>
                  <div className="terminal-dot yellow"></div>
                  <div className="terminal-dot green"></div>
                </div>
                <div className="terminal-title">{project.title.toLowerCase().replace(/\s+/g, '_')}.git</div>
              </div>
              <div className="terminal-content">
                <div className="git-commit mb-3">
                  <span className="git-hash">#{(index + 1).toString().padStart(7, '0')}</span>
                  <span className="git-message">{project.title}</span>
                </div>
                
                <div className="console-log mb-3">
                  <span className="log-level log-info">[REPO]</span>
                  <motion.i 
                    className={`${project.icon} ${project.color} mr-2`}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  ></motion.i>
                  <span className="text-sm">{project.title}</span>
                </div>
                
                <div className="terminal-line mb-3">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command"> git log --oneline</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
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
                
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command"> git remote -v</span>
                </div>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`terminal-output hover:underline text-sm block mt-1`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-testid={`link-project-code-${index}`}
                >
                  origin  {project.link} (fetch)
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
