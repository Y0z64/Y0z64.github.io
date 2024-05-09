import { useState } from "react";
import ProjectButton, { Project } from "../particles/ProjectButton";
import clsx from "clsx";

const projects: Project[] = [
  {
    title: "PROJECT 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ut rerum necessitatibus similique quia, voluptatum architecto minima harum assumenda natus dicta eos atque qui mollitia doloribus asperiores accusantium nostrum non.",
    images: ["somethign", "somethign", "somethign"],
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
      id="projects"
      className={clsx(
        "flex h-fit min-h-screen w-screen flex-col items-center justify-start pt-[4.6875rem] ",
        { "snap-center": !isOpen, "": isOpen },
      )}
    >
      <div className="flex h-fit min-h-[31.25rem] w-full flex-col px-4">
        {projects.map((project, index) => (
          <ProjectButton
            key={index}
            project={project}
            handleOpen={handleOpen}
            dark={true}
          />
        ))}
      </div>
    </div>
  );
}
