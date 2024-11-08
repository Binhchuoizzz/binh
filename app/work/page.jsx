"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";

//components
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
     Tooltip,
     TooltipContent,
     TooltipTrigger,
     TooltipProvider,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSlideBtns from "@/components/WorkSlideBtns";

const projects = [
     {
          num: '01',
          category: 'frontend',
          title: 'Project 1',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ipsam maiores, rerum tenetur enim sint! Ducimus sed tenetur perspiciatis dignissimos nulla repudiandae veritatis, error incidunt ipsam est rerum perferendis? Placeat!',
          stack: [
               { name: "Html 5" },
               { name: "css 3" },
               { name: "Javascript" },
          ],
          image: '/assets/work/thumb1.png',
          live: "",
          github: "",
     },
     {
          num: '02',
          category: 'fullstack',
          title: 'Project 2',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ipsam maiores, rerum tenetur enim sint! Ducimus sed tenetur perspiciatis dignissimos nulla repudiandae veritatis, error incidunt ipsam est rerum perferendis? Placeat!',
          stack: [
               { name: "Html 5" },
               { name: "css 3" },
               { name: "Javascript" },
          ],
          image: '/assets/work/thumb2.png',
          live: "",
          github: "",
     },
     {
          num: '03',
          category: 'Finals',
          title: 'Project 3',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ipsam maiores, rerum tenetur enim sint! Ducimus sed tenetur perspiciatis dignissimos nulla repudiandae veritatis, error incidunt ipsam est rerum perferendis? Placeat!',
          stack: [
               { name: "Html 5" },
               { name: "css 3" },
          ],
          image: '/assets/work/thumb3.png',
          live: "",
          github: "",
     },
];
const Work = () => {
     const [project, setProject] = useState(projects[0]);

     const handleSlideChange = (swiper) => {
          //Get Current Slide Index
          const currentIndex = swiper.activeIndex;
          //Update Project State Based On Current Slide Index
          setProject(projects[currentIndex]);

     };
     return (
          <motion.div
               initial={{ opacity: 0 }}
               animate={{
                    opacity: 1,
                    transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
               }}
               className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
          >
               <div className="container mx-auto">
                    <div className="flex flex-col xl:flex-row xl:gap-[30px] h-[50%]">
                         <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col 
                         xl:justify-between order-2 xl:order-none">
                              <div className="flex flex-col gap-[30px]">
                                   {/* Outline Num */}
                                   <div className="text-8xl leading-none font-extrabold text-transparent 
                                   text-outline">{project.num}</div>
                                   {/* Projerct Category */}
                                   <h2 className="text-[42px] font-bold leading-none text-white
                                   group-hover:text-accent transition-all duration-500 capitalize">
                                        {project.category} project
                                   </h2>
                                   {/* Project description */}
                                   <p className="text-white/60">{project.description}</p>
                                   {/* Stack */}
                                   <ul className="flex gap-4">
                                        {project.stack.map((item, index) => {
                                             return (
                                                  <li key={index} className="text-xl text-accent">
                                                       {item.name}
                                                       {/* Remove the last coma */}
                                                       {index !== project.stack.length - 1 && ","}
                                                  </li>
                                             );
                                        })}
                                   </ul>
                                   {/* Border */}
                                   <div className="border border-white/20"></div>
                                   {/* Button */}
                                   <div className="flex items-center gap-4">
                                        {/* Live Project Button */}
                                        <Link href={project.live}>
                                             <TooltipProvider delayDuration={100}>
                                                  <Tooltip>
                                                       <TooltipTrigger className="w-[70px] h-[70px] rounded-full 
                                                       bg-white/5 flex justify-center items-center group">
                                                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                                       </TooltipTrigger>
                                                       <TooltipContent>
                                                            <p>Live project</p>
                                                       </TooltipContent>
                                                  </Tooltip>
                                             </TooltipProvider>
                                        </Link>
                                        {/* Github Project Button */}
                                        <Link href={project.github}>
                                             <TooltipProvider delayDuration={100}>
                                                  <Tooltip>
                                                       <TooltipTrigger className="w-[70px] h-[70px] rounded-full 
                                                       bg-white/5 flex justify-center items-center group">
                                                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                                       </TooltipTrigger>
                                                       <TooltipContent>
                                                            <p>Github repository</p>
                                                       </TooltipContent>
                                                  </Tooltip>
                                             </TooltipProvider>
                                        </Link>
                                   </div>
                              </div>
                         </div>
                         <div className="w-full xl:w-[50%]">
                              <Swiper
                                   spaceBetween={30}
                                   slidesPerView={1}
                                   className="xl:h-[520px] mb-12"
                                   onSlideChange={handleSlideChange}
                              >
                                   {projects.map((project, index) => {
                                        return (
                                             <SwiperSlide key={index} className="w-full">
                                                  <div className="h-[460px] relative group flex justify-center
                                                  items-center bg-pink-50/20">
                                                       {/* Overlay */}
                                                       <div className="absolute top-0 bottom-0 w-full h-full bg-black/
                                                       10 z-10"></div>
                                                       {/* Image */}
                                                       <div className="relative w-full h-full">
                                                            <Image
                                                                 src={project.image}
                                                                 fill
                                                                 className="object-cover"
                                                                 alt=""
                                                            />
                                                       </div>
                                                  </div>
                                             </SwiperSlide>
                                        );
                                   })}
                                   {/* Slider Buttons */}
                                   <WorkSlideBtns
                                        containerStyles="flex gap-2 absolute right-0 bottom-
                                   [calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max
                                   xl:justify-none"
                                        btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px]
                                   w-[44px] h-[44px] flex justify-center items-center transition-all"
                                   />
                              </Swiper>
                         </div>
                    </div>
               </div>
          </motion.div>
     );
};

export default Work