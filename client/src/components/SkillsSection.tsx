import { motion } from "framer-motion";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming",
      color: "text-primary",
      skills: ["C++", "Python", "SQL"]
    },
    {
      title: "Frontend & Tools",
      color: "text-secondary",
      skills: ["React", "TailwindCSS", "Git", "GitHub"]
    },
    {
      title: "Fundamentals",
      color: "text-accent",
      skills: ["DBMS", "OOP", "Computer Networks", "Cloud Computing", "Operating Systems"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              className="terminal-window"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              data-testid={`card-skills-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="terminal-header">
                <div className="terminal-dots">
                  <div className="terminal-dot red"></div>
                  <div className="terminal-dot yellow"></div>
                  <div className="terminal-dot green"></div>
                </div>
                <div className="terminal-title">{category.title.toLowerCase().replace(/\s+/g, '_')}.js</div>
              </div>
              <div className="terminal-content">
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command"> npm list --skills</span>
                </div>
                <div className="terminal-line terminal-comment">// Available skills:</div>
                <div className="flex flex-wrap gap-3 mt-3">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="skill-badge px-4 py-2 rounded-full text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
