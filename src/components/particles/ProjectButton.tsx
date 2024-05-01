import React, { useState } from "react";
import ImageSlider from "../atoms/ImageSlider";
import { motion } from "framer-motion";

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
  };

  return (
    <div className="h-fit w-full justify-center items-center">
      <button
        className="font-geistMono text-[2.7rem] text-black dark:text-gray-100 w-full text-left pl-2"
        onClick={() => handleClick()}
      >
        {project.title}
      </button>
      <div className="border-gray-100 border-2 w-full h-[1px] mb-2" />

      {show && (
        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 100}}
          className="snap-center w-full h-fit py-5 px-2 flex flex-col items-center justify-start"
        >
          {project.images && <ImageSlider images={project.images} />}
          <span className="text-black dark:text-gray-100 w-full text-left pl-[0.0313rem] mt-1">
            {project.description}
          </span>
        </motion.div>
      )}
    </div>
  );
}
