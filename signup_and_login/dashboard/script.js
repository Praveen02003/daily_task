// get all data from local storage
var userData = JSON.parse(localStorage.getItem("userdata")) || {};
var userDataValues = Object.values(userData) || [];
var loginUser = JSON.parse(localStorage.getItem("loginuser")) || {};

// logout function
function logoutUser() {
    localStorage.removeItem('loginuser');
    window.location.href = '/signup_and_login/login/index.html';
}

// navigate to add user page
function goToAddUser() {
    window.location.href = '/signup_and_login/add/index.html';
}

// delete user function
function deleteUser(email) {
    delete userData[email];
    localStorage.setItem('userdata', JSON.stringify(userData));
}

// add click event in logout button
document.getElementById('logoutButton').addEventListener('click', function () {
    logoutUser();
});

// add click event in add user button
document.getElementById('addUserButton').addEventListener('click', function () {
    goToAddUser();
});

// enableDeleteButtons function
function enableDeleteButtons() {
    const deleteButtons = document.getElementsByClassName('deletebutton');

    for (const element of deleteButtons) {
        const email = element.getAttribute('data');

        element.addEventListener('click', function () {
            const selectedEmail = this.getAttribute('data');
            this.parentElement.parentElement.remove();
            deleteUser(selectedEmail);
        });

        // disable for logged-in user
        if (loginUser.email === email) {
            element.disabled = true;
            element.style.backgroundColor = 'grey';
        }
    }
}

// enableEditButtons function
function enableEditButtons() {
    const editButtons = document.getElementsByClassName('editbutton');

    for (const element of editButtons) {
        element.addEventListener('click', function () {
            const selectedData = this.getAttribute('data');
            const parsedData = JSON.parse(selectedData);

            localStorage.setItem('editdata', selectedData);
            localStorage.setItem('editemail', parsedData.email);

            window.location.href = '/signup_and_login/edit/index.html';
        });
    }
}

// display users function
function displayUsers() {

    document.getElementById('welcomeMessage').textContent =
        'Welcome ' + loginUser.firstname;

    const userList = document.getElementById("userList");
    userList.innerHTML = "";

    userDataValues.forEach(user => {

        const card = document.createElement('div');
        card.classList = "userCard";

        card.innerHTML = `
            <p><strong>First Name:</strong> ${user.firstname}</p>
            <p><strong>Last Name:</strong> ${user.lastname}</p>
            <p><strong>Mobile:</strong> ${user.mobile}</p>
            <p><strong>Gender:</strong> ${user.gender}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Password:</strong> ${user.password}</p>
            <p><strong>Role:</strong> ${user.role}</p>
            <p><strong>Shift:</strong> ${user.shift}</p>
            <p><strong>Terms:</strong> ${user.terms}</p>

            <div class="actions">
                <button class="editbutton" data='${JSON.stringify(user)}'>Edit</button>
                <button class="deletebutton" data='${user.email}'>Delete</button>
            </div>
        `;

        userList.appendChild(card);
    });

    enableDeleteButtons();
    enableEditButtons();
}

// filter logic

// updateUI function
function updateUI(filteredData) {
    const noData = document.getElementById('noData');

    if (filteredData.length > 0) {
        noData.textContent = "";
        userDataValues = filteredData;
    } else {
        noData.textContent = "No matching records found";
        userDataValues = [];
    }
    // call displayUsers function
    displayUsers();
}

// searchData function
function searchData(searchValue = "", shift = "", gender = "") {

    const userDataArray = Object.values(userData);
    const filteredData = [];

    for (let i = 0; i < userDataArray.length; i++) {

        let user = userDataArray[i];

        let matchesSearch = false;

        if (user.firstname.toLowerCase().includes(searchValue.toLowerCase()) ||
            user.lastname.toLowerCase().includes(searchValue.toLowerCase()) ||
            user.email.toLowerCase().includes(searchValue.toLowerCase()) ||
            user.mobile.includes(searchValue) ||
            user.role.toLowerCase().includes(searchValue.toLowerCase()) ||
            user.gender.toLowerCase().includes(searchValue.toLowerCase()) ||
            user.shift.toLowerCase().includes(searchValue.toLowerCase())
        ) {
            matchesSearch = true;
        }

        let matchesShift = false;

        if (shift === "") {
            matchesShift = true;
        } else if (user.shift.toLowerCase() === shift.toLowerCase()) {
            matchesShift = true;
        }

        let matchesGender = false;

        if (gender === "") {
            matchesGender = true;
        } else if (user.gender.toLowerCase() === gender.toLowerCase()) {
            matchesGender = true;
        }

        if (matchesSearch && matchesShift && matchesGender) {
            filteredData.push(user);
        }
    }
    // call update UI function
    updateUI(filteredData);
}

// get all ids

const searchInput = document.getElementById('search');
const clearButton = document.getElementById('clearButton');
const searchButton = document.getElementById('searchButton');
const selectShift = document.getElementById('selectShift');
const selectGender = document.getElementById('selectGender');

// add input event in searchInput
searchInput.addEventListener('input', function (event) {

    let searchValue = event.target.value;
    let shift = selectShift.value;
    let gender = selectGender.value;

    clearButton.style.display = searchValue ? "inline-block" : "none";
    setTimeout(function () {
        searchData(searchValue, shift, gender);
    }, 1500);
});


// triggerFilter function

function triggerFilter() {
    let searchValue = searchInput.value;
    let shiftValue = selectShift.value;
    let genderValue = selectGender.value;
    clearButton.style.display = (shiftValue || genderValue) ? "inline-block" : "none";

    searchData(searchValue, shiftValue, genderValue);
}

// add click event in search button
searchButton.addEventListener('click', function () {
    triggerFilter();
});

// add click event in clear button
clearButton.addEventListener('click', function () {

    document.getElementById('noData').textContent = "";

    searchInput.value = "";
    selectShift.value = "";
    selectGender.value = "";

    this.style.display = "none";

    userDataValues = Object.values(userData);
    displayUsers();
});

// authUser function

function authUser() {
    const storedUser = JSON.parse(localStorage.getItem('loginuser'));

    if (storedUser) {
        displayUsers();
    } else {
        window.location.href = '/signup_and_login/login/index.html';
    }
}

// initial call
authUser();