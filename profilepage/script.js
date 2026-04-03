var form = document.getElementById('contactform');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var gender = document.getElementById('gender').value;
    var mobile = document.getElementById('mobile').value;
    var message = document.getElementById('message').value;
    var terms = document.getElementById('terms').checked;

    var nameError = document.getElementById('nameerror');
    var emailError = document.getElementById('emailerror');
    var genderError = document.getElementById('gendererror');
    var mobileError = document.getElementById('mobileerror');
    var messageError = document.getElementById('messageerror');
    var termsError = document.getElementById('termserror');

    nameError.textContent = "";
    emailError.textContent = "";
    genderError.textContent = "";
    mobileError.textContent = "";
    messageError.textContent = "";
    termsError.textContent = "";

    var valid = true;

    if (!name) {
        nameError.textContent = "Name is required";
        valid = false;
    }

    if (!email || !email.includes('@')) {
        emailError.textContent = "Email is required and Enter the valid email";
        valid = false;
    }

    if (!gender) {
        genderError.textContent = "Gender is required";
        valid = false;
    }

    if (!mobile) {
        mobileError.textContent = "Mobile Number is required";
        valid = false;
    }
    if (!message) {
        messageError.textContent = "Message is required";
        valid = false;
    }

    if (!terms) {
        termsError.textContent = "Accept terms & conditions";
        valid = false;
    }

    if (valid) {
        alert("Thanks for your response");
    }

});
var username = document.getElementById('name')
username.addEventListener('blur', function () {
    var name = this.value;
    var nameError = document.getElementById('nameerror');

    if (!name) {
        nameError.textContent = "Name is required";
    } else {
        nameError.textContent = "";
    }
});
var email = document.getElementById('email');
email.addEventListener('blur', function () {
    var email = this.value;
    var emailError = document.getElementById('emailerror');

    if (!email) {
        emailError.textContent = "Email is required";
    }
    else if (!email.includes('@')) {
        emailError.textContent = "Email a valid email";
    }
    else {
        emailError.textContent = "";
    }
});
var gender = document.getElementById('gender');
gender.addEventListener('blur', function () {
    var genderError = document.getElementById('gendererror');

    if (!this.value) {
        genderError.textContent = "Select gender";
    } else {
        genderError.textContent = "";
    }
});
var mobile = document.getElementById('mobile');
mobile.addEventListener('blur', function () {
    var mobile = this.value;
    var mobileError = document.getElementById('mobileerror');
    if (!mobile) {
        mobileError.textContent = "Mobile Number is required";
    } else {
        mobileError.textContent = "";
    }
});
var message = document.getElementById('message');
message.addEventListener('blur', function () {
    var message = this.value;
    var messageError = document.getElementById('messageerror');

    if (!message) {
        messageError.textContent = "Message is required";
    } else {
        messageError.textContent = "";
    }
});
var terms = document.getElementById('terms');
terms.addEventListener('change', function () {
    var termsError = document.getElementById('termserror');

    if (!this.checked) {
        termsError.textContent = "Accept terms & conditions";
    } else {
        termsError.textContent = "";
    }
});

function datetime() {
    var get_date_element = document.getElementById('date');
    var get_time_element = document.getElementById('time');
    var getdate = new Date().toLocaleDateString();
    var gettime = new Date().toLocaleTimeString();
    get_date_element.textContent = getdate;
    get_time_element.textContent = gettime;
}

setInterval(() => {
    datetime();
}, 1000);


function toggleskills() {
    var get_skills_element = document.getElementById('skills')
    var get_skill_button = document.getElementById('skillbutton')
    if (get_skills_element.style.display === "" || get_skills_element.style.display === "none") {
        get_skills_element.style.display = "block"
        get_skill_button.textContent = "Hide Skills"
    }
    else {
        get_skills_element.style.display = "none"
        get_skill_button.textContent = "Show Skills"
    }
}

function changeprofile() {
    var images = ['avatar.png', 'avatar1.jpg'];
    var random_number = Math.floor(Math.random() * 2);

    var get_avatarimage = document.getElementById('avatarimage');
    get_avatarimage.src = `./assets/${images[random_number]}`;

}

let dark = false;


function changemode() {
    var body_element = document.getElementById('body');
    var hero_element = document.getElementById('hero');
    var card_elements = document.getElementsByClassName('card');
    var dark_mode_button = document.getElementById('darkmodebutton');

    if (dark) {
        body_element.style.background = '#f4f6f8';
        hero_element.style.background = '';

        for (var i = 0; i < card_elements.length; i++) {
            card_elements[i].style.background = 'white';
            card_elements[i].style.color = 'black';
        }

        dark_mode_button.textContent = "Dark Mode";
        dark = false;

    } else {
        body_element.style.background = '#434347';
        hero_element.style.background = 'linear-gradient(45deg, #000000, #4c8d90)';

        for (var i = 0; i < card_elements.length; i++) {
            card_elements[i].style.background = '#4b4848';
            card_elements[i].style.color = 'white';
        }

        dark_mode_button.textContent = "Light Mode";
        dark = true;
    }
}