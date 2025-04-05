import React from "react";
import { Briefcase, Code, Server, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const skills = [
    "JavaScript",
    "Java",
    "Python",
    "React",
    "Bootstrap",
    "Node.js",
    "Express",
    "SQL",
    "HTML/CSS",
  ];

  return (
    <section
      id="about"
      className="section-padding bg-gray-50 dark:bg-navy-light"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-teal mx-auto"></div>
        </div>

        <div className="max-w-6.5xl mx-auto bg-white dark:bg-navy p-8 md:p-10 rounded-lg shadow-sm">
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>Dear Visitor,</p>
            <p>
              Thank you for visiting my portfolio. I'm excited to share my
              journey with you as a passionate web developer eager to build
              impactful and user-friendly digital experiences.
            </p>
            <p>
              My expertise lies in building seamless digital experiences using
              modern technologies like{"  "}
              {skills.map((skill, index) => (
                <span key={index}>
                  <span className="text-teal font-medium">{skill}</span>
                  {index < skills.length - 1 &&
                    (index === skills.length - 2 ? " and " : ", ")}
                </span>
              ))}
              . With a strong foundation in both frontend, backend, and database
              technologies, I craft solutions that solve real-world problems.
            </p>
            <p>
              I’ve worked on projects ranging from simple landing pages to
              complex applications, each refining my problem-solving and
              technical skills. Feel free to explore my{" "}
              <a
                href="#projects"
                className="text-teal hover:underline inline-flex items-center"
              >
                projects section <ExternalLink className="ml-1" size={16} />
              </a>{" "}
              to see how I tackle unique challenges with creativity and
              precision.
            </p>
            <p>
              Through hackathons, academic projects, internships, and personal
              initiatives, I’ve honed a problem-solving mindset and a keen eye
              for innovation. Explore the{" "}
              <a
                href="#experience"
                className="text-teal hover:underline inline-flex items-center"
              >
                experience section <ExternalLink className="ml-1" size={16} />
              </a>{" "}
              to learn more.
            </p>
            <p>
              Beyond coding, I enjoy exploring new technologies, traveling, and
              continuous learning to stay at the cutting edge of tech.
            </p>
            <p>
              I’d love to connect and collaborate on exciting opportunities.
              Let’s build something amazing together!
            </p>
            <p className="mt-4 font-semibold">Sincerely,</p>
            <p className="font-semibold">Venkata Manikanta Sai Karanam</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
