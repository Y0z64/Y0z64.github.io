import { ThreeElements, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Mesh } from "three";

type MeshProps = ThreeElements["mesh"];

interface TorusknotProps extends MeshProps {
  children: React.ReactNode;
  isInView: boolean;
}

export default function Torusknot({
  children,
  isInView,
  ...props
}: TorusknotProps) {
  const ref = useRef<Mesh>(null!);
  const viewport = useThree((state) => state.viewport);
  const { invalidate } = useThree();

  useFrame((_state, delta) => {
    if (isInView) {
      ref.current.rotation.x = ref.current.rotation.y += delta / 2;
      invalidate();
    } else {
      null;
    }
  });

  const scaleNum = () => {
    const limits = { min: 5, max: 10 };
    const offset = 2.3;
    return (
      ((viewport.width - limits.min) / (limits.max - limits.min)) * 1.2 + offset
    );
  };

  const Mat = useMemo(() => {
    return () => <meshStandardMaterial color="red" />;
  }, []);

  return (
    <mesh
      scale={Math.min(viewport.width, viewport.height) / scaleNum()}
      {...props}
      ref={ref}
    >
      {children}
      <Mat />
    </mesh>
  );
}
