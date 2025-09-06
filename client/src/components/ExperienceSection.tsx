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
                    className="repo-card"
                    whileHover={{ scale: 1.02 }}
                    data-testid={`card-experience-${index}`}
                  >
                    <div className="repo-header">
                      <h3 className={`repo-title ${index % 2 === 0 ? 'text-primary' : 'text-secondary'}`}>
                        {exp.title}
                      </h3>
                      <div className="badge badge-success">
                        {exp.period.split(' – ')[1] === '2025' ? 'Current' : 'Completed'}
                      </div>
                    </div>
                    
                    <div className="repo-description mb-4">
                      <div className={`text-lg font-semibold mb-2 ${index % 2 === 0 ? 'text-secondary' : 'text-accent'}`}>
                        {exp.company}
                      </div>
                      <div className="text-sm text-muted-foreground mb-3">{exp.period}</div>
                    </div>
                    
                    <div className="space-y-2">
                      {exp.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{point}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="repo-stats mt-4">
                      <div className="repo-stat">
                        <i className="fas fa-building text-blue-400"></i>
                        <span>Experience</span>
                      </div>
                      <div className="repo-stat">
                        <i className="fas fa-calendar text-green-400"></i>
                        <span>{exp.period.split(' – ').length > 1 ? '2 months' : '3 months'}</span>
                      </div>
                      <div className="repo-stat">
                        <i className="fas fa-tasks text-purple-400"></i>
                        <span>{exp.points.length} achievements</span>
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
