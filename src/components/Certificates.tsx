import { Award, Download, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const certificates = [
  {
    name: 'Python for Beginners',
    issuer: 'Microsoft',
    link: '#',
  },
  {
    name: 'Python for Data Science',
    issuer: 'IBM',
    link: '#',
  },
  {
    name: 'Explore Machine Learning using Python',
    issuer: 'Infosys',
    link: '#',
  },
  {
    name: 'Introduction to Deep Learning',
    issuer: 'Infosys',
    link: '#',
  },
  {
    name: 'Introduction to Artificial Intelligence',
    issuer: 'Infosys',
    link: '#',
  },
  {
    name: 'Principles of Generative AI Certification',
    issuer: 'Infosys',
    link: '#',
  },
];

export const Certificates = () => {
  return (
    <section id="certificates" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Certificates & <span className="text-gradient">Credentials</span>
        </h2>
        <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
          Professional certifications demonstrating expertise in AI, ML, and Python development
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="glass rounded-xl p-6 hover-scale group relative overflow-hidden"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Animated gradient border on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-success/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-primary hover:bg-primary/10"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </a>
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {cert.name}
              </h3>
              
              <div className="flex items-center gap-2 text-foreground-secondary text-sm">
                <span className="font-medium">{cert.issuer}</span>
                <ExternalLink className="h-3 w-3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
