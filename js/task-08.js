
const form = document.querySelector(".login-form");

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const userEmail = event.currentTarget.elements.email.value;
    const userPass = event.currentTarget.elements.password.value;
   
    formData.forEach((value, name) => {
        
        if (userEmail === '' || userPass === '') {
            alert('Все поля должны быть заполнены');
            return
        } 
        console.log({ name, value });
        event.currentTarget.reset();  
    });   
}



