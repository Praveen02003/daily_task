var userdata = JSON.parse(localStorage.getItem('userdata')) || {};
console.log(userdata);

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
                localStorage.setItem('loginuser', JSON.stringify(userdata[email]))
                setTimeout(() => {
                    window.location.href = '/signup_and_login/dashboard/index.html'
                }, 500);
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


function authlogin() {
    var get_login_user = JSON.parse(localStorage.getItem('loginuser'));
    if (get_login_user !== null) {
        window.location.href = '/signup_and_login/dashboard/index.html';
    }
}
authlogin()
