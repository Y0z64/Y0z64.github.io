import ProjectButton, { Project } from "../atoms/ProjectButton";


const projects: Project[] = [
  {
    title: "PROJECT 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, libero.",
    images: ["somethign"],
  },
];

export default function Projects() {
  return (
    <div className="h-screen w-screen flex flex-col justify-start items-center snap-center pt-[4.6875rem]">
      <div className="px-4 h-fit min-h-[31.25rem] w-full flex flex-col">
        {projects.map((project, index) => (
          <ProjectButton key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
