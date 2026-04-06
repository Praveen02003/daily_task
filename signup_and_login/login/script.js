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

    emailerror.textContent = "";

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