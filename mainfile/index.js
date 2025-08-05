let menuBar = document.querySelector(".menuBar");
let menu = document.querySelector(".menu");
let showWishList = document.querySelector(".showWishList");
let showProfile = document.querySelector(".showProfile");

menuBar.addEventListener('click', function() {
    console.log("Menu bar clicked");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";

    showWishList.style.display = (showWishList.style.display === "block") ? "none" : "none";
    showProfile.style.display = (showProfile.style.display === "block") ? "none" : "none";
});

document.querySelector(".wishList").addEventListener("click",()=>{
    showWishList.style.display = (showWishList.style.display === "block") ? "none" : "block";

    showProfile.style.display = (showProfile.style.display === "block") ? "none" : "none";
    menu.style.display = (menu.style.display === "block") ? "none" : "none";
});

document.querySelector(".profile").addEventListener("click",()=>{
    showProfile.style.display = (showProfile.style.display === "block") ? "none" : "block";

    menu.style.display = (menu.style.display === "block") ? "none" : "none";
    showWishList.style.display = (showWishList.style.display === "block") ? "none" : "none";
});

// hiro imgs
let hiroImg = document.querySelector(".hiroImg");

document.querySelector(".hiro1").addEventListener('click', function() {
    hiroImg.setAttribute("src", "accets/hiro1.jpg");

});

document.querySelector(".hiro2").addEventListener('click', function() {
    hiroImg.setAttribute("src", "accets/hiro2.png");
});

document.querySelector(".hiro3").addEventListener('click', function() {
    hiroImg.setAttribute("src", "accets/hiro3.jpg");
});

document.querySelector(".hiro4").addEventListener('click', function() {
    hiroImg.setAttribute("src", "accets/hiro4.jpg");
});

document.querySelector(".hiro5").addEventListener('click', function() {
    hiroImg.setAttribute("src", "accets/hiro5.jpg");
});

