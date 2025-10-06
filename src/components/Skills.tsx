import { Brain, Code, Wrench, Database } from 'lucide-react';

const skillCategories = [
  {
    title: 'Core Strengths',
    icon: Brain,
    highlight: true,
    skills: ['Python', 'PyTorch', 'Large Language Models (LLMs)', 'Generative AI (GenAI)', 'Small Language Models (SLMs)'],
  },
  {
    title: 'Programming Languages',
    icon: Code,
    highlight: false,
    skills: ['Python', 'C', 'C++'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Database,
    highlight: false,
    skills: ['PyTorch', 'TensorFlow', 'Hugging Face Transformers', 'Scikit-learn', 'Pandas', 'NumPy'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    highlight: false,
    skills: ['Git/GitHub', 'Docker', 'Jupyter', 'N8N (AI Automation)', 'Streamlit', 'Django'],
  },
];

const specializations = [
  'Natural Language Processing (NLP)',
  'Computer Vision (CNN)',
  'Transformer Architectures',
  'Model Fine-tuning',
  'Data Preprocessing Pipelines',
];

export const Skills = () => {
  return (
    <section id="skills" className="section-container bg-background-secondary/30">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-foreground">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-success mx-auto rounded-full" />
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`${category.highlight ? 'skill-card-highlight' : 'skill-card'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${category.highlight ? 'bg-primary/20' : 'bg-card-glass'}`}>
                  <category.icon className={`h-6 w-6 ${category.highlight ? 'text-primary' : 'text-foreground-secondary'}`} />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Specializations */}
        <div className="glass p-8 rounded-2xl">
          <h3 className="text-2xl font-display font-bold text-foreground mb-6 text-center">
            📊 Specializations
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {specializations.map((spec) => (
              <span
                key={spec}
                className="px-4 py-2 rounded-full text-sm font-medium bg-success/10 text-success border border-success/30 hover:bg-success/20 transition-colors"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
