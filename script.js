const password = document.querySelector('.passJS');
const passConfirm = document.querySelector('.pass-confJS');
const signUpForm = document.querySelector('.signup-form')
const passNoMatch = document.createElement('p');
passNoMatch.textContent = '*Passwords do not match';

passConfirm.addEventListener('change', () => {
    if (password.value !== passConfirm.value) {
        password.classList.add('passNoMatchCSS');
        passConfirm.classList.add('passNoMatchCSS');
        signUpForm.appendChild(passNoMatch);
        console.log(password.value);
        console.log(passConfirm.value);
    } else {
        signUpForm.removeChild(passNoMatch);
        password.classList.remove('passNoMatchCSS');
        passConfirm.classList.remove('passNoMatchCSS');
    }
})