import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Shadow } from '@react-three/drei'
import Text from './Text'

const SHAPE_1 = {
  geometry: new THREE.BoxBufferGeometry(1, 1, 1),
  title: '2actors',
  position: [0, -7, -23],
  rotationSpeed: 0.0,
  url: 'http://new.2media.cz/',
  hoveredColor: '#FF0000', // red
}

const SHAPE_2 = {
  geometry: new THREE.SphereBufferGeometry(0.5, 32, 42),
  title: '2mag',
  position: [2, -7, -10],
  rotationSpeed: 0.0,
  url: 'https://2market.cz/magazin/',
  hoveredColor: '#00FF00', // green
}

const SHAPE_3 = {
  geometry: new THREE.ConeBufferGeometry(0.5, 1, 32),
  title: '2shop',
  position: [5, -7, -13.6],
  rotationSpeed: 0.0,
  url: 'http://2market.cz',
  hoveredColor: '#0000FF', // blue
}

function Model(props) {
  const groupRef = useRef()
  const [hovered, setHovered] = useState(null)

  useFrame((state, delta) => {
    groupRef.current.children.forEach((child, index) => {
      child.rotation.y += groupRef.current.userData[index].rotationSpeed * delta
      if (hovered === index) {
        child.scale.x = child.scale.y = child.scale.z += delta * 3
        child.scale.x = Math.min(child.scale.x, 1.4) // max scale for x
        child.scale.y = Math.min(child.scale.y, 1.4) // max scale for y
        child.scale.z = Math.min(child.scale.z, 1.4) // max scale for z
      } else {
        child.scale.x = child.scale.y = child.scale.z -= delta * 5
        child.scale.x = Math.max(child.scale.x, 1) // min scale for x
        child.scale.y = Math.max(child.scale.y, 1) // min scale for y
        child.scale.z = Math.max(child.scale.z, 1) // min scale for z
      }
    })
  })

  return (
    <group {...props} dispose={null} ref={groupRef} userData={[SHAPE_1, SHAPE_2, SHAPE_3]}>
      {[SHAPE_1, SHAPE_2, SHAPE_3].map(({ geometry, title, position, url, hoveredColor }, index) => (
        <group key={title} position={position}>
          <mesh
            geometry={geometry}
            castShadow
            receiveShadow
            onPointerOver={() => setHovered(index)}
            onPointerOut={() => setHovered(null)}
            onClick={() => window.open(url, '_blank')}>
            <MeshDistortMaterial color="#ff77ff" smoothShading roughness={0} metalness={0} factor={0} speed={2} />
          </mesh>
          <mesh geometry={geometry} scale={0.97}>
            <meshBasicMaterial color={'#ff00ff'} roughness={0} />
          </mesh>
          <Text position={[-0.2, 0.3, 1.3]} fontSize={0.4} textAlign={'center'} lineHeight={1} letterSpacing={-0.05} bold color={'#ff00ff'}>
            {title}
          </Text>
          <mesh position={[0, -1, 0]}>
            <Shadow opacity={0.3} rotation-x={-Math.PI / 2} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

export default function App() {
  return <Model />
}
