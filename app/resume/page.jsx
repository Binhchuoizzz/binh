"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//About Data
const about = {
     title: "About Me",
     description: "I'm a full-stack developer with a passion for creating engaging and user-friendly web applications. I have a strong background in HTML, CSS, and JavaScript, as well as experience with React, Next.js, and Tailwind CSS. I'm also proficient in Node.js and Figma.",
     info: [
          {
               fieldName: "Name:",
               fieldValue: "Nguyen Duc Binh",
          },
          {
               fieldName: "National:",
               fieldValue: "Viet Nam",
          },
          {
               fieldName: "Work:",
               fieldValue: "FPT Company",
          },
          {
               fieldName: "Experience:",
               fieldValue: "3+ Years",
          },
          {
               fieldName: "Freelance:",
               fieldValue: "Available",
          },
          {
               fieldName: "Language:",
               fieldValue: "Vietnamese, English",
          },
          {
               fieldName: "Phone:",
               fieldValue: "(+84) 922 818 727",
          },
          {
               fieldName: "Email:",
               fieldValue: "Binhndhe161032@gmail.com",
          },
     ]
};

// Experience Data
const experience = {
     icon: '/assets/resume/badge.svg',
     title: 'My Experience',
     description: '"I was a cyber security student at FPT University and a front-end intern at Fpt Software."',
     items: [
          {
               company: "FPT University Student",
               position: "Student",
               duration: "2021 - 2024",
          },
          {
               company: "FPT Software",
               position: "Frontend Developer",
               duration: "2022 - 2023",
          },
     ]
};

// Education Data
const education = {
     icon: '/assets/resume/cap.svg',
     title: 'My Education',
     description: '"During my studies, I not only mastered the theory but also actively participated in real-life projects where I applied my knowledge to real-life situations and practiced problem-solving thinking. Thanks to that, I gained valuable experience and developed important skills to become an effective Frontend developer."',
     items: [
          {
               institution: "Van Phuc Secondary School",
               degree: "National Math Olympiad",
               duration: "2014 - 2016",
          },
          {
               institution: "Trung Van High School",
               degree: "City math student",
               duration: "2017 - 2020",
          },
          {
               institution: "FPT University Student",
               degree: "Student",
               duration: "2021 - 2024",
          },
          {
               institution: "FPT Software",
               degree: "Frontend Developer",
               duration: "2022 - 2023",
          },
     ]
};

// Skills Data
const skills = {
     title: 'My Skills',
     description: '"With the ability to write clear, structured and optimized code, I always aim to create interactive, smooth and user-friendly interfaces. I also regularly update myself with the latest trends and technologies, applying them to projects to bring about advanced, efficient and technically demanding products."',
     skillList: [
          {
               icon: <FaHtml5 />,
               name: "html 5",
          },
          {
               icon: <FaCss3 />,
               name: "css 3",
          },
          {
               icon: <FaJs />,
               name: "javascript",
          },
          {
               icon: <FaReact />,
               name: "react.js",
          },
          {
               icon: <SiNextdotjs />,
               name: "next.js",
          },
          {
               icon: <SiTailwindcss />,
               name: "tailwind.css",
          },
          {
               icon: <FaNodeJs />,
               name: "node.js",
          },
          {
               icon: <FaFigma />,
               name: "figma",
          },
     ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
     return (
          <motion.div
               initial={{ opacity: 0 }}
               animate={{
                    opacity: 1,
                    transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }  // transition animation
               }}
               className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
          >
               <div className="container mx-auto">
                    <Tabs
                         defaultValue="experience"
                         className="flex flex-col xl:flex-row gap-[60px]">
                         <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                              <TabsTrigger value="experience">Experience</TabsTrigger>
                              <TabsTrigger value="education">Education</TabsTrigger>
                              <TabsTrigger value="skills">Skills</TabsTrigger>
                              <TabsTrigger value="about">About Me</TabsTrigger>
                         </TabsList>
                         {/* Content */}
                         <div className="min-h-[70vh] w-full">
                              {/* experience */}
                              <TabsContent value="experience" className="w-full">
                                   <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                        <h3 className="text-4xl font-bold">{experience.title}</h3>
                                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                             {experience.description}
                                        </p>
                                        <ScrollArea className="h-[400px]">
                                             <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                                  {experience.items.map((item, index) => {
                                                       return (
                                                            <li key={index} className="bg-[#232329] h-[183px] py-6 px-10 rounded-xl
                                                            flex flex-col justify-center items-center lg:items-start
                                                            gap-1">
                                                                 <span className="text-accent">{item.duration}</span>
                                                                 <h3 className="text-xl max-w-[260px] min-h-[60px] 
                                                                 text-center lg:text-left">{item.position}</h3>
                                                                 <div className="flex items-center gap-3">
                                                                      {/* Dot */}
                                                                      <span className="w-[6px] h-[6px] rounded-full 
                                                                      bg-accent"></span>
                                                                      <p className="text-white/60">{item.company}</p>
                                                                 </div>
                                                            </li>
                                                       );
                                                  })}
                                             </ul>
                                        </ScrollArea>
                                   </div>
                              </TabsContent>


                              {/* education */}
                              <TabsContent value="education" className="w-full">
                                   <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                        <h3 className="text-4xl font-bold">{education.title}</h3>
                                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                             {education.description}
                                        </p>
                                        <ScrollArea className="h-[400px]">
                                             <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                                  {education.items.map((item, index) => {
                                                       return (
                                                            <li key={index} className="bg-[#232329] h-[183px] py-6 px-10 rounded-xl
                                                            flex flex-col justify-center items-center lg:items-start
                                                            gap-1">
                                                                 <span className="text-accent">{item.duration}</span>
                                                                 <h3 className="text-xl max-w-[260px] min-h-[60px] 
                                                                 text-center lg:text-left">{item.degree}</h3>
                                                                 <div className="flex items-center gap-3">
                                                                      {/* Dot */}
                                                                      <span className="w-[6px] h-[6px] rounded-full 
                                                                      bg-accent"></span>
                                                                      <p className="text-white/60">{item.institution}</p>
                                                                 </div>
                                                            </li>
                                                       );
                                                  })}
                                             </ul>
                                        </ScrollArea>
                                   </div>
                              </TabsContent>
                              {/* skills */}
                              <TabsContent value="skills" className="w-full h-full">
                                   <div className="flex flex-col gap-[30px]">
                                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                             <h3 className="text-4xl font-bold">{skills.title}</h3>
                                             <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                                  {skills.description}
                                             </p>
                                        </div>
                                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                             {skills.skillList.map((skill, index) => {
                                                  return (<li key={index}>
                                                       <TooltipProvider delayDuration={100}>
                                                            <Tooltip>
                                                                 <TooltipTrigger className="w-full h-[150px] 
                                                                 bg-[#232329] rounded-xl flex justify-center items-center
                                                                 group">
                                                                      <div className="text-6xl group-hover:text-accent
                                                                      translate-all duration-300">
                                                                           {skill.icon}
                                                                      </div>
                                                                 </TooltipTrigger>
                                                                 <TooltipContent>
                                                                      <p className="capitalize">{skill.name}</p>
                                                                 </TooltipContent>
                                                            </Tooltip>
                                                       </TooltipProvider>
                                                  </li>
                                                  );
                                             })}
                                        </ul>
                                   </div>
                              </TabsContent>
                              {/* about */}
                              <TabsContent value="about" className="w-full text-center xl:text-left">
                                   <div className="flex flex-col gap-[30px]">
                                        <h3 className="text-4xl font-bold">{about.title}</h3>
                                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                             {about.description}
                                        </p>
                                        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                                        mx-auto xl:mx-0">
                                             {about.info.map((item, index) => {
                                                  return (<li
                                                       key={index}
                                                       className="flex items-center justify-center xl:justify-start gap-4">
                                                       <span className="text-white/60">{item.fieldName}</span>
                                                       <span className="text-xl">{item.fieldValue}</span>
                                                  </li>
                                                  );
                                             })}
                                        </ul>
                                   </div>
                              </TabsContent>
                         </div>
                    </Tabs>
               </div>
          </motion.div>
     );
};

export default Resume