import { Canvas } from "@react-three/fiber"
import { Stars } from "@react-three/drei"

const StarsCanvas = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
      </Canvas>
    </div>
  )
}

export default StarsCanvas
