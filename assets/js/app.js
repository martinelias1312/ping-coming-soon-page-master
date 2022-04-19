'use strict'

const email = document.querySelector('#email');
const form = document.querySelector('form');
const error = document.querySelector('.error');

function handleSubmit() {
    event.preventDefault();

    let regex = /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/i;

    if(regex.test(email.value)) {

        error.classList.add('hidden');
        email.style.borderColor = '';
        alert('Your email was sent succesfully!');

    } else {

        error.classList.remove('hidden');
        email.style.borderColor = 'red';

    }
}

form.addEventListener('submit', handleSubmit);