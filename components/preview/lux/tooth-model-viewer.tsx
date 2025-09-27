'use client';

import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Text, Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { LoadingSpinner } from '@/components/effects/loading-animations';

interface ToothModelProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  color?: string;
  animated?: boolean;
}

function ToothModel({ 
  position = [0, 0, 0], 
  rotation = [0, 0, 0], 
  scale = 1,
  color = '#ffffff',
  animated = true 
}: ToothModelProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current && animated) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });

  // Create a simplified tooth geometry
  const toothGeometry = React.useMemo(() => {
    const shape = new THREE.Shape();
    
    // Crown (top part)
    shape.moveTo(0, 0);
    shape.quadraticCurveTo(-0.3, 0.2, -0.2, 0.5);
    shape.quadraticCurveTo(-0.1, 0.8, 0, 1);
    shape.quadraticCurveTo(0.1, 0.8, 0.2, 0.5);
    shape.quadraticCurveTo(0.3, 0.2, 0, 0);

    const extrudeSettings = {
      depth: 0.3,
      bevelEnabled: true,
      bevelSegments: 8,
      steps: 2,
      bevelSize: 0.02,
      bevelThickness: 0.02
    };

    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={hovered ? scale * 1.1 : scale}
      geometry={toothGeometry}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshPhysicalMaterial
        color={color}
        roughness={0.1}
        metalness={0.1}
        clearcoat={1}
        clearcoatRoughness={0.1}
        transmission={0.1}
        thickness={0.5}
      />
    </mesh>
  );
}

function Scene({ showLabels = false }: { showLabels?: boolean }) {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      {/* Environment */}
      <Environment preset="studio" />

      {/* Tooth Models */}
      <ToothModel position={[-1.5, 0, 0]} color="#f8f8ff" />
      <ToothModel position={[0, 0, 0]} color="#40C4B4" scale={1.2} />
      <ToothModel position={[1.5, 0, 0]} color="#f8f8ff" />

      {/* Labels */}
      {showLabels && (
        <>
          <Text
            position={[-1.5, -1.5, 0]}
            fontSize={0.2}
            color="#666"
            anchorX="center"
            anchorY="middle"
          >
            Before
          </Text>
          <Text
            position={[0, -1.5, 0]}
            fontSize={0.2}
            color="#40C4B4"
            anchorX="center"
            anchorY="middle"
          >
            Treatment
          </Text>
          <Text
            position={[1.5, -1.5, 0]}
            fontSize={0.2}
            color="#666"
            anchorX="center"
            anchorY="middle"
          >
            After
          </Text>
        </>
      )}

      {/* Ground */}
      <ContactShadows
        position={[0, -1, 0]}
        opacity={0.4}
        scale={10}
        blur={2}
        far={4}
      />

      {/* Controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        minDistance={3}
        maxDistance={8}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
      />
    </>
  );
}

interface ToothModelViewerProps {
  className?: string;
  height?: string;
  showLabels?: boolean;
  title?: string;
  description?: string;
}

export function ToothModelViewer({
  className = '',
  height = '400px',
  showLabels = false,
  title = '3D Tooth Visualization',
  description = 'Interactive 3D model showing dental treatment process'
}: ToothModelViewerProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      className={`relative bg-gradient-to-br from-brand-background to-white rounded-2xl overflow-hidden shadow-lg ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="p-6 pb-0">
        <h3 className="text-xl font-semibold text-brand-text mb-2">{title}</h3>
        <p className="text-brand-muted text-sm">{description}</p>
      </div>

      {/* 3D Canvas */}
      <div className="relative" style={{ height }}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          onCreated={() => setIsLoading(false)}
        >
          <Suspense fallback={null}>
            <Scene showLabels={showLabels} />
          </Suspense>
        </Canvas>

        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
            <LoadingSpinner variant="dental" size="lg" />
          </div>
        )}

        {/* Controls Info */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-xs text-brand-muted">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 bg-brand-turquoise rounded-full" />
            <span>Drag to rotate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-brand-magenta rounded-full" />
            <span>Scroll to zoom</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 pt-4 bg-gradient-to-r from-brand-turquoise/5 to-brand-magenta/5">
        <div className="flex items-center justify-between text-sm">
          <span className="text-brand-muted">Powered by 3D Technology</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-brand-turquoise rounded-full animate-pulse" />
            <span className="text-brand-turquoise font-medium">Interactive</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Preset configurations
export function BeforeAfterViewer(props: Omit<ToothModelViewerProps, 'showLabels' | 'title' | 'description'>) {
  return (
    <ToothModelViewer
      {...props}
      showLabels={true}
      title="Before & After Comparison"
      description="See the transformation with our 3D treatment visualization"
    />
  );
}

export function TreatmentViewer(props: Omit<ToothModelViewerProps, 'title' | 'description'>) {
  return (
    <ToothModelViewer
      {...props}
      title="Treatment Visualization"
      description="Interactive 3D model of your personalized treatment plan"
    />
  );
}

