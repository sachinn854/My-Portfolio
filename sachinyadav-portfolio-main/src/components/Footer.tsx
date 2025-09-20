
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSocialLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-gray-950 text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent mb-4">
              Sachin Yadav
            </div>
            <p className="text-gray-400 leading-relaxed">
              Data Enthusiast & Future ML Engineer passionate about solving real-world problems through technology and innovation.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                Skills
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                Projects
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
            <div className="flex space-x-4">
              <button
                onClick={() => handleSocialLink('https://github.com/sachinn854')}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300 border border-white/20 hover:scale-110 hover:border-white/30"
              >
                <Github className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleSocialLink('https://linkedin.com/in/sachin-yadav-a334b2287')}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300 border border-white/20 hover:scale-110 hover:border-white/30"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <a 
                href="mailto:syy63052@gmail.com"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300 border border-white/20 hover:scale-110 hover:border-white/30"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> by Sachin Yadav
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            © 2024 Sachin Yadav. All rights reserved.
          </p>
        </div>
        
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:shadow-purple-500/25"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
