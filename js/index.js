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
const firstNameFiled = document.querySelector('#first-name');
const firstNameMessage = document.querySelector('#first-name-message');
const lastNameFiled = document.querySelector('#last-name');
const lastNameMessage = document.querySelector('#last-name-message');

const isInvalidName = (name) => {
    const regEx = /[^a-zA-z]/;

    return regEx.test(name) || name.length < 2;
};

const isInvalidLastName = (lastName) => {
    const regEx = /[^a-zA-z]/;

    return regEx.test(lastName) || lastName.length < 4;
};

firstNameFiled.addEventListener('input', (event) => {
    const name = event.target.value;

   if(isInvalidName(name)) {
       firstNameFiled.classList.remove('valid');
       firstNameFiled.classList.add('invalid');
       firstNameMessage.textContent = 'At least 2 characters. Only letters.';
       firstNameMessage.style.visibility = 'visible';
       firstNameMessage.classList.remove('validation-message-valid');
   } else {
       firstNameFiled.classList.remove('invalid');
       firstNameFiled.classList.add('valid');
       firstNameMessage.textContent = 'Name is valid!';
       firstNameMessage.classList.add('validation-message-valid');
   }
});

lastNameFiled.addEventListener('input', (event) => {
    const lastName = event.target.value;

    if(isInvalidLastName(lastName)) {
        lastNameFiled.classList.remove('valid');
        lastNameFiled.classList.add('invalid');
        lastNameMessage.textContent = 'At least 4 characters. Only letters.';
        lastNameMessage.style.visibility = 'visible';
        lastNameMessage.classList.remove('validation-message-valid');
    } else {
        lastNameFiled.classList.remove('invalid');
        lastNameFiled.classList.add('valid');
        lastNameMessage.textContent = 'Last name is valid!';
        lastNameMessage.classList.add('validation-message-valid');
    }
});
