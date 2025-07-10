import React from 'react';
import { Code2, Database, Palette, Server, Smartphone, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 95 }
      ]
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 }
      ]
    },
    {
      icon: Palette,
      title: 'Design & UX',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Animation', level: 75 }
      ]
    },
    {
      icon: Globe,
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'AWS', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'CI/CD', level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
              My <span className="bg-gradient-to-r from-gradientFrom to-gradientTo bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 font-sans max-w-3xl mx-auto px-4">
              A comprehensive overview of my technical expertise and proficiency levels
              across different technologies and tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {skillCategories.map(({ icon: Icon, title, skills }) => (
              <div key={title} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{title}</h3>
                </div>

                <div className="space-y-4">
                  {skills.map(({ name, level }) => (
                    <div key={name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm sm:text-base text-slate-700 font-medium">{name}</span>
                        <span className="text-slate-500 text-sm">{level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;