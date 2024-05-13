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

  const Mat = useMemo(() => {
    return () => <meshStandardMaterial color="red" />;
  }, []);

  return (
    <mesh
      scale={Math.min(viewport.width, viewport.height) / 2.7}
      {...props}
      ref={ref}
    >
      {children}
      <Mat />
    </mesh>
  );
}
