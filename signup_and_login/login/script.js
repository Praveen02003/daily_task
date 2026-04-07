var userdata = JSON.parse(localStorage.getItem('userdata')) || {};
const form = document.getElementById('loginform');

form.addEventListener('submit', (event) => {
    var userdata = JSON.parse(localStorage.getItem('userdata')) || {};
    event.preventDefault();

    let isvalid = true;


    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email) {
        document.getElementById('emailerror').textContent = 'Enter Email';
        isvalid = false;
    }
    else {
        document.getElementById('emailerror').textContent = "";
    }

    if (!password) {
        document.getElementById('passworderror').textContent = "Enter Password";
        isvalid = false;
    }
    else {
        document.getElementById('passworderror').textContent = "";
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
