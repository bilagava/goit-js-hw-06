
const btnPlus = document.querySelector("[data-action='increment']");
const btnMinus = document.querySelector("[data-action='decrement']");
const counter = document.querySelector("#value");

let counterValue = 0;

const incrementEl = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};

const decrementEl = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};

btnPlus.addEventListener("click", incrementEl);
btnMinus.addEventListener("click", decrementEl);