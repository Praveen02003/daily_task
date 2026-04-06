var userdata = JSON.parse(localStorage.getItem('userdata')) || {};
const form = document.getElementById('loginform');

form.addEventListener('submit', (event) => {
    var userdata = JSON.parse(localStorage.getItem('userdata')) || {};
    event.preventDefault();

    let isvalid = true;


    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !email.includes('@')) {
        document.getElementById('emailerror').textContent = "Enter valid Email";
        isvalid = false;
    }

    if (!password) {
        document.getElementById('passworderror').textContent = "Enter Password";
        isvalid = false;
    }

    if (isvalid) {
        if (userdata[email]) {
            if (userdata[email]['password'] === password) {
                alert('Login Success');
            }
            else {
                alert('Password Mismatch')
            }
        }
        else {
            alert("Invalid Credentials");
        }
    }
});


var email = document.getElementById('email');

email.addEventListener('input', (event) => {

    var inputvalue = event.target.value;

    if (inputvalue) {
        emailerror.textContent = '';
        if (!inputvalue.includes('@')) {
            emailerror.textContent = 'Not a valid email';
        }
    }
    else if (!inputvalue) {
        emailerror.textContent = 'Enter Email';
    }

});

var email = document.getElementById('email');

email.addEventListener('blur', (event) => {

    var inputvalue = event.target.value;

    var emailerror = document.getElementById('emailerror');
    if (!inputvalue) {
        emailerror.textContent = 'Enter Email';
    }
    else {
        emailerror.textContent = '';
    }
});


var password = document.getElementById('password');

password.addEventListener('blur', (event) => {

    var inputvalue = event.target.value;

    var passworderror = document.getElementById('passworderror');
    if (!inputvalue) {
        passworderror.textContent = 'Enter Password';
    }
    else {
        passworderror.textContent = '';
    }
});

password.addEventListener('input', (event) => {

    var inputvalue = event.target.value;

    if (inputvalue) {
        passworderror.textContent = '';
    }
    else if (!inputvalue) {
        passworderror.textContent = 'Enter Password';
    }

});