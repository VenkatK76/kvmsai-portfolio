
import React from 'react';
import { Github, Linkedin, Mail, MailOpen, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-gray-50 dark:from-navy dark:to-navy-light"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 animate-fade-in">
            <span className="text-teal md:text-1xl font-semibold mb-2 block">
              Hello, I'm
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Karanam Venkata Manikanta Sai
            </h1>
            <h2 className="text-xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              Transforming ideas into intuitive and high-performing web
              solutions with a focus on usability and innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-teal hover:bg-teal-light text-white"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                className="border border-gray-300 text-gray-700 hover:border-teal hover:text-teal dark:border-gray-600 dark:text-gray-300"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </Button>
            </div>

            <div className="flex mt-8 space-x-6">
              <a
                href="https://github.com/VenkatK76"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-teal transition-colors flex items-center gap-2"
              >
                <Github size={26} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/venkat-msai/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-teal transition-colors flex items-center gap-2"
              >
                <Linkedin size={26} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="mailto:kvmsai76@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-teal transition-colors flex items-center gap-2"
              >
                <MailOpen size={26} />
                <span className="hidden sm:inline">Email</span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-teal transition-colors flex items-center gap-2"
              >
                <FileText size={26} />
                <span className="hidden sm:inline">Resume</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center items-center order-first md:order-none mt-8 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal to-blue-500 rounded-full blur opacity-40"></div>

              <img
                src="/profile.jpeg"
                alt="Venkat's Profile"
                className="relative rounded-full w-60 md:w-80 h-60 md:h-80 object-cover border-4 border-teal shadow-float hover:scale-105 transition-transform duration-500 animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
