import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'AI Intern',
    company: 'Scholar Rank AI',
    period: 'June 2025 - August 2025',
    location: 'Hybrid',
    achievements: [
      'Engineered and deployed AI-powered pipelines using Python to enhance document understanding and generation capabilities',
      'Optimized transformer models using Hugging Face, improving data relevance and model performance for production use cases',
      'Created an end-to-end MCQ generator using T5-Flan model, spanning from model integration to complete user interface design',
    ],
  },
  {
    title: 'AI Intern',
    company: 'Infosys Springboard',
    period: '2024',
    location: 'Remote',
    link: '#',
    achievements: [
      'Developed CNN-based image classification models for Iris Tumor Detection, achieving ~95% accuracy on medical datasets',
      'Boosted model performance and inference accuracy by 40% through enhanced image preprocessing and data augmentation techniques',
      'Collaborated with a 4-member team to present findings and submit internal technical documentation for evaluation',
    ],
  },
  {
    title: 'Contributor (Open Source)',
    company: 'GirlScript Summer of Code (GSSoC)',
    period: 'October 2024 - November 2024',
    location: 'Remote',
    achievements: [
      'Submitted over 10 pull requests across 3+ repositories involving bug fixes, feature additions, and comprehensive documentation',
      'Collaborated with international development teams using GitHub, improving open-source community engagement and code quality standards',
    ],
  },
  {
    title: 'AI Intern - Machine Learning',
    company: 'Vaishnav Technologies',
    period: 'February 2025 - April 2025',
    location: 'Remote',
    achievements: [
      'Developed 2+ machine learning models on structured datasets, improving classification accuracy by 18-25% via hyperparameter tuning',
      'Automated data preprocessing pipelines using Pandas and NumPy, reducing preprocessing time by 30%',
      'Delivered weekly model evaluations and supported 2 internal proof-of-concepts under client deployment review',
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-foreground">Where I've Made Impact</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-success mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className="timeline-dot" />
                </div>

                {/* Spacer for alignment */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content Card */}
                <div className="md:w-1/2 ml-8 md:ml-0">
                  <div className="glass p-6 rounded-2xl hover-scale">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-display font-bold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                          <Briefcase className="h-4 w-4" />
                          <span>{exp.company}</span>
                          {exp.link && (
                            <a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-primary-glow"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-foreground-secondary mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-foreground-secondary text-sm leading-relaxed flex gap-2"
                        >
                          <span className="text-primary mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
