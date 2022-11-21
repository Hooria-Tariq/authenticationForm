let userName = document.getElementById("name")
let pwd = document.getElementById("password")
let mail = document.getElementById("email")
let signin = document.getElementById("signin")
let result1 = document.getElementById("result")
signin.addEventListener('click',() =>{
    localStorage['flag'] = false;
    localStorage['name'] = "";
    localStorage['password'] ="";
})

function check() {

    if (userName.value == "") {
        let result = "Username is required";
        result1.innerHTML = result;
        userName.insertAdjacentElement("afterend",result1);
    }
    else if (pwd.value == "") {
        let result = "Password is required";
        result1.innerHTML = result
        password.insertAdjacentElement("afterend",result1);
    }
    
    else if (mail.value == "") {
        let result = "Email is required";
        result1.innerHTML = result
        mail.insertAdjacentElement("afterend",result1)
    } 
    else {
        localStorage['flag'] = true;
        localStorage["name"] = userName.value;
        localStorage['password'] = pwd.value;
        window.location.href = "loginForm.html"

    }
}