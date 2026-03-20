
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
          className={`text-center mb-20 transition-all duration-1000 ${titleVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full shadow-sm mb-6 hover:glass-card-elevated transition-all duration-300">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white/90 tracking-wide">ABOUT ME</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Designing Solutions,
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent"> Not Just Code</span>
          </h2>
          <div className="w-12 h-[2px] bg-white/10 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Bio & Education/Expertise */}
          <div
            ref={contentRef}
            className={`lg:col-span-5 space-y-10 transition-all duration-1000 ${contentVisible ? 'animate-slide-in-left' : 'opacity-0'
              }`}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-400 leading-relaxed font-medium">
                I am an <span className="text-white">AI & Machine Learning Engineer</span> dedicated to building intelligent systems that bridge the gap between complex data and real-world impact.
              </p>
              <p className="text-base text-gray-500 leading-relaxed font-medium">
                Specializing in <span className="text-purple-400">Deep Learning & RAG architectures</span>, I engineer robust solutions that transform raw complexity into scalable innovation.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="group relative overflow-hidden glass-card rounded-3xl p-6 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] border-t border-white/10">
                <div className="flex items-center space-x-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-600/40 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                    <GraduationCap className="w-7 h-7 text-purple-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm uppercase tracking-wider">Education</h4>
                    <p className="text-gray-500 text-xs font-medium">B.Tech CSE, IIITDM Kancheepuram</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden glass-card rounded-3xl p-6 transition-all duration-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] border-t border-white/10">
                <div className="flex items-center space-x-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-600/40 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                    <Target className="w-7 h-7 text-orange-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm uppercase tracking-wider">Expertise</h4>
                    <p className="text-gray-500 text-xs font-medium">LLMs, RAG & Neural Networks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Stats Grid */}
          <div
            ref={statsRef}
            className={`lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-1000 ease-out delay-200 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {[
              {
                icon: Code,
                title: "400+",
                label: "LeetCode Knight",
                sub: "1858 Max Rating",
                color: "purple",
                accent: "bg-purple-500/10 group-hover:bg-purple-500/20",
                iconBg: "from-purple-500/20 to-purple-600/20 border-purple-500/20",
                iconColor: "text-purple-400",
                titleGradient: "from-purple-400 to-purple-200"
              },
              {
                icon: Trophy,
                title: "10+",
                label: "AI/ML Projects",
                sub: "Deployed & Scalable",
                color: "orange",
                accent: "bg-orange-500/10 group-hover:bg-orange-500/20",
                iconBg: "from-orange-500/20 to-orange-600/20 border-orange-500/20",
                iconColor: "text-orange-400",
                titleGradient: "from-orange-400 to-orange-200"
              },
              {
                icon: BookOpen,
                title: "4+",
                label: "Core Tech Stack",
                sub: "Python, C++, SQL",
                color: "blue",
                accent: "bg-blue-500/10 group-hover:bg-blue-500/20",
                iconBg: "from-blue-500/20 to-blue-600/20 border-blue-500/20",
                iconColor: "text-blue-400",
                titleGradient: "from-blue-400 to-blue-200"
              },
              {
                icon: Award,
                title: "Top 5%",
                label: "Amazon ML '25",
                sub: "Kaggle Rank 44",
                color: "emerald",
                accent: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
                iconBg: "from-emerald-500/20 to-emerald-600/20 border-emerald-500/20",
                iconColor: "text-emerald-400",
                titleGradient: "from-emerald-400 to-emerald-200"
              }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group glass-card-elevated rounded-[2.5rem] p-8 text-center hover:bg-white/5 transition-all duration-500 hover:-translate-y-2 border border-white/5 hover:border-white/20 relative overflow-hidden"
              >
                <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-2xl transition-all duration-500 ${stat.accent}`}></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br rounded-2xl flex items-center justify-center mx-auto mb-6 border group-hover:scale-110 transition-all duration-500 shadow-lg ${stat.iconBg}`}>
                    <stat.icon className={`w-8 h-8 ${stat.iconColor}`} />
                  </div>
                  <div className="text-4xl font-bold text-white mb-1 tracking-tighter">
                    {stat.title}
                  </div>
                  <div className="font-bold text-gray-500 tracking-[0.1em] mb-1 uppercase text-[10px]">{stat.label}</div>
                  <div className="text-gray-600 text-xs font-medium">{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
