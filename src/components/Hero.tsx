import { Github, Linkedin, Twitter, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import profileImage from '@/assets/yash-profile.jpg';

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
];

export const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Yash Jain';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    
    return () => clearInterval(timer);
  }, []);
  
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center neural-bg"
    >
      <div className="relative z-20 section-container text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-8" style={{ opacity: 1 }}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-success rounded-full blur opacity-75 group-hover:opacity-100 animate-pulse-glow transition duration-1000"></div>
              <img 
                src={profileImage} 
                alt="Yash Jain - AI Engineer" 
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-background shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Main Headline with Typewriter Effect */}
          <h1 className="leading-tight" style={{ opacity: 1 }}>
            <span className="text-gradient font-bold block" style={{ opacity: 1 }}>
              {displayedText}<span className="animate-pulse">|</span>
            </span>
            <br />
            <span className="text-3xl md:text-4xl text-foreground block" style={{ opacity: 1 }}>Final Year AI Engineer</span>
            <br />
            <span className="text-gradient block" style={{ opacity: 1 }}>Building Intelligent Systems for Real-World Impact</span>
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6" style={{ opacity: 1 }}>
            <Button
              onClick={scrollToProjects}
              className="btn-hero w-full sm:w-auto hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-primary/50"
            >
              View Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-8" style={{ opacity: 1 }}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
