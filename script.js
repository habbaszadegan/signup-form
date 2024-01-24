const password = document.querySelector('#passJS');
const passConfirm = document.querySelector('#pass-confJS');

if (password.value !== passConfirm.value) {
    password.classList.add('passNoMatch');
    passConfirm.classList.add('passNoMatch');
    const passNoMatch = document.createElement('p');
    passNoMatch.textContent = '*Passwords do not match'
    password.appendChild(p);
} else {
    password.removeChild(p);
}

