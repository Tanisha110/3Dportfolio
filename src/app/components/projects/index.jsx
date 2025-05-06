import ProjectLayout from "./ProjectLayout"

const ProjectList = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {projects.map((project, index) => (
        <ProjectLayout key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
