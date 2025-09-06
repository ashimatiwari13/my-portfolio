import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      className="py-8 border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-muted-foreground" data-testid="text-copyright">
          © 2025 Ashima Tiwari. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
