import Container3D from "../particles/Container3D";
import { Icosahedron } from "@react-three/drei";
import { MeshNormalMaterial } from "three";

export default function AboutMe() {
  return (
    <div
      id="whoami"
      className="flex h-fit min-h-[36.25rem] w-screen snap-center items-center justify-center lg:h-screen"
    >
      {/* 3d object */}
      <div className="invisible absolute flex h-full w-full items-center justify-center p-6 lg:visible lg:relative">
        <div className="hidden h-full w-0 lg:flex lg:w-full">
          <Container3D aL={false} position={[0, 0, 0]}>
            <Icosahedron
              rotation={[3, 0, 0]}
              material={new MeshNormalMaterial()}
            />
          </Container3D>
        </div>
      </div>
      {/* Text */}
      <div className="flex h-full w-full items-center justify-center lg:p-6">
        <div className="h-fit w-11/12 overflow-y-auto rounded-sm bg-white px-6 pb-7 text-black lg:h-full lg:w-full">
          <h1 className="my-5 w-full text-center font-geistMono text-[3rem] tracking-tighter md:text-[4.5rem] xl:my-8 xl:text-[6rem]">
            Who am I?
          </h1>
          <span className="flex w-full items-center justify-center text-left font-geistMono text-lg md:text-2xl xl:px-10 xl:leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nihil
            alias tenetur assumenda quae mollitia est, ratione illo sint?
            Aspernatur, ullam? Ducimus fugit nulla suscipit voluptas iusto
            ratione repellat est. Nobis rerum ab ea magnam amet, quos incidunt.
            Esse obcaecati perspiciatis, excepturi repellendus sed aut modi odio
            iste, voluptas quod quaerat fugit illo, quidem autem temporibus
            incidunt quos eaque aperiam?
          </span>
        </div>
      </div>
    </div>
  );
}
