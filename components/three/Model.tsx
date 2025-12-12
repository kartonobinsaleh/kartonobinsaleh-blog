'use client'

import { useEffect, useRef } from 'react'
import { Center, useGLTF, useAnimations } from '@react-three/drei'
import { Group } from 'three'

interface ModelProps {
  isMobile: boolean
}

useGLTF.preload('/models/robot_playground.glb')

export function Model({ isMobile }: ModelProps) {
  const group = useRef<Group>(null)
  const { scene, animations } = useGLTF('/models/robot_playground.glb')
  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
    if (actions['Experiment']) {
      actions['Experiment'].play()
    }
  }, [actions])

  return (
    <Center top={false}>
      <group ref={group} scale={isMobile ? 1 : 0.8}>
        <primitive object={scene} />
      </group>
    </Center>
  )
}
