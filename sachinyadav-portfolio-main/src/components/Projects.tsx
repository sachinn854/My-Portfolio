import React from 'react';
import { ExternalLink, Github, BarChart3, Building2, Brain, Cog, Calendar, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const Projects = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [featuredRef, featuredVisibleItems] = useStaggeredAnimation(2, 150);
  const [otherRef, otherVisibleItems] = useStaggeredAnimation(2, 120);
  const [ctaRef, ctaVisible] = useScrollAnimation();

  const projects = [
    {
  title: "Product Demand Forecasting",
  description: "Machine Learning project to forecast product demand using time series analysis, feature engineering, and regression models.",
  tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
  icon: BarChart3,
  color: "purple",
  status: "Completed",
  featured: true,
  githubUrl: "https://github.com/sachinn854/Product-Demand-Forecasting.git",
  demoUrl: "https://appuct-demand-forecasting-prediction.streamlit.app/"
}
,
{
  title: "Crypto Price Movement Prediction",
  description: "Machine Learning project to predict cryptocurrency price movements using historical data, technical indicators, and sentiment analysis.",
  tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
  icon: BarChart3,
  color: "sky",
  status: "Completed",
  featured: true,
  githubUrl: "https://github.com/sachinn854/Crypto-Price-Movement-Prediction-.git", // ← change this if repo name differs
  demoUrl: "https://crypto-price-movement-prediction.streamlit.app/"
}
,
  {
      title: "Airbnb-NYC-Listings-Data-Analysis-and-Dashboard",
      description: "Comprehensive analysis of Airbnb listings in New York City, focusing on pricing trends, availability, and customer reviews.",
      tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      icon: Brain,
      color: "purple",
      status: "Completed",
      featured: false,
      githubUrl: "https://github.com/sachinn854/Airbnb-NYC-Listings-Data-Analysis-and-Dashboard.git",
      demoUrl: "https://airbnb-nyc-listings-data-analysis-and-dashboard.streamlit.app/"
    },
    {
      title: "Banking System in C++",
      description: "Robust object-oriented banking system simulation implementing core banking operations, account management, and transaction processing.",
      tools: ["C++", "OOP", "File Handling"],
      icon: Building2,
      color: "orange",
      status: "Completed",
      featured: false,
      githubUrl: "https://github.com/sachinn854/banking-system-cpp",
      demoUrl: ""
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const handleViewAllProjects = () => {
    window.open('https://github.com/sachinn854', '_blank', 'noopener,noreferrer');
  };

  const handleProjectLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-[hsl(var(--dark-bg-primary))] via-[hsl(var(--dark-bg-secondary))] to-[hsl(var(--dark-bg-tertiary))] relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-orange-500/10 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-full blur-3xl opacity-60"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div 
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-800 ease-out ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full shadow-sm mb-6">
            <Star className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-white/90">PORTFOLIO</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Featured 
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent"> Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my work in data science, machine learning, and software development.
          </p>
        </div>
        
        {/* Featured Projects */}
        <div 
          ref={featuredRef}
          className="grid lg:grid-cols-2 gap-10 mb-16"
        >
          {featuredProjects.map((project, index) => (
            <div 
              key={index} 
              className={`group transition-all duration-800 ease-out ${
                featuredVisibleItems.has(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="glass-card-elevated rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full hover-glow">
                <div className="flex items-start justify-between mb-8">
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center bg-gradient-to-br ${
                    project.color === 'purple' 
                      ? 'from-purple-500 to-purple-600 shadow-purple-500/25' 
                      : 'from-orange-500 to-orange-600 shadow-orange-500/25'
                  } shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-10 h-10 text-white" />
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    project.status === 'Completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    project.status === 'Ongoing' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">{project.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tools.map((tool, toolIndex) => (
                    <span key={toolIndex} className="px-4 py-2 bg-white/10 text-gray-300 rounded-xl text-sm font-medium hover:bg-white/20 transition-colors border border-white/10">
                      {tool}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    onClick={() => handleProjectLink(project.githubUrl)}
                    className="flex items-center space-x-2 hover:bg-white/10 hover:border-white/30 border-2 border-white/20 text-white px-6 py-3 bg-transparent transition-all duration-300 hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </Button>
                  <Button 
                    onClick={() => handleProjectLink(project.demoUrl)}
                    className={`flex items-center space-x-2 bg-gradient-to-r ${
                      project.color === 'purple' 
                        ? 'from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800' 
                        : 'from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800'
                    } text-white px-6 py-3 shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div 
          ref={otherRef}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <div 
                key={index} 
                className={`group transition-all duration-700 ease-out ${
                  otherVisibleItems.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full hover-lift">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${
                      project.color === 'purple' ? 'from-purple-500/20 to-purple-600/20 border border-purple-500/30' : 'from-orange-500/20 to-orange-600/20 border border-orange-500/30'
                    }`}>
                      <project.icon className={`w-8 h-8 ${
                        project.color === 'purple' ? 'text-purple-400' : 'text-orange-400'
                      }`} />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      project.status === 'Ongoing' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tools.map((tool, toolIndex) => (
                      <span key={toolIndex} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm font-medium border border-white/10">
                        {tool}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleProjectLink(project.githubUrl)}
                      className="flex items-center space-x-2 hover:bg-white/10 hover:border-white/30 border border-white/20 text-white bg-transparent transition-all duration-300 hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </Button>
                    <Button 
                      size="sm"
                      onClick={() => handleProjectLink(project.demoUrl)}
                      className={`flex items-center space-x-2 bg-gradient-to-r ${
                        project.color === 'purple' 
                          ? 'from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800' 
                          : 'from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800'
                      } text-white transition-all duration-300 hover:scale-105`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div 
          ref={ctaRef}
          className={`text-center transition-all duration-800 ease-out ${
            ctaVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <Button 
            onClick={handleViewAllProjects}
            className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white px-10 py-6 text-lg shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
          >
            View All Projects on GitHub
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
