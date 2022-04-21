const userName = document.querySelector('#name-input')
const nameOut = document.querySelector('#name-output')

userName.oninput = function () {
        if (userName.value === '') {
            nameOut.textContent = 'Anonymous';
        } else {
        nameOut.textContent = userName.value;
    }
}