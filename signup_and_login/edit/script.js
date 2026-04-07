var fulldata = JSON.parse(localStorage.getItem('userdata')) || {};
var userdata = JSON.parse(localStorage.getItem('editdata')) || {};
const form = document.getElementById('editform');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let userdata = JSON.parse(localStorage.getItem('userdata')) || {};
    let isvalid = true;


    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const shift = document.getElementById('shift').value;
    const gender = document.getElementById('gender').value;
    const role = document.getElementById('role').value;
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmpassword').value;
    const terms = document.getElementById('terms').checked;

    if (!firstname) {
        document.getElementById('firstnameerror').textContent = "Enter Firstname";
        isvalid = false;
    }
    else {
        document.getElementById('firstnameerror').textContent = "";
    }

    if (!lastname) {
        document.getElementById('lastnameerror').textContent = "Enter Lastname";
        isvalid = false;
    }
    else {
        document.getElementById('lastnameerror').textContent = "";
    }

    let emailError = "";

    if (!email) {
        emailError = "Enter Email";
    } else if (email.includes(" ")) {
        emailError = "Email should not contain space";
    } else if (!email.includes('@')) {
        emailError = "Email must contain @";
    } else if (email.indexOf('@') !== email.lastIndexOf('@')) {
        emailError = "Only one '@' allowed";
    } else {
        var split_email = email.split("@");

        if (!split_email[0]) {
            emailError = "Email should not start with '@'";
        } else if (!split_email[1]) {
            emailError = "Enter domain after '@'";
        } else if (!split_email[1].includes(".")) {
            emailError = "Domain must contain '.'";
        } else if (split_email[0].startsWith(".")) {
            emailError = "Email should not start with '.'";
        } else if (split_email[1].startsWith(".") || split_email[1].endsWith(".")) {
            emailError = "Invalid domain format";
        } else {
            let parts = split_email[1].split(".");
            let extension = parts[parts.length - 1];

            if (extension.length < 2) {
                emailError = "Invalid extension";
            }
        }
    }

    if (emailError) {
        document.getElementById('emailerror').textContent = emailError;
        isvalid = false;
    }
    else {
        document.getElementById('emailerror').textContent = '';
    }

    if (!mobile) {
        document.getElementById('mobileerror').textContent = "Enter Mobile";
        isvalid = false;
    } else if (mobile.length < 10) {
        document.getElementById('mobileerror').textContent = "Enter valid 10-digit number";
        isvalid = false;
    }
    else {
        document.getElementById('mobileerror').textContent = "";
    }

    if (!shift) {
        document.getElementById('shifterror').textContent = "Select Shift";
        isvalid = false;
    }
    else {
        document.getElementById('shifterror').textContent = "";
    }

    if (!gender) {
        document.getElementById('gendererror').textContent = "Select Gender";
        isvalid = false;
    }
    else {
        document.getElementById('gendererror').textContent = "";
    }

    if (!role) {
        document.getElementById('roleerror').textContent = "Enter Role";
        isvalid = false;
    }
    else {
        document.getElementById('roleerror').textContent = "";
    }

    if (!password || password.length < 8) {
        document.getElementById('passworderror').textContent = "Password must be at least 8 characters";
        isvalid = false;
    }
    else if (!/\d/.test(password)) {
        document.getElementById('passworderror').textContent = "Password must contain at least one number";
        isvalid = false;
    }

    else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        document.getElementById('passworderror').textContent = "Password must contain at least one special character";
        isvalid = false;
    }
    else {
        document.getElementById('passworderror').textContent = ""
    }

    if (!confirmpassword) {
        document.getElementById('confirmpassworderror').textContent = "Enter Confirm-Password";
        isvalid = false;
    } else if (password && password !== confirmpassword) {
        document.getElementById('confirmpassworderror').textContent = "Passwords do not match";
        isvalid = false;
    }
    else {
        document.getElementById('confirmpassworderror').textContent = "";
    }

    if (!terms) {
        document.getElementById('termserror').textContent = "Accept Terms";
        isvalid = false;
    }
    else {
        document.getElementById('termserror').textContent = "";
    }

    if (isvalid) {
        var finalnumber = mobile.replace(/\D/g, "");
        var get_oldemail = localStorage.getItem('editemail');
        console.log(get_oldemail, "====>");
        delete fulldata[get_oldemail];

        fulldata[email] = {
            'firstname': firstname,
            'lastname': lastname,
            'email': email,
            'mobile': '+1' + finalnumber,
            'shift': shift,
            'gender': gender,
            'role': role,
            'password': password,
            'terms': terms
        };

        localStorage.setItem('userdata', JSON.stringify(fulldata));
        localStorage.removeItem('editdata')
        localStorage.removeItem('editemail')
        alert("Data Updated Successfully");
        setTimeout(() => {
            window.location.href = "/signup_and_login/dashboard/index.html";
        }, 500);
    }
});

var mobile = document.getElementById('mobile');

mobile.addEventListener('input', (event) => {

    var inputvalue = event.target.value;
    var finalnumber = "";
    var formattednumber = "";

    let numbers = inputvalue.split("").filter(item => (item >= '0') && (item <= '9')).join("");

    finalnumber = numbers.slice(0, 10);
    // console.log(typeof finalnumber.length);

    if (finalnumber.length > 6) {
        formattednumber = "(" + finalnumber.slice(0, 3) + ") " + finalnumber.slice(3, 6) + "-" + finalnumber.slice(6);
    }
    else if (finalnumber.length > 3) {
        formattednumber = "(" + finalnumber.slice(0, 3) + ") " + finalnumber.slice(3);
    }
    else {
        formattednumber = finalnumber;
    }

    var mobileerror = document.getElementById('mobileerror');

    if (finalnumber.length < 10) {
        mobileerror.textContent = "Mobile Number must be 10 digits";
    }
    else {
        mobileerror.textContent = "";
    }

    event.target.value = formattednumber;

});


var email = document.getElementById('email');
var emailerror = document.getElementById('emailerror');

email.addEventListener('input', (event) => {

    var inputvalue = event.target.value;

    if (!inputvalue) {
        emailerror.textContent = 'Enter Email';
        return;
    }

    if (inputvalue.includes(" ")) {
        emailerror.textContent = "Email should not contain space";
        return;
    }

    if (!inputvalue.includes('@')) {
        emailerror.textContent = 'Email must contain @';
        return;
    }

    if (inputvalue.indexOf('@') !== inputvalue.lastIndexOf('@')) {
        emailerror.textContent = "Email must contain only one '@'";
        return;
    }

    let split_email = inputvalue.split("@");

    if (split_email[0].length === 0) {
        emailerror.textContent = "Email should not start with '@'";
        return;
    }

    if (split_email[1].length === 0) {
        emailerror.textContent = "Enter domain name after '@'";
        return;
    }

    if (!split_email[1].includes(".")) {
        emailerror.textContent = "Domain must contain '.'";
        return;
    }

    if (split_email[0].startsWith(".")) {
        emailerror.textContent = "Email should not start with '.'";
        return;
    }

    if (split_email[1].startsWith(".")) {
        emailerror.textContent = "Domain name should not start with '.'";
        return;
    }

    if (split_email[1].endsWith(".")) {
        emailerror.textContent = "Domain name should not end with '.'";
        return;
    }

    let domainparts = split_email[1].split(".");

    if (domainparts.length < 2) {
        emailerror.textContent = "Domain name must contain dot";
        return;
    }

    let extension = domainparts[domainparts.length - 1];

    if (extension.length === 0) {
        emailerror.textContent = "Extension cannot be empty";
        return;
    }
    emailerror.textContent = "";
});

var email = document.getElementById('email');

email.addEventListener('blur', (event) => {

    var inputvalue = event.target.value;

    var emailerror = document.getElementById('emailerror');
    if (!inputvalue) {
        emailerror.textContent = 'Enter Email';
        return;
    }

    if (inputvalue.includes(" ")) {
        emailerror.textContent = "Email should not contain space";
        return;
    }

    if (!inputvalue.includes('@')) {
        emailerror.textContent = 'Email must contain @';
        return;
    }

    if (inputvalue.indexOf('@') !== inputvalue.lastIndexOf('@')) {
        emailerror.textContent = "Email must contain only one '@'";
        return;
    }

    let split_email = inputvalue.split("@");

    if (split_email[0].length === 0) {
        emailerror.textContent = "Email should not start with '@'";
        return;
    }

    if (split_email[1].length === 0) {
        emailerror.textContent = "Enter domain name after '@'";
        return;
    }

    if (!split_email[1].includes(".")) {
        emailerror.textContent = "Domain must contain '.'";
        return;
    }

    if (split_email[0].startsWith(".")) {
        emailerror.textContent = "Email should not start with '.'";
        return;
    }

    if (split_email[1].startsWith(".")) {
        emailerror.textContent = "Domain name should not start with '.'";
        return;
    }

    if (split_email[1].endsWith(".")) {
        emailerror.textContent = "Domain name should not end with '.'";
        return;
    }

    let domainparts = split_email[1].split(".");

    if (domainparts.length < 2) {
        emailerror.textContent = "Domain name must contain dot";
        return;
    }

    let extension = domainparts[domainparts.length - 1];

    if (extension.length === 0) {
        emailerror.textContent = "Extension cannot be empty";
        return;
    }
    emailerror.textContent = "";
});

var firstname = document.getElementById('firstname');

firstname.addEventListener('blur', (event) => {

    var inputvalue = event.target.value;

    var firstnameerror = document.getElementById('firstnameerror');
    if (!inputvalue) {
        firstnameerror.textContent = 'Enter Firstname';
    }
    else {
        firstnameerror.textContent = "";
    }
});

var lastname = document.getElementById('lastname');

lastname.addEventListener('blur', (event) => {

    var inputvalue = event.target.value;

    var lastnameerror = document.getElementById('lastnameerror');
    if (!inputvalue) {
        lastnameerror.textContent = 'Enter Lastname';
    }
    else {
        lastnameerror.textContent = "";
    }
});

var mobile = document.getElementById('mobile');

mobile.addEventListener('blur', (event) => {

    var inputvalue = event.target.value;

    var mobileerror = document.getElementById('mobileerror');
    if (!inputvalue) {
        mobileerror.textContent = 'Enter Mobile number';
    }
    else {
        mobileerror.textContent = "";
    }
});

var shift = document.getElementById('shift');

shift.addEventListener('blur', (event) => {

    var inputvalue = event.target.value;

    var shifterror = document.getElementById('shifterror');
    if (!inputvalue) {
        shifterror.textContent = 'Select Shift';
    }
    else {
        shifterror.textContent = "";
    }
});

var gender = document.getElementById('gender');

gender.addEventListener('blur', (event) => {

    var inputvalue = event.target.value;

    var gendererror = document.getElementById('gendererror');
    if (!inputvalue) {
        gendererror.textContent = 'Select Gender';
    }
    else {
        gendererror.textContent = "";
    }
});

var role = document.getElementById('role');

role.addEventListener('blur', (event) => {

    var inputvalue = event.target.value;

    var roleerror = document.getElementById('roleerror');
    if (!inputvalue) {
        roleerror.textContent = 'Enter Job / Role';
    }
    else {
        roleerror.textContent = "";
    }
});

var password = document.getElementById('password');

password.addEventListener('input', (event) => {

    var inputvalue = event.target.value;

    var passworderror = document.getElementById('passworderror');
    if (!inputvalue || inputvalue.length < 8) {
        passworderror.textContent = 'Password must be at least 8 characters';
    }
    else if (!/\d/.test(inputvalue)) {
        passworderror.textContent = "Password must contain at least one number";
    }

    else if (!/[!@#$%^&*(),.?":{}|<>]/.test(inputvalue)) {
        passworderror.textContent = "Password must contain at least one special character";
    }
    else {
        passworderror.textContent = "";
    }
});

var password = document.getElementById('password');

password.addEventListener('blur', (event) => {

    var inputvalue = event.target.value;

    var passworderror = document.getElementById('passworderror');
    if (!inputvalue || inputvalue.length < 8) {
        passworderror.textContent = 'Password must be at least 8 characters';
    }
    else if (!/\d/.test(inputvalue)) {
        passworderror.textContent = "Password must contain at least one number";
    }

    else if (!/[!@#$%^&*(),.?":{}|<>]/.test(inputvalue)) {
        passworderror.textContent = "Password must contain at least one special character";
    }
    else {
        passworderror.textContent = ""
    }
});

var confirmpassword = document.getElementById('confirmpassword');

confirmpassword.addEventListener('blur', (event) => {

    var inputvalue = event.target.value;

    var confirmpassworderror = document.getElementById('confirmpassworderror');
    if (!inputvalue) {
        confirmpassworderror.textContent = 'Enter Confirm-Password';
    }
    else if (inputvalue) {
        if (password.value) {
            if (inputvalue) {
                if (password.value !== inputvalue) {
                    document.getElementById('confirmpassworderror').textContent = "Passwords do not match";
                }
            }
        }
    }
    else {
        document.getElementById('confirmpassworderror').textContent = "";
    }
});


confirmpassword.addEventListener('input', (event) => {

    var inputvalue = event.target.value;

    var confirmpassworderror = document.getElementById('confirmpassworderror');
    if (!inputvalue) {
        confirmpassworderror.textContent = 'Enter Confirmpassword';
    }
    else if (inputvalue) {
        if (password.value) {
            if (inputvalue) {
                if (password.value !== inputvalue) {
                    document.getElementById('confirmpassworderror').textContent = "Passwords do not match";
                }
                else {
                    document.getElementById('confirmpassworderror').textContent = "";
                }
            }
        }
    }
});

var terms = document.getElementById('terms');

terms.addEventListener('input', (event) => {

    var inputvalue = event.target.checked;

    var termserror = document.getElementById('termserror');
    if (!inputvalue) {
        termserror.textContent = 'Please Accept terms and condition';
    }
    else {
        termserror.textContent = "";
    }
});

function applydata() {
    var formattednumber = userdata['mobile'].slice(2);
    if (formattednumber.length > 6) {
        formattednumber = "(" + formattednumber.slice(0, 3) + ") " + formattednumber.slice(3, 6) + "-" + formattednumber.slice(6);
    }
    else if (formattednumber.length > 3) {
        formattednumber = "(" + formattednumber.slice(0, 3) + ") " + formattednumber.slice(3);
    }
    console.log(formattednumber);

    document.getElementById('firstname').value = userdata['firstname'];
    document.getElementById('lastname').value = userdata['lastname'];
    document.getElementById('email').value = userdata['email'];
    document.getElementById('mobile').value = formattednumber;
    document.getElementById('shift').value = userdata['shift'];
    document.getElementById('gender').value = userdata['gender'];
    document.getElementById('role').value = userdata['role'];
    document.getElementById('password').value = userdata['password'];
    document.getElementById('confirmpassword').value = userdata['password'];
    document.getElementById('terms').checked = userdata['terms'];
}

var get_dashboard_button = document.getElementById('gotodashboard');
get_dashboard_button.addEventListener('click', function () {
    gotodashboard();
})

function gotodashboard() {
    localStorage.removeItem('editdata')
    localStorage.removeItem('editemail')
    window.location.href = "/signup_and_login/dashboard/index.html";
}


function authuser() {
    var get_login_user = JSON.parse(localStorage.getItem('loginuser'));
    var edit_data = JSON.parse(localStorage.getItem('editdata'));
    var edit_email = localStorage.getItem('editemail');

    if (get_login_user === null) {
        window.location.href = '/signup_and_login/login/index.html';
    }
    else if (edit_email === null || edit_data === null) {
        window.location.href = '/signup_and_login/dashboard/index.html';
    }
    else {
        applydata();
    }
}
authuser()




