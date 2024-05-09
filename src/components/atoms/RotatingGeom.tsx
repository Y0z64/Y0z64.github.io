import { ThreeElements, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from 'react';
import { Mesh, MeshBasicMaterial } from "three";

type MeshProps = ThreeElements["mesh"];

interface TorusknotProps extends MeshProps {
  children: React.ReactNode;
}
export default function Torusknot({ children, ...props }: TorusknotProps) {
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

  const mat = useMemo(() => new MeshBasicMaterial({color: "red"}), []);

  return (
    <mesh
      scale={Math.min(viewport.width, viewport.height) / scaleNum()}
      {...props}
      ref={ref}
      material={mat}
    >
      {children}
    </mesh>
  );
}