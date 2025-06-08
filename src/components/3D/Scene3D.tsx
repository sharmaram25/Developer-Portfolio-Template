import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import FloatingGeometry from './FloatingGeometry'

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
          
          {/* Ambient lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#667eea" />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#764ba2" />
          
          {/* Floating geometries */}
          <FloatingGeometry 
            position={[-4, 2, -5]} 
            geometry="sphere" 
            color="#667eea" 
            scale={0.8}
          />
          <FloatingGeometry 
            position={[4, -2, -3]} 
            geometry="box" 
            color="#764ba2" 
            scale={0.6}
          />
          <FloatingGeometry 
            position={[0, 3, -8]} 
            geometry="torus" 
            color="#f093fb" 
            scale={0.5}
          />
          <FloatingGeometry 
            position={[-3, -3, -6]} 
            geometry="sphere" 
            color="#4facfe" 
            scale={0.7}
          />
          <FloatingGeometry 
            position={[5, 1, -7]} 
            geometry="box" 
            color="#43e97b" 
            scale={0.4}
          />
          
          {/* Environment for reflections */}
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  )
}
