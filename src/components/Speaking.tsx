import { Users, Mic, Award, Presentation } from 'lucide-react';
import audienceImage from '@/assets/speaking-audience.jpg';
import gitImage from '@/assets/speaking-git.jpg';
import aiImage1 from '@/assets/speaking-ai-1.jpg';
import aiImage2 from '@/assets/speaking-ai-2.jpg';
import classroomImage from '@/assets/speaking-classroom.jpg';
import llmImage from '@/assets/speaking-llm.jpg';

const speakingEvents = [
  {
    icon: Presentation,
    title: 'MIT College Seminar',
    topic: 'Navigating Your Tech Career: LinkedIn, Git, and ATS Mastery',
    context: 'Invited speaker for BBA and BCA students at MIT College',
    image: gitImage,
    impact: [
      'Engaged 80+ students in an interactive session',
      'Provided actionable strategies for LinkedIn optimization',
      '92% positive feedback rating',
    ],
  },
  {
    icon: Mic,
    title: 'AI Agents Workshop',
    topic: 'Understanding AI Agents from Concept to Creation',
    context: 'Organized and hosted hands-on technical session for Code Club',
    image: llmImage,
    impact: [
      'Introduced 50+ participants to N8N workflow automation',
      'Built 3 real-world AI agents during live demos',
      'Covered LLM integration and autonomous decision-making',
    ],
  },
  {
    icon: Users,
    title: 'Induction Program Session',
    topic: 'Interactive LLM Fundamentals & Practical AI Applications',
    context: 'AI Lead presentation for incoming students',
    image: aiImage1,
    impact: [
      'Simplified complex concepts for 100+ first-year students',
      'Achieved 95% comprehension rate in post-session quiz',
      'Inspired 40+ students to join AI/ML clubs',
    ],
  },
  {
    icon: Award,
    title: 'Legal Lens Presentation',
    topic: 'Technical Communication: Presenting AI Project to Faculty',
    context: 'Formal project defense with faculty panel evaluation',
    image: classroomImage,
    impact: [
      'Successfully defended complex system architecture',
      'Demonstrated communication under pressure',
      'Received commendation for project originality',
    ],
  },
];

const ambassadorRoles = [
  {
    title: 'Campus Ambassador',
    organization: 'AshnaAI',
    period: 'May 2025 - Present',
    highlights: [
      'Delivered 2+ technical workshops to 250+ students',
      'Developed 4 AI agents, increasing adoption by 60%',
      'Empowered non-technical users with no-code AI tools',
    ],
  },
  {
    title: 'Internshala Student Partner',
    organization: 'Internshala',
    period: 'April 2025 - Present',
    highlights: [
      'Increased student registrations by 30%',
      'Presented 4+ sessions on career preparation',
      'Reached 200+ students with skill development content',
    ],
  },
  {
    title: 'Student Ambassador',
    organization: 'LetsUpgrade',
    period: 'January 2025',
    highlights: [
      'Facilitated workshops for 300+ students',
      'Led to 70+ platform signups',
      'Introduced Python and AI to first-year students',
    ],
  },
];

const achievements = [
  { icon: '🏆', text: 'International Hackathon Selection - Paris Blockchain Week' },
  { icon: '🌐', text: 'Google Developers Group Member' },
  { icon: '☁️', text: 'Google Cloud Skill Boost Member since 2023' },
  { icon: '👥', text: 'Coding Club Lead - Organized hackathons & challenges' },
];

export const Speaking = () => {
  return (
    <section id="speaking" className="section-container">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-foreground">Sharing Knowledge, Building Communities</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-success mx-auto rounded-full" />
        </div>

        {/* Speaking Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {speakingEvents.map((event, index) => (
            <div
              key={index}
              className="glass rounded-2xl hover-scale overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Event Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
              </div>
              
              {/* Event Details */}
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/20">
                    <event.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold text-foreground mb-1">
                      {event.title}
                    </h3>
                    <p className="text-sm text-primary font-semibold mb-2">
                      {event.topic}
                    </p>
                    <p className="text-sm text-foreground-secondary mb-4">
                      {event.context}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {event.impact.map((item, i) => (
                    <div key={i} className="flex gap-2 text-sm text-foreground-secondary">
                      <span className="text-success mt-0.5">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ambassador Roles */}
        <div className="space-y-6">
          <h3 className="text-3xl font-display font-bold text-foreground text-center">
            Leadership & Ambassador Roles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ambassadorRoles.map((role, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl space-y-4"
              >
                <div className="text-center">
                  <h4 className="text-lg font-display font-bold text-primary mb-1">
                    {role.title}
                  </h4>
                  <p className="text-foreground font-semibold mb-1">
                    {role.organization}
                  </p>
                  <p className="text-sm text-foreground-secondary">
                    {role.period}
                  </p>
                </div>
                <ul className="space-y-2">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-foreground-secondary flex gap-2">
                      <span className="text-primary">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="glass p-8 rounded-2xl">
          <h3 className="text-2xl font-display font-bold text-foreground mb-6 text-center">
            Recognition & Milestones
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-card-glass hover:bg-primary/10 transition-colors"
              >
                <span className="text-3xl">{achievement.icon}</span>
                <span className="text-foreground-secondary">{achievement.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
