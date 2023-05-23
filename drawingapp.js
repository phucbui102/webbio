let canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const draw = (e) => {
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
};
canvas.addEventListener("mousemove", draw);
