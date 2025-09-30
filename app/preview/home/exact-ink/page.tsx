'use client';


import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ExactLoadingScreen } from '@/components/exact/ExactLoadingScreen';
import ExactHomepage from '@/components/exact/ExactHomepage';

export default function ExactHomepageInkPreview() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <AnimatePresence>
        {isLoading && <ExactLoadingScreen />}
      </AnimatePresence>
      
      {!isLoading && <ExactHomepage />}
    </div>
  );
}

  

