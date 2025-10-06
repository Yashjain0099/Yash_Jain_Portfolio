import { GraduationCap, Award, BookOpen } from 'lucide-react';

const educationData = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "RGPV University",
    location: "Bhopal, MP",
    date: "Expected July 2026",
    grade: "6.98/10.0",
    icon: GraduationCap,
    highlights: [
      "Core CS fundamentals & advanced topics",
      "AI/ML specialization courses",
      "Software engineering practices",
      "System design & architecture"
    ]
  },
  {
    degree: "12th Standard (P.C.M.)",
    field: "Physics, Chemistry, Mathematics",
    institution: "The Cambridge High Secondary School",
    location: "Ujjain, MP",
    date: "July 2022",
    grade: "80.6%",
    icon: Award,
    highlights: [
      "Strong foundation in mathematics",
      "Physics & analytical thinking",
      "Problem-solving skills development"
    ]
  },
  {
    degree: "10th Standard",
    field: "Secondary Education",
    institution: "The Cambridge High Secondary School",
    location: "Ujjain, MP",
    date: "July 2020",
    grade: "85.6%",
    icon: BookOpen,
    highlights: [
      "Academic excellence",
      "Leadership development",
      "Extracurricular participation"
    ]
  }
];

export const Education = () => {
  return (
    <section id="education" className="section-container">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-foreground">Academic Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-success mx-auto rounded-full" />
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-accent-warm to-success" />

          {/* Education Entries */}
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full glass border-2 border-primary items-center justify-center z-10">
                  <edu.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass p-6 md:p-8 rounded-2xl hover-scale group">
                    {/* Mobile Icon */}
                    <div className="md:hidden w-12 h-12 rounded-full glass border-2 border-primary flex items-center justify-center mb-4 mx-auto">
                      <edu.icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Degree & Field */}
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-primary font-semibold mb-4">
                      {edu.field}
                    </p>

                    {/* Institution Details */}
                    <div className="space-y-2 mb-4">
                      <p className="text-foreground-secondary font-medium">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-4 justify-center md:justify-start flex-wrap">
                        <span className="text-sm text-foreground-secondary">
                          📍 {edu.location}
                        </span>
                        <span className="text-sm text-foreground-secondary">
                          📅 {edu.date}
                        </span>
                        <span className="text-sm font-bold text-gradient">
                          🎯 {edu.grade}
                        </span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className={`mt-6 space-y-2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                      {edu.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-foreground-secondary justify-center md:justify-start"
                          style={{ 
                            animationDelay: `${idx * 100}ms`,
                            ...(index % 2 === 0 ? { flexDirection: 'row-reverse' } : {})
                          }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-[calc(50%-3rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
