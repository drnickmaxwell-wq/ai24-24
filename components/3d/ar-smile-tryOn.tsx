'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Smile, Sparkles, RotateCcw, Download, Share2 } from 'lucide-react';
import { LuxuryButton } from '@/components/ui/luxury-button';
import { LuxuryCard, LuxuryCardContent, LuxuryCardHeader, LuxuryCardTitle } from '@/components/ui/luxury-card';

interface SmileOption {
  id: string;
  name: string;
  description: string;
  preview: string;
  category: 'veneers' | 'whitening' | 'orthodontics' | 'implants';
}

const smileOptions: SmileOption[] = [
  {
    id: 'hollywood-veneers',
    name: 'Hollywood Veneers',
    description: 'Perfect white, symmetrical smile',
    preview: '/images/smiles/hollywood.jpg',
    category: 'veneers'
  },
  {
    id: 'natural-white',
    name: 'Natural White',
    description: 'Subtle whitening enhancement',
    preview: '/images/smiles/natural.jpg',
    category: 'whitening'
  },
  {
    id: 'perfect-alignment',
    name: 'Perfect Alignment',
    description: 'Straightened and aligned teeth',
    preview: '/images/smiles/aligned.jpg',
    category: 'orthodontics'
  },
  {
    id: 'full-restoration',
    name: 'Full Restoration',
    description: 'Complete smile makeover',
    preview: '/images/smiles/restoration.jpg',
    category: 'implants'
  }
];

interface ARSmileTryOnProps {
  className?: string;
  onCapture?: (imageData: string) => void;
  onShare?: (imageData: string) => void;
}

export function ARSmileTryOn({ 
  className = '',
  onCapture,
  onShare 
}: ARSmileTryOnProps) {
  const [isActive, setIsActive] = useState(false);
  const [selectedSmile, setSelectedSmile] = useState<SmileOption | null>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    return () => {
      // Cleanup camera stream on unmount
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { 
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: 'user'
        }
      });
      
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setHasPermission(true);
      setIsActive(true);
    } catch (error) {
      console.error('Camera access denied:', error);
      setHasPermission(false);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setIsActive(false);
  };

  const capturePhoto = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    setIsCapturing(true);
    
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      // Draw video frame
      ctx.drawImage(video, 0, 0);
      
      // Add smile overlay if selected
      if (selectedSmile) {
        // This would integrate with actual AR/ML smile detection
        // For now, we'll add a simple overlay
        ctx.fillStyle = 'rgba(64, 196, 180, 0.1)';
        ctx.fillRect(0, canvas.height * 0.6, canvas.width, canvas.height * 0.3);
        
        ctx.font = '24px Arial';
        ctx.fillStyle = '#40C4B4';
        ctx.textAlign = 'center';
        ctx.fillText(selectedSmile.name, canvas.width / 2, canvas.height * 0.9);
      }
      
      const imageData = canvas.toDataURL('image/jpeg', 0.9);
      
      if (onCapture) {
        onCapture(imageData);
      }
    }
    
    setTimeout(() => setIsCapturing(false), 500);
  };

  const shareResult = () => {
    if (canvasRef.current) {
      const imageData = canvasRef.current.toDataURL('image/jpeg', 0.9);
      if (onShare) {
        onShare(imageData);
      }
    }
  };

  return (
    <LuxuryCard className={`overflow-hidden ${className}`}>
      <LuxuryCardHeader>
        <LuxuryCardTitle className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-brand-turquoise" />
          AR Smile Try-On
        </LuxuryCardTitle>
      </LuxuryCardHeader>

      <LuxuryCardContent className="space-y-6">
        {/* Camera View */}
        <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
          {!isActive ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-magenta to-brand-turquoise rounded-full flex items-center justify-center mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-brand-text mb-2">
                Try Your New Smile
              </h3>
              <p className="text-brand-muted mb-4">
                Use your camera to see how different treatments would look on you
              </p>
              <LuxuryButton
                variant="primary"
                onClick={startCamera}
                disabled={hasPermission === false}
              >
                {hasPermission === false ? 'Camera Access Denied' : 'Start Camera'}
              </LuxuryButton>
            </div>
          ) : (
            <>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
              />
              
              {/* AR Overlay */}
              {selectedSmile && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <div className="text-sm font-medium text-brand-text">
                      {selectedSmile.name}
                    </div>
                    <div className="text-xs text-brand-muted">
                      {selectedSmile.description}
                    </div>
                  </div>
                </div>
              )}

              {/* Camera Controls */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={capturePhoto}
                  disabled={isCapturing}
                  className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                >
                  <Camera className="w-6 h-6 text-brand-text" />
                </motion.button>
                
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={stopCamera}
                  className="w-12 h-12 bg-red-500/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-red-500 transition-colors"
                >
                  <RotateCcw className="w-6 h-6 text-white" />
                </motion.button>
              </div>
            </>
          )}
        </div>

        {/* Smile Options */}
        <div className="space-y-4">
          <h4 className="font-semibold text-brand-text">Choose Your Smile</h4>
          <div className="grid grid-cols-2 gap-3">
            {smileOptions.map((smile) => (
              <motion.button
                key={smile.id}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedSmile(smile)}
                className={`p-3 rounded-lg border-2 transition-all text-left ${
                  selectedSmile?.id === smile.id
                    ? 'border-brand-turquoise bg-brand-turquoise/10'
                    : 'border-gray-200 hover:border-brand-turquoise/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-brand-magenta/20 to-brand-turquoise/20 rounded-lg flex items-center justify-center">
                    <Smile className="w-5 h-5 text-brand-turquoise" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-brand-text text-sm">
                      {smile.name}
                    </div>
                    <div className="text-xs text-brand-muted truncate">
                      {smile.description}
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <LuxuryButton
            variant="outline"
            className="flex-1"
            onClick={shareResult}
            disabled={!selectedSmile}
          >
            <Share2 className="w-4 h-4" />
            Share Result
          </LuxuryButton>
          
          <LuxuryButton
            variant="primary"
            className="flex-1"
            disabled={!selectedSmile}
          >
            <Download className="w-4 h-4" />
            Book Consultation
          </LuxuryButton>
        </div>

        {/* Hidden canvas for capture */}
        <canvas
          ref={canvasRef}
          className="hidden"
        />

        {/* Capture Flash Effect */}
        <AnimatePresence>
          {isCapturing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white pointer-events-none z-50"
            />
          )}
        </AnimatePresence>
      </LuxuryCardContent>
    </LuxuryCard>
  );
}

// Simplified version for mobile
export function MobileSmileTryOn(props: ARSmileTryOnProps) {
  return (
    <div className="lg:hidden">
      <ARSmileTryOn {...props} />
    </div>
  );
}

// Desktop version with enhanced features
export function DesktopSmileTryOn(props: ARSmileTryOnProps) {
  return (
    <div className="hidden lg:block">
      <ARSmileTryOn {...props} />
    </div>
  );
}

