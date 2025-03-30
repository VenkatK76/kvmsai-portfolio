
import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  Building,
  Code,
  Server,
  ExternalLink
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "Jan 2021 - Present",
      description: "Leading the development of enterprise web applications with React and TypeScript. Improved application performance by 40% through code optimization and implementing best practices.",
      achievements: [
        "Rebuilt the company's main dashboard using React, improving load times by 60%",
        "Mentored junior developers and established coding standards for the team",
        "Integrated CI/CD pipelines to streamline the deployment process"
      ],
      technologies: ["React", "TypeScript", "Redux", "Tailwind CSS"]
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "InnovateSoft",
      period: "Mar 2019 - Dec 2020",
      description: "Developed and maintained web applications for clients across various industries. Responsible for both frontend and backend development.",
      achievements: [
        "Created a custom CMS that increased content management efficiency by 35%",
        "Implemented RESTful APIs for mobile app integration",
        "Reduced database query times by 50% through optimization"
      ],
      technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "React"]
    },
    {
      id: 3,
      role: "Web Developer",
      company: "Digital Solutions",
      period: "Jun 2017 - Feb 2019",
      description: "Started as a junior developer and quickly progressed to handle complex project components. Focused on frontend development and responsive design.",
      achievements: [
        "Redesigned 5 client websites to be fully responsive, increasing mobile traffic by 45%",
        "Developed a reusable component library that reduced development time by 30%",
        "Collaborated with UX/UI designers to implement pixel-perfect interfaces"
      ],
      technologies: ["HTML/CSS", "JavaScript", "jQuery", "Bootstrap", "PHP"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white dark:bg-navy">
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-teal mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            A timeline of my professional journey and the skills I've developed along the way.
          </p>
        </div>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp) => (
            <Card key={exp.id} className="animate-on-scroll border-0 shadow-md dark:bg-navy-light overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal"></div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl md:text-2xl text-teal flex items-center gap-2">
                      <Briefcase size={20} />
                      {exp.role}
                    </CardTitle>
                    <CardDescription className="text-base flex items-center gap-2 mt-1">
                      <Building size={16} className="text-gray-500" />
                      {exp.company}
                    </CardDescription>
                  </div>
                  <span className="text-sm bg-teal/10 text-teal px-3 py-1 rounded-full flex items-center gap-1">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 dark:text-gray-200 mb-2">Key Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 bg-teal/10 text-teal rounded-full flex items-center gap-1"
                    >
                      {index % 2 === 0 ? <Code size={12} /> : <Server size={12} />}
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-flex items-center text-teal hover:underline"
          >
            Interested in working together? Let's connect
            <ExternalLink className="ml-1" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
