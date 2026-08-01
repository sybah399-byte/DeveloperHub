import {useState,useRef,useEffect} from "react";
import "../styles/terminal.css";


export default function Terminal(){

const [command,setCommand]=useState("");
const [history,setHistory]=useState<string[]>([]);

const bottomRef = useRef<HTMLDivElement>(null);


useEffect(()=>{

bottomRef.current?.scrollIntoView({
behavior:"smooth"
});

},[history]);



async function runCommand(){

if(!command.trim()) return;


const time =
new Date().toLocaleTimeString();


setHistory(prev=>[
...prev,
`[${time}] > ${command}`
]);


const result =
await window.electronAPI.runCommand(command);


setHistory(prev=>[
...prev,
result.output || result.error
]);


setCommand("");

}



function clearTerminal(){

setHistory([]);

}



return (

<div className="terminal">

<h2>
Developer Terminal
</h2>


<div className="terminal-window">


{
history.map(
(line,index)=>(

<div key={index}>
{line}
</div>

)
)
}


<div ref={bottomRef}/>

</div>



<div className="terminal-input">


<span>
&gt;
</span>


<input

value={command}

onChange={
e=>setCommand(e.target.value)
}

onKeyDown={
e=>{
if(e.key==="Enter")
runCommand();
}
}

/>


<button onClick={runCommand}>
Run
</button>


<button onClick={clearTerminal}>
Clear
</button>


</div>


</div>

);


}