
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, task assignment, and progress tracking.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
      imageSrc: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Health & Fitness Tracker",
      description: "A fitness tracking application that allows users to monitor their workouts, nutrition, and health metrics.",
      technologies: ["TypeScript", "React Native", "Express", "PostgreSQL"],
      imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "#"
    },
  ];

  return (
    <section id="projects" className="section-padding bg-white dark:bg-navy">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-teal mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            Here are some of my recent projects. Each project is a unique piece of development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-50 dark:bg-navy-light rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.imageSrc} 
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 bg-teal/10 text-teal rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center gap-2 text-sm border-gray-300 text-gray-700 hover:border-teal hover:text-teal dark:border-gray-600 dark:text-gray-300"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center gap-2 text-sm border-gray-300 text-gray-700 hover:border-teal hover:text-teal dark:border-gray-600 dark:text-gray-300"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={16} />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
