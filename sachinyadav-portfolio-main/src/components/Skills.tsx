
import React from 'react';
import { Code, Database, BarChart3, Brain, GitBranch, Cpu, Zap, Target } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Skills = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [skillsRef, skillsVisible] = useScrollAnimation();
  const [learningRef, learningVisible] = useScrollAnimation();

  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Statistical Modeling"],
      color: "purple",
      accent: "bg-purple-500/10 group-hover:bg-purple-500/20",
      iconBg: "from-purple-500/20 to-purple-600/20 border-purple-500/20",
      iconColor: "text-purple-400",
      description: "Building & training deep neural networks"
    },
    {
      title: "GenAI & RAG Stack",
      icon: Zap,
      skills: ["LangChain", "Retrieval Augmented Gen", "FAISS", "Prompt Engineering"],
      color: "orange",
      accent: "bg-orange-500/10 group-hover:bg-orange-500/20",
      iconBg: "from-orange-500/20 to-orange-600/20 border-orange-500/20",
      iconColor: "text-orange-400",
      description: "Developing intelligent LLM applications"
    },
    {
      title: "Backend & Deployment",
      icon: Database,
      skills: ["FastAPI", "Docker", "REST APIs", "SQL"],
      color: "blue",
      accent: "bg-blue-500/10 group-hover:bg-blue-500/20",
      iconBg: "from-blue-500/20 to-blue-600/20 border-blue-500/20",
      iconColor: "text-blue-400",
      description: "Scaling and deploying ML models"
    },
    {
      title: "Core Programming",
      icon: Code,
      skills: ["Python", "C++", "C", "Data Structures"],
      color: "emerald",
      accent: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
      iconBg: "from-emerald-500/20 to-emerald-600/20 border-emerald-500/20",
      iconColor: "text-emerald-400",
      description: "Algorithmic thinking and development"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-[hsl(var(--dark-bg-secondary))] via-[hsl(var(--dark-bg-primary))] to-[hsl(var(--dark-bg-tertiary))] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full blur-3xl opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-1000 ${titleVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full shadow-sm mb-6 hover:glass-card-elevated transition-all duration-300">
            <Zap className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-white/90 tracking-wide">EXPERTISE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Technical
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent"> Expertise</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
            A comprehensive stack of tools and frameworks engineered for high-performance AI and scalable backend systems.
          </p>
        </div>

        <div
          ref={skillsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transition-all duration-1000 ease-out ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group hover-lift transition-all duration-500 h-full"
            >
              <div className="glass-card-elevated rounded-[2rem] p-8 h-full relative overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 group-hover:scale-[1.02]">
                {/* Enhanced glow effect on hover */}
                <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100 ${category.accent}`}></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br border shadow-lg group-hover:scale-110 transition-all duration-500 ${category.iconBg}`}>
                    <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-white transition-colors">{category.title}</h3>
                  <p className="text-gray-400 text-xs mb-6 uppercase font-bold tracking-widest">{category.description}</p>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-3 group/skill">
                        <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${category.color === 'purple' ? 'bg-purple-400 group-hover/skill:bg-purple-300' :
                          category.color === 'orange' ? 'bg-orange-400 group-hover/skill:bg-orange-300' :
                            category.color === 'blue' ? 'bg-blue-400 group-hover/skill:bg-blue-300' :
                              'bg-emerald-400 group-hover/skill:bg-emerald-300'
                          } group-hover/skill:scale-125 group-hover/skill:shadow-[0_0_8px_currentColor]`}></div>
                        <span className="text-gray-300 text-sm font-medium group-hover/skill:text-white transition-colors">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          ref={learningRef}
          className={`glass-card-elevated rounded-3xl p-12 shadow-2xl transition-all duration-1000 relative overflow-hidden group hover:glass-card ${learningVisible ? 'animate-scale-up' : 'opacity-0 scale-95'
            }`}
        >
          {/* Enhanced glow effect for learning section */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_40px_rgba(147,51,234,0.2)]"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-6 py-2 glass-card rounded-full mb-6 border border-white/5">
                <Target className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-bold text-white/70 tracking-widest uppercase">Research Focus</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Continuous Learning</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group/item">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-purple-500/30 group-hover/item:scale-110 transition-all duration-300 group-hover/item:shadow-[0_0_25px_rgba(147,51,234,0.4)]">
                  <Brain className="w-10 h-10 text-purple-400 group-hover/item:text-purple-300 transition-colors" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">Theory</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">Deep-diving into neural architectures and optimization mathematics.</p>
              </div>

              <div className="text-center group/item">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10 group-hover:scale-110 transition-all duration-300">
                  <Database className="w-8 h-8 text-orange-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">Analytics</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">Advanced statistical modeling and large-scale data processing.</p>
              </div>

              <div className="text-center group/item">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10 group-hover:scale-110 transition-all duration-300">
                  <Code className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">Algorithms</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">Optimizing complex systems through advanced algorithmic strategies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
