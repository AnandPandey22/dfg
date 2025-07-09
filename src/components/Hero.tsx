import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download, Play, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-0">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -z-10">
        {/* Floating Orbs */}
        <div className="absolute inset-0">
          <div 
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          />
          <div 
            className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"
            style={{
              transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
            }}
          />
        </div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Section */}
          <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative mb-6">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110">
                <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
                  {/* Profile image with fallback */}
                  <img
                    src="/profile.png"
                    alt="Profile"
                    className="w-28 h-28 object-cover rounded-full"
                    onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement?.insertAdjacentHTML('beforeend', '<span class="text-4xl font-bold text-slate-700">P</span>'); }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
                </div>
              </div>
              
            </div>
          </div>

          {/* Hero Content */}
          <div className={`space-y-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pritam
              </span>
            </h1>
            
            <div className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-4 flex items-center justify-center space-x-2 flex-wrap">
              <Sparkles className="text-yellow-500" size={24} />
              <span className="text-center">Full-Stack Developer & UI/UX Designer</span>
              <Sparkles className="text-yellow-500" size={24} />
            </div>
            
            <p className="text-base sm:text-lg text-slate-500 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
              Crafting exceptional digital experiences with modern technologies.
              Passionate about creating solutions that make a meaningful impact.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button 
              onClick={scrollToProjects}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Play size={20} className="group-hover:scale-110 transition-transform duration-200" />
              <span>View My Work</span>
            </button>
            <a
              href="/cv.pdf"
              download
              className="group border-2 border-slate-300 text-slate-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Download size={20} className="group-hover:scale-110 transition-transform duration-200" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Enhanced Social Links */}
          <div className={`flex justify-center space-x-6 mb-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {[
              { icon: Github, href: 'https://chatsafari.com', label: 'GitHub', color: 'hover:text-gray-900' },
              { icon: Linkedin, href: 'https://chatsafari.com', label: 'LinkedIn', color: 'hover:text-blue-600' },
              { icon: Mail, href: 'mailto:contact@chatsafari.com', label: 'Email', color: 'hover:text-red-500' }
            ].map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                className={`w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 text-slate-600 ${color} group`}
                aria-label={label}
                target="_blank" rel="noopener noreferrer"
              >
                <Icon size={20} className="group-hover:scale-110 transition-transform duration-200" />
              </a>
            ))}
          </div>

          {/* Floating Achievements */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mb-12 sm:mb-16 px-4 transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '5+', label: 'Years Experience' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map(({ number, label }) => (
              <div key={label} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {number}
                </div>
                <div className="text-sm sm:text-base text-slate-600 font-medium">{label}</div>
              </div>
            ))}
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className={`fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-30 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button
              onClick={scrollToAbout}
              className="group bg-white/80 backdrop-blur-sm rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl text-slate-400 hover:text-blue-600 transition-all duration-200 flex flex-col items-center space-y-1 hover:scale-110"
            >
              <span className="text-xs font-medium hidden sm:block">Explore</span>
              <ArrowDown size={20} className="sm:size-6 group-hover:scale-110 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;