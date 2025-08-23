import { getLogin ,setLogin } from "./createA.js";

let contanernf = document.querySelector(".containernf");
let favorite = document.querySelector(".favorite");
let help = document.querySelector(".help");
let roomMetey = document.querySelector(".roomMetey");
let privacy = document.querySelector(".privacy");
let conBox = document.querySelector(".confirm-box");

    contanernf.style.display="block";
    favorite.style.display = "none";
    help.style.display = "none";
    roomMetey.style.display = "none";
    privacy.style.display = "none";
    conBox.style.display="none";


document.querySelector("#optn").addEventListener("click",()=>{
    contanernf.style.display="block";

    favorite.style.display = "none";
    help.style.display = "none";
    roomMetey.style.display = "none";
    privacy.style.display = "none";
    conBox.style.display="none";
});

document.querySelector("#optF").addEventListener("click",()=>{
    favorite.style.display = "grid";

    contanernf.style.display="none";
    help.style.display = "none";
    roomMetey.style.display = "none";
    privacy.style.display = "none";
    conBox.style.display="none";
})

document.querySelector("#optH").addEventListener("click",()=>{
    help.style.display = "block";
    
    favorite.style.display = "none";
    contanernf.style.display="none";
    roomMetey.style.display = "none";
    privacy.style.display = "none";
    conBox.style.display="none";
})

document.querySelector("#optRM").addEventListener("click",()=>{
    roomMetey.style.display = "block";
    
    favorite.style.display = "none";
    contanernf.style.display="none";
    help.style.display = "none";
    privacy.style.display = "none";
    conBox.style.display="none";
})

document.querySelector("#optP").addEventListener("click",()=>{
    privacy.style.display = "block";
    
    favorite.style.display = "none";
    contanernf.style.display="none";
    help.style.display = "none";
    roomMetey.style.display = "none";
    conBox.style.display="none";
})


document.getElementById("logoutBtn").addEventListener("click",()=>{
    contanernf.style.display="none";
    favorite.style.display = "none";
    help.style.display = "none";
    roomMetey.style.display = "none";
    privacy.style.display = "none";

    conBox.style.display="block";
});

document.getElementById("btn-yes").addEventListener("click",()=>{
    setLogin(false);
    conBox.style.display="none";
    alert("your account is Logout");
});

document.getElementById("btn-no").addEventListener("click",()=>{
    conBox.style.display="none";
    console.log(getLogin);
});

