import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="vs-code-theme"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="vs-code-header">
            <div className="vs-code-tab active">about_me.js</div>
            <div className="vs-code-tab">skills.json</div>
            <div className="vs-code-tab">projects.md</div>
          </div>
          <div className="vs-code-content code-syntax">
            <div className="mb-4">
              <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
            </div>
            <div className="ml-4 mb-2">
              <span className="variable">name</span>: <span className="string">"Ashima Tiwari"</span>,
            </div>
            <div className="ml-4 mb-2">
              <span className="variable">role</span>: <span className="string">"Frontend Developer | Software Developer"</span>,
            </div>
            <div className="ml-4 mb-2">
              <span className="variable">passion</span>: <span className="string">"Turning ideas into interactive digital experiences"</span>,
            </div>
            <div className="ml-4 mb-2">
              <span className="variable">expertise</span>: [<span className="string">"UI/UX"</span>, <span className="string">"Problem Solving"</span>, <span className="string">"Creative Technology"</span>],
            </div>
            <div className="ml-4 mb-2">
              <span className="variable">mindset</span>: <span className="string">"Always eager to learn and experiment"</span>,
            </div>
            <div className="ml-4 mb-4">
              <span className="variable">goal</span>: <span className="string">"Contributing to impactful solutions"</span>
            </div>
            <div>{'};'}</div>
            <div className="mt-4 comment">// CS undergrad who loves building meaningful projects 🚀</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
