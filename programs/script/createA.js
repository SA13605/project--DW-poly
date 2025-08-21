let userData = JSON.parse(localStorage.getItem("userData")) || [];
let Login =localStorage.getItem("LoginVal") === "false";

export function getLogin(){
    return JSON.parse(localStorage.getItem("LoginVal"));
}

export function setLogin(val){
    Login=val;
    localStorage.setItem("LoginVal",val ? "true":"false");
}

export function getUserData(){
    return JSON.parse(localStorage.getItem("userData"));
}


let signupBtn = document.querySelector('.create-btn');
let loginBtn = document.querySelector(".loginbtn");

// SIGNUP
signupBtn?.addEventListener("click", (event)=> {
    event.preventDefault();

    let data = {
        username : document.getElementById('username').value,
        email : document.getElementById('email').value,
        password : document.getElementById('password').value,
        confirmPassword : document.getElementById('confirm-password').value,
    };

    if (data.password.length < 8) {
        alert("Password must be at least 8 characters long!");
        return;
    }

    if (data.password === data.confirmPassword) {
        userData = [data]; //  delet old data and add new user
        localStorage.setItem("userData", JSON.stringify(userData));

        alert("Account created successfully!");
        document.getElementById("signup-form").reset();
        window.location.href = "login.html";

    } else {
        alert("Passwords do not match!");
    }
    console.log(userData);
});



// LOGIN
loginBtn?.addEventListener("click",(event)=>{
    event.preventDefault();

    let id = document.getElementById("usernameL").value;
    let pass = document.getElementById("passwordL").value;


    if (userData.length > 0) {
        if (userData[0].username === id && userData[0].password === pass) {
            setLogin(true);
            localStorage.setItem("LoginVal",Login);

            alert("Login successful!");
            window.location.href = "home.html"; // go to homepage
        } else {
            alert("Invalid username or password!");
        }
    } else {
        alert("No account found. Please sign up first!");
        window.location.href = "createA.html"; // send back to signup
    }
});
