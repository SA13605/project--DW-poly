import { getLogin ,setLogin } from "./createA.js";
let conBox = document.querySelector(".confirm-box");


document.getElementById("logoutBtn").addEventListener("click",()=>{
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

