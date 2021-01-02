'use strict';

// notice toggle 기능
const bell = document.querySelector('.bell');

bell.addEventListener('click', notification);

function notification() {
    
    this.classList.toggle('on');

}