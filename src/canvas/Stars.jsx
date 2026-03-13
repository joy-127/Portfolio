import { Canvas } from "@react-three/fiber"
import { Stars } from "@react-three/drei"

const StarsCanvas = () => {
  return (
    <Canvas>

      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        fade
      />

    </Canvas>
  )
}

export default StarsCanvas
