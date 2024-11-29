import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLinks } from './NavLinks';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 text-gray-300 hover:text-[#00F0FF] focus:outline-none focus:ring-2 focus:ring-[#00F0FF] rounded-md"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-0 right-0 bg-[#0A0A0A] border-b border-gray-800 shadow-lg"
          >
            <div className="px-6 py-6 space-y-6">
              <NavLinks className="flex flex-col space-y-6" />
              <button className="w-full bg-[#6E00FF] hover:bg-[#5500cc] text-white px-6 py-3 rounded-md transition-colors text-sm font-medium">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}