import { PROJECTS } from "../constants";

const ProjectsSection = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div className="flex flex-col items-center lg:justify-start lg:items-start lg:flex-wrap lg:flex-row gap-y-8">
        {PROJECTS.map((project, key) => (
          <div
            className="w-full lg:w-1/4 flex items-center gap-y-4 flex-col p-4"
            key={key}
          >
            <img
              src={project.image}
              alt={project.title}
              width={250}
              height={250}
              className="rounded border border-stone-900"
            />
            <h3 className="font-semibold text-2xl">{project.title}</h3>
            <span className="text-stone-400 text-center w-3/4">
              {" "}
              {project.description}{" "}
            </span>
            <div className="w-full max-w-xl lg:w-3/4 flex flex-wrap justify-center gap-2">
              {project.technologies.map((tech, key) => (
                <span
                  className="rounded tracking-tighter bg-stone-900 p-2 text-sm font-medium text-stone-300"
                  key={key}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
