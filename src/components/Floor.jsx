import { useBox } from '@react-three/cannon'

const Floor = (props) => {
  // regular react ref returned, needs to be attached to mesh where phyiscs will be used
  const [ref, api] = useBox(() => ({ args: [20, 1, 10], ...props }))

  return (
    <mesh ref={ref} {...props} receiveShadow>
      {/* NOTE args are passed to the constructor */}
      <boxBufferGeometry args={[20, 1, 10]} />

      <meshPhysicalMaterial />
    </mesh>
  )

  // const [ref, api] = useBox(() => ({ args: [20, 1, 10], ...props }))
  // return (
  //   <mesh ref={ref} {...props} receiveShadow>
  //     <boxBufferGeometry args={[200, 1, 200]} />
  //     <meshPhysicalMaterial color={'black'} opacity={1} />
  //   </mesh>
  // )
}

export default Floor
