import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp, Code2, Zap, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    { label: 'Web Development', href: '#' },
    { label: 'UI/UX Design', href: '#' },
    { label: 'Mobile Apps', href: '#' },
    { label: 'Consulting', href: '#' }
  ];

  const stats = [
    { icon: Code2, value: '50+', label: 'Projects Completed' },
    { icon: Zap, value: '5+', label: 'Years Experience' },
    { icon: Coffee, value: '1000+', label: 'Cups of Coffee' }
  ];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Pritam
                </h3>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-md">
                  Full-stack developer passionate about creating beautiful, functional digital experiences 
                  that make a difference in people's lives.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1">{value}</div>
                    <div className="text-slate-400 text-xs sm:text-sm">{label}</div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-2 transform inline-block text-sm sm:text-base"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-2 transform inline-block text-sm sm:text-base"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Newsletter */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-slate-700">
                <h5 className="text-base sm:text-lg font-semibold mb-2">Stay Updated</h5>
                <p className="text-slate-400 text-xs sm:text-sm mb-4">
                  Get notified about new projects and insights.
                </p>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 text-xs sm:text-sm"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 text-xs sm:text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-slate-400 text-xs sm:text-sm text-center">
                <span>© 2025 Pritam. Made with</span>
                <Heart size={16} className="text-red-400" />
                <span>using React & Tailwind CSS</span>
              </div>

              <div className="flex items-center space-x-6">
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </a>
                <button
                  onClick={scrollToTop}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 transform hover:scale-110"
                  aria-label="Back to top"
                >
                  <ArrowUp size={14} className="sm:size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;