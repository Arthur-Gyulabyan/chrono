function changeImage() {
    const landingImg = document.getElementById('landing');
    if (!landingImg) {
        return;
    }

    let counter = 2;

    setInterval(() => {
        landingImg.src = `./img/landing/landing${counter++}.jpg`;

        if (counter === 6) {
            counter = 1;
        }
    }, 4000);
}

changeImage();

// Setting query string as search value
const searchBtn = document.getElementById('search-btn');
const searchField = document.getElementById('search-input');

function getQuerySearchValue() {
    const queryString = window.location.search.slice(1);
    const values = queryString.split('&');
    let searchValue = '';

    values.forEach(el => {
        const pair = el.split('=');
        if (pair[0] === 'search') {
            searchValue = pair[1];
        }
    });

    return searchValue === '' ? null : searchValue;
}

searchBtn.addEventListener('click', () => {
    window.location.search = `search=${searchField.value}`;
});

searchField.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        console.log('asd');
        window.location.search = `search=${searchField.value}`;
    }
});

window.addEventListener('load', () => {
    const searchValue = getQuerySearchValue();

    if (searchValue) {
        searchField.value = searchValue;
    }
});


// Sign up modal
const signUpBtn = document.querySelector('.btn_sign-in');
const modal = document.getElementById('sign-up-modal');
const closeBtn = document.querySelector('.close');

signUpBtn.addEventListener('click', (event) => {
    modal.style.display = 'block';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

closeBtn.addEventListener('click', (event) => {
    modal.style.display = 'none';
});


// Sign up form validation
const firstNameField = document.querySelector('#first-name');
const firstNameMessage = document.querySelector('#first-name-message');
const lastNameField = document.querySelector('#last-name');
const lastNameMessage = document.querySelector('#last-name-message');
const emailField = document.querySelector('#email');
const emailMessage = document.querySelector('#email-message');
const pswField = document.querySelector('#psw');
const pswMessage = document.querySelector('#psw-message');

const isInvalidName = (name) => {
    const regEx = /[^a-zA-z]/;

    return regEx.test(name) || name.length < 2;
};

const isInvalidLastName = (lastName) => {
    const regEx = /[^a-zA-z]/;

    return regEx.test(lastName) || lastName.length < 4;
};

const isValidEmail = (email) => {
    const regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return regEx.test(email);
};

const isValidPsw = (psw) => {
    const regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    return psw.match(regEx);
};

firstNameField.addEventListener('input', (event) => {
    const name = event.target.value;

    if (isInvalidName(name)) {
        firstNameField.classList.remove('valid');
        firstNameField.classList.add('invalid');
        firstNameMessage.textContent = 'At least 2 characters. Only letters.';
        firstNameMessage.style.visibility = 'visible';
        firstNameMessage.classList.remove('validation-message-valid');
    } else {
        firstNameField.classList.remove('invalid');
        firstNameField.classList.add('valid');
        firstNameMessage.textContent = 'Name is valid!';
        firstNameMessage.classList.add('validation-message-valid');
    }
});

lastNameField.addEventListener('input', (event) => {
    const lastName = event.target.value;

    if (isInvalidLastName(lastName)) {
        lastNameField.classList.remove('valid');
        lastNameField.classList.add('invalid');
        lastNameMessage.textContent = 'At least 4 characters. Only letters.';
        lastNameMessage.style.visibility = 'visible';
        lastNameMessage.classList.remove('validation-message-valid');
    } else {
        lastNameField.classList.remove('invalid');
        lastNameField.classList.add('valid');
        lastNameMessage.textContent = 'Last name is valid!';
        lastNameMessage.classList.add('validation-message-valid');
    }
});

emailField.addEventListener('input', (event) => {
    const email = event.target.value;

    if (isValidEmail(email)) {
        emailField.classList.remove('invalid');
        emailField.classList.add('valid');
        emailMessage.textContent = 'Email is valid!';
        emailMessage.classList.add('validation-message-valid');
    } else {
        emailField.classList.remove('valid');
        emailField.classList.add('invalid');
        emailMessage.textContent = 'Invalid Email!';
        emailMessage.style.visibility = 'visible';
        emailMessage.classList.remove('validation-message-valid');
    }
});

pswField.addEventListener('input', (event) => {
    const psw = event.target.value;

    if (isValidPsw(psw)) {
        pswField.classList.remove('invalid');
        pswField.classList.add('valid');
        pswMessage.textContent = 'Password is valid!';
        pswMessage.classList.add('validation-message-valid');
    } else {
        pswField.classList.remove('valid');
        pswField.classList.add('invalid');
        pswMessage.textContent = '6 - 20 characters (1 digit, 1 uppercase, 1 lowercase).';
        pswMessage.style.visibility = 'visible';
        pswMessage.classList.remove('validation-message-valid');
    }
});
