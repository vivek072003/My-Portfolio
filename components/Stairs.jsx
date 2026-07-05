import { motion } from "framer-motion";

// variants

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// Calculate the reverse index for staggered delays
const reverseIndex = (index) => {
  const totalSteps = 6; // Total number of steps in the stairs
  return totalSteps - index - 1;
};
const Stairs = () => {
  return (
    <>
      {/* Render 6 motion divs, each representing a step of the stairs, Each div has same animation defined by the stairsAnimation object.
      The delay for each div is calculated dynamically based on it's  reversed index.
      Creating a staggered effecct with each decresing delay for each subsequent step.
      */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            className="w-full h-full bg-white relative"
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.35,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.05,
            }}
          />
        );
      })}
    </>
  );
};

export default Stairs;
