'use client'

import { Suspense, lazy, useRef, useCallback, useEffect } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const splineRef = useRef<any>(null)

  const handleLoad = useCallback((spline: any) => {
    splineRef.current = spline
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!splineRef.current) return

      // Production-standard centered tracking
      const x = (e.clientX - window.innerWidth / 2) * 0.0012
      const y = (e.clientY - window.innerHeight / 2) * 0.0012

      // Search for the primary object to rotate
      const target =
        splineRef.current.findObjectByName('Robot') ||
        splineRef.current.findObjectByName('Bot') ||
        splineRef.current.findObjectByName('Body') ||
        splineRef.current.findObjectByName('Head')

      if (target) {
        // Apply smooth rotation based on centered cursor position
        target.rotation.y = x
        target.rotation.x = y * 0.5 // Subtle vertical tracking
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className={className}>
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <span className="loader"></span>
          </div>
        }
      >
        <Spline
          scene={scene}
          onLoad={handleLoad}
          className="w-full h-full"
        />
      </Suspense>
    </div>
  )
}