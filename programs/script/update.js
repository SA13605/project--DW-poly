import { getRoomData, setRoomData } from "./roomData.js";
let updateRdataArray = getRoomData();


let updateVal = document.querySelector("#updateInput");
let updbtn = document.querySelector(".btnupdt");

updbtn?.addEventListener("click", function (e) {
    e.preventDefault();

    console.log(updateVal);
    

    let selectedOption = document.getElementById("updateField").value;
    let inputValue = updateVal.value;
    let index = JSON.parse(localStorage.getItem("updateIndex"));
    updatedata(index, selectedOption, inputValue);
});

function updatedata(i, field, newVal){
    i = Number(i);
    console.log("Index:", i);
    console.log("Field to update:", field);
    console.log("New value:", newVal);

    if(newVal == ""){
        alert("Please Enter the value in input Box");
    }
    else if (field=="title") {
        updateRdataArray[i].title=newVal; //title

        console.log(updateRdataArray);
        setRoomData(updateRdataArray);

        window.location.href = "./profile.html";
    } else if(field=="ownerName"){
        updateRdataArray[i].ownerName=newVal;  //owner Name

        console.log(updateRdataArray);
        setRoomData(updateRdataArray);

        window.location.href = "./profile.html";
    }else if(field=="moNo"){
        updateRdataArray[i].MoNo=newVal;   //mo no

        console.log(updateRdataArray);
        setRoomData(updateRdataArray);

        window.location.href = "./profile.html";
    }else if(field=="roomType"){
        updateRdataArray[i].type=newVal;  //type

        console.log(updateRdataArray);
        setRoomData(updateRdataArray);

        window.location.href = "./profile.html";
    }else if(field == "size"){
        updateRdataArray[i].size=newVal;  //size

        console.log(updateRdataArray);
        setRoomData(updateRdataArray);

        window.location.href = "./profile.html";
    }else if(field == "rent"){
        updateRdataArray[i].price=newVal;  //size

        console.log(updateRdataArray);
        setRoomData(updateRdataArray);

        window.location.href = "./profile.html";
    }else if(field == "Location"){
        updateRdataArray[i].location.city=newVal;  //location

        console.log(updateRdataArray);
        setRoomData(updateRdataArray);

        window.location.href = "./profile.html";
    }else{
        alert("Invalid index: " + i);
    }
}

getRoomData();