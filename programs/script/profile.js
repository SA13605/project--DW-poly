import { getLogin, setLogin ,getUserData} from "./createA.js";
import { getRoomData ,setRoomData } from "./roomData.js";

let Udata = getUserData();
let roomDataArray = getRoomData();

console.log(getRoomData());

let hiroSec = document.getElementById("hero");
let mainSec = document.getElementById("mainSec");
let btnToLogin = document.getElementById("btnLogin");
let loginRec = document.getElementById("loginRec");

if (!getLogin()) {
    loginRec.style.display = "block";
    hiroSec.style.display = "none";
    mainSec.style.display = "none";
} else {
    loginRec.style.display = "none";
    hiroSec.style.display = "block";
    mainSec.style.display = "block";
}

btnToLogin.addEventListener("click", () => {
    window.location.href = "./login.html";
});

// ===============================================//
let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let profileName = document.querySelector(".profileName");

userName.innerText = Udata[0].username;
userEmail.innerText = Udata[0].email;
profileName.innerText = Udata[0].username.slice(0,3);

// =======================================================
let btnAddNew = document.getElementById("btnAddNew");
let btnAdded = document.getElementById("btnAdded");
let btnUpdate = document.getElementById("btnUpdate");
let btnDelete = document.getElementById("btnDelete");

let secAddNew = document.querySelector(".addNew");
let secAdded = document.querySelector(".added");
let secUpdate = document.querySelector(".update");
let secDelete = document.querySelector(".delete");


btnAddNew.style.backgroundColor = "gray";
btnAddNew?.addEventListener("click", () => {
    btnAddNew.style.backgroundColor = "gray";
    btnAdded.style.backgroundColor = "white";
    btnUpdate.style.backgroundColor = "white";
    btnDelete.style.backgroundColor = "white";


    secAddNew.style.display = "block";
    secAdded.style.display = "none";
    secUpdate.style.display = "none";
    secDelete.style.display = "none";
});

btnAdded?.addEventListener("click", () => {
    btnAddNew.style.backgroundColor = "white";
    btnAdded.style.backgroundColor = "gray";
    btnUpdate.style.backgroundColor = "white";
    btnDelete.style.backgroundColor = "white";

    secAddNew.style.display = "none";
    secAdded.style.display = "grid";
    secUpdate.style.display = "none";
    secDelete.style.display = "none";
});

btnUpdate?.addEventListener("click", () => {
    btnAddNew.style.backgroundColor = "white";
    btnAdded.style.backgroundColor = "white";
    btnUpdate.style.backgroundColor = "gray";
    btnDelete.style.backgroundColor = "white";


    secAddNew.style.display = "none";
    secAdded.style.display = "none";
    secUpdate.style.display = "grid";
    secDelete.style.display = "none";
});

btnDelete?.addEventListener("click", () => {
    btnAddNew.style.backgroundColor = "white";
    btnAdded.style.backgroundColor = "white";
    btnUpdate.style.backgroundColor = "white";
    btnDelete.style.backgroundColor = "gray";


    secAddNew.style.display = "none";
    secAdded.style.display = "none";
    secUpdate.style.display = "none";
    secDelete.style.display = "grid";
});
// =================================================================================
// manage sections
// added sec

for (let i = 0; i < roomDataArray.length; i++) {
    addedRoom(i);
    updateRoom(i);
    deleteRoom(i);
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

    secAdded.appendChild(addedRoomCard);
}

let morbtn = document.querySelectorAll(".roomCardMoreBtn");

morbtn.forEach((btn,index)=>{
    btn?.addEventListener("click",()=>{
        localStorage.setItem("indexOfDetail",JSON.stringify(index));
        window.location.href="./DynamicP.html";
    });
});

// section update cards
function updateRoom(i) {
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

    roomCardMoreBtn.className = "roomCardUpdateBtn";
    roomCardMoreBtn.innerText = "Update Room";

    addedRoomCard.appendChild(addedRoomCardImg);
    addedRoomCard.appendChild(RoomCardLocation);
    addedRoomCard.appendChild(RoomCardRoomType);
    addedRoomCard.appendChild(roomCardRoomRent);
    addedRoomCard.appendChild(roomCardMoreBtn);

    secUpdate.appendChild(addedRoomCard);
}

let updateBtn = document.querySelectorAll(".roomCardUpdateBtn");

updateBtn.forEach((btn, index) => {
    btn.addEventListener("click", () =>{
        localStorage.setItem("updateIndex",JSON.stringify(index));
        window.location.href='test.html';
    });
});



// delete sec room
function deleteRoom(i) {
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

    roomCardMoreBtn.className = "roomCardDeleteBtn";
    roomCardMoreBtn.innerText = "Delet Room";

    addedRoomCard.appendChild(addedRoomCardImg);
    addedRoomCard.appendChild(RoomCardLocation);
    addedRoomCard.appendChild(RoomCardRoomType);
    addedRoomCard.appendChild(roomCardRoomRent);
    addedRoomCard.appendChild(roomCardMoreBtn);

    secDelete.appendChild(addedRoomCard);
}

let conBox = document.querySelector(".confirm-box");
let btny = document.getElementById("btn-yes");
let deleteBtn = document.querySelectorAll(".roomCardDeleteBtn");

deleteBtn.forEach((btn, index) =>
{
    btn.addEventListener("click", () =>
        {
            conBox.style.display="block";
            let sendIndex = index;
            
            btny.addEventListener("click",()=> 
            {
                btny.onclick(deleteRoomCard(sendIndex));
            });
        });
});



function deleteRoomCard (deletIndex){
    console.log("delete index from deletroom card=",deletIndex);
    conBox.style.display="none";
    roomDataArray.splice(deletIndex,1);
    console.log(roomDataArray);
    setRoomData(roomDataArray);

    window.location.href = "profile.html";
}

document.getElementById("btn-no").addEventListener("click",()=>{
    conBox.style.display="none";
});
