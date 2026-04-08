// get all data from local storage
let userData = JSON.parse(localStorage.getItem("userdata")) || {};
let loginUser = JSON.parse(localStorage.getItem("loginuser")) || {};

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

    // local storage update after delete
    localStorage.setItem('userdata', JSON.stringify(userData));
}

// add click event to logout button
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', function () {
    logoutUser();
});

// add click event to add user button
const addUserBtn = document.getElementById('addUserBtn');
addUserBtn.addEventListener('click', function () {
    goToAddUser();
});

// delete button function (it only shows for without login user)
function enableDeleteButtons() {
    const deleteButtons = document.getElementsByClassName('deletebutton');

    for (const element of deleteButtons) {
        const email = element.getAttribute('data');

        element.addEventListener('click', function () {
            const selectedEmail = this.getAttribute('data');
            this.parentElement.parentElement.remove();
            deleteUser(selectedEmail);
        });

        // disable delete button logic
        if (loginUser.email === email) {
            element.disabled = true;
            element.style.backgroundColor = 'grey';
        } else {
            element.disabled = false;
        }
    }
}

// edit button function
function enableEditButtons() {
    const editButtons = document.getElementsByClassName('editbutton');

    for (const element of editButtons) {
        element.addEventListener('click', function () {
            const selectedData = this.getAttribute('data');
            const parsedData = JSON.parse(selectedData);

            // store edit data to localstorage
            localStorage.setItem('editdata', selectedData);
            localStorage.setItem('editemail', parsedData.email);

            // redirect to edit page
            window.location.href = '/signup_and_login/edit/index.html';
        });
    }
}

// display all users
function displayUsers() {

    // set a welcome message
    document.getElementById('welcomeMessage').textContent =
        'Welcome ' + loginUser.firstname;

    // users loop
    Object.values(userData).forEach(user => {

        // create new card
        const card = document.createElement('div');
        card.classList = "userCard";

        // card content
        const cardContent = `
            <p><strong>First Name:</strong> ${user.firstname}</p>
            <p><strong>Last Name:</strong> ${user.lastname}</p>
            <p><strong>Mobile:</strong> ${user.mobile}</p>
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

        card.innerHTML = cardContent;

        // update the data in UI
        document.getElementById("userList").appendChild(card);
    });

    // call function only after login
    enableDeleteButtons();
    enableEditButtons();
}

// auth user function (prevent page)
function authUser() {
    const storedUser = JSON.parse(localStorage.getItem('loginuser'));

    if (storedUser) {
        displayUsers();
    } else {
        window.location.href = '/signup_and_login/login/index.html';
    }
}

// first function call
authUser();