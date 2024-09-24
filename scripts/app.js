//Variables
const password = document.querySelector('#password')
const icon = document.querySelector('.bi-eye-fill')

//Events
icon.addEventListener('click', () => {
    if(password.type === 'password'){
        password.type = 'text'
        icon.classList.remove('bi-eye-fill')
        icon.classList.add('bi-eye-slash-fill')
    }
    else{
        password.type = 'password'
        icon.classList.remove('bi-eye-slash-fill')
        icon.classList.add('bi-eye-fill')
    }
})