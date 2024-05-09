import { PropsWithChildren, useMemo } from "react";
import { Canvas } from '@react-three/fiber';
import { AsciiRenderer } from "@react-three/drei";

interface Props extends PropsWithChildren {
  aL?: boolean;
}

export default function Container3D({ children, aL = true }: Props) {
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

  return (
    <div className="mx-1 h-full min-h-[36rem] w-full flex-grow invert">
      <Canvas>
        <color attach="background" args={["black"]} />
        <AsciiShader />
        {aL && <AmbientLight />}
        <SpotLight />
        <PointLight />
        {children}
      </Canvas>
    </div>
  );
}
