var userData = JSON.parse(localStorage.getItem('userdata')) || {};

// dummy data function
function dummyData() {
    userData['user1@gmail.com'] = {
        firstname: 'John',
        lastname: 'Doe',
        email: 'user1@gmail.com',
        mobile: '+11234567801',
        shift: 'AM',
        gender: 'Male',
        role: 'User',
        password: 'pass1234',
        terms: true
    };

    userData['user2@gmail.com'] = {
        firstname: 'Jane',
        lastname: 'Smith',
        email: 'user2@gmail.com',
        mobile: '+11234567802',
        shift: 'PM',
        gender: 'Female',
        role: 'Admin',
        password: 'pass1234',
        terms: true
    };

    userData['user3@gmail.com'] = {
        firstname: 'Arun',
        lastname: 'Kumar',
        email: 'user3@gmail.com',
        mobile: '+11234567803',
        shift: 'AM',
        gender: 'Male',
        role: 'User',
        password: 'pass1234',
        terms: true
    };

    userData['user4@gmail.com'] = {
        firstname: 'Priya',
        lastname: 'Ravi',
        email: 'user4@gmail.com',
        mobile: '+11234567804',
        shift: 'PM',
        gender: 'Female',
        role: 'User',
        password: 'pass1234',
        terms: true
    };

    userData['user5@gmail.com'] = {
        firstname: 'Rahul',
        lastname: 'Sharma',
        email: 'user5@gmail.com',
        mobile: '+11234567805',
        shift: 'AM',
        gender: 'Male',
        role: 'Manager',
        password: 'pass1234',
        terms: true
    };

    userData['user6@gmail.com'] = {
        firstname: 'Sneha',
        lastname: 'Iyer',
        email: 'user6@gmail.com',
        mobile: '+11234567806',
        shift: 'PM',
        gender: 'Female',
        role: 'User',
        password: 'pass1234',
        terms: true
    };

    userData['user7@gmail.com'] = {
        firstname: 'Vikram',
        lastname: 'Singh',
        email: 'user7@gmail.com',
        mobile: '+11234567807',
        shift: 'AM',
        gender: 'Male',
        role: 'User',
        password: 'pass1234',
        terms: true
    };

    userData['user8@gmail.com'] = {
        firstname: 'Anjali',
        lastname: 'Mehta',
        email: 'user8@gmail.com',
        mobile: '+11234567808',
        shift: 'PM',
        gender: 'Female',
        role: 'Admin',
        password: 'pass1234',
        terms: true
    };

    userData['user9@gmail.com'] = {
        firstname: 'Karthik',
        lastname: 'R',
        email: 'user9@gmail.com',
        mobile: '+11234567809',
        shift: 'AM',
        gender: 'Male',
        role: 'User',
        password: 'pass1234',
        terms: true
    };

    userData['user10@gmail.com'] = {
        firstname: 'Divya',
        lastname: 'S',
        email: 'user10@gmail.com',
        mobile: '+11234567810',
        shift: 'PM',
        gender: 'Female',
        role: 'User',
        password: 'pass1234',
        terms: true
    };

    userData['user11@gmail.com'] = {
        firstname: 'Ramesh',
        lastname: 'K',
        email: 'user11@gmail.com',
        mobile: '+11234567811',
        shift: 'AM',
        gender: 'Male',
        role: 'Manager',
        password: 'pass1234',
        terms: true
    };

    userData['user12@gmail.com'] = {
        firstname: 'Pooja',
        lastname: 'N',
        email: 'user12@gmail.com',
        mobile: '+11234567812',
        shift: 'PM',
        gender: 'Female',
        role: 'User',
        password: 'pass1234',
        terms: true
    };

    userData['user13@gmail.com'] = {
        firstname: 'Suresh',
        lastname: 'M',
        email: 'user13@gmail.com',
        mobile: '+11234567813',
        shift: 'AM',
        gender: 'Male',
        role: 'User',
        password: 'pass1234',
        terms: true
    };

    userData['user14@gmail.com'] = {
        firstname: 'Lakshmi',
        lastname: 'P',
        email: 'user14@gmail.com',
        mobile: '+11234567814',
        shift: 'PM',
        gender: 'Female',
        role: 'Admin',
        password: 'pass1234',
        terms: true
    };

    userData['user15@gmail.com'] = {
        firstname: 'Ajay',
        lastname: 'T',
        email: 'user15@gmail.com',
        mobile: '+11234567815',
        shift: 'AM',
        gender: 'Male',
        role: 'User',
        password: 'pass1234',
        terms: true
    };

    userData['user16@gmail.com'] = {
        firstname: 'Meena',
        lastname: 'V',
        email: 'user16@gmail.com',
        mobile: '+11234567816',
        shift: 'PM',
        gender: 'Female',
        role: 'User',
        password: 'pass1234',
        terms: true
    };

    userData['user17@gmail.com'] = {
        firstname: 'Ganesh',
        lastname: 'B',
        email: 'user17@gmail.com',
        mobile: '+11234567817',
        shift: 'AM',
        gender: 'Male',
        role: 'Manager',
        password: 'pass1234',
        terms: true
    };

    userData['user18@gmail.com'] = {
        firstname: 'Keerthi',
        lastname: 'L',
        email: 'user18@gmail.com',
        mobile: '+11234567818',
        shift: 'PM',
        gender: 'Female',
        role: 'User',
        password: 'pass1234',
        terms: true
    };

    userData['user19@gmail.com'] = {
        firstname: 'Manoj',
        lastname: 'D',
        email: 'user19@gmail.com',
        mobile: '+11234567819',
        shift: 'AM',
        gender: 'Male',
        role: 'User',
        password: 'pass1234',
        terms: true
    };

    userData['user20@gmail.com'] = {
        firstname: 'Nisha',
        lastname: 'G',
        email: 'user20@gmail.com',
        mobile: '+11234567820',
        shift: 'PM',
        gender: 'Female',
        role: 'Admin',
        password: 'pass1234',
        terms: true
    };
}
// get all data from localstorage

// validatePassword function
function validatePassword(inputvalue) {
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
}

// validateFirstName function
function validateFirstName(inputvalue) {
    var firstNameError = document.getElementById('firstNameError');
    if (!inputvalue) {
        firstNameError.textContent = 'Enter First Name';
    } else {
        firstNameError.textContent = "";
    }
}

// validateLastName function
function validateLastName(inputvalue) {
    var lastNameError = document.getElementById('lastNameError');
    if (!inputvalue) {
        lastNameError.textContent = 'Enter Last Name';
    } else {
        lastNameError.textContent = "";
    }
}

// validateEmail function
function validateEmail(inputvalue) {
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

    if (split_email[1].startsWith(".") || split_email[1].endsWith(".")) {
        emailError.textContent = "Invalid domain format";
        return;
    }

    let domainparts = split_email[1].split(".");
    let extension = domainparts[domainparts.length - 1];

    if (extension.length === 0) {
        emailError.textContent = "Extension cannot be empty";
        return;
    }

    emailError.textContent = "";
}

// validateMobileNumber function
function validateMobileNumber(inputvalue, event) {

    var mobileError = document.getElementById('mobileError');

    var finalnumber = "";
    var formattednumber = "";

    if (!inputvalue) {
        mobileError.textContent = "Enter Mobile Number";
    }

    let numbers = inputvalue.split("").filter(item => (item >= '0') && (item <= '9')).join("");

    finalnumber = numbers.slice(0, 10);

    if (finalnumber.length > 6) {
        formattednumber = "(" + finalnumber.slice(0, 3) + ") " + finalnumber.slice(3, 6) + "-" + finalnumber.slice(6);
    }
    else if (finalnumber.length > 3) {
        formattednumber = "(" + finalnumber.slice(0, 3) + ") " + finalnumber.slice(3);
    }
    else {
        formattednumber = finalnumber;
    }

    if (finalnumber.length < 10) {
        mobileError.textContent = "Mobile Number must be 10 digits";
    } else {
        mobileError.textContent = "";
    }

    if (event) {
        event.target.value = formattednumber;
    }
}

// validateShift function
function validateShift(inputvalue) {
    var shiftError = document.getElementById('shiftError');
    if (!inputvalue) {
        shiftError.textContent = "Select Shift";
    }
    else {
        shiftError.textContent = "";
    }
}

// validateRole function
function validateRole(inputvalue) {
    var roleError = document.getElementById('roleError');
    if (!inputvalue) {
        roleError.textContent = "Enter Job / Role";
    }
    else {
        roleError.textContent = "";
    }
}

// validateGender function
function validateGender(inputvalue) {
    var genderError = document.getElementById('genderError');
    if (!inputvalue) {
        genderError.textContent = "Select Gender";
    }
    else {
        genderError.textContent = "";
    }
}

// validateTerms
function validateTerms(inputvalue) {
    var termsError = document.getElementById('termsError');
    if (!inputvalue) {
        termsError.textContent = "Accept terms and condition";
    }
    else {
        termsError.textContent = "";
    }
}

// validateConfirmPassword
function validateConfirmPassword(inputvalue) {
    var confirmPasswordError = document.getElementById('confirmPasswordError');

    if (!inputvalue) {
        confirmPasswordError.textContent = 'Enter Confirm-Password';
    }
    else if (password.value !== inputvalue) {
        confirmPasswordError.textContent = "Passwords do not match";
    }
    else {
        confirmPasswordError.textContent = "";
    }
}

// form submit
const form = document.getElementById('addForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;

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

    validateFirstName(firstName);
    validateLastName(lastName);
    validateEmail(email);
    validateMobileNumber(mobile);
    validateShift(shift);
    validateGender(gender);
    validateRole(role);
    validatePassword(password);
    validateConfirmPassword(confirmPassword);
    validateTerms(terms);

    if (!firstName || !lastName || !email || !mobile || !password || !confirmPassword || !terms) {
        isValid = false;
    }

    if (isValid) {

        if (userData[email]) {
            alert('Email Already Exists');
        } else {

            var finalNumber = mobile.replace(/\D/g, "");

            userData[email] = {
                'firstname': firstName,
                'lastname': lastName,
                'email': email,
                'mobile': '+1' + finalNumber,
                'shift': shift,
                'gender': gender,
                'role': role,
                'password': password,
                'terms': terms
            };

            dummyData();
            console.log(userData);

            localStorage.setItem('userdata', JSON.stringify(userData));

            alert("New Data Added Successfully");

            setTimeout(function () {
                window.location.href = "/signup_and_login/dashboard/index.html";
            }, 500);
        }
    }
});


// target firstname
var firstName = document.getElementById('firstName');

firstName.addEventListener('input', function (event) {
    validateFirstName(event.target.value);
});

firstName.addEventListener('blur', function (event) {
    validateFirstName(event.target.value);
});


// target lastname
var lastName = document.getElementById('lastName');

lastName.addEventListener('input', function (event) {
    validateLastName(event.target.value);
});

lastName.addEventListener('blur', function (event) {
    validateLastName(event.target.value);
});


// target email
var email = document.getElementById('email');

email.addEventListener('input', function (event) {
    validateEmail(event.target.value);
});

email.addEventListener('blur', function (event) {
    validateEmail(event.target.value);
});


// target role
var role = document.getElementById('role');

role.addEventListener('input', function (event) {
    validateRole(event.target.value);
});

role.addEventListener('blur', function (event) {
    validateRole(event.target.value);
});


// target gender
var gender = document.getElementById('gender');

gender.addEventListener('input', function (event) {
    validateGender(event.target.value);
});

gender.addEventListener('blur', function (event) {
    validateGender(event.target.value);
});


// target shift
var shift = document.getElementById('shift');

shift.addEventListener('input', function (event) {
    validateShift(event.target.value);
});

shift.addEventListener('blur', function (event) {
    validateShift(event.target.value);
});


// target terms
var terms = document.getElementById('terms');

terms.addEventListener('input', function (event) {
    validateTerms(event.target.checked);
});

// target password

password.addEventListener('input', function (event) {
    validatePassword(event.target.value);
});
password.addEventListener('blur', function (event) {
    validatePassword(event.target.value);
});


// target confirmPassword

var confirmPassword = document.getElementById('confirmPassword');
confirmPassword.addEventListener('input', function (event) {
    validateConfirmPassword(event.target.value);
});
confirmPassword.addEventListener('blur', function (event) {
    validateConfirmPassword(event.target.value);
});


// target mobile

var mobile = document.getElementById('mobile');
mobile.addEventListener('input', function (event) {
    validateMobileNumber(event.target.value, event);
});
mobile.addEventListener('blur', function (event) {
    validateMobileNumber(event.target.value, event);
});

// prevent pages (without login this will works)
function authUser() {
    const loginUser = JSON.parse(localStorage.getItem('loginuser'));

    if (!loginUser) {
        window.location.href = '/signup_and_login/login/index.html';
    }
}

authUser();