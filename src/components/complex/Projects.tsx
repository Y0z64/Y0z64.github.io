import { useState } from "react";
import ProjectButton, { Project } from "../particles/ProjectButton";
import clsx from "clsx";

const projects: Project[] = [
  {
    title: "PROJECT 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ut rerum necessitatibus similique quia, voluptatum architecto minima harum assumenda natus dicta eos atque qui mollitia doloribus asperiores accusantium nostrum non.",
    images: [
      "somethign",
      "somethign",
      "somethign",
      "somethign",
      "somethign",
      "somethign",
    ],
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
        "flex h-fit min-h-dvh w-screen flex-col items-center justify-start pt-[4.6875rem] ",
        { "snap-center": !isOpen, "": isOpen },
      )}
    >
      <div className="flex h-fit w-full flex-col px-4">
        {projects.map((project, index) => (
          <ProjectButton
            key={index}
            project={project}
            handleOpen={handleOpen}
            dark={true}
          />
        ))}
      </div>
      {projects.length <= 3 && (
        <div className="flex h-fit w-full font-geistMono tracking-wide justify-center items-center text-lg text-white">More comming soon...</div>
      )}
    </div>
  );
}
