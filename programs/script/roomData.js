// show con
let propertyData = JSON.parse(localStorage.getItem("storeRooms")) || [];
let property = {};


export function getRoomData(){
    return JSON.parse(localStorage.getItem("storeRooms"));
}

export function setRoomData(data){
    localStorage.removeItem("storeRooms");
    console.log(data);
    localStorage.setItem("storeRooms",JSON.stringify(data));
}

let backBtn = document.getElementById("backBtn");
backBtn?.addEventListener("click",()=>{
    window.location.href = "profile.html";
})

let con = document.querySelector(".con");
let submitBtn = document.querySelector("#btnSubmit");
let btnOk = document.querySelector(".btnOk");
let btnCancel = document.querySelector(".btnCancel");


console.log(propertyData);

submitBtn?.addEventListener("click",(event)=>{
    event.preventDefault();

    property={
        title: document.getElementById("roomdTitl").value, //title
        ownerName:document.getElementById("ownerName").value,
        MoNo:document.getElementById("ownerMoNo").value,
        
        type: document.querySelector("select").value, // get selected option
        size: document.getElementById("roomSize").value, //size
        description: document.getElementById("roomDescription").value, 
        price: document.getElementById("roomRent").value,

        avilable:true,
        // facilityList
facility:[...facilityList],
        
        location: {
            address: document.getElementById("roomAdd").value,
            city: document.getElementById("city").value,
            pincode: document.getElementById("pinCode").value,
            mapEmbed: document.getElementById("mapLink").value,
        },
        
        photos: {
            cover: coverImgURL,
            extraImgs: [...extraImgsArray], //extra images
        },
    };

    con.style.display = "initial";
});





// add data in Local Storage
// ok btn
btnOk?.addEventListener("click",(event)=>{
    event.preventDefault();
    propertyData.push(property);
    
    localStorage.setItem("storeRooms",JSON.stringify(propertyData));
    con.style.display = "none"//hide confirm box
    console.log(property);
    location.reload();

    window.location.href = './profile.html';
});

// cancel Btn
btnCancel?.addEventListener("click", () => {
    con.style.display = "none";
});

// facilitys add
let addF = document.getElementById("addFacility");
let facilityList=[];

addF?.addEventListener("click",(event)=>{
    event.preventDefault();

    let facilityData = document.getElementById("roomFacility").value;
    if(facilityData != ""){
        facilityList.push(facilityData);
        document.getElementById("roomFacility").value="";
    }else{
        alert("Please Add Facilitys");
    }
    console.log("facility list",facilityList);
    
});


// cover img
let coverImg = document.getElementById("coverImg");
let coverImgURL ;

coverImg?.addEventListener("change",()=>{
    const reader = new FileReader();
    reader.onload = function () {
        coverImgURL = reader.result; // Save Base64 string
    };
        reader.readAsDataURL(coverImg.files[0]);
});


// extra imgs
let EIspan = document.getElementById("extraImsSpanText");
let extraImg = document.getElementById("extraIms");
let extraImgsArray = [];

extraImg?.addEventListener("change",(event)=>{
    const reader = new FileReader();
    reader.onload = function () {
         extraImgsArray.push(reader.result); // Save Base64 string
    };
    reader.readAsDataURL(extraImg.files[0]);
    EIspan.innerText=`${extraImgsArray.length} Images selected`
});

// localStorage.clear();