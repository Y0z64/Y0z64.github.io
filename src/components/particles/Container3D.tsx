import { PropsWithChildren } from "react";
import { Canvas } from "@react-three/fiber";
import { AsciiRenderer } from "@react-three/drei";

interface Props extends PropsWithChildren {
  ambientLight?: boolean;
}

export default function Container3D({ children, ambientLight = true }: Props) {
  return (
    <div className="mx-1 h-full min-h-[36rem] w-full flex-grow invert">
      <Canvas>
        <color attach="background" args={["black"]} />
        <AsciiRenderer fgColor="black" bgColor="transparent" />
        {ambientLight && <ambientLight intensity={Math.PI / 2} />}
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        {children}
      </Canvas>
    </div>
  );
}
