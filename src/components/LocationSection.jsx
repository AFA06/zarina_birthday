import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { invitationConfig } from "../config/invitation";

const LocationSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <motion.div
      className="location-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        className="location-icon"
        variants={itemVariants}
        initial={{ scale: 0, rotate: -15 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <MapPin size={28} strokeWidth={1.5} />
      </motion.div>

      <motion.h2 className="location-venue" variants={itemVariants}>
        {invitationConfig.venue}
      </motion.h2>

      <motion.p className="location-city" variants={itemVariants}>
        {invitationConfig.city}
      </motion.p>

      <motion.div className="location-divider" variants={itemVariants} />

      <motion.div className="location-datetime" variants={itemVariants}>
        <p className="date">{invitationConfig.date}</p>
        <p className="time">{invitationConfig.time}</p>
      </motion.div>

      <motion.div className="location-buttons" variants={itemVariants}>
        <motion.a
          href={invitationConfig.yandexMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="map-button"
          whileHover={{ 
            scale: 1.02,
            borderColor: "rgba(201, 169, 98, 0.5)",
            backgroundColor: "rgba(201, 169, 98, 0.05)"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <span>OPEN IN YANDEX MAPS</span>
          <ExternalLink size={16} strokeWidth={1.5} />
        </motion.a>

        <motion.a
          href={invitationConfig.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="map-button"
          whileHover={{ 
            scale: 1.02,
            borderColor: "rgba(201, 169, 98, 0.5)",
            backgroundColor: "rgba(201, 169, 98, 0.05)"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <span>OPEN IN GOOGLE MAPS</span>
          <ExternalLink size={16} strokeWidth={1.5} />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default LocationSection;
