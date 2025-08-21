let  home = document.querySelector(".home");
let  rooms = document.querySelector(".room");
let  contact = document.querySelector(".contact");
let  about = document.querySelector(".about");

home?.addEventListener("click",()=>{
    window.location.href = "./home.html";
});



rooms?.addEventListener("click",()=>{
    window.location.href = "./rooms.html";
});



contact?.addEventListener("click",()=>{
    window.location.href = "./contact.html";
});



about?.addEventListener("click",()=>{
    window.location.href = "./about.html";
});


