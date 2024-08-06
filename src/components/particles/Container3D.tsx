import { memo, Suspense, useMemo, useRef } from "react";
import { Canvas, ThreeElements } from "@react-three/fiber";
import {
  AdaptiveDpr,
  AsciiRenderer,
  OrbitControls,
  OrbitControlsProps,
} from "@react-three/drei";
import RotatingGeom from "../atoms/RotatingGeom";
import * as THREE from "three";
import { useInView } from "framer-motion";

type MeshProps = ThreeElements["mesh"];

interface Props extends MeshProps {
  children: React.ReactNode;
}

export default function Container3D({ children, ...props }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  THREE.ColorManagement.enabled = true;

  const AsciiShader = useMemo(
    () => () => AsciiRenderer({ fgColor: "black", bgColor: "transparent" }),
    [],
  );

  const AmbientLight = useMemo(() => {
    return () => <ambientLight intensity={Math.PI / 2} />;
  }, []);

  const SpotLight = useMemo(() => {
    return () => (
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
    );
  }, []);

  const PointLight = useMemo(() => {
    return () => (
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
    );
  }, []);

  const MemoizedRotatingGeom = memo(RotatingGeom);

  const Controls = useMemo(() => {
    return (props: OrbitControlsProps) => (
      <OrbitControls enableZoom={false} {...props} />
    );
  }, []);

  const performance = {
    current: 1,
    min: 0.1,
    max: 1,
    debounce: 200,
  };

  return (
    <div
      ref={ref}
      className="relative mx-1 h-full min-h-[36rem] w-full flex-grow invert"
    >
      <div className="fixed left-0 top-0 z-40 h-full w-full lg:hidden"></div>
      <Canvas performance={performance} frameloop="demand">
        <Suspense fallback={<div className="text-white font-geistMono"> Loading...</div>}>
          <AdaptiveDpr pixelated />
          <Controls />
          <color attach="background" args={["black"]} />
          <AsciiShader />
          <AmbientLight />
          <SpotLight />
          <PointLight />
          <MemoizedRotatingGeom isInView={isInView} {...props}>
            {children}
          </MemoizedRotatingGeom>
        </Suspense>
      </Canvas>
    </div>
  );
}
