'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';

interface CinematicHeroVideoProps {
  autoplay?: boolean;
  muted?: boolean;
  showControls?: boolean;
  className?: string;
  theme?: 'light' | 'ink';
}

export default function CinematicHeroVideo({
  autoplay = true,
  muted = true,
  showControls = true,
  className = '',
  theme = 'light'
}: CinematicHeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isMuted, setIsMuted] = useState(muted);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Video sources - multiple formats for compatibility
  const videoSources = [
    {
      src: '/videos/coastal-dental-hero-4k.mp4',
      type: 'video/mp4',
      quality: '4K',
    },
    {
      src: '/videos/coastal-dental-hero-1080p.mp4',
      type: 'video/mp4',
      quality: '1080p',
    },
    {
      src: '/videos/coastal-dental-hero-720p.mp4',
      type: 'video/mp4',
      quality: '720p',
    },
  ];

  const posterImage = '/images/hero-poster-coastal-dental.jpg';

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoading(false);
      setDuration(video.duration);
      if (autoplay) {
        video.play().catch(console.error);
      }
    };

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setShowOverlay(true);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, [autoplay]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play().catch(console.error);
      setShowOverlay(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video || !duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div 
      className={`relative w-full h-screen overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hero underlay from tokens */}
      <div className="absolute inset-0 hero-underlay -z-10" />
      
      {/* Video Element */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        poster={posterImage}
        muted={isMuted}
        playsInline
        preload="metadata"
        style={{
          aspectRatio: '21/9',
          objectFit: 'cover',
          filter: 'brightness(0.9) contrast(1.1) saturate(1.2)',
        }}
      >
        {videoSources.map((source, index) => (
          <source key={index} src={source.src} type={source.type} />
        ))}
        Your browser does not support the video tag.
      </video>

      {/* Hero mask from tokens */}
      <div className="absolute inset-0 hero-mask z-10" aria-hidden />
      
      {/* Coastal Sparkle Particles */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-[var(--turquoise)] to-[var(--gold)] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Loading State */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center theme-glass backdrop-blur-sm z-30"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-[var(--turquoise)]/30 border-t-[var(--turquoise)] rounded-full mx-auto mb-4"
              />
              <p className="text-[var(--ink)] text-lg font-light">
                Loading Coastal Experience...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Overlay Content */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-0 flex items-center justify-center text-center z-30"
          >
            <div className="max-w-4xl px-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative text-5xl md:text-7xl font-bold mb-6"
              >
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-[var(--gold)] via-[var(--gold)] to-[var(--gold)] bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                    Experience Luxury
                  </span>
                  <span className="relative text-gradient-gold">
                    Experience Luxury
                  </span>
                  {/* Diamond sparkles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-[var(--gold)] rounded-full"
                      style={{
                        left: `${10 + i * 12}%`,
                        top: `${20 + Math.sin(i) * 30}%`,
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-3xl md:text-5xl font-light mb-8 text-gradient-magenta-teal"
              >
                Coastal Dental Care
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-xl md:text-2xl font-light mb-12 text-[var(--ink-soft)] max-w-2xl mx-auto leading-relaxed"
              >
                Where advanced 3D dentistry meets the tranquil beauty of Shoreham-by-Sea. 
                Discover your perfect smile in our luxury coastal practice.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={togglePlay}
                  className="group flex items-center gap-3 px-8 py-4 grad-turquoise-teal rounded-full text-white font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-[var(--turquoise)]/25 relative overflow-hidden"
                >
                  <Play className="w-6 h-6 group-hover:scale-110 transition-transform relative z-10" />
                  <span className="relative z-10">Watch Our Story</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-3 px-8 py-4 grad-gold-pink rounded-full text-white font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-[var(--gold)]/25 relative overflow-hidden"
                >
                  <Maximize2 className="w-6 h-6 group-hover:scale-110 transition-transform relative z-10" />
                  <span className="relative z-10">Book Consultation</span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Controls */}
      <AnimatePresence>
        {showControls && (isHovered || !isPlaying) && !showOverlay && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-6 left-6 right-6 theme-glass theme-border rounded-[var(--radius)] p-4 z-30"
          >
            <div className="flex items-center gap-4">
              {/* Play/Pause Button */}
              <button
                onClick={togglePlay}
                className="flex items-center justify-center w-12 h-12 bg-[var(--turquoise)] hover:bg-[var(--turquoise)]/80 rounded-full text-white transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6 ml-1" />
                )}
              </button>

              {/* Progress Bar */}
              <div className="flex-1">
                <div
                  className="h-2 bg-[var(--ink-soft)]/20 rounded-full cursor-pointer overflow-hidden"
                  onClick={handleSeek}
                >
                  <div
                    className="h-full grad-turquoise-gold transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <div className="flex justify-between text-[var(--ink-soft)] text-sm mt-1">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Mute Button */}
              <button
                onClick={toggleMute}
                className="flex items-center justify-center w-10 h-10 text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Coastal Wave Animation at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden z-20">
        <motion.svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          animate={{
            x: [-100, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <path
            d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
            fill="url(#waveGradient)"
            opacity="0.3"
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--turquoise)" />
              <stop offset="50%" stopColor="var(--magenta)" />
              <stop offset="100%" stopColor="var(--gold)" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
    </div>
  );
}
