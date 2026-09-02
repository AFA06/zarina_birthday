import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Envelope from "./components/Envelope";
import Hero from "./components/Hero";
import InvitationDetails from "./components/InvitationDetails";
import Countdown from "./components/Countdown";
import PhotoSection from "./components/PhotoSection";
import LocationSection from "./components/LocationSection";
import FinalSection from "./components/FinalSection";
import MusicButton from "./components/MusicButton";
import "./App.css";

function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const guestParam = urlParams.get("guest");
    if (guestParam) {
      try {
        setGuestName(decodeURIComponent(guestParam));
      } catch (e) {
        console.error("Error decoding guest parameter:", e);
      }
    }
  }, []);

  const handleEnvelopeOpen = () => {
    setIsEnvelopeOpen(true);
  };

  return (
    <div className="app">
      <MusicButton shouldPlay={isEnvelopeOpen} />

      <AnimatePresence mode="wait">
        {!isEnvelopeOpen ? (
          <motion.div
            key="envelope"
            className="screen envelope-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Envelope onOpen={handleEnvelopeOpen} isOpen={isEnvelopeOpen} />
          </motion.div>
        ) : (
          <motion.div
            key="main-content"
            className="screen main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Hero />
            <InvitationDetails guestName={guestName} />
            <Countdown />
            <PhotoSection />
            <LocationSection />
            <FinalSection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
