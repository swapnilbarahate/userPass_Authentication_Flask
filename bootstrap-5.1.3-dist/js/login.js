
let uname = "swapnil";
let pass = "Pass@123";
let username = "";
let password = "";
let showModel = () => {
    let modal = document.getElementById("myModal");
    let span = document.getElementsByClassName("close")[0];
    modal.classList.add("show");
}
function closeModel() {
    let modal = document.getElementById("myModal");
    modal.classList.remove("show");
}

window.onclick = function (event) {
    let modal = document.getElementById("myModal");

    if (event.target == modal) {
        modal.classList.remove("show");
    }
}

const showPassword = () => {
    let x = document.getElementById("password");
    console.log(x);
    if (x.type === "password") {
        x.type = "text";
        document.getElementById("id_showPassword").innerHTML = '&#x1f633;';

    } else {
        x.type = "password";
        document.getElementById("id_showPassword").innerHTML = '&#x1f614;'
    }
}


let setData = (event) => {
    event.preventDefault();
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    if (username === uname && password === pass) {
        document.getElementById("message").innerHTML = 'Success...!'
        const userDetail = new Object();
        userDetail.un = username;
        userDetail.up = password;
        localStorage.setItem('userDetail', JSON.stringify(userDetail));
        window.location.replace("http://127.0.0.1:5502/index.html");
    }
    else {
        document.getElementById("message").innerHTML = 'Wrong ID and Pass'
    }

}
let checkData = () => {
    var userDetail = JSON.parse(localStorage.getItem('userDetail'));
    if (userDetail && userDetail.un && userDetail.un === uname && userDetail.up && userDetail.up === pass) {
        // console.log("ok");
    }
    else {
        window.location.replace("http://127.0.0.1:5502/login.html");
    }
}
window.onload = function () {
    if (window.location.hash != '#hash') {
     
        checkData();
    }
};

let logOutSession = () => {
    localStorage.removeItem("userDetail");
    // localStorage.clear();
    window.location.replace("http://127.0.0.1:5502/login.html");
}



