
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Hamburger Component
interface HamburgerProps {
  menuItems?: string[];
}

function Hamburger({ menuItems = ['home', 'about', 'projects', 'contact'] }: HamburgerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Animated Background Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ 
              scale: 60,
              transition: {
                duration: 0.6,
                ease: [0.43, 0.13, 0.23, 0.96]
              }
            }}
            exit={{ 
              scale: 0,
              transition: {
                duration: 0.5,
                ease: [0.43, 0.13, 0.23, 0.96]
              }
            }}
            className="fixed bottom-8 right-3 w-12 h-12 rounded-full bg-accent-foreground origin-center z-40"
            style={{ transformOrigin: 'center' }}
          />
        )}
      </AnimatePresence>

      {/* Menu Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { delay: 0.3, duration: 0.3 }
            }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.2 }
            }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <nav className="text-center">
              <ul className="space-y-8 capitalize">
                {menuItems.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: 0.4 + i * 0.1 }
                    }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <Link 
                      href={`${item === 'home' ? '/' : item}`}
                      onClick={() => toggleMenu()}
                      className="text-4xl font-bold text-accent transition-colors"
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="fixed bottom-8 right-3 w-12 h-12 rounded-full bg-accent-foreground flex items-center justify-center z-50 shadow-lg"
        aria-label="Toggle menu"
      >
        <div className="w-7 h-5 flex flex-col justify-between relative">
          {/* Top Line */}
          <motion.span
            animate={isOpen ? {
              rotate: 45,
              y: 8
            } : {
              rotate: 0,
              y: 0
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="block h-0.5 bg-accent w-full rounded"
          />
          
          {/* Middle Line */}
          <motion.span
            animate={isOpen ? {
              opacity: 0,
              x: -20
            } : {
              opacity: 1,
              x: 0
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="block h-0.5 bg-accent w-full rounded"
          />
          
          {/* Bottom Line */}
          <motion.span
            animate={isOpen ? {
              rotate: -45,
              y: -8
            } : {
              rotate: 0,
              y: 0
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="block h-0.5 bg-accent w-full rounded"
          />
        </div>
      </button>
    </>
  );
}
export default Hamburger;