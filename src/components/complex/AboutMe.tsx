import Container3D from "../particles/Container3D";
import { Icosahedron } from "@react-three/drei";
import { MeshNormalMaterial } from "three";

export default function AboutMe() {
  return (
    <div
      id="aboutme"
      className="flex h-fit max-h-screen min-h-[36.25rem] w-screen   items-center justify-center lg:h-screen"
    >
      {/* 3d object */}
      <div className="invisible absolute flex h-full w-full items-center justify-center p-6 xl:visible xl:relative">
        <div className="hidden h-full w-0 lg:flex lg:w-full">
          <Container3D position={[0, 0, 0]}>
            <Icosahedron
              rotation={[3, 0, 0]}
              material={new MeshNormalMaterial()}
            />
          </Container3D>
        </div>
      </div>
      {/* Content */}
      <div className="flex h-full w-full items-center justify-center lg:p-6">
        {/* Wrapper */}
        <div className="h-fit w-11/12 overflow-y-auto rounded-sm bg-white px-6 pb-7 text-black lg:h-full lg:w-full">
          {/* Text wrapper */}
          <h1 className="my-5 w-full text-center font-geistMono text-[3rem] tracking-tighter md:text-[4rem] lg:text-[5rem] xl:my-8 xl:text-[6rem]">
            Who am I?
          </h1>
          <span className="font-inter prose block text-left tracking-tighter md:text-[1.4rem] lg:px-14 lg:text-[1.6rem] xl:text-[1.8rem] xl:leading-relaxed">
            My name is <b>Yair Salvador</b> and I'm a{" "}
            <b>full-stack developer</b> and CS student. I have interest in
            multiple fields and{" "}
            <b>have experience working with teams of all sizes</b>, but mostly I
            do what I find fun at any given moment, from game moding to building
            complex project ideas into reality.
            <br />
            <br />
            While my professional focus is in <b>web development</b>, I usually
            delve into new territories like AI development and implementation. I
            possess a natural <b>talent for rapid learning</b> and a drive to
            <b> tackle challenging problems head-on</b>.
            <br />
            <br />
            If you need someone that <b>learns extremelly fast</b> and does not
            back down form hard problems, I'm your guy.
          </span>
        </div>
      </div>
    </div>
  );
}
