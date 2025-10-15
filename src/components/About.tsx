import { useEffect, useRef, useState } from 'react';
import { Code2, Award, Cpu } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Workshop Host', value: 4, suffix: '+' },
  { icon: Code2, label: 'Events Speaker', value: 6, suffix: '+' },
  { icon: Cpu, label: 'Communities Member', value: 5, suffix: '+' },
];

const useCountUp = (end: number, duration: number, shouldStart: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Ease out quad
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(end * easeOut));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return count;
};

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-container">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-foreground">Who Am I</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-success mx-auto rounded-full" />
        </div>

        {/* About Text */}
        <div className="glass p-8 md:p-12 rounded-2xl">
          <p className="text-lg md:text-xl text-foreground-secondary leading-relaxed">
            Hi, I’m Yash Jain — an aspiring <span className="text-primary font-semibold">AI & Machine Learning Engineer</span> passionate about transforming ideas into intelligent, real-world solutions. I thrive at the intersection of innovation and impact, constantly exploring the <span className="text-primary font-semibold">latest advancements in AI, ML, LLMs, RAG, and Generative AI</span> to create projects that solve practical problems.
            As the AI Lead of “Club to Code” at my college and an active member of <span className="text-primary font-semibold">Google for Developers, Microsoft Learn Student Community, and the Google Innovator Program,</span> I’ve always believed in learning by doing and leading by example. My journey spans hands-on projects like Iris Tumor Detection using CNN, Token Trim, and several AI-powered dashboards, each reflecting my drive to build from scratch and push boundaries.
            Beyond coding, I’m an enthusiastic designer, and communicator who enjoys sharing knowledge through <span className="text-primary font-semibold">workshops, tech sessions, and collaborative projects.</span> My mission is simple — to craft meaningful AI solutions that empower people, inspire curiosity, and redefine possibilities.
          </p>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const count = useCountUp(stat.value, 2000, isVisible);
            return (
              <div
                key={stat.label}
                className="glass p-6 rounded-xl text-center hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-gradient mb-2">
                  {count}{stat.suffix}
                </div>
                <p className="text-sm text-foreground-secondary font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};