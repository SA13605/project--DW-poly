import { getRoomData } from "./roomData.js";
let roomDetails = getRoomData();

let indexN = JSON.parse(localStorage.getItem("Index"));

export function setIndex(i){
    return localStorage.setItem("Insex",JSON.stringify(i));
}

function setroomdata(index) {
    console.log("index from setRoom =", index);
    

    function sendF(i) {

        let FL = document.querySelector(".FL");
        FL.innerHTML = "";

        let Farray = roomDetails[i].facility;
        console.log(Farray);

        for (let j = 0; j < Farray.length; j++) {
            let li = document.createElement("li");
            li.innerText = Farray[j];
            FL.append(li);
        }
    }
    sendF(index);


    
    let imgs = ``;
    function moreimg(i) {
        let EIarray = roomDetails[i].photos.extraImgs;

        for (let j = 0; j < EIarray.length; j++) {
            let img = `<img src=${EIarray[j]} alt="" id="moreimgsImg"/>`;
            imgs = imgs + img;
        }
    }

    moreimg(index);







    let coverImg = document.querySelector(".hero");
    let titleData = document.querySelector(".titledata");
    let type = document.querySelector("#type1");
    let locationEl = document.querySelector("#location1");
    let price = document.querySelector("#price");
    let mapEl = document.querySelector(".map");
    let type2 = document.querySelector("#type2");
    let area = document.querySelector("#area");
    let aboutP1 = document.querySelector("#aboutP1");
    let area2 = document.querySelector("#area2");
    let location2 = document.querySelector("#location2");
    let city = document.querySelector("#city");
    let pincode = document.querySelector("#pincode");
    let avilable = document.querySelector("#avilable");
    let ownerName = document.querySelector("#oName");
    let contactNo = document.querySelector("#cNo");
    let moreimgs = document.querySelector(".moreimgs");

    coverImg.innerHTML = `
    <img src=${roomDetails[index].photos.cover} art="" />
    `;

    moreimgs.innerHTML = `${imgs}`;

    titleData.innerText = roomDetails[index].title;
    type.innerHTML = roomDetails[index].type;
    locationEl.innerHTML = roomDetails[index].location.address;
    price.innerHTML = roomDetails[index].price + " per/month";
    mapEl.innerHTML = roomDetails[index].location.mapEmbed;

    type2.innerText = roomDetails[index].type;
    area.innerText = roomDetails[index].size;
    aboutP1.innerText = roomDetails[index].description;

    area2.innerText = roomDetails[index].size;
    location2.innerText = roomDetails[index].location.address;
    city.innerText = roomDetails[index].location.city;
    pincode.innerText = roomDetails[index].location.pincode;
    avilable.innerText = roomDetails[index].avilable
        ? "Available"
        : "Not Available";

    ownerName.innerText = roomDetails[index].ownerName;
    contactNo.innerText = roomDetails[index].MoNo;

    document.querySelector(".map").innerHTML =
        roomDetails[index].location.mapEmbed;




    // here you can use roomDetails[index]
    console.log("Selected room data:", roomDetails[index]);
    window.location.href = "./roomDetails.html";

}
setroomdata(indexN);

console.log(indexN);



