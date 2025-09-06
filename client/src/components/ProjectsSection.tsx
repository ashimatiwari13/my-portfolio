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
              className="repo-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`card-project-${index}`}
            >
              <div className="repo-header">
                <motion.i 
                  className={`${project.icon} text-xl ${project.color}`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                ></motion.i>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-title"
                  data-testid={`link-project-code-${index}`}
                >
                  {project.title}
                </a>
                <div className="badge badge-success ml-auto">Public</div>
              </div>
              
              <p className="repo-description">
                {index === 0 ? "Machine learning project for early detection using Python and scikit-learn" :
                 index === 1 ? "Personal portfolio website built with React.js and modern web technologies" :
                 "AI-powered travel agent using IBM Cloud and Watson technologies"}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="badge"
                    whileHover={{ scale: 1.05 }}
                    data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              
              <div className="repo-stats">
                <div className="repo-stat">
                  <span className={`language-indicator ${project.technologies.includes('Python') ? 'language-python' : project.technologies.includes('React.js') ? 'language-react' : 'language-javascript'}`}></span>
                  <span>{project.technologies[0]}</span>
                </div>
                <div className="repo-stat">
                  <i className="fas fa-star text-yellow-400"></i>
                  <span>{Math.floor(Math.random() * 100) + 20}</span>
                </div>
                <div className="repo-stat">
                  <i className="fas fa-code-branch text-blue-400"></i>
                  <span>{Math.floor(Math.random() * 30) + 5}</span>
                </div>
                <div className="repo-stat">
                  <i className="fas fa-eye text-gray-400"></i>
                  <span>{Math.floor(Math.random() * 200) + 50}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
