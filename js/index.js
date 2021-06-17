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
        modal.style.display = "none";
    }
});

closeBtn.addEventListener('click', (event) => {
    modal.style.display = "none";
});

