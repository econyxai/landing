import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-6xl font-bold text-white mb-6"
        >
          Powering the Future of
          <span className="bg-gradient-to-r from-[#00F0FF] to-[#6E00FF] text-transparent bg-clip-text">
            {" "}Token Economies
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto"
        >
          Unleash the potential of AI-driven economic systems with autonomous agent networks
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#6E00FF] hover:bg-[#5500cc] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
        >
          Join the Revolution
        </motion.button>
      </div>
    </div>
  );
}