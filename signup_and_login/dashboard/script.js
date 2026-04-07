var getusers = JSON.parse(localStorage.getItem("userdata")) || {};

var loginuser = JSON.parse(localStorage.getItem("loginuser")) || {};
// console.log(loginuser);

function logout() {
    localStorage.removeItem('loginuser');
    window.location.href = '/signup_and_login/login/index.html'
}

function add() {
    window.location.href = '/signup_and_login/add/index.html'
}

function deleteuser(email) {
    delete getusers[email];
    console.log(getusers);
    localStorage.setItem('userdata', JSON.stringify(getusers));
}

var get_logout_button = document.getElementById('logout');
get_logout_button.addEventListener('click', function () {
    logout();
})

var get_add_button = document.getElementById('add');
get_add_button.addEventListener('click', function () {
    add();
})

function enablefunction() {
    var get_delete_button = document.getElementsByClassName('deletebutton');
    for (const element of get_delete_button) {
        var email = element.getAttribute('data');
        element.addEventListener('click', function () {
            var particularemail = this.getAttribute('data');

            var get_parent_element = this.parentElement;
            get_parent_element.parentElement.remove();

            deleteuser(particularemail);
        })
        if (loginuser.email === email) {
            element.disabled = true;
            element.style.backgroundColor = 'grey';
        }
        else {
            element.disabled = false;
        }
    }
}

function editfunction() {
    var get_edit_button = document.getElementsByClassName('editbutton');
    for (const element of get_edit_button) {
        element.addEventListener('click', function () {
            var particulardata = this.getAttribute('data');
            console.log(particulardata, "-------->");
            var parsed_data = JSON.parse(particulardata)
            localStorage.setItem('editdata',particulardata)
            localStorage.setItem('editemail',parsed_data['email'])
            window.location.href = '/signup_and_login/edit/index.html';
        })
    }
}


function displayusers() {
    document.getElementById('welcome').textContent = 'Welcome' + ' ' + loginuser['firstname'];

    Object.values(getusers).forEach(element => {
        var data = "";
        var createelement = document.createElement('div')
        createelement.classList = "usercard"
        var data = `
                   <p><strong>First Name:</strong> ${element.firstname}</p>
                   <p><strong>Last Name: </strong>${element.lastname}</p>
                   <p><strong>Mobile:</strong> ${element.mobile}</p>
                    <p><strong>Email:</strong> ${element.email}</p>
                    <p><strong>Password:</strong> ${element.password}</p>
                    <p><strong>Role:</strong> ${element.role}</p>
                    <p><strong>Shift:</strong> ${element.shift}</p>
                    <p><strong>Terms:</strong> ${element.terms}</p>

                    <div class="actions">
                        <button class="editbutton" data='${JSON.stringify(element)}'>Edit</button>
                        <button class="deletebutton" data = '${element.email}'>Delete</button>
                    </div>
                `;
        createelement.innerHTML = data
        document.getElementById("userlist").appendChild(createelement);

    });
    enablefunction();
    editfunction();

}




function authuser() {
    var get_login_user = JSON.parse(localStorage.getItem('loginuser'));
    // console.log(get_login_user, "===>");
    if (get_login_user !== null) {
        displayusers();
    }
    else {
        window.location.href = '/signup_and_login/login/index.html';
    }
}
authuser()



