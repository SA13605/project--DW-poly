import { getRoomData ,setRoomData } from "./roomData.js";

let roomDataArray = getRoomData();
let showRoomsAded = document.querySelector(".roomsFromOwner");

for (let i = 0; i < roomDataArray.length; i++) {
    addedRoom(i);
}

function addedRoom(i) {
    let addedRoomCard = document.createElement("div");
    let addedRoomCardImg = document.createElement("img");
    let imgSrc = roomDataArray[i].photos.cover;

    let RoomCardLocation = document.createElement("p");
    let location = roomDataArray[i].location.city;

    let RoomCardRoomType = document.createElement("p");
    let roomType = roomDataArray[i].type;

    let roomCardRoomRent = document.createElement("p");
    let roomRent = roomDataArray[i].price;

    let roomCardMoreBtn = document.createElement("button");

    addedRoomCard.className = "addedRoomCard";

    addedRoomCardImg.className = "addedRoomCardImg";
    addedRoomCardImg.setAttribute("src", imgSrc);

    RoomCardLocation.className = "Roomlocation";
    RoomCardLocation.innerText = `Location:-${location}`;

    RoomCardRoomType.className = "RoomCardRoomType";
    RoomCardRoomType.innerText = `RoomType:-${roomType}`;

    roomCardRoomRent.className = "roomCardRoomRent";
    roomCardRoomRent.innerText = `Rent:-${roomRent}`;

    roomCardMoreBtn.className = "roomCardMoreBtn";
    roomCardMoreBtn.innerText = "See Details";


    addedRoomCard.appendChild(addedRoomCardImg);
    addedRoomCard.appendChild(RoomCardLocation);
    addedRoomCard.appendChild(RoomCardRoomType);
    addedRoomCard.appendChild(roomCardRoomRent);
    addedRoomCard.appendChild(roomCardMoreBtn);

    showRoomsAded.appendChild(addedRoomCard);
}

let morbtn = document.querySelectorAll(".roomCardMoreBtn");

morbtn.forEach((btn,index)=>{
    btn?.addEventListener("click",()=>{
        localStorage.setItem("indexOfDetail",JSON.stringify(index));
        window.location.href="./DynamicP.html";
    });
});