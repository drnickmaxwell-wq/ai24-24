"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface CoastalWavesProps {
  className?: string
  intensity?: number
  showParticles?: boolean
}

export function CoastalWaves({ 
  className = "", 
  intensity = 1, 
  showParticles = true 
}: CoastalWavesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let time = 0
    const particles: Array<{
      x: number
      y: number
      size: number
      speed: number
      opacity: number
      color: string
    }> = []

    // Initialize particles
    if (showParticles) {
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 0.5 + 0.2,
          opacity: Math.random() * 0.6 + 0.2,
          color: Math.random() > 0.5 ? "#C2185B" : "#40C4B4"
        })
      }
    }

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    const drawWaves = () => {
      const width = canvas.width / window.devicePixelRatio
      const height = canvas.height / window.devicePixelRatio

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, "rgba(64, 196, 180, 0.1)")
      gradient.addColorStop(0.5, "rgba(194, 24, 91, 0.05)")
      gradient.addColorStop(1, "rgba(212, 175, 55, 0.1)")
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Draw animated waves
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        ctx.moveTo(0, height)

        const waveHeight = (height / 4) * intensity
        const frequency = 0.02 + i * 0.01
        const phase = time * 0.001 + i * Math.PI / 3

        for (let x = 0; x <= width; x += 2) {
          const y = height - waveHeight * Math.sin(x * frequency + phase) - (i * 20)
          ctx.lineTo(x, y)
        }

        ctx.lineTo(width, height)
        ctx.closePath()

        // Wave colors
        const colors = ["rgba(194, 24, 91, 0.1)", "rgba(64, 196, 180, 0.08)", "rgba(212, 175, 55, 0.06)"]
        ctx.fillStyle = colors[i]
        ctx.fill()
      }

      // Draw particles
      if (showParticles) {
        particles.forEach((particle, index) => {
          // Update particle position
          particle.y -= particle.speed
          particle.x += Math.sin(time * 0.001 + index) * 0.5

          // Reset particle if it goes off screen
          if (particle.y < -10) {
            particle.y = height + 10
            particle.x = Math.random() * width
          }
          if (particle.x < -10 || particle.x > width + 10) {
            particle.x = Math.random() * width
          }

          // Draw particle
          ctx.save()
          ctx.globalAlpha = particle.opacity
          ctx.fillStyle = particle.color
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        })
      }

      time += 16
    }

    const animate = () => {
      drawWaves()
      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    const handleResize = () => resizeCanvas()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [intensity, showParticles])

  return (
    <motion.div 
      className={`absolute inset-0 overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: `url('/waves-bg-2560.webp') center/cover` }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
    </motion.div>
  )
}

