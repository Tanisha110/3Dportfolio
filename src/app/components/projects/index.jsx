import ProjectLayout from "./ProjectLayout"
const ProjectList =({projects})=>{

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" >
        {projects.map((project, index)=>{
            return <ProjectLayout  key={index} {...project}/>
        })}
        </div>
    )
}
export default ProjectList