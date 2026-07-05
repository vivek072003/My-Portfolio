"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Building fast, secure, and fully responsive full-stack applications using Next.js, React, Node.js, and modern database ecosystems.",
    href: "#",
  },
  {
    num: "02",
    title: "Agentic AI",
    description: "Designing intelligent AI agents and multi-agent workflows using LangChain, LangGraph, CrewAI, and custom RAG pipelines.",
    href: "#",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description: "Designing modern, minimalist, and responsive user interfaces featuring clean typography, glassmorphism aesthetics, and smooth animations.",
    href: "#",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.15, duration: 0.3, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]"
        >
          {services.map((service, index) => {
            return (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.25 + index * 0.06, duration: 0.4, ease: "easeOut" },
                }}
                className="flex-1 flex flex-col justify-between gap-6 group bg-[#232329]/30 hover:bg-[#232329]/70 border border-white/5 hover:border-accent/40 p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-accent/5 min-h-[280px]"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[54px] h-[54px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-2xl text-primary transition-colors duration-300" />
                  </Link>
                </div>
                {/* title & desc container */}
                <div className="flex flex-col gap-3">
                  <h2 className="text-[28px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                    {service.title}
                  </h2>
                  <p className="text-white/60 text-[15px] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
