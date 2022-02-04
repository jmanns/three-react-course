import { Suspense } from 'react'

import Model from './Model'
import Draggable from './Draggable'
import BoundingBox from './BoundingBox.jsx'

const Cars = () => {
  return (
    <Suspense fallback={null}>
      <Draggable transformGroup>
        <BoundingBox visible position={[4, 4, 0]} dims={[3, 2, 6]} offset={[0, -0.4, 0.8]}>
          <Model
            path="/tesla_model_3/scene.gltf"
            scale={new Array(3).fill(0.01)}
            // position={[4, 0.6, 0]}
          />
        </BoundingBox>
      </Draggable>

      <Draggable transformGroup>
        <BoundingBox visible position={[-4, 4, 0]} dims={[3, 2, 7]} offset={[0, -0.7, 0.1]}>
          <Model
            path="/tesla_model_s/scene.gltf"
            scale={new Array(3).fill(0.0125)}
            // position={[-4, 0.3, 0]}
          />
        </BoundingBox>
      </Draggable>
    </Suspense>
  )
}

export default Cars
