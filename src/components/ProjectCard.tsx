type Props = {

project:any;

};


export default function ProjectCard({project}:Props){

return (

<div className="project-card">


<h2>
{project.name}
</h2>


<p>
Type: {project.type}
</p>


<p>
Progress: {project.progress}%
</p>


<p>
Status: {project.status}
</p>


</div>

);

}