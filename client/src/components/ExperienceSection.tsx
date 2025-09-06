import { motion } from "framer-motion";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "AI & Cloud Intern",
      company: "Edunet Foundation",
      period: "Jul 2025 – Aug 2025",
      color: "bg-primary",
      points: [
        "Hands-on with IBM Cloud, AutoAI, EDA, and Chatbot Development",
        "Built & presented capstone AI/ML project",
        "Completed AICTE-recognized internship focused on AI, Cloud Computing, and Data Analytics"
      ]
    },
    {
      title: "Frontend Development Trainee",
      company: "DIIT Institute",
      period: "Jun 2024 – Aug 2024",
      color: "bg-secondary",
      points: [
        "Learned HTML, CSS, and JavaScript deeply",
        "Built responsive websites & interactive components"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 timeline-line rounded-full"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.title}
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 ${exp.color} rounded-full border-4 border-background`}
                  whileHover={{ scale: 1.2 }}
                />
                
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:ml-1/2 md:pl-8'}`}>
                  <motion.div 
                    className="terminal-window"
                    whileHover={{ scale: 1.02 }}
                    data-testid={`card-experience-${index}`}
                  >
                    <div className="terminal-header">
                      <div className="terminal-dots">
                        <div className="terminal-dot red"></div>
                        <div className="terminal-dot yellow"></div>
                        <div className="terminal-dot green"></div>
                      </div>
                      <div className="terminal-title">experience_{index + 1}.log</div>
                    </div>
                    <div className="terminal-content">
                      <div className="git-commit">
                        <span className="git-hash">#{(index + 1).toString().padStart(3, '0')}</span>
                        <span className="git-message">{exp.title}</span>
                      </div>
                      <div className="console-log">
                        <span className="log-level log-info">[INFO]</span>
                        <span className={index % 2 === 0 ? 'text-secondary' : 'text-accent'}>
                          {exp.company}
                        </span>
                      </div>
                      <div className="console-log">
                        <span className="log-level log-warn">[DURATION]</span>
                        <span>{exp.period}</span>
                      </div>
                      <div className="mt-4">
                        {exp.points.map((point, pointIndex) => (
                          <div key={pointIndex} className="console-log">
                            <span className="log-level log-success">[ACHIEVEMENT]</span>
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
