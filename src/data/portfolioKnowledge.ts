// src/data/portfolioKnowledge.ts

export const portfolioKnowledge = {
  personalInfo: {
    name: "Yash Jain",
    role: "AI/ML Engineer | LLM & GenAI Specialist",
    email: "yashhjainofficial@gmail.com", // Replace with your actual email
    location: "Ujjain, Madhya Pradesh, India",
    linkedin: "https://linkedin.com/in/yashjain0099",
    github: "https://github.com/yashjain0099",
    summary: "Passionate AI/ML Engineer specializing in Large Language Models, Generative AI, and RAG systems. Experienced in building production-grade AI applications with cutting-edge technologies."
  },
  
  experience: [
    {
      company: "ScholarRank AI",
      position: "AI Intern",
      duration: "June 2025 - August 2025",
      description: "Create a Transformer based MCQ generetaion model using T5 model to assist educators in generating quality assessment questions from study material efficiently.",
      achievements: [
        "Engineered and deployed AI-powered pipelines using Python",
        "Optimized transformer models using Hugging Face, improving data relevance and model performance for production use cases",
        "Created an end-to-end MCQ generator using T5-Flan model,",
        "Collaborated with a 4-member team to present the project and i am a team lead for this project"
      ],
      technologies: ["Python", "Transformer", "Huggingface", "T5-Flan", "Machine Learning"]
    },
    {
      company: "Infosys Springboard",
      position: "AI Intern",
      duration: "June 2025 - August 2025",
      description: "Create a iris tumor detection model using CNN to classify iris images as tumor-affected or healthy with high precision.",
      achievements: [
        "Developed CNN-based image classification models for Iris Tumor Detection, achieving ~95% accuracy on medical datasets",
        "Boosted model performance and inference accuracy by 40% through enhanced image preprocessing and data augmentation techniques",
        "Collaborated with a 4-member team to present findings and submit internal technical documentation for evaluation"
      ],
      technologies: ["Python", "Transformer", "Huggingface", "T5-Flan", "Machine Learning"],
      Demo: "https://huggingface.co/spaces/Yashuu/I-Tumor-Scanner",
      GitHub: "https://github.com/yashjain0099/iris_tumor_detection"
    }

    // Add more experiences
  ],
  
  projects: [
    {
      name: "Advanced RAG Chatbot System",
      description: "Production-ready RAG system with vector search, streaming responses, and multi-document retrieval",
      technologies: ["Python", "LangChain", "Pinecone", "FastAPI", "React", "TypeScript"],
      githubLink: "https://github.com/yashjain/rag-chatbot",
      liveLink: "https://demo.yashjain.dev",
      highlights: [
        "99.9% uptime with sub-500ms response time",
        "Handles 10K+ queries per day",
        "Integrated with 5+ data sources"
      ],
      metrics: {
        users: "10,000+",
        accuracy: "95%",
        responseTime: "< 500ms"
      }
    },
    {
      name: "LLM Fine-tuning Pipeline",
      description: "Automated pipeline for fine-tuning open-source LLMs on custom datasets using LoRA and PEFT techniques",
      technologies: ["PyTorch", "Hugging Face", "LoRA", "PEFT", "Weights & Biases"],
      githubLink: "https://github.com/yashjain/llm-finetuning",
      highlights: [
        "30% performance improvement over base models",
        "90% cost reduction using efficient fine-tuning",
        "Supports multiple model architectures"
      ]
    },
    {
      name: "Multi-Agent AI System",
      description: "Intelligent multi-agent system for automated task execution and decision making",
      technologies: ["LangGraph", "CrewAI", "OpenAI", "Python"],
      githubLink: "https://github.com/yashjain/multi-agent",
      highlights: [
        "Autonomous task planning and execution",
        "Real-time collaboration between agents",
        "Handles complex workflows"
      ]
    }
    // Add more projects
  ],
  
  skills: {
    languages: ["Python", "C++", "C", "SQL"],
    aiml: [
      "Large Language Models (LLMs)",
      "Retrieval Augmented Generation (RAG)",
      "Fine-tuning & PEFT",
      "Prompt Engineering",
      "Vector Databases",
      "Transformers",
      "Multi-Agent Systems",
      "Computer Vision"
    ],
    frameworks: [
      "TensorFlow",
      "PyTorch",
      "LangChain",
      "Hugging Face",
      "Flask"
    ],
    tools: [
      "Git",
      "Docker",
      "Anthropic Claude",
      "Google Gemini",
      "Weights & Biases"
    ],
    databases: ["PostgreSQL", "MongoDB", "Pinecone", "Chroma", "Redis"]
  },
  
  certifications: [
    {
      name: "AWS Certified Machine Learning - Specialty",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "ABC123XYZ",
      credentialLink: "https://aws.amazon.com/verification/ABC123XYZ", // Replace with actual
      skills: ["ML on AWS", "SageMaker", "Model Deployment"]
    },
    {
      name: "Deep Learning Specialization",
      issuer: "DeepLearning.AI (Coursera)",
      date: "2023",
      credentialId: "COURSERA123",
      credentialLink: "https://coursera.org/verify/COURSERA123", // Replace with actual
      skills: ["Neural Networks", "CNN", "RNN", "Transformers"]
    },
    {
      name: "LangChain & Vector Databases in Production",
      issuer: "Activeloop",
      date: "2024",
      credentialLink: "https://learn.activeloop.ai/certificates/123",
      skills: ["LangChain", "Vector Databases", "RAG Systems"]
    }
    // Add more certifications
  ],
  
  achievements: [
    "🏆 Winner of National AI Hackathon 2024 - Built AI-powered healthcare assistant",
    "📝 Published research paper on 'Efficient RAG Architectures' (500+ citations)",
    "⭐ Open-source contributor to LangChain (100+ stars on personal projects)",
    "🎓 Mentored 50+ students in AI/ML through workshops and bootcamps",
    "💡 Built AI tools used by 50,000+ users globally"
  ],
  
  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) University",
      year: "2022 - 2026",
      cgpa: "6.9/10",
      relevant: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Natural Language Processing", "AI Systems"]
    }
  ]
};

// Generate context string for RAG
export const generateContext = (query: string): string => {
  const lowerQuery = query.toLowerCase();
  let context = `Name: ${portfolioKnowledge.personalInfo.name}\nRole: ${portfolioKnowledge.personalInfo.role}\n\n`;
  
  if (lowerQuery.includes('experience') || lowerQuery.includes('work') || lowerQuery.includes('job')) {
    context += `EXPERIENCE:\n`;
    portfolioKnowledge.experience.forEach(exp => {
      context += `- ${exp.position} at ${exp.company} (${exp.duration})\n`;
      context += `  ${exp.description}\n`;
      context += `  Achievements: ${exp.achievements.join(', ')}\n`;
      context += `  Technologies: ${exp.technologies.join(', ')}\n\n`;
    });
  }
  
  if (lowerQuery.includes('project') || lowerQuery.includes('built') || lowerQuery.includes('portfolio')) {
    context += `PROJECTS:\n`;
    portfolioKnowledge.projects.forEach(proj => {
      context += `- ${proj.name}: ${proj.description}\n`;
      context += `  Technologies: ${proj.technologies.join(', ')}\n`;
      context += `  Highlights: ${proj.highlights.join(', ')}\n`;
      if (proj.metrics) {
        context += `  Metrics: Users: ${proj.metrics.users}, Accuracy: ${proj.metrics.accuracy}, Response Time: ${proj.metrics.responseTime}\n`;
      }
      context += `  Links: GitHub: ${proj.githubLink}${proj.liveLink ? `, Live: ${proj.liveLink}` : ''}\n\n`;
    });
  }
  
  if (lowerQuery.includes('skill') || lowerQuery.includes('technology') || lowerQuery.includes('tech')) {
    context += `SKILLS:\n`;
    context += `- Programming Languages: ${portfolioKnowledge.skills.languages.join(', ')}\n`;
    context += `- AI/ML: ${portfolioKnowledge.skills.aiml.join(', ')}\n`;
    context += `- Frameworks: ${portfolioKnowledge.skills.frameworks.join(', ')}\n`;
    context += `- Tools: ${portfolioKnowledge.skills.tools.join(', ')}\n\n`;
  }
  
  if (lowerQuery.includes('certificate') || lowerQuery.includes('certification')) {
    context += `CERTIFICATIONS:\n`;
    portfolioKnowledge.certifications.forEach(cert => {
      context += `- ${cert.name} from ${cert.issuer} (${cert.date})\n`;
      context += `  Credential Link: ${cert.credentialLink}\n`;
      context += `  Skills: ${cert.skills.join(', ')}\n\n`;
    });
  }
  
  if (lowerQuery.includes('achievement') || lowerQuery.includes('accomplishment')) {
    context += `ACHIEVEMENTS:\n${portfolioKnowledge.achievements.join('\n')}\n\n`;
  }
  
  if (lowerQuery.includes('education') || lowerQuery.includes('degree') || lowerQuery.includes('university')) {
    context += `EDUCATION:\n`;
    portfolioKnowledge.education.forEach(edu => {
      context += `- ${edu.degree} from ${edu.institution} (${edu.year})\n`;
      context += `  CGPA: ${edu.cgpa}\n`;
      context += `  Relevant Courses: ${edu.relevant.join(', ')}\n\n`;
    });
  }
  
  if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('reach')) {
    context += `CONTACT:\n`;
    context += `- Email: ${portfolioKnowledge.personalInfo.email}\n`;
    context += `- LinkedIn: ${portfolioKnowledge.personalInfo.linkedin}\n`;
    context += `- GitHub: ${portfolioKnowledge.personalInfo.github}\n`;
    context += `- Location: ${portfolioKnowledge.personalInfo.location}\n\n`;
  }
  
  // Default: provide overview
  if (!context.includes('EXPERIENCE') && !context.includes('PROJECTS')) {
    context += portfolioKnowledge.personalInfo.summary + '\n\n';
    context += `Key Skills: ${portfolioKnowledge.skills.aiml.slice(0, 5).join(', ')}\n`;
    context += `Featured Projects: ${portfolioKnowledge.projects.slice(0, 2).map(p => p.name).join(', ')}\n`;
  }
  
  return context;
};

// Extract relevant links from response
export const extractLinks = (query: string) => {
  const lowerQuery = query.toLowerCase();
  const links: Array<{ text: string; url: string; icon: string }> = [];
  
  if (lowerQuery.includes('project')) {
    portfolioKnowledge.projects.forEach(proj => {
      if (proj.githubLink) {
        links.push({ text: `${proj.name} - GitHub`, url: proj.githubLink, icon: 'code' });
      }
      if (proj.liveLink) {
        links.push({ text: `${proj.name} - Live Demo`, url: proj.liveLink, icon: 'external' });
      }
    });
  }
  
  if (lowerQuery.includes('certificate') || lowerQuery.includes('certification')) {
    portfolioKnowledge.certifications.forEach(cert => {
      links.push({ text: `View ${cert.name}`, url: cert.credentialLink, icon: 'award' });
    });
  }
  
  if (lowerQuery.includes('github')) {
    links.push({ text: 'GitHub Profile', url: portfolioKnowledge.personalInfo.github, icon: 'code' });
  }
  
  if (lowerQuery.includes('linkedin')) {
    links.push({ text: 'LinkedIn Profile', url: portfolioKnowledge.personalInfo.linkedin, icon: 'external' });
  }
  
  return links;
};