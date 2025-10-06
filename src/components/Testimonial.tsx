import { Quote, ExternalLink } from 'lucide-react';

export const Testimonial = () => {
  return (
    <section className="section-container">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-foreground">What People Say</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-success mx-auto rounded-full" />
        </div>

        {/* Testimonial Card */}
        <div className="glass p-8 md:p-12 rounded-2xl relative">
          {/* Quote Icon */}
          <div className="absolute top-6 left-6 text-primary/20">
            <Quote className="h-12 w-12" />
          </div>

          <div className="relative z-10 space-y-6">
            {/* Testimonial Text */}
            <p className="text-lg text-foreground-secondary leading-relaxed italic">
              "I had the pleasure of teaching Yash during his BTech program. I was impressed by 
              Yash's <span className="text-primary font-semibold not-italic">exceptional problem-solving skills</span>, 
              his passion for learning, and his proficiency in programming and team collaboration. 
              Throughout our time together, Yash demonstrated a remarkable ability to learn and build 
              high-quality projects. His dedication, enthusiasm, and positive attitude made him a valuable 
              asset to our class. I strongly recommend Yash for any future opportunities. He possesses a 
              unique combination of skills, intelligence, and character that will undoubtedly serve him 
              well in his academic and professional pursuits."
            </p>

            {/* Professor Info */}
            <div className="flex items-start gap-6 pt-6 border-t border-border/30">
              {/* Avatar Placeholder */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-success flex items-center justify-center text-2xl font-bold text-primary-foreground flex-shrink-0">
                SS
              </div>

              {/* Details */}
              <div className="flex-1">
                <h4 className="text-xl font-display font-bold text-foreground mb-1">
                  Prof. Shilpa Sharma
                </h4>
                <p className="text-foreground-secondary mb-2">
                  Assistant Professor | MCA/CS Department | MGI, Ujjain
                </p>
                <a
                  href="https://www.linkedin.com/in/shilpa-sharma-75b24879"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors text-sm"
                >
                  <ExternalLink className="h-4 w-4" />
                  View LinkedIn Profile
                </a>
                <p className="text-xs text-foreground-secondary mt-2">
                  Recommendation Date: February 13, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
