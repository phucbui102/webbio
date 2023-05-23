let value = document.querySelector(".content");
let increase = document.querySelector(".increase");
let decrease = document.querySelector(".decrease");
let container_button_reset = document.querySelector(".container_button-reset");
let count = 0;
function incrvalue() {
  count++;
  value.innerText = count;
}
function decrvalue() {
  count--;
  value.innerText = count;
}
function reset() {
  count = 0;
  value.innerText = count;
}
