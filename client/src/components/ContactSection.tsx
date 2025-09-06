import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const userId = import.meta.env.VITE_EMAILJS_USER_ID;

      if (!serviceId || !templateId || !userId) {
        throw new Error("EmailJS configuration missing");
      }

      // Use EmailJS to send the email
      await (window as any).emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Ashima Tiwari",
        },
        userId
      );

      // Reset form
      setFormData({ name: "", email: "", message: "" });
      
      toast({
        title: "Success!",
        description: "Message sent successfully! I'll get back to you soon.",
        variant: "default",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: "ashimatiwari013@gmail.com",
      link: "mailto:ashimatiwari013@gmail.com"
    },
    {
      icon: "fab fa-github",
      label: "GitHub",
      value: "github.com/ashimatiwari13",
      link: "https://github.com/ashimatiwari13"
    },
    {
      icon: "fab fa-linkedin",
      label: "LinkedIn",
      value: "LinkedIn Profile",
      link: "https://www.linkedin.com/in/ashima-tiwari-259b312a8/"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-xl p-6 neon-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Get In Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={info.label}
                    className="flex items-center space-x-3"
                    whileHover={{ x: 5 }}
                  >
                    <i className={`${info.icon} text-primary`}></i>
                    <a 
                      href={info.link}
                      target={info.link.startsWith('mailto:') ? '_self' : '_blank'}
                      rel={info.link.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`link-contact-${info.label.toLowerCase()}`}
                    >
                      {info.value}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="terminal-window"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
              </div>
              <div className="terminal-title">contact_form.js</div>
            </div>
            <div className="terminal-content">
              <div className="terminal-line mb-4">
                <span className="terminal-prompt">$</span>
                <span className="terminal-command"> npm run send-message</span>
              </div>
              <div className="terminal-comment mb-4">// Fill out the form below to get in touch</div>
              <form className="space-y-6" onSubmit={handleSubmit} data-testid="form-contact">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                  placeholder="Your Name"
                  required
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                  placeholder="your@email.com"
                  required
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                  placeholder="Your message..."
                  required
                  data-testid="textarea-message"
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/80 text-primary-foreground py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                data-testid="button-submit-contact"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
