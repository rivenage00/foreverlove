import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";

interface SuccessModalProps {
  open?: boolean;
  onClose?: () => void;
}

const SuccessModal = ({
  open = true,
  onClose = () => {},
}: SuccessModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-[#8D53AE] to-[#801E5A] text-white p-8 rounded-2xl max-w-md mx-auto relative overflow-hidden">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mb-6"
          >
            <Heart
              className="w-16 h-16 mx-auto text-pink-200"
              fill="currentColor"
            />
          </motion.div>

          <h2 className="text-2xl font-bold mb-4">You Made My Day! ❤️</h2>
          <p className="mb-6 text-pink-100">
            Thank you for saying yes! You&apos;ve made this moment absolutely
            perfect.
          </p>

          <div className="relative">
            {Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [1, 2],
                  opacity: [0.7, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.4,
                  ease: "easeOut",
                }}
              >
                <Heart
                  className="w-8 h-8 mx-auto text-pink-300"
                  fill="currentColor"
                />
              </motion.div>
            ))}
          </div>

          <Button
            onClick={onClose}
            className="mt-8 bg-white text-[#801E5A] hover:bg-pink-100 transition-colors"
          >
            Close with Love
          </Button>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
