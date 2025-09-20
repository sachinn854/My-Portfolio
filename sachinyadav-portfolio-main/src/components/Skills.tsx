
import React from 'react';
import { Code, Database, BarChart3, Brain, GitBranch, Cpu, Zap, Target } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Skills = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [skillsRef, skillsVisible] = useScrollAnimation();
  const [learningRef, learningVisible] = useScrollAnimation();

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "C++", "Python"],
      color: "purple",
      description: "Strong foundation in core programming"
    },
    {
      title: "Data Science Stack",
      icon: BarChart3,
      skills: ["NumPy", "Pandas", "Seaborn", "Matplotlib"],
      color: "orange",
      description: "Data manipulation and visualization"
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: ["Scikit-learn", "Data Analysis", "Statistical Modeling"],
      color: "purple",
      description: "Building intelligent systems"
    },
    {
      title: "Core Concepts",
      icon: Cpu,
      skills: ["Data Structures", "Algorithms", "OOP", "Problem Solving"],
      color: "orange",
      description: "Computer science fundamentals"
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
          className={`text-center mb-20 transition-all duration-1000 ${
            titleVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full shadow-sm mb-6 hover:glass-card-elevated transition-all duration-300">
            <Zap className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-white/90 tracking-wide">EXPERTISE</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            My Technical 
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent"> Arsenal</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I work with to bring ideas to life through data and code.
          </p>
        </div>
        
        <div 
          ref={skillsRef} 
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transition-all duration-1000 ease-out ${
            skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group hover-lift transition-all duration-500 h-full"
            >
              <div className={`glass-card-elevated rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden border-t-4 ${
                category.color === 'purple' ? 'border-purple-500/50' : 'border-orange-500/50'
              } hover:glass-card group-hover:scale-[1.02]`}>
                {/* Enhanced glow effect on hover */}
                <div className={`absolute inset-0 rounded-3xl transition-all duration-500 opacity-0 group-hover:opacity-100 ${
                  category.color === 'purple' 
                    ? 'bg-purple-500/5 shadow-[0_0_30px_rgba(147,51,234,0.3)]' 
                    : 'bg-orange-500/5 shadow-[0_0_30px_rgba(249,115,22,0.3)]'
                }`}></div>
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-6 backdrop-blur-sm transition-all duration-300 ${
                    category.color === 'purple' 
                      ? 'bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 group-hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]' 
                      : 'bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]'
                  } group-hover:scale-110`}>
                    <category.icon className={`w-10 h-10 transition-all duration-300 ${
                      category.color === 'purple' ? 'text-purple-400 group-hover:text-purple-300' : 'text-orange-400 group-hover:text-orange-300'
                    }`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">{category.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">{category.description}</p>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-3 group/skill">
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          category.color === 'purple' 
                            ? 'bg-purple-400 group-hover/skill:scale-150 group-hover/skill:shadow-purple-400/50 group-hover/skill:shadow-lg group-hover:shadow-[0_0_8px_rgba(147,51,234,0.6)]' 
                            : 'bg-orange-400 group-hover/skill:scale-150 group-hover/skill:shadow-orange-400/50 group-hover/skill:shadow-lg group-hover:shadow-[0_0_8px_rgba(249,115,22,0.6)]'
                        }`}></div>
                        <span className="text-gray-300 font-medium group-hover/skill:text-white group-hover:text-white transition-colors">{skill}</span>
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
          className={`glass-card-elevated rounded-3xl p-12 shadow-2xl transition-all duration-1000 relative overflow-hidden group hover:glass-card ${
            learningVisible ? 'animate-scale-up' : 'opacity-0 scale-95'
          }`}
        >
          {/* Enhanced glow effect for learning section */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_40px_rgba(147,51,234,0.2)]"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full mb-6 hover:glass-card-elevated transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                <Target className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-white/90 tracking-wide">Current Learning Journey</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-white transition-colors">Expanding My Horizons</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group/item">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-purple-500/30 group-hover/item:scale-110 transition-all duration-300 group-hover/item:shadow-[0_0_25px_rgba(147,51,234,0.4)]">
                  <Brain className="w-10 h-10 text-purple-400 group-hover/item:text-purple-300 transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover/item:text-white transition-colors">Machine Learning</h4>
                <p className="text-gray-400 leading-relaxed group-hover/item:text-gray-300 transition-colors">Deep diving into ML algorithms, neural networks, and model optimization techniques</p>
              </div>
              
              <div className="text-center group/item">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-orange-500/30 group-hover/item:scale-110 transition-all duration-300 group-hover/item:shadow-[0_0_25px_rgba(249,115,22,0.4)]">
                  <Database className="w-10 h-10 text-orange-400 group-hover/item:text-orange-300 transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover/item:text-white transition-colors">Data Analytics</h4>
                <p className="text-gray-400 leading-relaxed group-hover/item:text-gray-300 transition-colors">Advanced data analysis, statistical modeling, and big data processing</p>
              </div>
              
              <div className="text-center group/item">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-blue-500/30 group-hover/item:scale-110 transition-all duration-300 group-hover/item:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                  <Code className="w-10 h-10 text-blue-400 group-hover/item:text-blue-300 transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover/item:text-white transition-colors">Problem Solving</h4>
                <p className="text-gray-400 leading-relaxed group-hover/item:text-gray-300 transition-colors">Continuous practice on competitive programming and algorithmic challenges</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
