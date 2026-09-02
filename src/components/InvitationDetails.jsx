import { motion } from "framer-motion";
import { invitationConfig } from "../config/invitation";

const InvitationDetails = ({ guestName }) => {
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

  return (
    <motion.div
      className="invitation-details"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {guestName ? (
        <motion.p className="guest-greeting" variants={itemVariants}>
          Dear {guestName},
        </motion.p>
      ) : (
        <motion.p className="guest-greeting" variants={itemVariants}>
          You're Invited,
        </motion.p>
      )}

      <motion.h2 className="invitation-title" variants={itemVariants}>
        YOU ARE WARMLY INVITED
      </motion.h2>

      <motion.p className="invitation-subtitle" variants={itemVariants}>
        to celebrate
      </motion.p>

      <motion.p className="invitation-name" variants={itemVariants}>
        {invitationConfig.name}'s {invitationConfig.age}th Birthday
      </motion.p>

      <motion.div className="invitation-divider" variants={itemVariants} />

      <motion.div className="invitation-datetime" variants={itemVariants}>
        <p className="date">{invitationConfig.date}</p>
        <p className="time">{invitationConfig.time}</p>
      </motion.div>
    </motion.div>
  );
};

export default InvitationDetails;
