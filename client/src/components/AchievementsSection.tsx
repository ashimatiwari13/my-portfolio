import { motion } from "framer-motion";

export default function AchievementsSection() {
  const achievements = [
    {
      emoji: "🎯",
      title: "Top 100 Achievement",
      description: "Ranked Top 100 out of 500+ teams — Codex 2.0 Hackathon",
      color: "text-primary"
    },
    {
      emoji: "🏅",
      title: "Hackathon Finalist",
      description: "Finalist — Simplify AI Tools Hackathon",
      color: "text-secondary"
    }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Achievements
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="glass-effect rounded-xl p-8 neon-border text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)"
              }}
              data-testid={`card-achievement-${index}`}
            >
              <motion.div 
                className="text-5xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {achievement.emoji}
              </motion.div>
              <h3 className={`text-xl font-semibold mb-2 ${achievement.color}`}>
                {achievement.title}
              </h3>
              <p className="text-muted-foreground">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
