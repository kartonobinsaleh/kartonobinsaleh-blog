'use client'

import { Suspense, useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Group } from 'three'

interface RobotProps {
  isMobile: boolean
}

useGLTF.preload('/3d/robot_playground.glb')

export function Robot({ isMobile }: RobotProps) {
  const group = useRef<Group>(null)
  const { scene, animations } = useGLTF('/3d/robot_playground.glb')

  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
    if (actions['Experiment']) {
      actions['Experiment'].play()
    }
  }, [actions])

  return (
    <group ref={group} position={[0, isMobile ? 1 : 0.4, 0]}>
      <primitive object={scene} scale={isMobile ? 0.7 : 0.65} />
    </group>
  )
}
