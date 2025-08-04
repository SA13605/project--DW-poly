let menuBar = document.querySelector(".menuBar");
let menu = document.querySelector(".menu");

menuBar.addEventListener('click', function() {
    console.log("Menu bar clicked");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
});

let hiroImg = document.querySelector(".hiroImg");

document.querySelector(".hiro1").addEventListener('click', function() {
    hiroImg.setAttribute("src", "accets/hiro1.avif");

});

document.querySelector(".hiro2").addEventListener('click', function() {
    hiroImg.setAttribute("src", "accets/hiro2.avif");
});

document.querySelector(".hiro3").addEventListener('click', function() {
    hiroImg.setAttribute("src", "accets/hiro3.avif");
});

document.querySelector(".hiro4").addEventListener('click', function() {
    hiroImg.setAttribute("src", "accets/hiro4.jpg");
});

document.querySelector(".hiro5").addEventListener('click', function() {
    hiroImg.setAttribute("src", "accets/hiro5.webp");
});

