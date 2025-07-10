import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with best practices and modern patterns.'
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Creating beautiful, intuitive user interfaces that enhance user experience.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Building fast, optimized applications with attention to detail and quality.'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
              About <span className="bg-gradient-to-r from-gradientFrom to-gradientTo bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 font-sans max-w-3xl mx-auto px-4">
              I'm a passionate developer with 5+ years of experience creating digital solutions
              that combine beautiful design with robust functionality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                My journey in web development started with a curiosity about how things work on the internet.
                Over the years, I've evolved from writing simple HTML pages to building complex, scalable applications
                using modern frameworks and technologies.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                I believe in the power of clean code, thoughtful design, and continuous learning.
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-slate-700 rounded-full text-xs sm:text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-1 max-w-sm mx-auto">
                <img
                  src="/about.png"
                  alt="About Me"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm sm:text-base text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;