const password = document.querySelector('.error');
const passConfirm = document.querySelector('.error-conf');
const signUpForm = document.querySelector('.signup-form')
const passErrorDiv = document.querySelector('.passErrorDiv');
const passNoMatch = document.createElement('p');
passNoMatch.textContent = '*Passwords do not match';

passConfirm.addEventListener('change', () => {
    passValidation(password.value, passConfirm.value);
})

password.addEventListener('change', () => {
    passValidation(password.value, passConfirm.value);
})

function passValidation (passValue, confValue) {
    if (passValue !== confValue) {
        password.id = 'passNoMatchCSS';
        passConfirm.id = 'passNoMatchCSS';
        passErrorDiv.appendChild(passNoMatch);
    } else {
        passErrorDiv.removeChild(passNoMatch);
        password.id = '';
        passConfirm.id = '';
    }
}