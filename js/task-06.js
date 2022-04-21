let inputEl = document.getElementById("validation-input");

let totalLenght = inputEl.getAttribute("data-length");
let intTotalLenght = parseInt(totalLenght, 10);

inputEl.oninput = function() {
    if (inputEl.value.length === intTotalLenght) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
    } else {
      inputEl.classList.remove("valid"); 
      inputEl.classList.add("invalid");
  }
};

