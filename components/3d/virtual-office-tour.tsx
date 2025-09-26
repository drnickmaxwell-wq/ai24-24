'use client';

import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  Environment, 
  Text, 
  Box, 
  Sphere, 
  Plane,
  Html,
  PerspectiveCamera
} from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { 
  MapPin, 
  Info, 
  Play, 
  Pause, 
  RotateCcw, 
  Maximize2,
  Navigation,
  Eye
} from 'lucide-react';
import { LuxuryButton } from '@/components/ui/luxury-button';
import { LoadingSpinner } from '@/components/effects/loading-animations';

interface TourPoint {
  id: string;
  name: string;
  description: string;
  position: [number, number, number];
  lookAt: [number, number, number];
  info: string[];
}

const tourPoints: TourPoint[] = [
  {
    id: 'reception',
    name: 'Reception Area',
    description: 'Welcome to our luxury coastal-themed reception',
    position: [0, 1.6, 8],
    lookAt: [0, 1, 0],
    info: [
      'Comfortable seating with sea views',
      'Digital check-in system',
      'Complimentary refreshments',
      'Relaxing coastal ambiance'
    ]
  },
  {
    id: 'consultation',
    name: 'Consultation Room',
    description: 'Private consultation with 3D imaging technology',
    position: [-5, 1.6, 3],
    lookAt: [-3, 1, 0],
    info: [
      '3D intraoral scanner',
      'Digital smile design',
      'Treatment planning software',
      'Patient education displays'
    ]
  },
  {
    id: 'treatment',
    name: 'Treatment Suite',
    description: 'State-of-the-art treatment room with ocean views',
    position: [5, 1.6, 3],
    lookAt: [3, 1, 0],
    info: [
      'Advanced dental chair',
      'Ceiling entertainment system',
      'Sedation options available',
      'Panoramic sea views'
    ]
  },
  {
    id: 'lab',
    name: '3D Printing Lab',
    description: 'On-site laboratory for same-day treatments',
    position: [0, 1.6, -5],
    lookAt: [0, 1, -3],
    info: [
      '3D printers for veneers',
      'Same-day crown milling',
      'Quality control station',
      'Digital workflow integration'
    ]
  }
];

function OfficeEnvironment() {
  return (
    <group>
      {/* Floor */}
      <Plane
        args={[20, 20]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial color="#f8f9fa" />
      </Plane>

      {/* Walls */}
      <Plane args={[20, 4]} position={[0, 2, -10]}>
        <meshStandardMaterial color="#ffffff" />
      </Plane>
      <Plane args={[20, 4]} position={[-10, 2, 0]} rotation={[0, Math.PI / 2, 0]}>
        <meshStandardMaterial color="#ffffff" />
      </Plane>
      <Plane args={[20, 4]} position={[10, 2, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <meshStandardMaterial color="#ffffff" />
      </Plane>

      {/* Reception Desk */}
      <Box args={[4, 1, 2]} position={[0, 0.5, 6]}>
        <meshStandardMaterial color="#40C4B4" />
      </Box>

      {/* Consultation Room */}
      <group position={[-5, 0, 3]}>
        <Box args={[2, 0.8, 1]} position={[0, 0.4, 0]}>
          <meshStandardMaterial color="#C2185B" />
        </Box>
        <Box args={[1, 1.5, 0.1]} position={[1, 0.75, 0]}>
          <meshStandardMaterial color="#333" />
        </Box>
      </group>

      {/* Treatment Suite */}
      <group position={[5, 0, 3]}>
        <Box args={[3, 0.6, 1.5]} position={[0, 0.3, 0]}>
          <meshStandardMaterial color="#D4AF37" />
        </Box>
        <Sphere args={[0.3]} position={[0, 2, 0]}>
          <meshStandardMaterial color="#ffffff" />
        </Sphere>
      </group>

      {/* 3D Lab */}
      <group position={[0, 0, -5]}>
        <Box args={[2, 1, 2]} position={[0, 0.5, 0]}>
          <meshStandardMaterial color="#666" />
        </Box>
        <Box args={[0.5, 0.5, 0.5]} position={[-0.5, 1.25, 0]}>
          <meshStandardMaterial color="#40C4B4" />
        </Box>
        <Box args={[0.5, 0.5, 0.5]} position={[0.5, 1.25, 0]}>
          <meshStandardMaterial color="#C2185B" />
        </Box>
      </group>

      {/* Windows with ocean view effect */}
      <Plane args={[8, 3]} position={[9.9, 2.5, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <meshStandardMaterial 
          color="#87CEEB" 
          transparent 
          opacity={0.7}
          emissive="#40C4B4"
          emissiveIntensity={0.1}
        />
      </Plane>

      {/* Lighting fixtures */}
      {[-4, 0, 4].map((x, i) => (
        <Sphere key={i} args={[0.2]} position={[x, 3.5, 2]}>
          <meshStandardMaterial 
            color="#ffffff" 
            emissive="#ffffff"
            emissiveIntensity={0.3}
          />
        </Sphere>
      ))}
    </group>
  );
}

function TourPointMarker({ 
  point, 
  isActive, 
  onClick 
}: { 
  point: TourPoint; 
  isActive: boolean; 
  onClick: () => void; 
}) {
  const markerRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (markerRef.current) {
      markerRef.current.rotation.y = state.clock.elapsedTime;
      markerRef.current.position.y = point.position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group
      ref={markerRef}
      position={point.position}
      onClick={onClick}
    >
      <Sphere args={[0.2]}>
        <meshStandardMaterial
          color={isActive ? "#C2185B" : "#40C4B4"}
          emissive={isActive ? "#C2185B" : "#40C4B4"}
          emissiveIntensity={0.3}
        />
      </Sphere>
      
      <Html distanceFactor={10}>
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg pointer-events-none">
          <div className="text-xs font-medium text-brand-text whitespace-nowrap">
            {point.name}
          </div>
        </div>
      </Html>
    </group>
  );
}

function Scene({ 
  currentPoint, 
  onPointClick 
}: { 
  currentPoint: TourPoint | null;
  onPointClick: (point: TourPoint) => void;
}) {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <pointLight position={[0, 4, 0]} intensity={0.5} />

      {/* Environment */}
      <Environment preset="apartment" />

      {/* Office Environment */}
      <OfficeEnvironment />

      {/* Tour Point Markers */}
      {tourPoints.map((point) => (
        <TourPointMarker
          key={point.id}
          point={point}
          isActive={currentPoint?.id === point.id}
          onClick={() => onPointClick(point)}
        />
      ))}

      {/* Camera Controls */}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={2}
        maxDistance={15}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
        target={currentPoint?.lookAt || [0, 1, 0]}
      />
    </>
  );
}

interface VirtualOfficeTourProps {
  className?: string;
  height?: string;
  autoPlay?: boolean;
}

export function VirtualOfficeTour({
  className = '',
  height = '500px',
  autoPlay = false
}: VirtualOfficeTourProps) {
  const [currentPoint, setCurrentPoint] = useState<TourPoint | null>(tourPoints[0]);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [showInfo, setShowInfo] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const tourIndexRef = useRef(0);

  // Auto-play functionality
  React.useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      tourIndexRef.current = (tourIndexRef.current + 1) % tourPoints.length;
      setCurrentPoint(tourPoints[tourIndexRef.current]);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePointClick = (point: TourPoint) => {
    setCurrentPoint(point);
    tourIndexRef.current = tourPoints.findIndex(p => p.id === point.id);
    setIsPlaying(false);
  };

  const resetTour = () => {
    setCurrentPoint(tourPoints[0]);
    tourIndexRef.current = 0;
    setIsPlaying(false);
  };

  return (
    <motion.div
      className={`relative bg-gradient-to-br from-brand-background to-white rounded-2xl overflow-hidden shadow-lg ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="p-6 pb-0">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-brand-text mb-2">
              Virtual Office Tour
            </h3>
            <p className="text-brand-muted text-sm">
              Explore our luxury dental practice from the comfort of your home
            </p>
          </div>
          
          <div className="flex gap-2">
            <LuxuryButton
              variant="outline"
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </LuxuryButton>
            
            <LuxuryButton
              variant="outline"
              size="sm"
              onClick={resetTour}
            >
              <RotateCcw className="w-4 h-4" />
            </LuxuryButton>
            
            <LuxuryButton
              variant="outline"
              size="sm"
              onClick={() => setShowInfo(!showInfo)}
            >
              <Info className="w-4 h-4" />
            </LuxuryButton>
          </div>
        </div>

        {/* Current Location */}
        {currentPoint && (
          <div className="bg-gradient-to-r from-brand-turquoise/10 to-brand-magenta/10 rounded-lg p-3 mb-4">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="w-4 h-4 text-brand-turquoise" />
              <span className="font-medium text-brand-text">{currentPoint.name}</span>
            </div>
            <p className="text-sm text-brand-muted">{currentPoint.description}</p>
          </div>
        )}
      </div>

      {/* 3D Canvas */}
      <div className="relative" style={{ height }}>
        <Canvas
          camera={{ position: [0, 5, 10], fov: 60 }}
          onCreated={() => setIsLoading(false)}
        >
          <Suspense fallback={null}>
            <Scene
              currentPoint={currentPoint}
              onPointClick={handlePointClick}
            />
          </Suspense>
        </Canvas>

        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
            <LoadingSpinner variant="dental" size="lg" />
          </div>
        )}

        {/* Navigation Points */}
        <div className="absolute top-4 right-4 space-y-2">
          {tourPoints.map((point, index) => (
            <motion.button
              key={point.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePointClick(point)}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium transition-all ${
                currentPoint?.id === point.id
                  ? 'bg-brand-turquoise text-white shadow-lg'
                  : 'bg-white/90 text-brand-text hover:bg-brand-turquoise/10'
              }`}
            >
              {index + 1}
            </motion.button>
          ))}
        </div>

        {/* Controls Info */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-xs text-brand-muted">
          <div className="flex items-center gap-2 mb-1">
            <Eye className="w-3 h-3" />
            <span>Click markers to explore</span>
          </div>
          <div className="flex items-center gap-2">
            <Navigation className="w-3 h-3" />
            <span>Drag to look around</span>
          </div>
        </div>
      </div>

      {/* Info Panel */}
      <AnimatePresence>
        {showInfo && currentPoint && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gray-200"
          >
            <div className="p-6">
              <h4 className="font-semibold text-brand-text mb-3">
                {currentPoint.name} Features
              </h4>
              <ul className="space-y-2">
                {currentPoint.info.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-brand-muted">
                    <div className="w-1.5 h-1.5 bg-brand-turquoise rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <div className="p-6 pt-4 bg-gradient-to-r from-brand-turquoise/5 to-brand-magenta/5">
        <div className="flex items-center justify-between text-sm">
          <span className="text-brand-muted">Interactive 3D Experience</span>
          <LuxuryButton variant="primary" size="sm">
            Book a Real Visit
          </LuxuryButton>
        </div>
      </div>
    </motion.div>
  );
}

