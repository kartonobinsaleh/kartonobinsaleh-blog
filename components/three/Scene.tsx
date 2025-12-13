'use client'

import { Suspense, useEffect, useState } from 'react'
import CanvasLoader from './Loader'
import { Canvas, useThree } from '@react-three/fiber'
import { Environment, OrbitControls, Preload } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Model } from './Model'

function CameraRig({ isMobile }: { isMobile: boolean }) {
  const { camera } = useThree()

  useEffect(() => {
    camera.lookAt(0, 1, 0)
    camera.updateProjectionMatrix()
  }, [camera, isMobile])

  return null
}

export default function Scene() {
  const [isMobile, setIsMobile] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    setIsMobile(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mediaQuery.addEventListener('change', handler)

    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return (
    <div style={{ width: '100%', height: '70vh' }}>
      <Canvas
        frameloop="always"
        shadows={true}
        camera={{
          position: isMobile ? [5, 2.6, 6] : [1, 1.2, 8],
          fov: isMobile ? 35 : 25,
        }}
        gl={{ antialias: true }}
        style={{
          width: '100%',
          height: '100%',
          opacity: ready ? 1 : 0,
          transition: 'opacity 500ms ease',
        }}
        onCreated={() => {
          requestAnimationFrame(() => setReady(true))
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            target={[0, 1, 0]}
          />

          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />

          <Environment preset="city" />
          <CameraRig isMobile={isMobile} />

          <Model isMobile={isMobile} />

          <EffectComposer multisampling={4}>
            <Bloom
              intensity={0.6}
              luminanceThreshold={0.35}
              luminanceSmoothing={0.85}
              height={300}
            />
          </EffectComposer>
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}
