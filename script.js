const password = document.querySelector('.error');
const passConfirm = document.querySelector('.error-conf');
const signUpForm = document.querySelector('.signup-form')
const passErrorDiv = document.querySelector('.passErrorDiv');
const passNoMatch = document.createElement('p');
passNoMatch.textContent = '*Passwords do not match';

passConfirm.addEventListener('change', () => {
    if (password.value !== passConfirm.value) {
        password.classList.add('passNoMatchCSS');
        passConfirm.classList.add('passNoMatchCSS');
        passErrorDiv.appendChild(passNoMatch);
    } else {
        signUpForm.removeChild(passNoMatch);
        password.classList.remove('passNoMatchCSS');
        passConfirm.classList.remove('passNoMatchCSS');
    }
})