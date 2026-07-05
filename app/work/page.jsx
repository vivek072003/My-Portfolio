"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Netflix UI",
    description:
      "A responsive replica of the Netflix landing page, highlighting custom layouts, hover effects, and pixel-perfect design matches.",
    stack: [
      {
        name: "HTML",
      },
      {
        name: "Tailwind CSS",
      },
    ],
    image: "/assets/work/netflix.png",
    live: "https://net-flix-ui-clone-five.vercel.app/",
    github: "https://github.com/vivek072003/NetFlix-UI-Clone",
  },
  {
    num: "02",
    category: "Full Stack",
    title: "Code-Editor",
    description:
      "An interactive web-based IDE supporting execution for Python, C, C++, and Java. Integrated with Google Gemini AI to provide context-aware code explanations, real-time debugging guidance, and intelligent code completions.",
    stack: [
      {
        name: "JavaScript",
      },
      {
        name: "CodeMirror",
      },
      {
        name: "Node.js",
      },
      {
        name: "Gemini API",
      },
    ],
    image: "/assets/work/codeeditor.png",
    live: "",
    github: "https://github.com/vivek072003/Code-Editor",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "Tic Tac Toe Ultimate Pro",
    description:
      "A highly advanced, fully responsive online multiplayer Tic Tac Toe game. It features real-time game synchronization, a built-in text chat, live peer-to-peer voice communications using WebRTC, an ultra-premium glassmorphism UI, and an unbeatable minimax AI challenge.",
    stack: [
      {
        name: "JavaScript",
      },
      {
        name: "Node.js",
      },
      {
        name: "Socket.IO",
      },
      {
        name: "PeerJS",
      },
    ],
    image: "/assets/work/tictactoe.png",
    live: "",
    github: "https://github.com/vivek072003/Tic-Tac-Toe-Pro",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Brainwave",
    description:
      "A sleek, customizable, and easy-to-use AI Chatbot Interface featuring modern UI/UX design components, scroll effects, and responsive navigation modules.",
    stack: [
      {
        name: "React.js",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "Framer Motion",
      },
    ],
    image: "/brainwave.png",
    live: "https://brainwave-rouge-ten.vercel.app/",
    github: "https://github.com/vivek072003/Brainwave",
  },
  {
    num: "05",
    category: "Frontend",
    title: "Portfolio",
    description:
      "A premium, fast, and modern developer portfolio built using Next.js, customized with Framer Motion page transitions, and featuring dynamic neon glassmorphic design elements.",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "React.js",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "Framer Motion",
      },
    ],
    image: "/assets/work/portfolio.png",
    live: "https://my-portfolio-two-xi-53.vercel.app/",
    github: "https://github.com/vivek072003/My-Portfolio",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [swiperRef, setSwiperRef] = useState(null);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.15, duration: 0.3, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div
          className="flex flex-col xl:flex-row xl:gap-[30px] items-stretch"
          onMouseEnter={() => {
            if (swiperRef && swiperRef.autoplay) {
              swiperRef.autoplay.stop();
            }
          }}
          onMouseLeave={() => {
            if (swiperRef && swiperRef.autoplay) {
              swiperRef.autoplay.start();
            }
          }}
        >
          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.4, ease: "easeOut" }}
            className="w-full xl:w-[50%] flex flex-col justify-center order-2 xl:order-none"
          >
            <div className="h-[450px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.num}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex flex-col justify-between bg-[#232329]/30 border border-white/5 p-8 rounded-2xl shadow-xl relative overflow-hidden backdrop-blur-sm h-full"
                >
                  {/* Top Details container */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="text-6xl leading-none font-extrabold text-transparent text-outline select-none">
                        {project.num}
                      </div>
                      <span className="text-xs uppercase font-bold text-accent tracking-widest bg-accent/10 px-3 py-1 rounded-md border border-accent/20">
                        {project.category}
                      </span>
                    </div>
                    {/* Project Title */}
                    <h2 className="text-[32px] font-bold leading-none text-white hover:text-accent transition-all duration-300">
                      {project.title}
                    </h2>
                    {/* Project Description */}
                    <p className="text-white/60 text-[15px] leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Bottom Details container */}
                  <div className="flex flex-col gap-4">
                    {/* Stack Badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item, index) => {
                        return (
                          <span
                            key={index}
                            className="text-xs font-semibold text-accent bg-accent/5 border border-accent/20 px-3 py-1 rounded-full tracking-wide select-none"
                          >
                            {item.name}
                          </span>
                        );
                      })}
                    </div>
                    {/* Border */}
                    <div className="border-b border-white/10 w-full"></div>
                    {/* Buttons */}
                    <div className="flex items-center gap-4">
                      {/* Live Project Button */}
                      {project.live && (
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Link
                                href={project.live}
                                className="w-[54px] h-[54px] rounded-full bg-white/5 hover:bg-accent/10 border border-white/10 hover:border-accent/40 flex justify-center items-center group transition-all duration-300"
                              >
                                <BsArrowUpRight className="text-white text-2xl group-hover:text-accent transition-colors duration-300" />
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="bg-[#232329] border border-white/10 text-white text-xs px-3 py-1.5 rounded-md shadow-md">Live Project</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                      {/* Github Project Button */}
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              href={project.github}
                              className="w-[54px] h-[54px] rounded-full bg-white/5 hover:bg-accent/10 border border-white/10 hover:border-accent/40 flex justify-center items-center group transition-all duration-300"
                            >
                              <BsGithub className="text-white text-2xl group-hover:text-accent transition-colors duration-300" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="bg-[#232329] border border-white/10 text-white text-xs px-3 py-1.5 rounded-md shadow-md">Github Repository</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
          {/* Swiper */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.4, ease: "easeOut" }}
            className="w-full xl:w-[50%] flex flex-col justify-center"
          >
            <div className="h-[450px] relative w-full">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                modules={[Autoplay]}
                onSwiper={setSwiperRef}
                className="h-full w-full rounded-2xl"
                onSlideChange={handleSlideChange}
              >
                {projects.map((proj, idx) => {
                  return (
                    <SwiperSlide key={idx} className="w-full h-full">
                      <div className="h-full w-full relative group flex justify-center items-center bg-[#18181b]/80 border border-white/10 rounded-2xl overflow-hidden p-4 flex-col gap-3 shadow-2xl">
                        {/* Mock Browser Header */}
                        <div className="w-full flex items-center justify-between border-b border-white/10 pb-2 mb-1 shrink-0">
                          <div className="flex gap-1.5 items-center">
                            <span className="w-2 h-2 rounded-full bg-[#ff5f56]"></span>
                            <span className="w-2 h-2 rounded-full bg-[#ffbd2e]"></span>
                            <span className="w-2 h-2 rounded-full bg-[#27c93f]"></span>
                          </div>
                          {/* URL Bar */}
                          <div className="text-[10px] text-white/40 bg-white/5 px-4 py-0.5 rounded-md font-mono select-none tracking-wider max-w-[180px] sm:max-w-[260px] md:max-w-[340px] truncate border border-white/5">
                            {proj.live
                              ? proj.live.replace(/^https?:\/\//, "").replace(/\/$/, "")
                              : proj.github.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                          </div>
                          <div className="w-10"></div>
                        </div>
                        {/* Image container */}
                        <div className="relative w-full flex-1 rounded-lg overflow-hidden bg-black/10">
                          {/* Overlay */}
                          <div className="absolute top-0 bottom-0 w-full h-full bg-black/5 z-10 pointer-events-none"></div>
                          {/* Image */}
                          <Image
                            src={proj.image}
                            alt={proj.title}
                            fill
                            className="object-contain transition-all duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                {/* Slider Buttons */}
                <WorkSliderBtns
                  containerStyles="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 flex justify-between pointer-events-none px-2"
                  btnStyles="bg-black/35 hover:bg-accent/20 text-white/50 hover:text-accent border border-white/10 hover:border-accent/40 w-[28px] h-[64px] flex justify-center items-center transition-all rounded-md backdrop-blur-md shadow-lg pointer-events-auto"
                />
              </Swiper>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
