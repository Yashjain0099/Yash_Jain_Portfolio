import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/theyashjain0099',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Yashjain0099',
    },
    {
      icon: Twitter,
      label: 'X/Twitter',
      href: 'https://x.com/yashjain0099',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:yashhjainofficial@gmail.com',
    },
  ];

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Speaking', href: '#speaking' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-background-secondary/50 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-gradient">
              Yash Jain
            </h3>
            <p className="text-foreground-secondary text-sm">
              Final Year AI Engineer passionate about building intelligent systems that solve real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-foreground-secondary hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold text-foreground">
              Connect With Me
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground-secondary text-sm text-center md:text-left">
            © {currentYear} Yash Jain. All rights reserved.
          </p>
          <p className="text-foreground-secondary text-sm flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-primary fill-primary" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};