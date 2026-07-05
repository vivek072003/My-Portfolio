"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
// components
import Stairs from "./Stairs";
const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div key={pathname} className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none z-50">
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-50 flex">
            <Stairs />
          </div>
          <motion.div
            className="h-screen w-screen fixed top-0 bg-primary pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
