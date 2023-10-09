import { Environment, OrbitControls, Stars } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { DarthVaderSaber } from "./darth-vader-saber"

export const HomeScene = () => {
  return <Canvas camera={{fov: 75,position: [0, 0, 300]}}>
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    <color attach="background" args={['#000']} />
    <ambientLight intensity={1} />
    <Environment preset="sunset" blur={0.5} />
    <Stars count={20} speed={0} />
    <DarthVaderSaber />
  </Canvas>
}