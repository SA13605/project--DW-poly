import { setRoomData } from "./roomData";
import { sendUpdateIndex } from "./profile";

let updateRoomData = setRoomData();
let index = sendUpdateIndex();

let updateForm = document.getElementById("updateForm");
let selectedOption = document.getElementById("updateField").value;
let updateVal = document.querySelector("#updateInput");

updateForm?.addEventListener("submit", function (e) {
    e.preventDefault(); // stop form reload
    console.log("User selected:", selectedOption);
    updatedata(index,selectedOption);
});

function updatedata(i,val){
    console.log(val);
    console.log(i);
    console.log(updateRoomData);
    console.log(updateVal);
    alert("sd");
}