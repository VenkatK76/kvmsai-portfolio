
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
              
              {/* Right side with letter content */}
              <div className="w-full md:w-3/4 p-6 md:p-8">
                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Professional Summary</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{new Date().toLocaleDateString()}</span>
                  </div>
                  
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <p>
                      Thank you for visiting my portfolio. I'm a dedicated web developer with extensive experience creating responsive, user-focused applications that solve real business problems.
                    </p>
                    
                    <p>
                      My expertise spans both frontend and backend technologies, with particular strength in creating intuitive user interfaces using <span className="text-teal font-medium">React</span> and <span className="text-teal font-medium">TypeScript</span>, backed by robust server architectures with <span className="text-teal font-medium">Node.js</span>.
                    </p>
                    
                    <p>
                      I pride myself on writing clean, maintainable code and staying current with emerging technologies and best practices in web development. My approach combines technical excellence with strong communication skills and a deep understanding of business requirements.
                    </p>
                    
                    <p>
                      Explore my <a href="#projects" className="text-teal hover:underline inline-flex items-center font-medium">
                        projects <ExternalLink className="ml-1" size={14} />
                      </a> to see my work in action, or review my <a href="#experience" className="text-teal hover:underline inline-flex items-center font-medium">
                        experience <ExternalLink className="ml-1" size={14} />
                      </a> for details on my professional background.
                    </p>
                    
                    <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
                      <div>
                        <p className="font-semibold mb-1">Your Name</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Web Developer</p>
                      </div>
                      <Button className="bg-teal hover:bg-teal-light">
                        <Mail className="mr-2 h-4 w-4" /> Contact Me
                      </Button>
                    </div>
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
