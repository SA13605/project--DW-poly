import { getLogin, setLogin } from "./createA.js";
import { getRoomData,setRoomData } from "./roomData.js";
console.log("getLogin Val=",getLogin());
console.log(getRoomData());



let loginBtn = document.getElementById("loginBtn");

if (getLogin){
    loginBtn.innerText = `LoggedIn`;
} else{
    loginBtn.innerText = "Login";
}

loginBtn?.addEventListener("click", () => {
    if (!getLogin()) {
        window.location.href = "login.html";
    }
});