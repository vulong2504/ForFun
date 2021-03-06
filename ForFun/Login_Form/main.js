let emailRegex = /^[A-Za-z][\w\.]+@[a-z]{3,9}(\.[a-z]{3,6}){1,2}$/gm;

let passRegex = /\w{6,32}/gm;

function checkEmail(){
    let emailInput = document.getElementById("email_address").value;
    let passInput = document.getElementById("email_password").value;
    if(!emailRegex.test(emailInput) || !passRegex.test(passInput)) 
        document.getElementById("invalidEmail").innerHTML = "Your email address or password is incorrect";
}