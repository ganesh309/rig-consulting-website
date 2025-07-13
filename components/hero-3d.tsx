"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, Line } from "@react-three/drei"
import { useRef, useMemo, useState } from "react"
import type * as THREE from "three"

interface NetworkNode {
  position: [number, number, number]
  connections: number[]
  scale: number
  glowIntensity: number
}

function NetworkVisualization() {
  const groupRef = useRef<THREE.Group>(null)
  const [time, setTime] = useState(0)

  // Generate network nodes
  const networkData = useMemo(() => {
    const nodes: NetworkNode[] = []
    const nodeCount = 25

    // Create nodes in 3D space
    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * 12
      const y = (Math.random() - 0.5) * 8
      const z = (Math.random() - 0.5) * 6

      nodes.push({
        position: [x, y, z],
        connections: [],
        scale: Math.random() * 0.3 + 0.1,
        glowIntensity: Math.random() * 0.5 + 0.5,
      })
    }

    // Create connections between nearby nodes
    nodes.forEach((node, i) => {
      nodes.forEach((otherNode, j) => {
        if (i !== j) {
          const distance = Math.sqrt(
            Math.pow(node.position[0] - otherNode.position[0], 2) +
              Math.pow(node.position[1] - otherNode.position[1], 2) +
              Math.pow(node.position[2] - otherNode.position[2], 2),
          )

          if (distance < 4 && Math.random() > 0.7) {
            node.connections.push(j)
          }
        }
      })
    })

    return nodes
  }, [])

  useFrame((state) => {
    setTime(state.clock.elapsedTime)
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      {/* Render nodes */}
      {networkData.map((node, index) => (
        <Float key={`node-${index}`} speed={1 + Math.random()} rotationIntensity={0.2} floatIntensity={0.5}>
          <mesh position={node.position}>
            <sphereGeometry args={[node.scale, 16, 16]} />
            <meshStandardMaterial
              color="#3b82f6"
              emissive="#1e40af"
              emissiveIntensity={node.glowIntensity * (1 + Math.sin(time * 2 + index) * 0.3)}
              transparent
              opacity={0.8}
            />
            {/* Glow effect */}
            <mesh scale={[2, 2, 2]}>
              <sphereGeometry args={[node.scale, 8, 8]} />
              <meshBasicMaterial color="#3b82f6" transparent opacity={0.1 * node.glowIntensity} />
            </mesh>
          </mesh>
        </Float>
      ))}

      {/* Render connections */}
      {networkData.map((node, nodeIndex) =>
        node.connections.map((connectionIndex, connIndex) => {
          const startPos = node.position
          const endPos = networkData[connectionIndex].position
          const opacity = 0.3 + Math.sin(time * 1.5 + nodeIndex + connIndex) * 0.2

          return (
            <Line
              key={`connection-${nodeIndex}-${connectionIndex}`}
              points={[startPos, endPos]}
              color="#6366f1"
              lineWidth={2}
              transparent
              opacity={Math.max(0.1, opacity)}
            />
          )
        }),
      )}
    </group>
  )
}

function DataParticles() {
  const particlesRef = useRef<THREE.Points>(null)

  const particlePositions = useMemo(() => {
    const positions = new Float32Array(200 * 3)
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    return positions
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02

      // Animate individual particles
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(state.clock.elapsedTime + i) * 0.001
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlePositions.length / 3}
          array={particlePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#8b5cf6" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

function HolographicGrid() {
  const gridRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      gridRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.05
    }
  })

  const gridLines = useMemo(() => {
    const lines = []
    const size = 8
    const divisions = 16

    // Horizontal lines
    for (let i = 0; i <= divisions; i++) {
      const y = (i / divisions - 0.5) * size
      lines.push([
        [-size / 2, y, 0],
        [size / 2, y, 0],
      ])
    }

    // Vertical lines
    for (let i = 0; i <= divisions; i++) {
      const x = (i / divisions - 0.5) * size
      lines.push([
        [x, -size / 2, 0],
        [x, size / 2, 0],
      ])
    }

    return lines
  }, [])

  return (
    <group ref={gridRef} position={[0, -3, -2]}>
      {gridLines.map((points, index) => (
        <Line key={index} points={points} color="#1e40af" lineWidth={1} transparent opacity={0.2} />
      ))}
    </group>
  )
}

function DynamicLighting() {
  const light1Ref = useRef<THREE.PointLight>(null)
  const light2Ref = useRef<THREE.PointLight>(null)

  useFrame((state) => {
    if (light1Ref.current) {
      light1Ref.current.position.x = Math.sin(state.clock.elapsedTime * 0.7) * 4
      light1Ref.current.position.z = Math.cos(state.clock.elapsedTime * 0.7) * 4
      light1Ref.current.intensity = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.3
    }

    if (light2Ref.current) {
      light2Ref.current.position.x = Math.sin(state.clock.elapsedTime * 0.5 + Math.PI) * 3
      light2Ref.current.position.z = Math.cos(state.clock.elapsedTime * 0.5 + Math.PI) * 3
      light2Ref.current.intensity = 0.8 + Math.sin(state.clock.elapsedTime * 1.5) * 0.2
    }
  })

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight ref={light1Ref} position={[2, 3, 2]} color="#3b82f6" intensity={1} />
      <pointLight ref={light2Ref} position={[-2, 2, -2]} color="#6366f1" intensity={0.8} />
      <spotLight position={[0, 8, 0]} angle={0.3} penumbra={1} intensity={0.5} color="#8b5cf6" castShadow />
    </>
  )
}

export function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ background: "transparent" }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <fog attach="fog" args={["#f1f5f9", 10, 25]} />
      <DynamicLighting />
      <NetworkVisualization />
      <DataParticles />
      <HolographicGrid />
      <Environment preset="city" />
    </Canvas>
  )
}
