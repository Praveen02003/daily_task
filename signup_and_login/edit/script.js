// get data from localstorage
let fullData = JSON.parse(localStorage.getItem('userdata')) || {};
let editData = JSON.parse(localStorage.getItem('editdata')) || {};

// target edit form
const editForm = document.getElementById('editForm');

// edit form submit event
editForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let userData = JSON.parse(localStorage.getItem('userdata')) || {};
    let isValid = true;

    // get all input values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const shift = document.getElementById('shift').value;
    const gender = document.getElementById('gender').value;
    const role = document.getElementById('role').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;

    // first name validation
    if (!firstName) {
        document.getElementById('firstNameError').textContent = "Enter First Name";
        isValid = false;
    } else {
        document.getElementById('firstNameError').textContent = "";
    }

    // last name validation
    if (!lastName) {
        document.getElementById('lastNameError').textContent = "Enter Last Name";
        isValid = false;
    } else {
        document.getElementById('lastNameError').textContent = "";
    }

    // email validation
    let emailError = "";

    if (!email) {
        emailError = "Enter Email";
    } else if (email.includes(" ")) {
        emailError = "No spaces allowed";
    } else if (!email.includes('@')) {
        emailError = "Must contain @";
    }

    document.getElementById('emailError').textContent = emailError;
    if (emailError) isValid = false;

    // mobile number validation
    if (!mobile || mobile.length < 10) {
        document.getElementById('mobileError').textContent = "Enter valid number";
        isValid = false;
    } else {
        document.getElementById('mobileError').textContent = "";
    }

    // password validation
    if (!password || password.length < 8) {
        document.getElementById('passwordError').textContent = "Min 8 characters";
        isValid = false;
    } else if (!/\d/.test(password)) {
        document.getElementById('passwordError').textContent = "Must contain number";
        isValid = false;
    } else if (!/[!@#$%^&*]/.test(password)) {
        document.getElementById('passwordError').textContent = "Must contain special char";
        isValid = false;
    } else {
        document.getElementById('passwordError').textContent = "";
    }

    // confirm-password validation
    if (!confirmPassword || password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = "Passwords do not match";
        isValid = false;
    } else {
        document.getElementById('confirmPasswordError').textContent = "";
    }

    // terms validation
    if (!terms) {
        document.getElementById('termsError').textContent = "Accept Terms";
        isValid = false;
    } else {
        document.getElementById('termsError').textContent = "";
    }

    // final validation to update data in local storage
    if (isValid) {
        const cleanNumber = mobile.replace(/\D/g, "");
        const oldEmail = localStorage.getItem('editemail');

        // remove old data
        delete fullData[oldEmail];

        // update new record
        fullData[email] = {
            'firstname': firstName,
            'lastname': lastName,
            'email': email,
            'mobile': '+1' + cleanNumber,
            'shift': shift,
            'gender': gender,
            'role': role,
            'password': password,
            'terms': terms
        };

        // update localstorage
        localStorage.setItem('userdata', JSON.stringify(fullData));

        // clear previous edit data in localstorage 
        localStorage.removeItem('editdata');
        localStorage.removeItem('editemail');

        alert("User updated successfully");

        setTimeout(() => {
            window.location.href = "/signup_and_login/dashboard/index.html";
        }, 500);
    }
});



// mobile number validation

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

    var mobileError = document.getElementById('mobileError');

    if (finalnumber.length < 10) {
        mobileError.textContent = "Mobile Number must be 10 digits";
    }
    else {
        mobileError.textContent = "";
    }

    event.target.value = formattednumber;

});

// email validation

var email = document.getElementById('email');
var emailError = document.getElementById('emailError');

email.addEventListener('input', (event) => {

    var inputvalue = event.target.value;

    if (!inputvalue) {
        emailError.textContent = 'Enter Email';
        return;
    }

    if (inputvalue.includes(" ")) {
        emailError.textContent = "Email should not contain space";
        return;
    }

    if (!inputvalue.includes('@')) {
        emailError.textContent = 'Email must contain @';
        return;
    }

    if (inputvalue.indexOf('@') !== inputvalue.lastIndexOf('@')) {
        emailError.textContent = "Email must contain only one '@'";
        return;
    }

    let split_email = inputvalue.split("@");

    if (split_email[0].length === 0) {
        emailError.textContent = "Email should not start with '@'";
        return;
    }

    if (split_email[1].length === 0) {
        emailError.textContent = "Enter domain name after '@'";
        return;
    }

    if (!split_email[1].includes(".")) {
        emailError.textContent = "Domain must contain '.'";
        return;
    }

    if (split_email[0].startsWith(".")) {
        emailError.textContent = "Email should not start with '.'";
        return;
    }

    if (split_email[1].startsWith(".")) {
        emailError.textContent = "Domain name should not start with '.'";
        return;
    }

    if (split_email[1].endsWith(".")) {
        emailError.textContent = "Domain name should not end with '.'";
        return;
    }

    let domainparts = split_email[1].split(".");

    if (domainparts.length < 2) {
        emailError.textContent = "Domain name must contain dot";
        return;
    }

    let extension = domainparts[domainparts.length - 1];

    if (extension.length === 0) {
        emailError.textContent = "Extension cannot be empty";
        return;
    }
    emailError.textContent = "";
});

var email = document.getElementById('email');

email.addEventListener('blur', (event) => {

    var inputvalue = event.target.value;

    var emailError = document.getElementById('emailError');
    if (!inputvalue) {
        emailError.textContent = 'Enter Email';
        return;
    }

    if (inputvalue.includes(" ")) {
        emailError.textContent = "Email should not contain space";
        return;
    }

    if (!inputvalue.includes('@')) {
        emailError.textContent = 'Email must contain @';
        return;
    }

    if (inputvalue.indexOf('@') !== inputvalue.lastIndexOf('@')) {
        emailError.textContent = "Email must contain only one '@'";
        return;
    }

    let split_email = inputvalue.split("@");

    if (split_email[0].length === 0) {
        emailError.textContent = "Email should not start with '@'";
        return;
    }

    if (split_email[1].length === 0) {
        emailError.textContent = "Enter domain name after '@'";
        return;
    }

    if (!split_email[1].includes(".")) {
        emailError.textContent = "Domain must contain '.'";
        return;
    }

    if (split_email[0].startsWith(".")) {
        emailError.textContent = "Email should not start with '.'";
        return;
    }

    if (split_email[1].startsWith(".")) {
        emailError.textContent = "Domain name should not start with '.'";
        return;
    }

    if (split_email[1].endsWith(".")) {
        emailError.textContent = "Domain name should not end with '.'";
        return;
    }

    let domainparts = split_email[1].split(".");

    if (domainparts.length < 2) {
        emailError.textContent = "Domain name must contain dot";
        return;
    }

    let extension = domainparts[domainparts.length - 1];

    if (extension.length === 0) {
        emailError.textContent = "Extension cannot be empty";
        return;
    }
    emailError.textContent = "";
});

// firstname validation

var firstName = document.getElementById('firstName');

firstName.addEventListener('input', (event) => {

    var inputvalue = event.target.value;

    var firstNameError = document.getElementById('firstNameError');
    if (!inputvalue) {
        firstNameError.textContent = 'Enter First Name';
    }
    else {
        firstNameError.textContent = "";
    }
});

var firstName = document.getElementById('firstName');

firstName.addEventListener('blur', (event) => {

    var inputvalue = event.target.value;

    var firstNameError = document.getElementById('firstNameError');
    if (!inputvalue) {
        firstNameError.textContent = 'Enter First Name';
    }
    else {
        firstNameError.textContent = "";
    }
});

// lastname validation

var lastName = document.getElementById('lastName');

lastName.addEventListener('input', (event) => {

    var inputvalue = event.target.value;

    var lastNameError = document.getElementById('lastNameError');
    if (!inputvalue) {
        lastNameError.textContent = 'Enter Last Name';
    }
    else {
        lastNameError.textContent = "";
    }
});

var lastName = document.getElementById('lastName');

lastName.addEventListener('blur', (event) => {

    var inputvalue = event.target.value;

    var lastNameError = document.getElementById('lastNameError');
    if (!inputvalue) {
        lastNameError.textContent = 'Enter Last Name';
    }
    else {
        lastNameError.textContent = "";
    }
});

// mobile number validation

var mobile = document.getElementById('mobile');

mobile.addEventListener('blur', (event) => {

    var inputvalue = event.target.value;

    var mobileError = document.getElementById('mobileError');
    if (!inputvalue) {
        mobileError.textContent = 'Enter Mobile number';
    }
    else {
        mobileError.textContent = "";
    }
});

// shift validation

var shift = document.getElementById('shift');

shift.addEventListener('input', (event) => {

    var inputvalue = event.target.value;

    var shiftError = document.getElementById('shiftError');
    if (!inputvalue) {
        shiftError.textContent = 'Select Shift';
    }
    else {
        shiftError.textContent = "";
    }
});

var shift = document.getElementById('shift');

shift.addEventListener('blur', (event) => {

    var inputvalue = event.target.value;

    var shiftError = document.getElementById('shiftError');
    if (!inputvalue) {
        shiftError.textContent = 'Select Shift';
    }
    else {
        shiftError.textContent = "";
    }
});

// gender validation

var gender = document.getElementById('gender');

gender.addEventListener('input', (event) => {

    var inputvalue = event.target.value;

    var genderError = document.getElementById('genderError');
    if (!inputvalue) {
        genderError.textContent = 'Select Gender';
    }
    else {
        genderError.textContent = "";
    }
});

var gender = document.getElementById('gender');

gender.addEventListener('blur', (event) => {

    var inputvalue = event.target.value;

    var genderError = document.getElementById('genderError');
    if (!inputvalue) {
        genderError.textContent = 'Select Gender';
    }
    else {
        genderError.textContent = "";
    }
});

// role validation

var role = document.getElementById('role');

role.addEventListener('input', (event) => {

    var inputvalue = event.target.value;

    var roleError = document.getElementById('roleError');
    if (!inputvalue) {
        roleError.textContent = 'Enter Job / Role';
    }
    else {
        roleError.textContent = "";
    }
});

var role = document.getElementById('role');

role.addEventListener('blur', (event) => {

    var inputvalue = event.target.value;

    var roleError = document.getElementById('roleError');
    if (!inputvalue) {
        roleError.textContent = 'Enter Job / Role';
    }
    else {
        roleError.textContent = "";
    }
});

// password validation

var password = document.getElementById('password');

password.addEventListener('input', (event) => {

    var inputvalue = event.target.value;

    var passwordError = document.getElementById('passwordError');
    if (!inputvalue || inputvalue.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
    }
    else if (!/\d/.test(inputvalue)) {
        passwordError.textContent = "Password must contain at least one number";
    }

    else if (!/[!@#$%^&*(),.?":{}|<>]/.test(inputvalue)) {
        passwordError.textContent = "Password must contain at least one special character";
    }
    else {
        passwordError.textContent = "";
    }
});

var password = document.getElementById('password');

password.addEventListener('blur', (event) => {

    var inputvalue = event.target.value;

    var passwordError = document.getElementById('passwordError');
    if (!inputvalue || inputvalue.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
    }
    else if (!/\d/.test(inputvalue)) {
        passwordError.textContent = "Password must contain at least one number";
    }

    else if (!/[!@#$%^&*(),.?":{}|<>]/.test(inputvalue)) {
        passwordError.textContent = "Password must contain at least one special character";
    }
    else {
        passwordError.textContent = "";
    }
});

// confirm-password validation

var confirmPassword = document.getElementById('confirmPassword');

confirmPassword.addEventListener('blur', (event) => {

    var inputvalue = event.target.value;

    var confirmPasswordError = document.getElementById('confirmPasswordError');
    if (!inputvalue) {
        confirmPasswordError.textContent = 'Enter Confirm-Password';
    }
    else if (inputvalue) {
        if (password.value) {
            if (inputvalue) {
                if (password.value !== inputvalue) {
                    document.getElementById('confirmPasswordError').textContent = "Passwords do not match";
                }
                else {
                    document.getElementById('confirmPasswordError').textContent = "";
                }
            }
        }
    }
});

confirmPassword.addEventListener('input', (event) => {

    var inputvalue = event.target.value;

    var confirmPasswordError = document.getElementById('confirmPasswordError');
    if (!inputvalue) {
        confirmPasswordError.textContent = 'Enter Confirm-Password';
    }
    else if (inputvalue) {
        if (password.value) {
            if (inputvalue) {
                if (password.value !== inputvalue) {
                    document.getElementById('confirmPasswordError').textContent = "Passwords do not match";
                }
                else {
                    document.getElementById('confirmPasswordError').textContent = "";
                }
            }
        }
    }
});


// terms validation

var terms = document.getElementById('terms');

terms.addEventListener('input', (event) => {

    var inputvalue = event.target.checked;

    var termsError = document.getElementById('termsError');
    if (!inputvalue) {
        termsError.textContent = 'Please Accept terms and condition';
    }
    else {
        termsError.textContent = "";
    }
});


// function call when auth user pass
function applyData() {
    // console.log(editData.shift);
    // console.log(editData.gender);

    let formattedNumber = editData.mobile.slice(2);

    if (formattedNumber.length > 6) {
        formattedNumber = `(${formattedNumber.slice(0, 3)}) ${formattedNumber.slice(3, 6)}-${formattedNumber.slice(6)}`;
    }

    // fill all input with particular edit data
    document.getElementById('firstName').value = editData.firstname;
    document.getElementById('lastName').value = editData.lastname;
    document.getElementById('email').value = editData.email;
    document.getElementById('mobile').value = formattedNumber;
    document.getElementById('shift').value = editData.shift;
    document.getElementById('gender').value = editData.gender;
    document.getElementById('role').value = editData.role;
    document.getElementById('password').value = editData.password;
    document.getElementById('confirmPassword').value = editData.password;
    document.getElementById('terms').checked = editData.terms;
}



const goToDashboardButton = document.getElementById('goToDashboardButton');

// add event to gotodashboard button

goToDashboardButton.addEventListener('click', () => {
    localStorage.removeItem('editdata');
    localStorage.removeItem('editemail');

    window.location.href = "/signup_and_login/dashboard/index.html";
});


// auth user ( prevent page )
function authUser() {
    const loginUser = JSON.parse(localStorage.getItem('loginuser'));
    const storedEditData = JSON.parse(localStorage.getItem('editdata'));
    const editEmail = localStorage.getItem('editemail');

    if (!loginUser) {
        window.location.href = '/signup_and_login/login/index.html';
    } else if (!storedEditData || !editEmail) {
        window.location.href = '/signup_and_login/dashboard/index.html';
    } else {
        applyData();
    }
}

// initial function call when page loads
authUser();