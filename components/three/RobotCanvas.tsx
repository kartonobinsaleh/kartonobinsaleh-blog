'use client'

import { Suspense, useEffect, useState } from 'react'
import CanvasLoader from './Loader'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Robot } from './Robot'

export default function RobotCanvas() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')

    setIsMobile(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mediaQuery.addEventListener('change', handler)

    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas
        frameloop="always"
        shadows={false}
        camera={{
          position: [5, 2, 7],
          fov: isMobile ? 35 : 25,
        }}
        gl={{ antialias: true, preserveDrawingBuffer: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />

          <Robot isMobile={isMobile} />

          <EffectComposer>
            <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.9} height={300} />
          </EffectComposer>
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}
