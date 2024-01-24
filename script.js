const password = document.querySelector('.passJS');
const passConfirm = document.querySelector('.pass-confJS');
const signUpForm = document.querySelector('.signup-form')
const passNoMatch = document.createElement('p');
passNoMatch.textContent = '*Passwords do not match';

password.addEventListener('input', () => {
    if (password.value !== passConfirm.value) {
        password.classList.add('passNoMatch');
        passConfirm.classList.add('passNoMatch');
        signUpForm.appendChild('passNoMatch');
    } else {
        signUpForm.removeChild('passNoMatch');
        password.classList.remove('passNoMatch');
        passConfirm.classList.remove('passNoMatch');
    }
})