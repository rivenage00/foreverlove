import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface AnimatedBackgroundProps {
  colors?: string[];
  numHearts?: number;
}

const AnimatedBackground = ({
  colors = ["#8D53AE", "#801E5A", "#098FEE", "#807551", "#7BB1EE"],
  numHearts = 20,
}: AnimatedBackgroundProps) => {
  return (
    <div className="fixed inset-0 overflow-hidden bg-gradient-to-br from-[#8D53AE] to-[#801E5A]">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20" />

      {/* Floating hearts */}
      {Array.from({ length: numHearts }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [
              Math.random() * window.innerHeight,
              -100,
              Math.random() * window.innerHeight,
            ],
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Heart
            className="w-6 h-6"
            fill={colors[index % colors.length]}
            fillOpacity={0.3}
            stroke={colors[index % colors.length]}
          />
        </motion.div>
      ))}

      {/* Additional floating particles */}
      {Array.from({ length: 10 }).map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: colors[index % colors.length],
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.3,
          }}
          animate={{
            y: [
              Math.random() * window.innerHeight,
              -50,
              Math.random() * window.innerHeight,
            ],
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
