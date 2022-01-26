const form = document.getElementById('form');
const fullName = document.getElementById('full-name');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    const fullNameValue = fullName.value.trim();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if(fullNameValue === '') {
        setErrorFor(fullName, 'Full name cannot be blank');
    } else {
        setSuccesFor(fullName);
    }

    if(usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccesFor(username);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccesFor(email);
    }

    if(phoneValue === '') {
        setErrorFor(phone, 'Phone number cannot be blank');
    } else if(!isPhone(phoneValue)) {
        setErrorFor(phone, 'Phone number must be numeric')
    } else {
        setSuccesFor(phone);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccesFor(password);
    }

    if(confirmPasswordValue === '') {
        setErrorFor(confirmPassword, 'Confirm password cannot be blank');
    } else {
        setSuccesFor(confirmPassword);
    }
}

function setErrorFor(input, message) {
    const inputBox = input.parentElement;
    const small = inputBox.querySelector('small');

    small.innerText = message;

    inputBox.className = 'input-box error'
}

function setSuccesFor(input) {
    const inputBox = input.parentElement;
    inputBox.className = 'input-box'
}

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        .test(email);
}

function isPhone(phone) {
    return /^\d+$/.test(phone);
}