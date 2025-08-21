import { getRoomData } from "./roomData.js";
let roomcard = document.querySelector(".addedRoomCard");
let searcText = document.querySelector("#searchText");
let searcBtn = document.querySelector("#searchBtn");
let location = document.querySelector(".Roomlocation").value;

let n = getRoomData();
console.log("n=",n.length);


searcBtn?.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log(searcText.value);
    for(let i=0;i<n.length;i++){
        if(searcText.value == location){
            roomcard.style.display = "initial";
        }else{
            roomcard.style.display = "none";
        }
    }
})

