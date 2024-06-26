import { useState } from "react";
import ProjectButton, { Project } from "../particles/ProjectButton";
import clsx from "clsx";

const projects: Project[] = [
  {
    title: "BRAINYPAD",
    description:
      "Welcome to BrainyPad, where your notes come to life! This innovative app leverages cutting-edge artificial intelligence to transform your study notes into interactive quizzes, helping reinforce your learning and ensuring you grasp the most important concepts. Whether you're a student, a lifelong learner, or a professional brushing up on new material, QuizNote is designed to enhance your learning experience by making study time both efficient and effective.",
    link: "https://github.com/Gorchon/BrainyPad",
    images: [
      "./images/brainypad/brainypad-0.png",
    ],
    addPrefix: true,
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
        { " ": !isOpen, "": isOpen },
      )}
    >
      <div className="flex h-fit w-full flex-col px-4">
        {projects.map((project, index) => (
          <ProjectButton
            key={index}
            project={project}
            handleOpen={handleOpen}
            index={index}
            addPrefix={project.addPrefix}
          />
        ))}
      </div>
      {projects.length <= 3 && (
        <div className="mt-3 flex h-fit w-full items-center justify-center font-geistMono text-lg tracking-wide text-white">
          More coming soon...
        </div>
      )}
    </div>
  );
}
