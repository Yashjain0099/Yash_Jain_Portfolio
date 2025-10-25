import { useState } from 'react';
import { Github, ExternalLink, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import projectSLM from '@/assets/project-slm.png';
import projectTokenTrim from '@/assets/project-tokentrim.png';
import projectLegalLens from '@/assets/project-legallens.png';
import projectIris from '@/assets/project-iris.png';
import projectNN from '@/assets/project-nn.png';
import projectYashLib from '@/assets/project-yashlib.png';

const projects = [
  {
    title: 'Small Language Model (SLM) from Scratch',
    description: 'Implemented a Transformer-based Small Language Model from scratch in PyTorch, inspired by GPT architectures for autoregressive text generation',
    tags: ['Python', 'PyTorch', 'Transformers', 'GPT-2', 'NLP'],
    categories: ['llm', 'nlp'],
    github: 'https://github.com/Yashjain0099/Small_Language_Model_from_Scratch',
    demo: null,
    featured: true,
    image: projectSLM,
  },
  {
    title: 'TokenTrim — Intelligent Token Optimizer',
    description: 'Smart token optimization tool that reduces API costs by intelligently trimming unnecessary tokens while preserving context and meaning',
    tags: ['Python', 'NLP', 'LLM', 'API', 'Optimization'],
    categories: ['llm', 'nlp'],
    github: 'https://github.com/Yashjain0099/TokenTrim',
    demo: 'https://huggingface.co/spaces/Yashuu/TokenTrim',
    featured: true,
    image: projectTokenTrim,
  },
  {
    title: 'Legal Lens — AI-Powered Contract Analysis',
    description: 'Web-based AI tool to automate legal contract review with color-coded risk classification and intelligent clause extraction',
    tags: ['Python', 'Django', 'NLP', 'JavaScript', 'Bootstrap'],
    categories: ['nlp', 'web'],
    github: 'https://github.com/Yashjain0099/LegalLens',
    demo: null,
    featured: true,
    image: projectLegalLens,
  },
  {
    title: 'Iris Tumor Detection using Deep Learning',
    description: 'CNN-based deep learning model for classifying iris images as tumor-affected or healthy with high precision',
    tags: ['Python', 'CNN', 'TensorFlow', 'Keras', 'Computer Vision','flask'],
    categories: ['cv'],
    github: 'https://github.com/Yashjain0099/Iris_Tumor_Detection',
    demo: 'https://huggingface.co/spaces/Yashuu/I-Tumor-Scanner',
    featured: true,
    image: projectIris,
  },
  {
    title: 'Neural Network Foundation',
    description: 'Implementation of fundamental neural network architectures including Perceptron and Multi-Layer Perceptron from scratch for deep learning education',
    tags: ['Python', 'NumPy', 'Neural Networks', 'Deep Learning'],
    categories: ['llm', 'nlp'],
    github: 'https://github.com/Yashjain0099/NN_Foundation/blob/main/notebooks/The_Perceptron_%26_1-Hidden-Layer_MLP.ipynb',
    demo: null,
    featured: false,
    image: projectNN,
  },
  {
    title: 'YashLib — Custom C Header file or Library',
    description: 'Personal library of C utilities and data structures including array manipulation , string manipulation, Stack, Queue, functions for efficient programming',
    tags: ['C', 'Library', 'Data Structures', 'Utilities'],
    categories: ['C lang'],
    github: 'https://github.com/Yashjain0099/YashLib',
    demo: null,
    featured: false,
    image: projectYashLib,
  },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'LLM/NLP', value: 'llm' },
  { label: 'Computer Vision', value: 'cv' },
  { label: 'Web Apps', value: 'web' },
  { label: 'C Programming', value: 'C lang' },
];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.categories.includes(activeFilter);
  });

  return (
    <section id="projects" className="section-container bg-background-secondary/30">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-foreground">Building Intelligence, One Model at a Time</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-success mx-auto rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              variant={activeFilter === filter.value ? 'default' : 'outline'}
              className={`rounded-full ${
                activeFilter === filter.value
                  ? 'bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)]'
                  : 'border-primary/30 text-foreground-secondary hover:text-primary hover:border-primary'
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="project-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Header with Badge */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-success/10 overflow-hidden">
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1 rounded-full bg-accent-warm text-accent-warm-foreground text-xs font-bold">
                    <Sparkles className="h-3 w-3" />
                    Featured
                  </div>
                )}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground-secondary leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs font-mono rounded bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.demo ? (
                    <Button
                      size="sm"
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary-glow"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      className="flex-1"
                      disabled
                    >
                      Demo Soon
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};