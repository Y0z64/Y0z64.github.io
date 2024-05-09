import { Icosahedron } from "@react-three/drei";
import { ThreeElements, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, MeshNormalMaterial, MeshPhongMaterial } from "three";

export default function RotatingIcosahedron(props: ThreeElements["mesh"]) {
  const ref = useRef<Mesh>(null!);
  const viewport = useThree((state) => state.viewport);

  useFrame(
    (_state, delta) =>
      (ref.current.rotation.x = ref.current.rotation.y += delta / 2),
  );

  const scaleNum = () => {
    const limits = { min: 5, max: 10 };
    const offset = 2.3;
    return (
      ((viewport.width - limits.min) / (limits.max - limits.min)) * 1.2 + offset
    );
  };

  return (
    <mesh
      scale={Math.min(viewport.width, viewport.height) / scaleNum()}
      {...props}
      ref={ref}
      material={new MeshPhongMaterial()}
    >
      <Icosahedron rotation={[3, 0, 0]} material={new MeshNormalMaterial()} />
    </mesh>
  );
}
