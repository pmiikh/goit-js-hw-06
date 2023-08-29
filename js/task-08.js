const form = document.querySelector('.login-form');



form.addEventListener('submit', (event) => {
    event.preventDefault();

    const {
        elements: { email, password } } = event.currentTarget;
    
    if (email.value === '' || password.value === '') {
        alert("All fields must be filled in.");
        return;
    }
    const User = {
        email: email.value,
        password: password.value
    }

    console.log(User);
    form.reset();
});