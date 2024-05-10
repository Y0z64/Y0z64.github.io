import { PropsWithChildren } from "react";

export default function SocialBar({ children }: PropsWithChildren) {
  return (
    <div className=" mb-4 ml-4 flex h-full w-fit flex-col items-end justify-around space-y-5 md:ml-8 md:flex-row md:space-x-5 md:space-y-0 ">
      {children}
    </div>
  );
}
