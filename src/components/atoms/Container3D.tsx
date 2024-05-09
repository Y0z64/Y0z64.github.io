import { Mesh } from "three";
import { useEffect, useRef } from "react";
import { Canvas, ThreeElements, useFrame, useThree } from "@react-three/fiber";
import { AsciiRenderer } from "@react-three/drei";

export default function Container3D() {
  return (
    <div className="mx-1 h-full min-h-[36rem] w-full flex-grow ">
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
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Torusknot position={[0.7, -0.4, 0]} />
      </Canvas>
    </div>
  );
}

function Torusknot(props: ThreeElements["mesh"]) {
  const ref = useRef<Mesh>(null!);
  const viewport = useThree((state) => state.viewport);

  useEffect(() => {
    console.log("viewport", viewport.width);
  }, [viewport]);

  useFrame(
    (_state, delta) =>
      (ref.current.rotation.x = ref.current.rotation.y += delta / 2),
  );

  const scaleNum = () => {
    const limits = {min: 5, max:10}
    const offset = 2.3;
    return ((viewport.width-limits.min) / (limits.max - limits.min))*1.2 + offset;
  };

  useEffect(() => {console.log("Scale factor", scaleNum())}, [viewport.width])

  return (
    <mesh
      scale={Math.min(viewport.width, viewport.height) / scaleNum()}
      {...props}
      ref={ref}
    >
      <torusKnotGeometry args={[1, 0.2, 128, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}
