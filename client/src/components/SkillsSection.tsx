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
              className="repo-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`card-skills-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="repo-header">
                <h3 className={`repo-title ${category.color}`}>
                  {category.title}
                </h3>
                <div className="badge badge-primary">
                  {category.skills.length} skills
                </div>
              </div>
              
              <p className="repo-description">
                Essential technologies and tools I use for {category.title.toLowerCase()}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-4">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="badge"
                    whileHover={{ scale: 1.05 }}
                    data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
              
              <div className="repo-stats">
                <div className="repo-stat">
                  <span className={`language-indicator ${index === 0 ? 'language-javascript' : index === 1 ? 'language-react' : 'language-python'}`}></span>
                  <span>Primary</span>
                </div>
                <div className="repo-stat">
                  <i className="fas fa-star text-yellow-400"></i>
                  <span>{Math.floor(Math.random() * 50) + 10}</span>
                </div>
                <div className="repo-stat">
                  <i className="fas fa-code-branch text-blue-400"></i>
                  <span>{Math.floor(Math.random() * 20) + 5}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
