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

export default function ProjectButton({ project, handleOpen, dark }: Props) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    if (show) {
      handleOpen(false);
    } else {
      handleOpen(true);
    }
    setShow(!show);
  };

  const theme = (val: boolean) => {
    return val ? "dark" : "light";
  };

  return (
    <div className="h-fit w-full justify-center items-center">
      <motion.button
        className={clsx(
          `font-geistMono text-[2.7rem] w-full text-left pl-2 transition-colors duration-300 dark:hover:bg-white dark:hover:text-[#1e1e1e] hover:bg-black hover:text-gray-100`,
          {
            [`${theme(dark)}-theme`]: show,
            [`${theme(!dark)}-theme`]: !show,
          },
        )}
        whileHover={{ paddingLeft: "1rem" }}
        animate={show ? { paddingLeft: "1.2rem" } : { paddingLeft: "0.5rem" }}
        onClick={() => handleClick()}
      >
        {project.title}
      </motion.button>
      <div className="border-gray-100 border-2 w-full h-[1px] mb-2" />

      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          className="snap-center w-full h-fit py-5 px-2 flex flex-col items-center justify-start"
        >
          {project.images && <ImageSlider images={project.images} />}
          <span className="text-black text-md font-geistMono dark:text-gray-100 w-full text-left pl-[0.125rem] mt-1">
            {project.description}
          </span>
        </motion.div>
      )}
    </div>
  );
}
