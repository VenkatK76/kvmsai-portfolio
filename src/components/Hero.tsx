
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-gray-50 dark:from-navy dark:to-navy-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 animate-fade-in">
            <span className="text-teal font-semibold mb-2 block">Hello, I'm</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Your Name
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
              Full Stack Web Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              I build exceptional and accessible digital experiences for the web.
              Passionate about creating solutions that are both beautiful and functional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-teal hover:bg-teal-light text-white"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:border-teal hover:text-teal dark:border-gray-600 dark:text-gray-300"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
            </div>
            
            <div className="flex mt-8 space-x-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-teal dark:text-gray-400 dark:hover:text-teal-light transition-colors">
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-teal dark:text-gray-400 dark:hover:text-teal-light transition-colors">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-teal dark:text-gray-400 dark:hover:text-teal-light transition-colors">
                <Mail size={24} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-5 hidden md:block animate-slide-in">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal to-blue-500 rounded-xl blur opacity-30"></div>
              <div className="relative bg-white dark:bg-navy rounded-lg overflow-hidden">
                <div className="aspect-square bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
