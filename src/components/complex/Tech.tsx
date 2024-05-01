import TechCell from '../atoms/TechCell';
export default function Tech() {
  return (
    <div
      className={
        "h-screen w-screen flex flex-col justify-start items-center pt-12 snap-center px-6"
      }
    >
      <h2 className="font-geistMono text-[3rem] text-black dark:text-gray-100 w-full text-left leading-[2.6rem] mb-2">
        TECH
        <br />
        I
        <br />
        WORK
        <br />
        WITH
      </h2>
      <div className="border-gray-100 border-2 w-full h-[1px] mb-3" />
      <div className="grid grid-cols-2 gap-3 w-full h-fit">
        <TechCell/>
      </div>
    </div>
  );
}