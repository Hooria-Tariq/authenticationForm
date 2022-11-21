let head = document.getElementById('top');
if((localStorage['flag']) == 'true'){
    head.innerHTML = `Hello <span style="color: rgb(160, 160, 23);"> ${localStorage["name"]}!</span>`;
}
let userName = document.getElementById('name');
let correctUser = localStorage['name'];
let correctPassword = localStorage['password'];
let pwd = document.getElementById('password');
let result = document.createElement('span');
result.style = "margin-left: -40px; color: red; margin-bottom: 13px";

function Login() {
    if (userName.value === "") {
        result.innerHTML = "User name required";
        userName.insertAdjacentElement("afterend", result);
    }

    else if (pwd.value === "") {
        result.innerHTML = "Password required";
        pwd.insertAdjacentElement("afterend", result);
    }
    else if(userName.value == correctUser && password.value == correctPassword){
        window.location.href = "signupForm.html";
    }
    else{
        result.innerHTML = "Incorrect username or password!";
        userName.insertAdjacentElement("beforebegin", result);
    }
}