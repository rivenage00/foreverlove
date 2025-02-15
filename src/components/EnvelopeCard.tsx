import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./ui/card";
import PasswordScreen from "./PasswordScreen";
import MessageContent from "./MessageContent";
import { Heart, Sparkles } from "lucide-react";

interface EnvelopeCardProps {
  isOpen?: boolean;
}

const EnvelopeCard = ({ isOpen = false }: EnvelopeCardProps) => {
  const [envelopeState, setEnvelopeState] = useState<
    "closed" | "opening" | "password" | "message"
  >("closed");

  const handleEnvelopeClick = () => {
    if (envelopeState === "closed") {
      setEnvelopeState("opening");
      setTimeout(() => setEnvelopeState("password"), 1000);
    }
  };

  const handleCorrectPassword = () => {
    setEnvelopeState("message");
  };

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#8D53AE] to-[#801E5A] rounded-lg shadow-xl overflow-hidden">
      <motion.div
        className="w-full h-full"
        animate={{
          rotateX: envelopeState === "opening" ? -180 : 0,
        }}
        transition={{ duration: 1 }}
      >
        {/* Envelope Front */}
        <Card
          className={`absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500 cursor-pointer
            ${envelopeState === "closed" ? "hover:scale-105" : ""} transition-transform duration-300 border-2 sm:border-4 border-pink-200/30`}
          onClick={handleEnvelopeClick}
        >
          {envelopeState === "closed" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Heart
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white"
                  fill="white"
                />
              </motion.div>
            </div>
          )}

          {/* Envelope Flap */}
          <div
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-pink-300 to-rose-300 border-b-2 sm:border-b-4 border-pink-200/30"
            style={{
              clipPath: "polygon(0 0, 50% 50%, 100% 0)",
            }}
          />
        </Card>
      </motion.div>

      {/* Password Screen with slide-up animation */}
      <AnimatePresence>
        {envelopeState === "password" && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
              delay: 0.5,
            }}
            className="absolute inset-0 z-20"
          >
            <PasswordScreen
              isOpen={true}
              onCorrectPassword={handleCorrectPassword}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Message Content */}
      <MessageContent isOpen={envelopeState === "message"} />
    </div>
  );
};

export default EnvelopeCard;
