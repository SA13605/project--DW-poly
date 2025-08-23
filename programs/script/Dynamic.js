import { getRoomData, setRoomData } from "./roomData.js";
let arratofData = getRoomData();

let index = JSON.parse(localStorage.getItem("indexOfDetail"));

let arrayF = arratofData[index].facility;
let facilitys = "";
for(let i=onabort;i<arrayF.length;i++){
    facilitys += `<li>${arrayF[i]}</li>`;
}

console.log(arrayF);


console.log(arrayF);

let arrayEimg = arratofData[index].photos.extraImgs;
let extraimg= "";
console.log("arrayEimg",arrayEimg);
for(let i = 0;i<arrayEimg.length;i++){
    extraimg += `<img src=${arrayEimg[i]} alt="" />`;
}


document.querySelector("#dynamicData").innerHTML = `
<div class="hero">
            <div class="right">
                <img src=${arratofData[index].photos.cover} alt="erroe" width="100%" height="100%">
            </div>
            <div class="left">
                <div class="img1">
                    <img src="../accets/rooms/83d69af30a07a2046746fc000620892ee5459ee2 (1).jpg" alt="">
                </div>
                <div class="img2">
                    <img src="../accets/rooms/83d69af30a07a2046746fc000620892ee5459ee2.jpg" alt="">
                </div>
                <div class="img3">
                    <img src="../accets/rooms/e7b487e4ed530c771a1bcc655efed3d8ce02c054 (1).jpg" alt="">
                </div>
                <div class="img4">
                    <img src="../accets/rooms/e7b487e4ed530c771a1bcc655efed3d8ce02c054.jpg" alt="">
                </div>
            </div>
        </div>

        <div class="dataSec">
            <div class="details">
                <p class="titledata" style="text-align:left;">${arratofData[index].title}</p>
                <p class="p2">⭐⭐ 1 bedroom House for rent</p>


                <p id=location>
                    <img src="../accets/icons/location.png" alt="" id="locationimg">
                    <span id="location1">${arratofData[index].location.address}</span>
                </p>

                <p id="price"><b>₹${arratofData[index].price}</b>/month</p>

                <button class="btnUn">Unfurnished</button>
            </div>

            <div class="map">
                ${arratofData[index].location.mapEmbed}
            </div>
        </div>


        <div id="aboutdata">
            <p style="font-size: 200%;color: #898989ce;">${arratofData[index].type} for rent in</p>
            <p style="font-size: 150%;color: #2e2e2e;">${arratofData[index].title}</p>
            <p style="font-size: 150%;margin-top: 1vh;">PushpNager</p>
            <div id="row">
                <div class="a1">
                    <img src="../accets/icons/types.png" alt="" id="typeimg2">
                    <p id="type2">${arratofData[index].type}</p>
                </div>

                <div class="a2">
                    <img src="../accets/icons/icons8-family-40.png" alt="" id="forimg">
                    <p id="for">Family</p>
                </div>

                <div class="a3">
                    <img src="../accets/icons/area (2).png" alt="" id="areaimg">
                    <p id="area">${arratofData[index].size} sq.ft.super Area</P>
                </div>


                <div class="a4">
                    <img src="../accets/icons/icons8-key-50.png" alt="" id="areaimg">
                    <p id="area">10+ year old Property</P>
                </div>
            </div>
        </div>

        <div class="keyHigh">
            <p id="p1">
                <img src="../accets/icons/icons8-target-50.png" alt="">
                Key Highlights
            </p>
            <p id="p2">Why you should choose the property</p>

            <div class="facility">
                <p>
                    <img src="../accets/icons/area.png" alt="">
                    Property Highlights
                </p>
                <ul class="FL">
                    ${facilitys};
                </ul>
            </div>
        </div>

        <div style="display:flex;">
            <div class="moreData">
                <p class="pp1">Property Details</p>
                <p class="pp2">Layout <span id="area2">1 BHK, 1 Baths</span></p>
                <p class="pp3">Super Area<span id="location2">${arratofData[index].size}</span></p>
                <p class="pp4">Furnishing<span id="city">Unfurnished</span></p>
                <p class="pp5">Property ID<span id="pincode">N76812089</span></p>
            </div>


            <div class="morefacility">
                <p>Facilities</p>
                <div class="f1">
                    <img src="../accets/icons/icons8-vehicle-50.png" alt="">
                    <p>Reserved <br>Parking</p>
                </div>
                <div class="f2">
                    <img src="../accets/icons/icons8-vehicle-50.png" alt="">
                    <p>Visitor <br>Parking</p>
                </div>
                <div class="f3">
                    <img src="../accets/icons/icons8-water-tower-50.png" alt="">
                    <p>Water<br>Storage</p>
                </div>
            </div>

        </div>

        <div class="aboutP">
            <p>About Property</p><br>
            <p>Address: <b>${arratofData[index].location.address}</b></p><br>
            <p>city: <b>${arratofData[index].location.city}</b></p><br>            
            <p> Pincode : <b>${arratofData[index].location.pincode}</b> </p><br>
            <br><br>
            <p>Contact Owner</p>

            <div class="con">
                <div class="cimg">
                    <img src="../accets/icons/icons8-person-24.png" alt="">
                </div>
                <div class="cData">
                    <p id="cd1">${arratofData[index].ownerName}</p>
                    <p id="cd2">+91-${arratofData[index].MoNo}</p>
                </div>
            </div>
        </div>

        
        <p style="margin-left: 10vw;margin-top: 25vh;font-size: 200%;"><b>Photos</b></p>
        <div class="moreimgs">
                ${extraimg}
        </div>

`;

