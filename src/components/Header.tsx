import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, FolderOpen, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProfileInHeader, setShowProfileInHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowProfileInHeader(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { name: 'Home', icon: Home, id: 'home' },
    { name: 'About', icon: User, id: 'about' },
    { name: 'Skills', icon: Code, id: 'skills' },
    { name: 'Projects', icon: FolderOpen, id: 'projects' },
    { name: 'Contact', icon: Mail, id: 'contact' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center justify-center relative w-full">
              {/* Animated profile pic in header */}
              <div className={`absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out ${showProfileInHeader ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-50 -translate-x-6 pointer-events-none'} w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center overflow-hidden border-2 border-white shadow-lg`}>
                <img src="/profile.png" alt="Profile" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className={`text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-500 ease-in-out ${showProfileInHeader ? 'ml-12 sm:ml-16' : ''}`}
                style={{ marginLeft: showProfileInHeader ? undefined : '0', marginRight: showProfileInHeader ? 'auto' : 'auto' }}>
                Pritam
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-md"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden fixed top-16 right-0 h-[calc(100vh-4rem)] w-80 max-w-[85vw] bg-gradient-to-br from-white via-blue-50 to-purple-50 shadow-2xl transform transition-all duration-500 z-50 rounded-b-3xl pb-4 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 pt-20">
          {/* Menu Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 overflow-hidden">
              <img src="/profile.png" alt="Profile" className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800">Navigation</h3>
            <p className="text-sm text-slate-600">Choose a section to explore</p>
          </div>

          {/* Menu Items */}
          <div className="space-y-3">
            {menuItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="w-full group flex items-center space-x-4 p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/20 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:border-blue-300/30 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={20} className="text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                    {item.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {item.name === 'Home' && 'Back to top'}
                    {item.name === 'About' && 'Learn about me'}
                    {item.name === 'Skills' && 'My expertise'}
                    {item.name === 'Projects' && 'View my work'}
                    {item.name === 'Contact' && 'Get in touch'}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Menu Footer */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <div className="text-center">
              <p className="text-xs text-slate-500 mb-2">Portfolio by Pritam</p>
              <div className="flex justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;