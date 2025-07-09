import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Zap, Shield, Smartphone, Filter, Grid, List } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/projects');
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
      // Fallback to default projects if API fails
      setProjects([
        {
          id: 1,
          title: 'E-Commerce Platform',
          description: 'A full-featured e-commerce platform with React, Node.js, and PostgreSQL.',
          image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
          technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
          category: 'fullstack',
          features: ['Payment Integration', 'Admin Dashboard', 'Real-time Updates', 'Analytics'],
          github: '#',
          demo: '#',
          status: 'completed'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ai', label: 'AI/ML' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getFeatureIcon = (feature: string) => {
    if (feature.includes('Payment') || feature.includes('Stripe')) return Zap;
    if (feature.includes('Security') || feature.includes('Auth')) return Shield;
    if (feature.includes('Mobile') || feature.includes('Responsive')) return Smartphone;
    return Zap;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
              Featured <span className="bg-gradient-to-r from-gradientFrom to-gradientTo bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 font-sans max-w-3xl mx-auto px-4">
              A showcase of my recent work, demonstrating expertise in full-stack development,
              UI/UX design, and modern web technologies.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 bg-slate-100 rounded-full p-1 max-w-full overflow-x-auto">
              {categories.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setFilter(id)}
                  className={`px-3 sm:px-4 py-2 rounded-full font-medium transition-all duration-200 text-sm sm:text-base whitespace-nowrap ${
                    filter === id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-slate-600 text-xs sm:text-sm">
                {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              </span>
              <div className="hidden sm:flex items-center space-x-2 bg-slate-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-white shadow-sm text-blue-600'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'list'
                      ? 'bg-white shadow-sm text-blue-600'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Projects Grid/List */}
          {loading ? (
            <div className="flex justify-center items-center py-16 sm:py-20">
              <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 gap-6 sm:gap-8' : 'space-y-8 sm:space-y-12'}>
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group ${
                  viewMode === 'list'
                    ? `flex flex-col lg:flex-row gap-6 sm:gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`
                    : 'flex flex-col'
                }`}
              >
                {/* Project Image */}
                <div className={`${viewMode === 'list' ? 'lg:w-1/2' : 'w-full'} relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                      {project.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2 sm:space-x-3">
                      <a
                        href={project.github}
                        className="bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/30 transition-all duration-200 hover:scale-110"
                      >
                        <Github size={16} className="sm:size-5" />
                      </a>
                      <a
                        href={project.demo}
                        className="bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/30 transition-all duration-200 hover:scale-110"
                      >
                        <ExternalLink size={16} className="sm:size-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={`${viewMode === 'list' ? 'lg:w-1/2' : 'w-full'} space-y-6 ${viewMode === 'grid' ? 'pt-6' : ''}`}>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-slate-700 rounded-full text-xs sm:text-sm font-medium hover:from-blue-200 hover:to-purple-200 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {project.features.map((feature) => {
                        const Icon = getFeatureIcon(feature);
                        return (
                          <div key={feature} className="flex items-center space-x-2">
                            <Icon size={14} className="text-blue-600 flex-shrink-0" />
                            <span className="text-slate-600 text-xs sm:text-sm">{feature}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all duration-200 hover:shadow-lg transform hover:scale-105 text-sm sm:text-base"
                    >
                      <Github size={16} className="sm:size-5" />
                      <span>View Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 hover:shadow-lg text-sm sm:text-base"
                    >
                      <ExternalLink size={16} className="sm:size-5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;