import React from 'react';
import { ExternalLink, Github, BarChart3, Code, Brain, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Projects = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [projectsRef, projectsVisible] = useScrollAnimation();
  const [ctaRef, ctaVisible] = useScrollAnimation();

  const projects = [
    {
      title: "AutoDoc Extractor",
      description: "Deep Learning Based Bill Processing Platform. Fine-tuned OCR models for structured information extraction from noisy receipts.",
      tools: ["PyTorch", "FastAPI", "Docker", "Python", "Computer Vision"],
      icon: Brain,
      color: "purple",
      status: "Completed",
      featured: true,
      githubUrl: "https://github.com/sachinn854/AutoDoc-Extractor",
      demoUrl: ""
    },
    {
      title: "ContextTutor",
      description: "AI YouTube Learning Assistant (RAG-based). Built a pipeline for video transcripts with semantic search using FAISS.",
      tools: ["LangChain", "Groq LLM", "FAISS", "Python", "Vector DB"],
      icon: Code,
      color: "orange",
      status: "Completed",
      featured: true,
      githubUrl: "https://github.com/sachinn854/ContextTutor",
      demoUrl: ""
    },
    {
      title: "Product Demand Forecasting",
      description: "Machine Learning architecture to forecast product demand using time series analysis and regression stacking.",
      tools: ["Scikit-learn", "Pandas", "Matplotlib", "Python"],
      icon: BarChart3,
      color: "blue",
      status: "Completed",
      featured: false,
      githubUrl: "https://github.com/sachinn854/Product-Demand-Forecasting.git",
      demoUrl: "https://appuct-demand-forecasting-prediction.streamlit.app/"
    },
    {
      title: "Crypto Movement Prediction",
      description: "Dual-model system (regression + classification) to predict returns and market direction with 87.1% accuracy.",
      tools: ["XGBoost", "Random Forest", "Python", "Streamlit"],
      icon: BarChart3,
      color: "emerald",
      status: "Completed",
      featured: false,
      githubUrl: "https://github.com/sachinn854/Crypto-Price-Movement-Prediction-.git",
      demoUrl: "https://crypto-price-movement-prediction.streamlit.app/"
    }
  ];

  const handleViewAllProjects = () => {
    window.open('https://github.com/sachinn854', '_blank', 'noopener,noreferrer');
  };

  const handleProjectLink = (url: string) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-[hsl(var(--dark-bg-primary))] via-[hsl(var(--dark-bg-secondary))] to-[hsl(var(--dark-bg-tertiary))] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-orange-500/10 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-full blur-3xl opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-800 ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full shadow-sm mb-6 border border-white/10">
            <Star className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold text-white/90 uppercase tracking-widest">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Featured
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent"> Projects</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
            Architecting intelligent solutions through specialized neural architectures and scalable systems.
          </p>
        </div>

        {/* Unified Projects Grid */}
        <div
          ref={projectsRef}
          className={`grid md:grid-cols-2 gap-10 transition-all duration-1000 ease-out ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative h-full"
            >
              <div className="h-full glass-card-elevated rounded-[2.5rem] p-8 transition-all duration-500 hover:bg-white/5 border border-white/5 hover:border-white/20 flex flex-col hover:-translate-y-2 relative overflow-hidden">
                {/* Dynamic Accent Glow */}
                <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 ${project.color === 'purple' ? 'bg-purple-500' :
                  project.color === 'orange' ? 'bg-orange-500' :
                    project.color === 'blue' ? 'bg-blue-500' :
                      'bg-emerald-500'
                  }`}></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br border shadow-xl group-hover:scale-110 transition-all duration-500 ${project.color === 'purple' ? 'from-purple-500/20 to-purple-600/20 border-purple-500/20' :
                      project.color === 'orange' ? 'from-orange-500/20 to-orange-600/20 border-orange-500/20' :
                        project.color === 'blue' ? 'from-blue-500/20 to-blue-600/20 border-blue-500/20' :
                          'from-emerald-500/20 to-emerald-600/20 border-emerald-500/20'
                      }`}>
                      <project.icon className={`w-7 h-7 ${project.color === 'purple' ? 'text-purple-400' :
                        project.color === 'orange' ? 'text-orange-400' :
                          project.color === 'blue' ? 'text-blue-400' :
                            'text-emerald-400'
                        }`} />
                    </div>
                    {project.featured && (
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-purple-500/10 rounded-full border border-purple-500/20">
                        <Sparkles className="w-3 h-3 text-purple-400" />
                        <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">Featured</span>
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-purple-400 transition-colors">{project.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8 uppercase">
                      {project.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-3 py-1 bg-white/5 text-gray-400 text-[10px] font-bold tracking-widest rounded-md border border-white/5 group-hover:border-purple-500/30 transition-all duration-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 mt-auto flex items-center justify-between border-t border-white/5">
                    <div className="flex items-center space-x-3">
                      {project.githubUrl && (
                        <button
                          onClick={() => handleProjectLink(project.githubUrl)}
                          className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 hover:text-white transition-all border border-white/5 hover:border-white/20 shadow-lg"
                        >
                          <Github className="w-5 h-5" />
                        </button>
                      )}
                      {project.demoUrl && (
                        <button
                          onClick={() => handleProjectLink(project.demoUrl)}
                          className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 hover:text-white transition-all border border-white/5 hover:border-white/20 shadow-lg"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${project.color === 'purple' ? 'text-purple-400 border-purple-500/20 bg-purple-500/5' :
                      project.color === 'orange' ? 'text-orange-400 border-orange-500/20 bg-orange-500/5' :
                        project.color === 'blue' ? 'text-blue-400 border-blue-500/20 bg-blue-500/5' :
                          'text-emerald-400 border-emerald-500/20 bg-emerald-500/5'
                      }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          ref={ctaRef}
          className={`text-center mt-20 transition-all duration-800 ease-out ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <Button
            onClick={handleViewAllProjects}
            className="group relative px-12 py-8 bg-transparent overflow-hidden rounded-full border border-white/10 hover:border-purple-500/50 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-center text-white font-black uppercase tracking-widest text-sm">
              Explore All Projects
              <ExternalLink className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
