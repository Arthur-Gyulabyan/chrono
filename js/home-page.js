// Change landing image
const landingImg = document.querySelectorAll('.landing-img');
const dots = Array.from(document.querySelectorAll('.dot'));

const changeImage = (event) => {
    const currentImg = document.querySelector('.current-landing'); // Current visible image
    const activeDot = document.querySelector('.active-dot'); // Current active dot

    currentImg.classList.add('prev-landing');
    currentImg.classList.remove('current-landing');
    landingImg[dots.indexOf(event.target)].classList.add('current-landing');

    activeDot.classList.remove('active-dot');
    event.target.classList.add('active-dot'); // Target dot becomes active

    setTimeout(() => {
        // Class name will be removed when the sliding animation is over.
        currentImg.classList.remove('prev-landing');
    }, 500);
};

dots.forEach(el => {
    el.addEventListener('click', changeImage);
});


function changeImageInterval() {
    const currentImg = document.querySelector('.current-landing');
    const activeDot = document.querySelector('.active-dot');

    currentImg.classList.add('prev-landing');
    currentImg.classList.remove('current-landing');

    if (currentImg.nextElementSibling) {
        currentImg.nextElementSibling.classList.add('current-landing');
    } else {
        // If the current image is the last one.
        landingImg[0].classList.add('current-landing');
    }

    activeDot.classList.remove('active-dot');

    if (activeDot.nextElementSibling) {
        activeDot.nextElementSibling.classList.add('active-dot');
    } else {
        // If the active dot is the last one.
        dots[0].classList.add('active-dot');
    }

    setTimeout(() => {
        // Class name will be removed when the sliding animation is over.
        currentImg.classList.remove('prev-landing');
    }, 500);
}

setInterval(() => {
    changeImageInterval();
}, 4000);



