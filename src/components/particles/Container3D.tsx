import { memo, useEffect, useMemo, useRef } from "react";
import { Canvas, ThreeElements } from "@react-three/fiber";
import { AdaptiveDpr, AsciiRenderer, OrbitControls } from "@react-three/drei";
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

  useEffect(() => {
    console.log(isInView)
  }, [isInView])

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

  const Control = useMemo(() => {
    return () => <OrbitControls enableZoom={false} />;
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
      className="mx-1 h-full min-h-[36rem] w-full flex-grow invert"
    >
      <Canvas performance={performance} frameloop="demand">
        <AdaptiveDpr pixelated />
        <Control />
        <color attach="background" args={["black"]} />
        <AsciiShader />
        <AmbientLight />
        <SpotLight />
        <PointLight />
        <MemoizedRotatingGeom isInView={isInView} {...props}>
          {children}
        </MemoizedRotatingGeom>
      </Canvas>
    </div>
  );
}
