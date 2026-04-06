var userdata = JSON.parse(localStorage.getItem('userdata')) || {};
const form = document.getElementById('signupform');

form.addEventListener('submit', (event) => {
    var userdata = JSON.parse(localStorage.getItem('userdata')) || {};
    event.preventDefault();

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

    if (!lastname) {
        document.getElementById('lastnameerror').textContent = "Enter Lastname";
        isvalid = false;
    }

    if (!email) {
        document.getElementById('emailerror').textContent = 'Enter Email';
        return;
    }

    if (email.includes(" ")) {
        document.getElementById('emailerror').textContent = "Email should not contain space";
        return;
    }

    if (!email.includes('@')) {
        document.getElementById('emailerror').textContent = 'Email must contain @';
        return;
    }

    if (email.indexOf('@') !== email.lastIndexOf('@')) {
        document.getElementById('emailerror').textContent = "Email must contain only one '@'";
        return;
    }

    let split_email = email.split("@");

    if (split_email[0].length === 0) {
        document.getElementById('emailerror').textContent = "Email should not start with '@'";
        return;
    }

    if (split_email[1].length === 0) {
        document.getElementById('emailerror').textContent = "Enter domain name after '@'";
        return;
    }

    if (!split_email[1].includes(".")) {
        document.getElementById('emailerror').textContent = "Domain must contain '.'";
        return;
    }

    if (split_email[0].startsWith(".")) {
        document.getElementById('emailerror').textContent = "Email should not start with '.'";
        return;
    }

    if (split_email[1].startsWith(".")) {
        document.getElementById('emailerror').textContent = "Domain name should not start with '.'";
        return;
    }

    if (split_email[1].endsWith(".")) {
        document.getElementById('emailerror').textContent = "Domain name should not end with '.'";
        return;
    }

    let domainparts = split_email[1].split(".");

    if (domainparts.length < 2) {
        document.getElementById('emailerror').textContent = "Domain name must contain dot";
        return;
    }

    let extension = domainparts[domainparts.length - 1];
    var domains = ['com', 'in'];

    if (extension.length === 0) {
        document.getElementById('emailerror').textContent = "Extension cannot be empty";
        return;
    }

    if (extension.length < 2) {
        document.getElementById('emailerror').textContent = "Extension must be at least 2 characters";
        return;
    }

    if (/\d/.test(extension)) {
        document.getElementById('emailerror').textContent = "Extension should not contain numbers";
        return;
    }

    if (!/^[a-zA-Z]+$/.test(extension)) {
        document.getElementById('emailerror').textContent = "Extension must contain only letters";
        return;
    }
    if (!domains.includes(extension.toLowerCase())) {
        document.getElementById('emailerror').textContent = "Invalid domain extension";
        return;
    }

    document.getElementById('emailerror').textContent = "";

    if (!mobile) {
        document.getElementById('mobileerror').textContent = "Enter Mobile";
        isvalid = false;
    }
    if (mobile) {
        if (mobile.length < 10) {
            document.getElementById('mobileerror').textContent = "Mobile Number must be 10 digit";
            isvalid = false;
        }
    }

    if (!shift) {
        document.getElementById('shifterror').textContent = "Select Shift";
        isvalid = false;
    }

    if (!gender) {
        document.getElementById('gendererror').textContent = "Select Gender";
        isvalid = false;
    }

    if (!role) {
        document.getElementById('roleerror').textContent = "Enter Role";
        isvalid = false;
    }

    if (!password) {
        document.getElementById('passworderror').textContent = "Enter Password";
        isvalid = false;
    }

    if (!confirmpassword) {
        document.getElementById('confirmpassworderror').textContent = "Enter Confirmpassword";
        isvalid = false;
    }

    if (password) {
        if (confirmpassword) {
            if (password !== confirmpassword) {
                document.getElementById('confirmpassworderror').textContent = "Passwords do not match";
                isvalid = false;
            }
        }
    }


    if (!terms) {
        document.getElementById('termserror').textContent = "Accept Terms";
        isvalid = false;
    }

    if (isvalid) {

        if (userdata[email]) {
            alert('Email Already Exist');
        }
        else {
            userdata[email] = {
                'firstname': firstname,
                'lastname': lastname,
                'email': email,
                'mobile': '+1' + mobile,
                'shift': shift,
                'gender': gender,
                'password': confirmpassword,
                'terms': terms
            }
            localStorage.setItem('userdata', JSON.stringify(userdata));
            alert("Signup Success");
        }

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
    } else {
        mobileerror.textContent = "";
    }

    event.target.value = formattednumber;

});


var email = document.getElementById('email');
var emailerror = document.getElementById('emailerror');

email.addEventListener('input', (event) => {

    var inputvalue = event.target.value;

    emailerror.textContent = '';

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
    var domains = ['com', 'in'];

    if (extension.length === 0) {
        emailerror.textContent = "Extension cannot be empty";
        return;
    }

    if (extension.length < 2) {
        emailerror.textContent = "Extension must be at least 2 characters";
        return;
    }

    if (/\d/.test(extension)) {
        emailerror.textContent = "Extension should not contain numbers";
        return;
    }

    if (!/^[a-zA-Z]+$/.test(extension)) {
        emailerror.textContent = "Extension must contain only letters";
        return;
    }
    if (!domains.includes(extension.toLowerCase())) {
        emailerror.textContent = "Invalid domain extension";
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
    var domains = ['com', 'in'];

    if (extension.length === 0) {
        emailerror.textContent = "Extension cannot be empty";
        return;
    }

    if (extension.length < 2) {
        emailerror.textContent = "Extension must be at least 2 characters";
        return;
    }

    if (/\d/.test(extension)) {
        emailerror.textContent = "Extension should not contain numbers";
        return;
    }

    if (!/^[a-zA-Z]+$/.test(extension)) {
        emailerror.textContent = "Extension must contain only letters";
        return;
    }
    if (!domains.includes(extension.toLowerCase())) {
        emailerror.textContent = "Invalid domain extension";
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
        firstnameerror.textContent = '';
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
        lastnameerror.textContent = '';
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
        mobileerror.textContent = '';
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
        shifterror.textContent = '';
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
        gendererror.textContent = '';
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
        roleerror.textContent = '';
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

var confirmpassword = document.getElementById('confirmpassword');

confirmpassword.addEventListener('blur', (event) => {

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
                    confirmpassworderror.textContent = '';
                }
            }
        }
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
                    confirmpassworderror.textContent = '';
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



