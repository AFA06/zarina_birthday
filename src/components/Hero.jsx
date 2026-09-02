import { motion } from "framer-motion";
import { invitationConfig } from "../config/invitation";

const Hero = () => {
  const nameVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const ageVariants = {
    hidden: { opacity: 0, scale: 0.85, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 1 },
    },
  };

  const decorationVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1], delay: 1.3 },
    },
  };

  return (
    <motion.div
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <motion.h1
        className="hero-name"
        variants={nameVariants}
        initial="hidden"
        animate="visible"
      >
        {invitationConfig.name.toUpperCase()}
      </motion.h1>

      <motion.div
        className="hero-age-wrapper"
        variants={ageVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="hero-age">{invitationConfig.age}</motion.h2>
        <motion.div
          className="age-glow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.35, scale: 1 }}
          transition={{ delay: 1.6, duration: 2.5, ease: "easeOut" }}
        />
      </motion.div>

      <motion.p
        className="hero-subtitle"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        IS TURNING EIGHTEEN
      </motion.p>

      <motion.div
        className="hero-decoration"
        variants={decorationVariants}
        initial="hidden"
        animate="visible"
      />
    </motion.div>
  );
};

export default Hero;
