import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Heart, Eye, EyeOff } from "lucide-react";

interface PasswordScreenProps {
  onCorrectPassword?: () => void;
  isOpen?: boolean;
}

const PasswordScreen = ({
  onCorrectPassword = () => {},
  isOpen = true,
}: PasswordScreenProps) => {
  const [password, setPassword] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const correctPassword = "ILOVEYOU";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toUpperCase() === correctPassword) {
      onCorrectPassword();
    } else {
      setShowHint(true);
      setPassword("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      className="absolute inset-0 bg-gradient-to-br from-[#8D53AE]/90 to-[#801E5A]/90 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative bg-gradient-to-br from-[#8D53AE] to-[#801E5A] p-4 sm:p-8 rounded-xl shadow-xl w-full max-w-2xl mx-auto"
      >
        <motion.div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart
            className="w-16 h-16 sm:w-20 sm:h-20 text-pink-400"
            fill="#EC4899"
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {"🥰"}
          </motion.div>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-4 mt-10 sm:mt-12">
          <div className="relative">
            <div className="flex items-center justify-center gap-2 sm:gap-4">
              <div className="grid grid-cols-8 gap-1.5 xs:gap-2 sm:gap-3">
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 border-2 border-pink-400 rounded-lg flex items-center justify-center text-white text-sm xs:text-base sm:text-xl font-medium bg-pink-500/20 relative overflow-hidden cursor-pointer shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.7)]"
                    style={{ backdropFilter: "blur(8px)" }}
                    onClick={() => {
                      const element = document.getElementById("hidden-input");
                      if (element) {
                        element.focus();
                        const box = document.activeElement;
                        if (box instanceof HTMLInputElement) {
                          box.setSelectionRange(
                            box.value.length,
                            box.value.length,
                          );
                        }
                      }
                    }}
                  >
                    {showPassword ? password[i] || "" : password[i] ? "*" : ""}
                  </motion.div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-pink-300 hover:text-pink-200 transition-colors ml-1 sm:ml-2"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <input
              id="hidden-input"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value.toUpperCase())}
              maxLength={8}
              className="opacity-0 absolute -z-10"
              autoFocus
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full p-2 sm:p-2.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg font-bold hover:opacity-90 transition-opacity mt-4"
          >
            Submit
          </motion.button>

          {showHint && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-pink-300 text-center text-sm mt-2"
            >
              Hint: MAHALKITA 💝
            </motion.p>
          )}
        </form>
      </motion.div>
    </motion.div>
  );
};

export default PasswordScreen;
