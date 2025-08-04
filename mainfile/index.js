let menuBar = document.querySelector(".menuBar");
let menu = document.querySelector(".menu");

menuBar.addEventListener('click', function() {
    console.log("Menu bar clicked");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
});
