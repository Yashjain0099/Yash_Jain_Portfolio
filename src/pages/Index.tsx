import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { NeuralBackground } from '@/components/NeuralBackground';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Speaking } from '@/components/Speaking';
import { Certificates } from '@/components/Certificates';
import { Testimonial } from '@/components/Testimonial';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showHireMe, setShowHireMe] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrolled = window.scrollY;

      setShowScrollTop(scrolled > 500);
      setShowHireMe(scrolled > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Neural Network Background */}
      <NeuralBackground />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Speaking />
        <Certificates />
        <Testimonial />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Hire Me Button - Now visible after scrolling past hero */}
      {showHireMe && (
        <Button
          onClick={scrollToContact}
          className="fixed bottom-6 right-6 z-50 btn-warm shadow-2xl animate-pulse-glow"
          size="lg"
        >
          Hire Me
        </Button>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 p-3 rounded-full glass border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Index;
