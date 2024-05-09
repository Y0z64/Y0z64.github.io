import { useMemo } from "react";
import { Canvas, ThreeElements } from "@react-three/fiber";
import { AsciiRenderer } from "@react-three/drei";
import RotatingGeom from "../atoms/RotatingGeom";

type MeshProps = ThreeElements["mesh"];

interface Props extends MeshProps {
  children: React.ReactNode;
  aL?: boolean;
}


export default function Container3D({ children, aL = true, ...props }: Props) {
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
        <RotatingGeom {...props}>{children}</RotatingGeom>
      </Canvas>
    </div>
  );
}
