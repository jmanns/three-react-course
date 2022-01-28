import { useState, useRef } from 'react'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import * as THREE from 'three'

import './App.css'

extend({ OrbitControls })

const Orbit = () => {
  const { camera, gl } = useThree()
  return <orbitControls args={[camera, gl.domElement]} />
}

function Box(props) {
  const ref = useRef()

  // useFrame((state) => {
  //   ref.current.rotation.x += 0.01
  //   ref.current.rotation.y += 0.01
  // })

  return (
    <mesh ref={ref} {...props}>
      <boxGeometry />
      <meshBasicMaterial color="hotpink" />
    </mesh>
  )
}

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas style={{ background: 'black' }} camera={{ position: [3, 3, 3] }}>
        <Box position={[4, 4, 0]} />
        <Orbit />
        <axesHelper args={[5]} />
        {/* <ambientLight />
        <pointLight position={[10, 10, 10]} /> */}
      </Canvas>
    </div>
  )
}

// function App() {
//   const scene = new THREE.Scene()
//   const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
//   const renderer = new THREE.WebGLRenderer()

//   renderer.setSize(window.innerWidth, window.innerHeight)

//   document.body.innerHTML = ''

//   document.body.appendChild(renderer.domElement)

//   const geometry = new THREE.BoxGeometry()
//   const material = new THREE.MeshBasicMaterial({
//     color: 'blue',
//   })

//   camera.position.z = 5

//   const cube = new THREE.Mesh(geometry, material)

//   scene.add(cube)

//   function animate() {
//     requestAnimationFrame(animate)
//     cube.rotation.x += 0.01
//     cube.rotation.y += 0.01
//     renderer.render(scene, camera)
//   }

//   animate()

//   window.addEventListener('resize', () => {
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     camera.aspect = window.innerWidth / window.innerHeight
//     camera.updateProjectionMatrix()
//   })

//   return null
// }

export default App
