
import React from 'react';
import { Briefcase, Code, Server } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'SQL', level: 70 },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-navy-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-teal mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate web developer with expertise in building responsive and interactive web applications. With a strong foundation in both frontend and backend technologies, I create seamless digital experiences that solve real-world problems.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              My journey in web development started 5 years ago, and since then I've worked on various projects ranging from simple landing pages to complex enterprise applications. I'm constantly learning new technologies and methodologies to stay at the cutting edge of web development.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              When I'm not coding, I enjoy hiking, reading sci-fi novels, and experimenting with new recipes in the kitchen.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-teal h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
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
