import { useState } from "react";
import ProjectButton, { Project } from "../particles/ProjectButton";
import clsx from "clsx";

const projects: Project[] = [
  {
    title: "PROJECT 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ut rerum necessitatibus similique quia, voluptatum architecto minima harum assumenda natus dicta eos atque qui mollitia doloribus asperiores accusantium nostrum non.",
    images: ["somethign", "somethign"],
  },
  {
    title: "PROJECT 2",
    description:
      "Lorem ipsum dolor  elit. Id ut rerum necessitatibus similique quia, voluptatum architecto minima harum assumenda natus dicta eos atque qui mollitia doloribus asperiores accusantium nostrum non.",
    images: ["somethign", "somethign"],
  },
  {
    title: "PROJECT 3",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ut rerum necessitatibus similique quia, voluptatum architecto minima harum assumenda natus dicta eos atque qui mollitia doloribus asperiores accusantium nostrum non.",
    images: ["somethign", "somethign"],
  },
];

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (val: boolean) => {
    setIsOpen(val);
  };

  return (
    <div
      className={clsx(
        "h-screen w-screen flex flex-col justify-start items-center pt-[4.6875rem] ",
        { "snap-center": isOpen, "": !isOpen }
      )}
    >
      <div className="px-4 h-fit min-h-[31.25rem] w-full flex flex-col">
        {projects.map((project, index) => (
          <ProjectButton
            key={index}
            project={project}
            handleOpen={handleOpen}
          />
        ))}
      </div>
    </div>
  );
}
