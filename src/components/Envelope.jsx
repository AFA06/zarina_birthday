import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Envelope = ({ onOpen, isOpen }) => {
  const [isHovered, setIsHovered] = useState(false);

  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 - 50,
    delay: Math.random() * 0.5,
  }));

  return (
    <div className="envelope-container">
      <motion.div
        className="envelope-wrapper"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.p
          className="invitation-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
        >
          A SPECIAL INVITATION
        </motion.p>

        <motion.button
          className="envelope-button"
          onClick={onOpen}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: isOpen ? 1 : 1.015 }}
          whileTap={{ scale: isOpen ? 1 : 0.985 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          aria-label="Open invitation envelope"
        >
          <motion.div
            className="envelope"
            animate={{
              boxShadow: isHovered && !isOpen
                ? "0 0 30px rgba(201, 169, 98, 0.15), 0 20px 60px rgba(0, 0, 0, 0.6)"
                : "0 20px 60px rgba(0, 0, 0, 0.5)",
            }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="envelope-back"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            />

            <motion.div
              className="envelope-card"
              initial={{ y: 0, rotateX: 0 }}
              animate={{
                y: isOpen ? -180 : 0,
                rotateX: isOpen ? -12 : 0,
                zIndex: isOpen ? 20 : 1,
              }}
              transition={{
                duration: 1.4,
                ease: [0.25, 0.1, 0.25, 1],
                delay: isOpen ? 0.1 : 0,
              }}
            >
              <div className="card-inner">
                <div className="card-decoration" />
                <p className="card-text">You're Invited</p>
              </div>
            </motion.div>

            <motion.div
              className="envelope-flap"
              initial={{ rotateX: 0 }}
              animate={{ rotateX: isOpen ? -175 : 0 }}
              transition={{
                duration: 0.9,
                ease: [0.25, 0.1, 0.25, 1],
                delay: isOpen ? 0 : 0,
              }}
              style={{ transformOrigin: "top center" }}
            >
              <div className="flap-inner" />
            </motion.div>

            <motion.div
              className="envelope-front"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            />

            <motion.div
              className="envelope-edge-glow"
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 0.4 : isHovered ? 0.2 : 0 }}
              transition={{ duration: 0.6, delay: isOpen ? 0.3 : 0 }}
            />

            <motion.div
              className="envelope-glow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isOpen ? 0.5 : 0, scale: isOpen ? 1.2 : 0.8 }}
              transition={{ duration: 1.8, delay: isOpen ? 0.4 : 0 }}
            />

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="envelope-particles"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  {particles.map((particle) => (
                    <motion.div
                      key={particle.id}
                      className="particle"
                      initial={{ 
                        x: 0, 
                        y: 0, 
                        opacity: 0,
                        scale: 0 
                      }}
                      animate={{
                        x: particle.x,
                        y: particle.y - 100,
                        opacity: [0, 0.6, 0],
                        scale: [0, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        delay: particle.delay,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {!isOpen && (
                <motion.p
                  className="tap-to-open"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 1.7, duration: 0.6 }}
                >
                  TAP TO OPEN
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Envelope;
