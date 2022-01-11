const target =document.querySelector("div.hello:first-child h1");


target.addEventListener("click",write2);

function write2(){
    target.style.color = "blue"
}

console.dir(target);

function handenter(){
    target.innerText = "Mouse is here";
}

function handeLeave(){
    target.innerText = "Mouse is  gone"
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato"
}

function handleWindowCopy(){
    alert("copier!")
}

function WindowOffline(){
    alert("no Wife")
}

function Windowonline(){
    alert("Wife online")
}

target.addEventListener("mouseenter" ,handenter);
target.addEventListener("mouseleave", handeLeave)

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",WindowOffline);
window.addEventListener("online",Windowonline);