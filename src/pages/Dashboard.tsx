import { projects } from "../data/projects";
import { graffitiTheme } from "../theme/graffiti";


export default function Dashboard() {


function getGreeting(){

const hour = new Date().getHours();

if(hour < 12){
return "GOOD MORNING MR SYBAH";
}

if(hour < 18){
return "GOOD AFTERNOON MR SYBAH";
}

return "GOOD EVENING MR SYBAH";

}



function openFolder(path:string){

if((window as any).electronAPI){

(window as any).electronAPI.openFolder(path);

}else{

alert(path);

}

}



function openVSCode(path:string){

if((window as any).electronAPI){

(window as any).electronAPI.openVSCode(path);

}else{

alert(path);

}

}



function startExpo(path:string){

if((window as any).electronAPI){

(window as any).electronAPI.runExpo(path);

}else{

alert(path);

}

}




return (

<div
style={{
minHeight:"100vh",
background:graffitiTheme.background,
padding:"30px",
color:graffitiTheme.text
}}
>


<div
style={{
background:graffitiTheme.panel,
padding:"35px",
borderRadius:"20px",
border:`3px solid ${graffitiTheme.green}`,
boxShadow:`0 0 25px ${graffitiTheme.green}`
}}
>


<h1
style={{
fontFamily:graffitiTheme.titleFont,
fontSize:"48px",
color:graffitiTheme.green,
letterSpacing:"4px"
}}
>
DEVELOPER HUB
</h1>


<h2
style={{
fontFamily:graffitiTheme.font,
color:graffitiTheme.pink
}}
>
{getGreeting()}
</h2>


<p>
Your digital workshop is online.
<br/>
Build. Break. Create.
</p>


</div>


<h2
style={{
marginTop:"40px",
fontFamily:graffitiTheme.titleFont,
color:graffitiTheme.blue
}}
>
🎨 PROJECT WALL
</h2>


<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(330px,1fr))",
gap:"25px"
}}
>


{projects.map(project=>(


<div
key={project.id}
style={{
background:"#202020",
padding:"25px",
borderRadius:"15px",
border:`2px solid ${graffitiTheme.pink}`,
boxShadow:`0 0 15px ${graffitiTheme.pink}`
}}
>


<h2
style={{
fontFamily:graffitiTheme.font,
color:graffitiTheme.blue
}}
>
{project.name}
</h2>



<p>
TYPE:
<br/>
{project.type}
</p>


<p>
STATUS:
<br/>
<strong>
{project.status}
</strong>
</p>



<div
style={{
height:"15px",
background:"#333",
borderRadius:"10px"
}}
>

<div
style={{
width:`${project.progress}%`,
height:"15px",
background:graffitiTheme.green,
borderRadius:"10px"
}}
/>

</div>


<p>
PROGRESS {project.progress}%
</p>



<button
onClick={()=>openFolder(project.path)}
>
📂 OPEN FOLDER
</button>


{" "}


<button
onClick={()=>openVSCode(project.path)}
>
💻 VS CODE
</button>



<br/>
<br/>


{project.type.includes("Expo") &&

<button
onClick={()=>startExpo(project.path)}
>
▶ START EXPO
</button>

}


</div>


))}



</div>


</div>

);


}