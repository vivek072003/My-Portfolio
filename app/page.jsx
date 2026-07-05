"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }}
            className="text-center xl:text-left order-2 xl:order-none"
          >
            <span className="text-[30px]">Agentic AI & Web Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent">Vivek Kumar</span>
            </h1>
            <p className="lg:text-[22px] md:text-[18px] sm:text-[15px] mb-8">
              I specialize in building intelligent Agentic AI workflows, LangChain & LangGraph systems, and full-stack web applications.
            </p>
            {/* Buttons and Social Links */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 153, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full overflow-hidden transition-all duration-300"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 py-[17px] border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300"
                >
                  <a
                    className="lg:text-[18px] md:text-[15px] sm:text-[13px]"
                    href="/assets/resume/CV.pdf"
                    download
                  >
                    Download CV
                  </a>
                  <FiDownload className="text-xl" />
                </Button>
              </motion.div>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles={"flex gap-6"}
                  iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.4, ease: "easeOut" }}
            className="order-1 xl:order-none mb-8 xl:mb-0"
          >
            <Photo />
          </motion.div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
