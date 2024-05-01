import React, { useState } from "react";
import Images from "./Images";

export type Project = {
  title: string;
  description: string;
  images: string[];
};

interface Props extends React.HTMLProps<HTMLDivElement> {
  project: Project;
}

export default function ProjectButton({ project }: Props) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <div className="h-fit w-full justify-center items-center">
      <div
        className="font-geistMono text-[2.7rem] text-black dark:text-gray-100 w-full text-left pl-2"
        onClick={() => handleClick()}
      >
        {project.title}
      </div>
      <div className="border-gray-100 border-2 w-full h-[1px] mb-2" />
      {show && (
        <div className="snap-center w-full h-fit min-h-[300px] bg-pink-400 py-5 px-2 flex flex-col items-center justify-start">
          {project.images && <Images images={project.images} />}
          <span className="text-black dark:text-gray-100 w-full text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eos
            odio aut minima accusamus fugiat.
          </span>
        </div>
      )}
    </div>
  );
}
