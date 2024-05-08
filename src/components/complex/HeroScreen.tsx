import { Canvas, ThreeElements, useFrame, useThree } from "@react-three/fiber";
import { AsciiRenderer } from "@react-three/drei";
import Nav from "../atoms/Nav";
import { Mesh } from "three";
import { useRef } from "react";

export default function HeroScreen() {
  return (
    <div className="h-screen relative w-screen flex flex-col justify-between items-end snap-center mb-4">
      <Nav />
      <div className="min-h-[36rem] w-96 h-full mx-1">
        <Canvas>
          <color attach="background" args={["black"]} />
          <AsciiRenderer fgColor="white" bgColor="transparent" />
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
          />
          <Torusknot position={[0.7,-0.4,0]}/>
        </Canvas>
      </div>
      <h1 className="font-geistMono flex justify-start h-min pl-3 tracking-tight -mb-4 w-full text-black dark:text-gray-100 text-[7rem]">
        Y0z64
      </h1>
    </div>
  );
}

function Torusknot(props: ThreeElements["mesh"]) {
  const ref = useRef<Mesh>(null!);
  const viewport = useThree((state) => state.viewport);
  useFrame(
    (_state, delta) =>
      (ref.current.rotation.x = ref.current.rotation.y += delta / 2)
  );
  return (
    <mesh
      scale={Math.min(viewport.width, viewport.height) / 2.5}
      {...props}
      ref={ref}
    >
      <torusKnotGeometry args={[1, 0.2, 128, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}