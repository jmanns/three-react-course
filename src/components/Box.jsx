import { useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useBox } from '@react-three/cannon'

const Box = (props) => {
  const [ref, api] = useBox(() => ({ mass: 1, ...props }))

  // const ref = useRef()

  const texture = useLoader(THREE.TextureLoader, './wood.jpg')

  const handlePointerDown = (e) => {
    e.object.active = true
    if (window.activeMesh) {
      scaleDown(window.activeMesh)
      window.activeMesh.active = false
    }
    window.activeMesh = e.object
  }

  const handlePointerEnter = (e) => {
    e.object.scale.x = 1.5
    e.object.scale.y = 1.5
    e.object.scale.z = 1.5
  }

  const handlePointerLeave = (e) => {
    if (!e.object.active) {
      scaleDown(e.object)
    }
  }

  const scaleDown = (object) => {
    object.scale.x = 1
    object.scale.y = 1
    object.scale.z = 1
  }

  // NOTE when using the cannon api all physical properties for the mesh must be updated using the cannon API
  useFrame((state) => {
    // ref.current.rotation.y += 0.01
    // ref.current.rotation.x += 0.01
  })

  return (
    <mesh
      ref={ref}
      // Add api here it can be interacted with events
      api={api}
      {...props}
      castShadow
      onPointerDown={handlePointerDown}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      {/* <sphereBufferGeometry /> */}
      {/* <meshBasicMaterial color="hotpink" /> */}

      {/* NOTE Physical Material needs light for color to be shown*/}
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial
        map={texture}
        // color="hotpink"
        // fog={false}
        // metalness={1}
        // roughness={0}
        // opacity={0.5}
        // transparent
        // visible={true}
        // clearcoat={1}
        // transmission={1}
        // reflectivity={1}
        // side={THREE.DoubleSide}
        // wireframe
      />
    </mesh>
  )
}

export default Box
