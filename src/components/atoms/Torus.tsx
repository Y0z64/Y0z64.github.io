import { ThreeElements, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export default function Torusknot(props: ThreeElements["mesh"]) {
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
    >
      <torusKnotGeometry args={[1, 0.2, 128, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}
