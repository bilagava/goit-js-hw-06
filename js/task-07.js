const controlSize = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

controlSize.oninput = function() {
  text.style.fontSize = controlSize.value + "px";
};