import Nav from "../atoms/Nav";

export default function HeroScreen() {
  return (
    <div className="h-screen w-screen flex flex-col justify-between items-center snap-center mb-4">
      <Nav />
      {/* Add 3d model here */}
      <h1 className="font-geistMono flex justify-start h-min pl-3 tracking-tight -mb-4 w-full text-black dark:text-gray-100 text-[7rem]">
        Y0z64
      </h1>
    </div>
  );
}
