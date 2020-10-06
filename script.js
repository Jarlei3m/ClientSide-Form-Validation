const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const pwCheck = document.getElementById('pw-check');

const form = document.getElementById('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkBlankFields();
    allCorrectMsg();
    setTimeout(removeCorrectMsg, 6000);
});

function checkBlankFields() {
    const userNameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const pwCheckValue = pwCheck.value.trim();

    //Username check
    if(userNameValue === "") {

        errorMessage(username, 'Username cannot be blank!');
    } else {
        successMessage(username);
    };

    // Email check
    if(emailValue === "") {

        errorMessage(email, 'Email cannot be blank!');
    } else if(!isEmail(emailValue)){
        errorMessage(email, 'Invalid email format!');
    } else {
        successMessage(email);
    };

    // Password check
    if(passwordValue === "") {
        errorMessage(password, 'Password cannot be blank!');
    } else if(passwordValue.length < 5) {
        errorMessage(password, 'Password must have 5 or more character!');
    } else {
        successMessage(password);
    };

    // pwCheck check
    if(pwCheckValue === "") {
        errorMessage(pwCheck, 'Password check cannot be blank!');
    } else if (pwCheckValue !== passwordValue) {
        errorMessage(pwCheck, 'Passwords doesn´t match!')
    } else if (pwCheckValue.length < 5) {
        errorMessage(pwCheck, 'Password must have 5 or more character');
    } else {
        successMessage(pwCheck);
    }
}

function errorMessage(input, message) {
    const fieldControl = input.parentElement;
    const small = fieldControl.querySelector('small');

    fieldControl.className = 'field error';
    small.innerText = message;
};

function successMessage(input) {
    const fieldControl = input.parentElement;
    const small = fieldControl.querySelector('small');

    fieldControl.className = 'field success'
}

function isEmail(emailValue) {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!emailValue.match(mailFormat)) {
        return false;
    } else {
        return true;
    }
}

function allCorrectMsg() {
    let allSuccess = document.getElementsByClassName('field success');
    
    if (allSuccess.length === 4) {
        const finalSuccessMessage = document.getElementById('success-message'); 

        finalSuccessMessage.classList.add('show');
    }
}

function removeCorrectMsg() {
    const finalSuccessMessage = document.getElementById('success-message');

    finalSuccessMessage.classList.remove('show');

}
