import Nav from "../atoms/Nav";
import Torus from "../atoms/Torus";
import Container3D from "../particles/Container3D";

export default function HeroScreen() {
  return (
    <div className="relative mb-4 flex h-screen w-screen snap-center flex-col items-end justify-between">
      <Nav />
      <div className="order flex h-full w-full flex-col items-end justify-end xl:flex-row-reverse">
        <Container3D>
          <Torus position={[1, 0, -0.6]} />
        </Container3D>
        <h1 className="-mb-4 flex h-min w-full justify-start pl-3 font-geistMono text-[7rem] tracking-tight text-gray-100 md:mr-4 md:text-[10rem] lg:ml-12 lg:text-[14rem] xl:w-min">
          Y0z64
        </h1>
      </div>
    </div>
  );
}
