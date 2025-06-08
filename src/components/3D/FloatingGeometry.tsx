import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import { Float, MeshDistortMaterial } from '@react-three/drei'

interface FloatingGeometryProps {
  position: [number, number, number]
  geometry: 'sphere' | 'box' | 'torus'
  color: string
  scale?: number
}

export default function FloatingGeometry({ 
  position, 
  geometry, 
  color, 
  scale = 1 
}: FloatingGeometryProps) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3
    }
  })

  const renderGeometry = () => {
    switch (geometry) {
      case 'sphere':
        return <sphereGeometry args={[1, 32, 32]} />
      case 'box':
        return <boxGeometry args={[1.5, 1.5, 1.5]} />
      case 'torus':
        return <torusGeometry args={[1, 0.4, 16, 100]} />
      default:
        return <sphereGeometry args={[1, 32, 32]} />
    }
  }

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {renderGeometry()}
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}
