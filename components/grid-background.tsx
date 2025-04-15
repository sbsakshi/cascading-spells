"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match window size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawGrid()
    }

    // Initial setup
    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Draw grid function
    function drawGrid() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Grid settings
      const cellSize = 80
      const lineWidth = 0.5

      // Calculate grid dimensions
      const cols = Math.ceil(canvas.width / cellSize) + 1
      const rows = Math.ceil(canvas.height / cellSize) + 1

      // Create gradient for lines
      const gradientX = ctx.createLinearGradient(0, 0, canvas.width, 0)
      gradientX.addColorStop(0, "rgba(102, 51, 153, 0.1)")
      gradientX.addColorStop(0.5, "rgba(102, 51, 153, 0.2)")
      gradientX.addColorStop(1, "rgba(102, 51, 153, 0.1)")

      const gradientY = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradientY.addColorStop(0, "rgba(102, 51, 153, 0.1)")
      gradientY.addColorStop(0.5, "rgba(102, 51, 153, 0.2)")
      gradientY.addColorStop(1, "rgba(102, 51, 153, 0.1)")

      // Draw vertical lines
      ctx.beginPath()
      ctx.lineWidth = lineWidth
      ctx.strokeStyle = gradientX

      for (let i = 0; i <= cols; i++) {
        const x = i * cellSize
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
      }
      ctx.stroke()

      // Draw horizontal lines
      ctx.beginPath()
      ctx.lineWidth = lineWidth
      ctx.strokeStyle = gradientY

      for (let i = 0; i <= rows; i++) {
        const y = i * cellSize
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
      }
      ctx.stroke()

      // Add glow effect in top-left corner
      const glowRadius = Math.min(canvas.width, canvas.height) * 0.8
      const glow = ctx.createRadialGradient(
        canvas.width * 0.2,
        canvas.height * 0.2,
        0,
        canvas.width * 0.2,
        canvas.height * 0.2,
        glowRadius,
      )

      glow.addColorStop(0, "rgba(102, 51, 153, 0.2)")
      glow.addColorStop(0.5, "rgba(102, 51, 153, 0.05)")
      glow.addColorStop(1, "rgba(102, 51, 153, 0)")

      ctx.fillStyle = glow
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    // Animate grid with subtle movement
    const animateGrid = () => {
      gsap.to(
        {},
        {
          duration: 20,
          repeat: -1,
          onUpdate: () => {
            if (!ctx || !canvas) return

            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw animated grid
            drawGrid()
          },
        },
      )
    }

    animateGrid()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="grid-lines absolute inset-0 w-full h-full opacity-0 pointer-events-none z-0" />
  )
}
