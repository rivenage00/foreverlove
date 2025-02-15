import React from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import EnvelopeCard from "./EnvelopeCard";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-[#8D53AE] relative overflow-hidden">
      {/* Background with floating hearts */}
      <AnimatedBackground />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="relative mb-8">
          <div className="relative">
            {"For my Valentine".split("").map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block text-4xl md:text-5xl font-bold text-pink-200"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Responsive container for the envelope */}
        <div className="w-full max-w-[600px] aspect-[3/2] relative">
          <EnvelopeCard />
        </div>

        {/* Footer text */}
        <p className="text-white/80 mt-8 text-center text-sm md:text-base">
          Click the envelope to reveal your special message 💝
        </p>

        {/* Creator credit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-4 left-0 right-0 text-center text-white/60 text-sm font-light"
        >
          Created with 💖 by znarf
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
