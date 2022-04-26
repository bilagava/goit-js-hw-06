const button = document.querySelector('.change-color')

const backgroundColor = document.querySelector('.color')

const bodyEl = document.querySelector("body");

button.addEventListener('click', getRandomHexColor)

function getRandomHexColor() {
  const newBackgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
  backgroundColor.textContent = newBackgroundColor;
  bodyEl.style.backgroundColor = newBackgroundColor;
}


