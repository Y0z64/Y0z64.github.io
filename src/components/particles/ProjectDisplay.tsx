import React, { useState } from "react";
import Carrousel from "./Carrousel";
import { motion } from "framer-motion";
import clsx from "clsx";

export type Project = {
  title: string;
  description: string;
  extras?: {text: string, link?: string}[];
  link?: string;
  sources: string[];
  addPrefix?: boolean;
};

interface Props extends React.HTMLProps<HTMLDivElement> {
  project: Project;
  handleOpen: (val: boolean) => void;
  index: number;
  addPrefix?: boolean;
}

export default function ProjectDisplay({
  project,
  index,
  addPrefix = false,
  handleOpen,
}: Props) {
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
            "bg-[#1e1e1e] text-gray-100 hover:bg-white hover:text-[#1e1e1e]":
              !show,
            "bg-white text-[#1e1e1e] hover:bg-[#1e1e1e] hover:text-gray-100":
              show,
          },
        )}
        whileHover={{ paddingLeft: "1.7rem" }}
        animate={show ? { paddingLeft: "1.7rem" } : { paddingLeft: "0.5rem" }}
        onClick={() => handleClick()}
      >
        {addPrefix ? `PROJECT ${index + 1} - ${project.title}` : project.title}
      </motion.button>
      <div className="mb-2 h-[1px] w-full border-2 border-gray-100" />

      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          className="bg-primary mb-3 flex h-fit w-full flex-col items-center justify-start px-2 py-5 lg:mb-5"
        >
          {project.sources && <Carrousel sources={project.sources} />}
          <div className="flex h-full w-full flex-col items-start justify-center">
            <span className="text-md mt-1 w-full max-w-[1080px] pl-[0.125rem] text-left font-geistMono text-gray-100 lg:ml-3 lg:text-2xl">
              {project.description}
            </span>
            {project.extras && (
              <ul className="flex justify-start items-start mt-3 list-disc list-inside">
                {project.extras.map((extra, idx) => (
                  <li className="mt-1 lg:ml-3">
                    <a
                      key={idx}
                      href={extra.link}
                      className={`text-md font-geistMono ${extra.link ? "text-blue-400" : "text-gray-100"} hover:underline lg:text-2xl`}
                    >
                      {extra.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            <a
              href={project.link}
              className={`text-md mt-3 font-geistMono text-blue-400 hover:underline lg:ml-3 lg:text-2xl`}
            >
              Source
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
}
