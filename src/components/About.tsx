
import React from 'react';
import { Code, Server, ExternalLink, MapPin, Mail, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    'JavaScript', 'React', 'TypeScript', 'Node.js', 'HTML/CSS', 'SQL'
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-navy-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-teal mx-auto"></div>
        </div>
        
        <Card className="bg-white dark:bg-navy border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              {/* Left sidebar with personal details */}
              <div className="w-full md:w-1/4 bg-teal/5 p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-800">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <User size={20} className="text-teal" />
                    <span className="font-medium">Web Developer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={20} className="text-teal" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={20} className="text-teal" />
                    <span>contact@example.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={20} className="text-teal" />
                    <span>5+ Years Experience</span>
                  </div>
                  <Separator className="my-4" />
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">Technical Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <span 
                          key={index} 
                          className="text-xs px-2 py-1 bg-teal/10 text-teal rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side with letter content - now horizontal format */}
              <div className="w-full md:w-3/4 p-6 md:p-8">
                <div className="flex flex-col space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Professional Summary</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{new Date().toLocaleDateString()}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 prose prose-sm dark:prose-invert max-w-none">
                    <div className="bg-gray-50 dark:bg-navy/30 p-4 rounded-lg">
                      <h4 className="font-medium text-teal mb-2">Background</h4>
                      <p className="text-sm">
                        Dedicated web developer with 5+ years of experience creating responsive, user-focused applications that solve real business problems.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-navy/30 p-4 rounded-lg">
                      <h4 className="font-medium text-teal mb-2">Expertise</h4>
                      <p className="text-sm">
                        Proficient in both frontend and backend technologies, specializing in <span className="text-teal font-medium">React</span>, <span className="text-teal font-medium">TypeScript</span>, and <span className="text-teal font-medium">Node.js</span>.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-navy/30 p-4 rounded-lg">
                      <h4 className="font-medium text-teal mb-2">Approach</h4>
                      <p className="text-sm">
                        Writing clean, maintainable code while staying current with emerging technologies and best practices in web development.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex flex-row items-center gap-4">
                      <div>
                        <p className="font-semibold mb-0">Your Name</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Web Developer</p>
                      </div>
                      <div className="flex gap-2">
                        <a href="#projects" className="text-teal hover:underline inline-flex items-center text-sm">
                          Projects <ExternalLink className="ml-1" size={14} />
                        </a>
                        <a href="#experience" className="text-teal hover:underline inline-flex items-center text-sm">
                          Experience <ExternalLink className="ml-1" size={14} />
                        </a>
                      </div>
                    </div>
                    <Button className="bg-teal hover:bg-teal-light">
                      <Mail className="mr-2 h-4 w-4" /> Contact Me
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white dark:bg-navy p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-teal">
            <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-4">
              <Code className="text-teal" size={22} />
            </div>
            <h4 className="text-lg font-semibold mb-2">Frontend Development</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Building responsive, accessible, and performant user interfaces with modern frameworks and tools.
            </p>
          </div>
          
          <div className="bg-white dark:bg-navy p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-teal">
            <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-4">
              <Server className="text-teal" size={22} />
            </div>
            <h4 className="text-lg font-semibold mb-2">Backend Development</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Creating robust and scalable server-side applications and APIs that power modern web solutions.
            </p>
          </div>
          
          <div className="bg-white dark:bg-navy p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-teal">
            <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-4">
              <Code className="text-teal" size={22} />
            </div>
            <h4 className="text-lg font-semibold mb-2">Technical Solution Design</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Architecting comprehensive solutions that align with business goals and technical requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
