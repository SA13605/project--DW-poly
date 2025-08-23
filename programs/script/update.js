// import { getRoomData,setRoomData } from "./roomData.js";
// let updateRdataArray = getRoomData();

let index = localStorage.getItem("updateIndex");
console.log("Got index:", index);

let updateVal = document.querySelector("#updateInput");
let updbtn = document.querySelector(".btnupdt");

updbtn?.addEventListener("click", function (e) {
    e.preventDefault();

    let selectedOption = document.getElementById("updateField").value;
    let inputValue = updateVal.value;

    console.log("User selected:", selectedOption, "with value:", inputValue);

    updatedata(index, selectedOption, inputValue);
});

function updatedata(i, field, newVal) {
    console.log("Index:", i);
    console.log("Field to update:", field);
    console.log("New value:", newVal);
    console.log(updateRdataArray);
    alert("Data ready to update!");
    window.location.href="./profile.html";
    
}

