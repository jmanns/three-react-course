import { Suspense } from 'react'
import { Canvas, useThree, useLoader } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import * as THREE from 'three'

import Orbit from './components/Orbit'

import Floor from './components/Floor'
import Bulb from './components/Bulb'
import ColorPicker from './components/ColorPicker'

import Cars from './components/Cars'
import CameraControls from './components/CameraControls'
import CameraButtons from './components/CameraButtons'

import './App.css'

const Background = (props) => {
  // const texture = useLoader(THREE.TextureLoader, '/sky.jpg')
  const texture = useLoader(THREE.TextureLoader, '/autoshop.jpg')

  const { gl } = useThree()

  const formatted = new THREE.WebGLCubeRenderTarget(texture.image.height).fromEquirectangularTexture(
    gl,
    texture
  )

  return <primitive attach="background" object={formatted.texture} />
}

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <ColorPicker />
      <CameraButtons />
      <Canvas style={{ background: 'black' }} camera={{ position: [7, 7, 7] }} shadows>
        <CameraControls />
        {/* <fog attach="fog" args={['white', 1, 10]} /> */}

        <Physics>
          <Cars />
          <Floor position={[0, -0.5, 0]} />
        </Physics>

        {/* <Physics>
          <Draggable>
            <Suspense fallback={null}>
              <Box position={[4, 1, 0]} />
            </Suspense>

            <Suspense fallback={null}>
              <Box position={[-4, 1, 0]} />
            </Suspense>
          </Draggable>

          <Floor position={[0, -0.5, 0]} />
        </Physics> */}

        <Suspense fallback={null}>
          <Background />
        </Suspense>

        <Orbit />
        <axesHelper args={[5]} />
        <ambientLight intensity={0.25} />
        {/* <pointLight position={[10, 10, 10]} /> */}

        <Bulb position={[0, 3, 0]} />
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
