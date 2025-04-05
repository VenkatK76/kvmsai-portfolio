import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  Building,
  Code,
  Server,
  Clock,
  ExternalLink,
  Award,
  Trophy,
  GraduationCap,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { MapPin } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const experiences = [
  {
    id: 1,
    role: "Intern",
    company: "Tube Investments of India Limited, Murugappa Group",
    period: "Dec 2024 - Nov 2024",
    description:
      "Developed SQL queries and scripts to resolve data redundancy and inconsistencies during migration, ensuring accurate and reliable data transfer. Managed validation processes to maintain data integrity throughout the transition.",
    technologies: ["SQL Server", "Microsoft SSMS", "Database Management"],
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "Afame Technologies",
    period: "Feb 2024 - Mar 2024",
    description:
      "Built a responsive landing page and calculator with HTML, CSS, and JS, focusing on performance and UX. Used Git & GitHub for version control.",
    technologies: ["JavaScript", "HTML", "CSS", "Git", "Github"],
  },
  {
    id: 3,
    role: "App Developer",
    company: "Demy Software Solutions",
    period: "Dec 2023 - Feb 2024",
    description:
      "Developed a leave management app with role-based features using Java, PHP, and MySQL. Led backend and database design to streamline HR operations.",
    technologies: ["Java", "PHP", "MySQL", "Android", "Postman"],
  },
];

const hackathonsAndBootcamps = [
  {
    id: 1,
    title: "Smart India Hackathon 2023",
    organizer: "AICTE, MoE's Innovation Cell",
    // location: "Jaipur, IN",
    date: "December 2023",
    achievement: "Finalist",
    description:
      "Built a real-time AQI & WQI monitoring app with IoT integration, live data visualization, and health insights",
    skills: ["Java", "PHP", "Android", "IoT", "Gmaps API"],
  },
  {
    id: 2,
    title: "Kavach 2023 Hackathon",
    organizer: "AICTE, MoE's Innovation Cell",
    date: "August 2023",
    achievement: "Finalist",
    description:
      "Developed a women’s safety app with real-time alerts and location tracking to enable fast, secure emergency response.",
    skills: ["Java", "Firebase", "Android", "Github"],
  },
  {
    id: 3,
    title: "InnoExpo Hackathon",
    organizer: "JNTU-Vizianagaram",
    date: "September 2023",
    achievement: "Runner-up",
    description:
      "Built a platform to promote community involvement in tree care and drive environmental awareness.",
    skills: ["Java", "Firebase", "IoT", "APIs"],
  },
  {
    id: 4,
    title: "Android Appathon",
    organizer: "NSRIT",
    date: "August 2023",
    achievement: "Winner",
    description:
      "Developed a role-based leave management app for colleges to streamline leave requests and approvals.",
    skills: ["Java", "Android", "PHP"],
  },
  {
    id: 5,
    title: "IDE Bootcamp Edition-II Phase-II",
    organizer: "MoE's Innovation Cell",
    date: "February 2025",
    achievement: "Finalist",
    description:
      "Built an e-commerce platform focused on the construction industry, streamlining material procurement and services.",
    skills: [
      "Market Research",
      "Product Development",
      "Ideation",
      "Web Development",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-navy">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-teal mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A timeline of my professional journey and the skills I've developed
            along the way.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline */}
          <div className="absolute left-5 top-0 w-[2px] h-full bg-gray-300 dark:bg-gray-700"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex justify-end"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 -ml-3.5 w-7 h-7 rounded-full bg-teal shadow-md z-10 flex items-center justify-center">
                  <Clock size={16} className="text-white" />
                </div>

                {/* Experience Card */}
                <Card className="w-[80%] border-0 shadow-md dark:bg-navy-light overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start flex-col sm:flex-row">
                      <div>
                        <CardTitle className="text-xl md:text-2xl text-teal flex items-center gap-2">
                          <Briefcase size={20} />
                          {exp.role}
                        </CardTitle>
                        <p className="text-base flex items-center gap-2 mt-1 text-gray-600 dark:text-gray-400">
                          <Building size={16} />
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-sm bg-teal/10 text-teal px-3 py-1 rounded-full flex items-center gap-1 mt-2 sm:mt-0">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 bg-teal/10 text-teal rounded-full flex items-center gap-1"
                        >
                          {index % 2 === 0 ? (
                            <Code size={12} />
                          ) : (
                            <Server size={12} />
                          )}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hackathons and Bootcamps Carousel Section */}
        <div className="mt-28 animate-on-scroll">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Hackathons & Bootcamps</h3>
            <div className="w-16 h-1 bg-teal mx-auto"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-xl mx-auto">
              Notable projects and learning experiences from hackathons and
              bootcamps.
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {hackathonsAndBootcamps.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="md:basis-1/2 lg:basis-1/3 pl-4"
                >
                  <Card className="relative h-full border-0 shadow-md dark:bg-navy-light hover:shadow-lg transition-shadow duration-300">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal"></div>

                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg text-teal">
                            {item.title}
                          </CardTitle>
                          <CardDescription className="text-sm flex items-center gap-2 mt-1">
                            <Building size={14} className="text-gray-500" />
                            {item.organizer}
                          </CardDescription>
                          {/* <CardDescription className="text-sm flex items-center gap-2 mt-1">
                            <MapPin size={14} className="text-gray-400" />
                            {item.location}
                          </CardDescription> */}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar size={14} className="text-teal" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {item.date}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        {item.achievement.includes("First") ||
                        item.achievement.includes("Winner") ? (
                          <Trophy size={14} className="text-amber-500" />
                        ) : item.achievement.includes("Certification") ? (
                          <GraduationCap size={14} className="text-blue-500" />
                        ) : (
                          <Award size={14} className="text-teal" />
                        )}
                        <span className="text-sm font-medium">
                          {item.achievement}
                        </span>
                      </div>

                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-1">
                        {item.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="text-xs px-2 py-0.5 bg-teal/10 text-teal rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-6">
              <CarouselPrevious className="relative static left-0 translate-y-0 md:left-0 md:translate-y-0" />
              <CarouselNext className="relative static right-0 translate-y-0 md:right-0 md:translate-y-0" />
            </div>
          </Carousel>
        </div>

        <div className="text-center mt-16">
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
