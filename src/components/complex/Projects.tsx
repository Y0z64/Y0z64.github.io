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
      "./images/brainypad/0.png",
      "./images/brainypad/1.png",
      "./images/brainypad/2.png",
    ],
    addPrefix: true,
  },
  {
    title: "ForestForecast",
    description:
      "ForestForecast tackles the global challenge of deforestation—caused by agriculture, logging, and urban expansion-by providing a plataform powered by AI that analyses satelital images in search for deforestation patterns. The plataform also provides a series of tools to help users understand the data, all in an elegant and innovative 3D interface.",
    link: "https://github.com/FerretScript/ForestForecast ",
    images: [
      "./images/forestforecast/0.png",
      "./images/forestforecast/1.png",
      "./images/forestforecast/2.png",
    ],
    addPrefix: true,
    extras: [
      {
        text: "Made with the team FerretScript during the 2024 Guadalahacks Hackathon.",
        link: "https://github.com/FerretScript",
      },
    ],
  },
  {
    title: "Neuro Sense Art",
    description:
      "Nart is a company dedicated to developing immersive and personalized artistic experiences, adapted to the needs of each client. We use advanced technologies and various datasets (EEG, biometric, environmental) to offer unique multisensory experiences in VR, lighting, video mapping, visual arts, AR, and 360-degree videos.",
    link: "https://github.com/Y0z64/nart-webapp",
    addPrefix: true,
    images: ["./images/nart/0.png", "./images/nart/1.png"],
    extras: [
      {
        text: "Made for the NART team, presented in Creativa Guadalajara 2024.",
        link: "https://www.creativagdl.com/",
      },
    ],
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
