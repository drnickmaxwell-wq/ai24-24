"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LuxuryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "gradient" | "bordered"
  hover?: boolean
  glow?: boolean
  borderColor?: "pink" | "turquoise" | "gold" | "red" | "blue" | "purple"
}

const borderColors = {
  pink: "border-[#C2185B]/30 hover:border-[#C2185B]/60",
  turquoise: "border-[#40C4B4]/30 hover:border-[#40C4B4]/60", 
  gold: "border-[#D4AF37]/30 hover:border-[#D4AF37]/60",
  red: "border-red-500/30 hover:border-red-500/60",
  blue: "border-blue-500/30 hover:border-blue-500/60",
  purple: "border-purple-500/30 hover:border-purple-500/60"
}

const glowColors = {
  pink: "shadow-[#C2185B]/20",
  turquoise: "shadow-[#40C4B4]/20",
  gold: "shadow-[#D4AF37]/20", 
  red: "shadow-red-500/20",
  blue: "shadow-blue-500/20",
  purple: "shadow-purple-500/20"
}

export function LuxuryCard({ 
  className,
  variant = "default",
  hover = true,
  glow = false,
  borderColor = "pink",
  children,
  ...props 
}: LuxuryCardProps) {
  const baseClasses = "relative overflow-hidden rounded-2xl transition-all duration-300"
  
  const variantClasses = {
    default: "bg-white/95 backdrop-blur-sm border border-white/20 shadow-lg",
    glass: "bg-white/10 backdrop-blur-md border border-white/20 shadow-xl",
    gradient: "bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/30",
    bordered: `bg-white/95 backdrop-blur-sm border-2 ${borderColors[borderColor]} shadow-lg`
  }

  const hoverClasses = hover ? "hover:scale-[1.02] hover:shadow-2xl" : ""
  const glowClasses = glow ? `hover:shadow-2xl hover:${glowColors[borderColor]}` : ""

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        baseClasses,
        variantClasses[variant],
        hoverClasses,
        glowClasses,
        className
      )}
      {...props}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C2185B] via-[#40C4B4] to-[#D4AF37]" />
      </div>
    </motion.div>
  )
}

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "pink" | "turquoise" | "gold" | "red" | "blue" | "purple"
}

export function Badge({ className, variant = "pink", children, ...props }: BadgeProps) {
  const variantClasses = {
    pink: "bg-gradient-to-r from-[#C2185B] to-[#E91E63] text-white",
    turquoise: "bg-gradient-to-r from-[#40C4B4] to-[#26A69A] text-white",
    gold: "bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black",
    red: "bg-gradient-to-r from-red-500 to-red-600 text-white",
    blue: "bg-gradient-to-r from-blue-500 to-blue-600 text-white", 
    purple: "bg-gradient-to-r from-purple-500 to-purple-600 text-white"
  }

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold shadow-lg",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

