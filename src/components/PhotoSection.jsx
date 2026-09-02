import { motion } from "framer-motion";
import { useState } from "react";
import { invitationConfig } from "../config/invitation";

const PhotoSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageUrl = `${import.meta.env.BASE_URL}images/${invitationConfig.image}`;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <motion.div
      className="photo-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="photo-frame"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.img
          src={imageUrl}
          alt="Zarina Khakhimovna"
          className="photo-image"
          onLoad={handleImageLoad}
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        <motion.div
          className="photo-glow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.25 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </motion.div>

      <motion.div
        className="photo-caption"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p>Zarina Khakhimovna</p>
      </motion.div>
    </motion.div>
  );
};

export default PhotoSection;
