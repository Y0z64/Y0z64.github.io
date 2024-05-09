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
  handleOpen: (val: boolean) => void;
  dark: boolean;
}

export default function ProjectButton({ project, handleOpen }: Props) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    if (show) {
      handleOpen(false);
    } else {
      handleOpen(true);
    }
    setShow(!show);
  };


  return (
    <div className="h-fit w-full items-center justify-center">
      <motion.button
        className="w-full bg-black text-gray-100 pl-2 text-left font-geistMono text-[2.7rem] transition-colors duration-300 hover:bg-white hover:text-[#1e1e1e] dark:bg-[#1e1e1e]"
        whileHover={{ paddingLeft: "1rem" }}
        animate={show ? { paddingLeft: "1.2rem" } : { paddingLeft: "0.5rem" }}
        onClick={() => handleClick()}
      >
        {project.title}
      </motion.button>
      <div className="mb-2 h-[1px] w-full border-2 border-gray-100" />

      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          className="flex h-fit w-full snap-center flex-col items-center justify-start px-2 py-5"
        >
          {project.images && <ImageSlider images={project.images} />}
          <span className="text-md mt-1 w-full pl-[0.125rem] text-left font-geistMono text-gray-100">
            {project.description}
          </span>
        </motion.div>
      )}
    </div>
  );
}
