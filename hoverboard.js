let container = document.querySelector(".container");
let child_div = document.querySelector(".child_div");
let listcolor = ["#F0FF42", "#9CFF2E", "#31E1F7", "#FF1E1E", "#D800A6"];
for (let index = 0; index < 400; index++) {
  const div = document.createElement("div");
  div.classList.add("child_div");
  div.addEventListener("mouseover", () => setcolor(div));
  div.addEventListener("mouseout", () => removecolor(div));
  console;
  container.appendChild(div);
}
console.log(listcolor[0]);
function setcolor(element) {
  const color = randomcolor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removecolor(element) {
  element.style.backgroundColor = "rgb(23, 23, 23)";
  element.style.boxShadow = "none";
}
function randomcolor() {
  const index = Math.floor(Math.random() * listcolor.length);
  return listcolor[index];
}
