import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Code2, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTextReveal } from '@/hooks/useScrollAnimation';

const Hero = () => {
  const [titleRef, titleVisible] = useTextReveal();
  const [subtitleRef, subtitleVisible] = useTextReveal();

  // 👉 Change this path to your image path
  const profileImage = "/photo_2025-09-20_14-26-19.jpg"; 
  // (put your image inside /public/images/ folder in Next.js or React project)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-[hsl(var(--dark-bg-primary))] to-[hsl(var(--dark-bg-secondary))]">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating icons */}
      <div className="absolute top-20 left-20 opacity-30 animate-gentle-float">
        <Code2 className="w-6 h-6 text-purple-400" />
      </div>
      <div className="absolute top-32 right-32 opacity-30 animate-gentle-float delay-500">
        <Database className="w-5 h-5 text-orange-400" />
      </div>
      <div className="absolute bottom-32 left-32 opacity-30 animate-gentle-float delay-1000">
        <Sparkles className="w-5 h-5 text-purple-400" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full shadow-xl animate-fade-in">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white/90">Available for opportunities</span>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div 
                ref={titleRef}
                className={`transition-all duration-1000 ${titleVisible ? 'animate-text-reveal' : 'opacity-0'}`}
              >
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                  Hi, I'm{' '}
                  <span className="relative">
                    <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-orange-400 bg-clip-text text-transparent">
                      Sachin
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full transform scale-x-0 animate-[scale-x-100_1.5s_ease-out_0.8s_forwards]"></div>
                  </span>
                </h1>
              </div>
              
              <div 
                ref={subtitleRef}
                className={`text-2xl lg:text-4xl text-gray-200 font-medium transition-all duration-1000 delay-300 ${
                  subtitleVisible ? 'animate-text-slide-up' : 'opacity-0'
                }`}
              >
                <span className="block">Data Enthusiast &</span>
                <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent font-semibold">
                  Future ML Engineer
                </span>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl font-light animate-fade-in delay-500">
              Exploring the world of data, building smart solutions. B.Tech CSE student at{' '}
              <span className="font-medium text-white">IIITDM Kancheepuram</span>, passionate about 
              machine learning and data analytics.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-slide-in-left delay-300">
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white px-8 py-4 text-lg font-medium group shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
            >
              View My Work
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              size="lg"
              className="border-2 border-white/30 text-white hover:border-purple-400 hover:text-purple-300 px-8 py-4 text-lg font-medium glass-card shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex items-center space-x-8 pt-6 animate-fade-in delay-200">
            <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">Connect</span>
            <div className="flex items-center space-x-6">
              <a href="https://github.com/sachinn854" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-gray-300 hover:text-purple-400 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/sachin-yadav-a334b2287" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-gray-300 hover:text-purple-400 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:syy63052@gmail.com"
                className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-gray-300 hover:text-purple-400 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Profile picture section */}
        <div className="flex justify-center lg:justify-end animate-scale-up delay-500">
          <div className="relative">
            <div className="relative w-96 h-96 lg:w-[450px] lg:h-[450px]">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 animate-spin" style={{ animation: 'spin 20s linear infinite' }}></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-orange-500 to-purple-500 animate-spin" style={{ animation: 'spin 25s linear infinite reverse' }}></div>
              
              {/* Profile image (replace path above) */}
              <div className="absolute inset-4 rounded-full bg-[hsl(var(--dark-surface))] shadow-2xl flex items-center justify-center border border-white/20 overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

            {/* Floating emojis */}
            <div className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl shadow-lg flex items-center justify-center text-xl animate-gentle-float transform rotate-12">
              🚀
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl shadow-lg flex items-center justify-center text-lg animate-gentle-float delay-500 transform -rotate-12">
              💡
            </div>
            <div className="absolute top-1/2 -right-6 w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-md flex items-center justify-center text-sm animate-gentle-float delay-1000 transform rotate-45">
              📊
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-gentle-float">
        <div className="flex flex-col items-center space-y-2 text-gray-400">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-orange-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
