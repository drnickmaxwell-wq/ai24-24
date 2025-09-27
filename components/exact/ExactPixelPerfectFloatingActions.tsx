'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function ExactPixelPerfectFloatingActions() {
  const [isIssuesExpanded, setIsIssuesExpanded] = useState(false);

  return (
    <>
      {/* Issues Badge - Bottom Left (EXACT positioning from screenshot) */}
      <motion.div
        className="fixed z-50"
        style={{
          bottom: '24px',
          left: '24px',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.button
          onClick={() => setIsIssuesExpanded(!isIssuesExpanded)}
          className="flex items-center space-x-2 px-4 py-2 rounded-full shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #FF3B30 0%, #D70015 100%)',
            color: 'white',
            fontSize: '14px',
            fontWeight: '600',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span 
            className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
          >
            N
          </span>
          <span>3 Issues</span>
          <motion.span
            animate={{ rotate: isIssuesExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            ×
          </motion.span>
        </motion.button>
      </motion.div>

      {/* Right Side Action Buttons - EXACT positioning from screenshot */}
      <div className="fixed right-6 z-50" style={{ top: '50%', transform: 'translateY(-50%)' }}>
        <div className="flex flex-col space-y-4">
          
          {/* Emergency Button - EXACT styling from screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
            className="flex items-center space-x-3"
          >
            <div 
              className="px-4 py-3 rounded-xl shadow-lg text-sm font-semibold"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                color: '#1F2937',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              Emergency: 01273 453109
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #FF3B30 0%, #D70015 100%)',
                color: 'white',
              }}
            >
              <span className="text-xl">📞</span>
            </motion.button>
          </motion.div>

          {/* Quick Actions Button - EXACT styling from screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7 }}
            className="flex items-center space-x-3"
          >
            <div 
              className="px-4 py-3 rounded-xl shadow-lg text-sm font-semibold"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                color: '#1F2937',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              Quick Actions
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #40C4B4 0%, #2D7D7A 100%)',
                color: 'white',
              }}
            >
              <span className="text-xl">⚡</span>
            </motion.button>
          </motion.div>

          {/* Open Today Button - EXACT styling from screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.9 }}
            className="flex items-center space-x-3"
          >
            <div 
              className="px-4 py-3 rounded-xl shadow-lg text-sm font-semibold"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                color: '#1F2937',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <div>Open Today</div>
              <div className="text-xs opacity-70">9AM-5PM</div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                color: '#1F2937',
                border: '2px solid rgba(0, 0, 0, 0.1)',
              }}
            >
              <span className="text-xl">🕒</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
}
