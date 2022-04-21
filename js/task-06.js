const inputEl = document.getElementById("validation-input");

const totalLenght = inputEl.getAttribute("data-length");
const intTotalLenght = parseInt(totalLenght, 10);

inputEl.oninput = function() {
    if (inputEl.value.length === intTotalLenght) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    } else if (inputEl.value.length === 0) {
        inputEl.classList.remove("valid");
        inputEl.classList.remove("invalid");
    } else {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
    }
};

