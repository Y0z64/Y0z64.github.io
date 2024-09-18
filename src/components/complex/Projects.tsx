import ProjectDisplay, { Project } from "../particles/ProjectDisplay";
import clsx from "clsx";

const projects: Project[] = [
  {
    title: "BRAINYPAD",
    description:
      "Welcome to BrainyPad, where your notes come to life! This innovative app leverages cutting-edge artificial intelligence to transform your study notes into interactive quizzes, helping reinforce your learning and ensuring you grasp the most important concepts. Whether you're a student, a lifelong learner, or a professional brushing up on new material, QuizNote is designed to enhance your learning experience by making study time both efficient and effective.",
    link: "https://github.com/Gorchon/BrainyPad",
    sources: [
      "./assets/brainypad/0.webp",
      "./assets/brainypad/1.webp",
      "./assets/brainypad/2.webp",
    ],
    addPrefix: true,
  },
  {
    title: "ForestForecast",
    description:
      "ForestForecast tackles the global challenge of deforestation—caused by agriculture, logging, and urban expansion-by providing a plataform powered by AI that analyses satelital images in search for deforestation patterns. The plataform also provides a series of tools to help users understand the data, all in an elegant and innovative 3D interface.",
    link: "https://github.com/FerretScript/ForestForecast ",
    sources: [
      "./assets/forestforecast/0.webp",
      "./assets/forestforecast/1.webp",
      "./assets/forestforecast/2.webp",
    ],
    addPrefix: true,
    extras: [
      {
        text: "Made with the team FerretScript during the 2024 Guadalahacks Hackathon.",
        link: "https://github.com/FerretScript",
      },
    ],
    deploy: "https://www.forestforecast.lat/",
  },
  {
    title: "NART",
    description:
      "Nart is a company dedicated to developing immersive and personalized artistic experiences, adapted to the needs of each client. We use advanced technologies and various datasets (EEG, biometric, environmental) to offer unique multisensory experiences in VR, lighting, video mapping, visual arts, AR, and 360-degree videos.",
    link: "https://github.com/Y0z64/nart-webapp",
    addPrefix: true,
    sources: ["./assets/nart/0.webp", "./assets/nart/1.webp"],
    extras: [
      {
        text: "Made for the NART team, presented in Creativa Guadalajara 2024.",
        link: "https://www.creativagdl.com/",
      },
    ],
    deploy: "https://neurosenseart.com/",
  },
];

export default function Projects() {
  return (
    <div
      id="projects"
      className={clsx(
        "flex h-fit min-h-dvh w-screen flex-col items-center justify-start pt-[4.6875rem] ",
      )}
    >
      <div className="flex h-fit w-full flex-col px-4">
        {projects.map((project, index) => (
          <ProjectDisplay
            key={index}
            project={project}
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
