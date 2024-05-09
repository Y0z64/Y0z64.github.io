import React, { useState } from "react";
import ImageSlider from "../atoms/ImageSlider";
import { motion } from "framer-motion";
import clsx from "clsx";

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
        className={clsx(
          "w-full pl-2 text-left font-geistMono text-[2.7rem] transition-colors duration-300",
          {
            "bg-black text-gray-100 hover:bg-white hover:text-[#1e1e1e] dark:bg-[#1e1e1e]":
              !show,
            "bg-white text-[#1e1e1e] hover:bg-black hover:text-gray-100":
              show,
          },
        )}
        whileHover={{ paddingLeft: "1.7rem" }}
        animate={show ? { paddingLeft: "1.7rem" } : { paddingLeft: "0.5rem" }}
        onClick={() => handleClick()}
      >
        {project.title}
      </motion.button>
      <div className="mb-2 h-[1px] w-full border-2 border-gray-100" />

      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          className="bg-primary flex h-fit w-full snap-center flex-col items-center justify-start px-2 py-5"
        >
          {project.images && <ImageSlider images={project.images} />}
          <div className="flex h-full w-full items-center justify-start">
            <span className="text-md mt-1 w-full max-w-[1080px] pl-[0.125rem] text-left font-geistMono text-gray-100 lg:text-2xl">
              {project.description}
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
