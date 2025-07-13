"use client"

import { Canvas } from "@react-three/fiber"
import { Text, Environment } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function StatCard({
  position,
  title,
  value,
  color,
}: { position: [number, number, number]; title: string; value: string; color: string }) {
  const meshRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime + position[0]) * 0.1
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1
    }
  })

  return (
    <group ref={meshRef} position={position}>
      <mesh>
        <boxGeometry args={[2, 1.5, 0.1]} />
        <meshStandardMaterial color={color} opacity={0.8} transparent />
      </mesh>
      <Text
        position={[0, 0.3, 0.06]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter_Bold.json"
      >
        {value}
      </Text>
      <Text
        position={[0, -0.2, 0.06]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter_Regular.json"
      >
        {title}
      </Text>
    </group>
  )
}

export function Stats3D() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} />
        <StatCard position={[-3, 0, 0]} title="Global Clients" value="500+" color="#3b82f6" />
        <StatCard position={[0, 0, 0]} title="Countries" value="50+" color="#6366f1" />
        <StatCard position={[3, 0, 0]} title="Success Rate" value="95%" color="#8b5cf6" />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
