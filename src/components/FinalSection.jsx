import { motion } from "framer-motion";
import { invitationConfig } from "../config/invitation";

const FinalSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const formatDate = (dateString) => {
    const date = new Date(invitationConfig.eventDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day} · ${month} · ${year}`;
  };

  return (
    <motion.div
      className="final-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.p className="final-message" variants={itemVariants}>
        Can't wait to celebrate with you.
      </motion.p>

      <motion.p className="final-venue" variants={itemVariants}>
        See you at Marina.
      </motion.p>

      <motion.div className="final-divider" variants={itemVariants} />

      <motion.p className="final-date" variants={itemVariants}>
        {formatDate()}
      </motion.p>

      <motion.div
        className="final-decoration"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
      >
        <motion.div
          className="decoration-glow"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default FinalSection;
