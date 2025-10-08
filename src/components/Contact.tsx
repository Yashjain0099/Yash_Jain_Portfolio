import { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter, Send, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Create mailto link
    const mailtoLink = `mailto:yashhjainofficial@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast.success("Opening your email client...");
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-container bg-background-secondary/30">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-foreground">Let's Build Something Amazing Together</h2>
          <p className="text-xl text-foreground-secondary">
            Open to AI/ML opportunities, collaborations, and speaking engagements
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-success mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground-secondary">Email</p>
                    <a
                      href="mailto:yashhjainofficial@gmail.com"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      yashhjainofficial@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground-secondary">Location</p>
                    <p className="text-foreground">Mumbai, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border/30">
                <p className="text-sm text-foreground-secondary mb-4">
                  Open to:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/30">
                    Full-time roles
                  </span>
                  <span className="px-3 py-1 rounded-full bg-success/10 text-success text-sm border border-success/30">
                    Contract work
                  </span>
                  <span className="px-3 py-1 rounded-full bg-accent-warm/10 text-accent-warm text-sm border border-accent-warm/30">
                    Research collaborations
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass p-6 rounded-2xl">
              <h4 className="text-lg font-display font-bold text-foreground mb-4">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/theyashjain0099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/Yashjain0099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://x.com/yashjain0099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                  aria-label="X/Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Download Resume */}
            <Button className="btn-warm w-full" size="lg">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-border text-foreground"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-border text-foreground"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-border text-foreground min-h-[150px]"
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </div>

              <Button type="submit" className="btn-hero w-full" size="lg">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* References Statement */}
        <div className="text-center">
          <p className="text-sm text-foreground-secondary italic">
            Professional references and detailed project documentation available upon request.
          </p>
        </div>
      </div>
    </section>
  );
};
