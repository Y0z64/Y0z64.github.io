import Nav from "../atoms/Nav";
import Container3D from "../atoms/Container3D";

export default function HeroScreen() {
  return (
    <div className="relative mb-4 flex h-screen w-screen snap-center flex-col items-end justify-between">
      <Nav />
      <div className="order flex h-full w-full flex-col items-end justify-end xl:flex-row-reverse">
        <Container3D />
        <h1 className="-mb-4 flex h-min w-full justify-start pl-3 font-geistMono text-[7rem] tracking-tight text-black md:mr-4 lg:text-[14rem] xl:w-min lg:ml-12 dark:text-gray-100">
          Y0z64
        </h1>
      </div>
    </div>
  );
}
