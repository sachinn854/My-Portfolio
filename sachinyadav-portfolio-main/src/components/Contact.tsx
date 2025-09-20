
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, User, AtSign, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Initialize EmailJS with your public key
  React.useEffect(() => {
    emailjs.init('GnFIGL90QC9pQYsgk');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_njpqj53', // Your service ID
        'template_35y6e9c', // Your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Sachin Yadav',
        }
      );

      toast({
        title: "Message sent successfully! 🚀",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      // Reset form on success
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to send message ❌",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSocialLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[hsl(var(--dark-bg-primary))] via-[hsl(var(--dark-bg-secondary))] to-[hsl(var(--dark-bg-tertiary))] relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-orange-500/10 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-full blur-3xl opacity-60"></div>
      
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
            <MessageCircle className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-white/90">GET IN TOUCH</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Let's Work 
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent"> Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together!
          </p>
        </div>
        
        {/* Content Section */}
        <div 
          ref={contentRef}
          className={`grid lg:grid-cols-5 gap-12 transition-all duration-900 ease-out ${
            contentVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="group glass-card-elevated rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover-lift">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">Email</h4>
                      <a href="mailto:syy63052@gmail.com" className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300">
                        syy63052@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="group glass-card-elevated rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover-lift">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/25">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">Location</h4>
                      <p className="text-gray-400">IIITDM Kancheepuram, Tamil Nadu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 text-xl">Connect with me</h4>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleSocialLink('https://github.com/sachinn854')}
                  className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl text-white border border-white/10 hover:border-white/20"
                >
                  <Github className="w-7 h-7" />
                </button>
                <button
                  onClick={() => handleSocialLink('https://linkedin.com/in/sachin-yadav-a334b2287')}
                  className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl text-white border border-white/10 hover:border-white/20"
                >
                  <Linkedin className="w-7 h-7" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="glass-card-elevated rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-3 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full h-14 text-lg border-2 border-white/20 bg-white/10 text-white placeholder:text-gray-400 rounded-xl focus:border-purple-400 transition-colors disabled:opacity-50"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-3 flex items-center gap-2">
                    <AtSign className="w-4 h-4" />
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full h-14 text-lg border-2 border-white/20 bg-white/10 text-white placeholder:text-gray-400 rounded-xl focus:border-purple-400 transition-colors disabled:opacity-50"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-3 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    rows={6}
                    className="w-full text-lg border-2 border-white/20 bg-white/10 text-white placeholder:text-gray-400 rounded-xl focus:border-purple-400 transition-colors resize-none disabled:opacity-50"
                    placeholder="Tell me about your project or how we can work together..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white py-6 text-lg font-bold rounded-xl shadow-2xl hover:shadow-purple-500/25 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
