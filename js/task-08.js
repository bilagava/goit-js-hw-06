
const form = document.querySelector(".login-form");

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const userEmail = event.currentTarget.elements.email.value;
    const userPass = event.currentTarget.elements.password.value;

        if (userEmail === '' || userPass === '') {
            return alert('Все поля должны быть заполнены');
        } 
    console.log({ userEmail, userPass });
    form.reset();   
}



