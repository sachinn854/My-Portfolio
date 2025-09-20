
import React from 'react';
import { GraduationCap, MapPin, Calendar, Target, Code, Award, Trophy, BookOpen } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-[hsl(var(--dark-bg-primary))] via-[hsl(var(--dark-bg-secondary))] to-[hsl(var(--dark-bg-tertiary))] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full blur-3xl opacity-60"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            titleVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full shadow-sm mb-6 hover:glass-card-elevated transition-all duration-300">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white/90 tracking-wide">ABOUT ME</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Designing Solutions, 
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent"> Not Just Code</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-orange-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div 
            ref={contentRef}
            className={`space-y-8 transition-all duration-1000 ${
              contentVisible ? 'animate-slide-in-left' : 'opacity-0'
            }`}
          >
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                I'm a passionate B.Tech Computer Science student at IIITDM Kancheepuram, currently in my journey towards becoming a skilled data scientist and machine learning engineer.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                With a strong foundation in programming and a curiosity for data-driven insights, I'm constantly exploring new ways to solve real-world problems through technology. My focus lies in transforming raw data into meaningful stories and building intelligent systems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="group glass-card rounded-3xl p-8 shadow-lg hover:glass-card-elevated hover-lift transition-all duration-500 border-l-4 border-purple-500/50">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25 hover-glow">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-xl mb-1">Education</h4>
                    <p className="text-gray-300 text-lg">B.Tech CSE, IIITDM Kancheepuram</p>
                    <p className="text-sm text-purple-400 font-medium mt-2 px-3 py-1 bg-purple-500/20 rounded-full inline-block">Expected 2027</p>
                  </div>
                </div>
              </div>
              
              <div className="group glass-card rounded-3xl p-8 shadow-lg hover:glass-card-elevated hover-lift transition-all duration-500 border-l-4 border-orange-500/50">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/25 hover-glow">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-xl mb-1">Focus Areas</h4>
                    <p className="text-gray-300 text-lg">Data Analytics & Machine Learning</p>
                    <p className="text-sm text-orange-400 font-medium mt-2 px-3 py-1 bg-orange-500/20 rounded-full inline-block">Future ML Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            ref={statsRef} 
            className={`grid grid-cols-2 gap-8 transition-all duration-1000 ease-out ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="glass-card-elevated rounded-3xl p-8 text-white text-center hover-lift hover-glow transition-all duration-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <Code className="w-7 h-7 text-purple-400" />
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">300+</div>
                <div className="font-semibold text-white/90 mb-1">LeetCode Problems</div>
                <div className="text-sm text-gray-400">Solved & Learning</div>
              </div>
            </div>
            
            <div className="glass-card-elevated rounded-3xl p-8 text-white text-center hover-lift hover-glow transition-all duration-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500/30 to-orange-600/30 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <Trophy className="w-7 h-7 text-orange-400" />
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">5+</div>
                <div className="font-semibold text-white/90 mb-1">Personal Projects</div>
                <div className="text-sm text-gray-400">Completed</div>
              </div>
            </div>
            
            <div className="glass-card-elevated rounded-3xl p-8 text-white text-center hover-lift hover-glow transition-all duration-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <BookOpen className="w-7 h-7 text-blue-400" />
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">3+</div>
                <div className="font-semibold text-white/90 mb-1">Programming Languages</div>
                <div className="text-sm text-gray-400">Proficient</div>
              </div>
            </div>
            
            <div className="glass-card-elevated rounded-3xl p-8 text-white text-center hover-lift hover-glow transition-all duration-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/30 to-blue-600/30 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <Award className="w-7 h-7 text-emerald-400" />
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">2027</div>
                <div className="font-semibold text-white/90 mb-1">Graduation Goal</div>
                <div className="text-sm text-gray-400">Ready to Impact</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
