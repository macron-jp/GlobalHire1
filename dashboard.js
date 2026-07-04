// Animate Visa Progress

window.onload=()=>{

const progress=document.getElementById("progressFill");

let value=0;

const interval=setInterval(()=>{

value++;

progress.style.width=value+"%";

progress.innerHTML=value+"%";

if(value>=70){

clearInterval(interval);

}

},15);

}