import { setIndex } from "./roomDetails.js";

let clickBtns = document.querySelectorAll(".roomCardMoreBtn");


clickBtns.forEach((btn, index) => {
    btn?.addEventListener("click", (e) => {
        console.log("Button index:", index);
        setIndex(index);
    });
});
