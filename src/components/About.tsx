
import React from 'react';
import { Briefcase, Code, Server, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const skills = [
    'JavaScript', 'React', 'TypeScript', 'Node.js', 'HTML/CSS', 'SQL'
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-navy-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-teal mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white dark:bg-navy p-8 md:p-10 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Dear Visitor,</h3>
            <span className="text-gray-500 dark:text-gray-400">Today's Date</span>
          </div>
          
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Thank you for visiting my portfolio website. I'm excited to share my journey with you as a passionate web developer with over 5 years of experience in creating responsive and interactive web applications.
            </p>
            
            <p>
              My expertise lies in building seamless digital experiences using modern technologies like{' '}
              {skills.map((skill, index) => (
                <span key={index}>
                  <span className="text-teal font-medium">{skill}</span>
                  {index < skills.length - 1 && (index === skills.length - 2 ? ' and ' : ', ')}
                </span>
              ))}.
              With a strong foundation in both frontend and backend technologies, I craft solutions that solve real-world problems.
            </p>
            
            <p>
              Throughout my career, I've worked on various projects ranging from simple landing pages to complex enterprise applications. I invite you to explore my{' '}
              <a href="#projects" className="text-teal hover:underline inline-flex items-center">
                projects section <ExternalLink className="ml-1" size={16} />
              </a>{' '}
              to see examples of my work. Each project represents a unique challenge that I've tackled with creativity and technical expertise.
            </p>
            
            <p>
              My professional journey has equipped me with experience across different industries, which you can learn more about in the{' '}
              <a href="#projects" className="text-teal hover:underline inline-flex items-center">
                experience section <ExternalLink className="ml-1" size={16} />
              </a>. 
              This diverse background allows me to approach problems from multiple perspectives and deliver innovative solutions.
            </p>
            
            <p>
              When I'm not coding, I enjoy hiking, reading sci-fi novels, and experimenting with new recipes in the kitchen. I believe in continuous learning and am always exploring new technologies to stay at the cutting edge of web development.
            </p>
            
            <p className="mt-8">
              I look forward to potential collaborations and opportunities to discuss how my skills can contribute to your next digital project.
            </p>
            
            <p className="mt-4">
              Sincerely,
            </p>
            
            <p className="font-semibold">
              Your Name
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white dark:bg-navy p-8 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-4">
              <Code className="text-teal" size={24} />
            </div>
            <h4 className="text-xl font-semibold mb-2">Frontend Development</h4>
            <p className="text-gray-600 dark:text-gray-400">
              I craft responsive and interactive user interfaces using modern frameworks like React, along with HTML, CSS, and JavaScript.
            </p>
          </div>
          
          <div className="bg-white dark:bg-navy p-8 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-4">
              <Server className="text-teal" size={24} />
            </div>
            <h4 className="text-xl font-semibold mb-2">Backend Development</h4>
            <p className="text-gray-600 dark:text-gray-400">
              I build robust server-side applications and APIs using Node.js, Express, and various database technologies.
            </p>
          </div>
          
          <div className="bg-white dark:bg-navy p-8 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-4">
              <Briefcase className="text-teal" size={24} />
            </div>
            <h4 className="text-xl font-semibold mb-2">Business Strategy</h4>
            <p className="text-gray-600 dark:text-gray-400">
              I understand business requirements and translate them into technical solutions that drive growth and improve user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
