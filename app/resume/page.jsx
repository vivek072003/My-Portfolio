"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaBrain,
  FaRobot,
  FaNetworkWired,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiFastapi,
  SiJupyter,
  SiOpenai,
  SiPytorch,
  SiTensorflow,
} from "react-icons/si";
// Experience Data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Software Developer & Agentic AI Engineer with internship experience, passionate about building intelligent systems and full-stack web applications.",
  items: [
    {
      name: "Web Development Intern",
      approval: "Navodita Infotech",
      date: "Jun 2025 - July 2025",
    },
    {
      name: "Software & AI Developer (Fresher)",
      approval: "Self-Employed / Personal Projects",
      date: "Aug 2025 - Present",
    },
  ],
};

// About Data
const about = {
  title: "About Me",
  description:
    "Here is a brief description of myself. It's all about engaging with me or reaching out.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Vivek Kumar",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91-7070563733",
    },
    {
      fieldName: "Experience",
      fieldValue: "Fresher",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "vivekmicromax2005@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
  ],
};

// Education Data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Pursuing Bachelor of Technology in Computer Science from Heritage Institute of Technology, Kolkata, a 4th Year Student.",
  items: [
    {
      degree: "Bachelor of Technology (CSE)",
      institution: "Heritage Institute of Technology, Kolkata",
      duration: "2022 - 2026",
    },
    {
      degree: "Intermediate (CBSE Class XII)",
      institution: "D.A.V School, Bihar, India",
      duration: "2021 - 2022",
    },
  ],
};

// Skills Data
const skills = {
  title: "My Skills",
  description:
    "Proficient in building LLM pipelines, Agentic AI architectures, RAG systems, and full-stack web applications.",
  skillList: [
    {
      name: "Python",
      icon: <FaPython />,
    },
    {
      name: "LangChain",
      icon: <FaBrain />,
    },
    {
      name: "LangGraph",
      icon: <FaNetworkWired />,
    },
    {
      name: "Generative AI & LLMs",
      icon: <SiOpenai />,
    },
    {
      name: "Agentic AI",
      icon: <FaRobot />,
    },
    {
      name: "FastAPI",
      icon: <SiFastapi />,
    },
    {
      name: "Jupyter Notebook",
      icon: <SiJupyter />,
    },
    {
      name: "PyTorch",
      icon: <SiPytorch />,
    },
    {
      name: "TensorFlow",
      icon: <SiTensorflow />,
    },
    {
      name: "Vector Databases",
      icon: <FaDatabase />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
  ],
};
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.1, duration: 0.3, ease: "easeOut" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[20px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329]/40 hover:bg-[#232329]/80 border border-white/5 hover:border-accent/40 transition-all duration-300 py-6 px-10 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group"
                        >
                          <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                              {item.name}
                            </h3>
                            <div className="flex items-center gap-2">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60 font-medium">{item.approval}</p>
                            </div>
                          </div>
                          <span className="text-accent bg-accent/10 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider self-start md:self-center border border-accent/20">
                            {item.date}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[20px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329]/40 hover:bg-[#232329]/80 border border-white/5 hover:border-accent/40 transition-all duration-300 py-6 px-10 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group"
                        >
                          <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-2">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60 font-medium">{item.institution}</p>
                            </div>
                          </div>
                          <span className="text-accent bg-accent/10 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider self-start md:self-center border border-accent/20">
                            {item.duration}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 xl:gap-[20px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.15 + index * 0.02, ease: "easeOut", duration: 0.25 }}
                          whileHover={{ y: -4, scale: 1.05 }}
                        >
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[120px] bg-[#232329]/40 hover:bg-[#232329]/80 border border-white/5 hover:border-accent/40 rounded-2xl flex flex-col items-center justify-center gap-3 group transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                                <div className="text-4xl group-hover:text-accent transition-all duration-300 group-hover:scale-110">
                                  {skill.icon}
                                </div>
                                <span className="text-[13px] text-white/50 group-hover:text-white transition-colors duration-300 font-medium capitalize">
                                  {skill.name}
                                </span>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </motion.li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-y-4 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 + index * 0.03, ease: "easeOut", duration: 0.3 }}
                          whileHover={{ x: 6 }}
                          className="flex flex-col sm:flex-row items-center sm:items-start justify-center xl:justify-start gap-2 sm:gap-6 bg-[#232329]/20 hover:bg-[#232329]/50 border border-white/5 p-4 rounded-xl transition-all duration-300 group"
                        >
                          <span className="text-white/50 font-medium sm:w-[120px] shrink-0 text-center sm:text-left group-hover:text-accent transition-colors duration-300">
                            {item.fieldName}
                          </span>
                          <span className="text-lg font-semibold text-white">
                            {item.fieldValue}
                          </span>
                        </motion.li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
