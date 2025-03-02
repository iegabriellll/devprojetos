"use client";

import { motion } from "framer-motion";

// Crie seu próprio componente AuroraBackground inline para resolver o problema de importação
const AuroraBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-teal-600/20 blur-3xl" />
      </div>
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <h1 className="text-3xl md:text-7xl font-bold text-white text-center">
          Background lights are cool you know.
        </h1>
        <p className="font-extralight text-base md:text-4xl text-neutral-200 py-4">
          And this, is chemical burn.
        </p>
        <button 
          className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
        >
          Debug now
        </button>
      </motion.div>
    </AuroraBackground>
  );
}