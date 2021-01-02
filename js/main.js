'use strict';

// click event - notice toggle
const bell = document.querySelector('.bell');

bell.addEventListener('click', notification);

function notification() {

    this.classList.toggle('on');
} 

// scroll event
function scrollFunc() {
    console.log(pageYOffset);
}

window.addEventListener('scroll', scrollFunc);
