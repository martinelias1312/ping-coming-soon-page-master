'use strict'

const email = document.querySelector('#email');
const form = document.querySelector('form');
const error = document.querySelector('.error');

function handleSubmit() {
    event.preventDefault();

    let regex = /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/i;

    if(email.value === "") {
        error.innerHTML = "Whoops! It looks like you forgot to add your email";
        error.classList.remove('hidden');
        email.style.borderColor = 'red';
        

    } else if(email.value !== "" && !regex.test(email.value)) {

        error.innerHTML = "Please provide a valid email adress";  
        
    } else {
        error.classList.add('hidden');
        email.style.borderColor = '';
        email.value = "";
        alert('Your email was sent succesfully!');
    }
}

form.addEventListener('submit', handleSubmit);