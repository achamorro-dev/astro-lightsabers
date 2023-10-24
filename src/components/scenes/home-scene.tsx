import { Environment, ScrollControls, Stars } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect, useState, type FC } from "react"
import { DarthVaderSaber } from "../sabers/darth-vader-saber"

export const HomeScene: FC = () => {
  const [scrollPages, setScrollPages] = useState(0)

  useEffect(() => {

    function onRouteChange() {
      const path = window.location.pathname
      
      if (path === '/') {
        setScrollPages(0)
      }

      setScrollPages(4)
    }

    onRouteChange()

    document.addEventListener('astro:page-load', onRouteChange)
    document.addEventListener('astro:after-swap', onRouteChange)

    return () => {
      document.addEventListener('astro:page-load', onRouteChange)
      document.addEventListener('astro:after-swap', onRouteChange)
    }
  }, [])
  return <Suspense fallback={null}>
        <Canvas camera={{fov: 75,position: [0, 0, 300]}}>
        <color attach="background" args={['#000']} />
        <ambientLight intensity={1} />
        <Environment preset="sunset" blur={0.5} />
        <Stars count={80} speed={0} />
        <ScrollControls pages={scrollPages} damping={0.5}>
          <DarthVaderSaber />
        </ScrollControls>
      </Canvas>
    </Suspense>
}