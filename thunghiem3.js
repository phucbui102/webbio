// console.log("haha hahah");
// let increasebtn = document.querySelector("#button-increase");
// let decreasebtn = document.querySelector("#button-decrease");
// let couterbtn = document.querySelector(".couter");
// let resetbtn = document.querySelector("#button-reset");
// let count = 0;
// increasebtn.addEventListener("click", () => {
//   count++;
//   couterbtn.innerHTML = count;
// });
// decreasebtn.addEventListener("click", () => {
//   count--;
//   couterbtn.innerHTML = count;
// });

// resetbtn.addEventListener("click", () => {
//   count = 0;
//   couterbtn.innerHTML = count;
// });
// function ValidateEmail(mail) {
//   if (
//     /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)
//   ) {
//     return true;
//   }
//   alert("You have entered an invalid email address!");
//   return false;
// }

//drag
let src = null;
let haha = document.querySelector(".phucnha").src;
let imshaha = document.querySelector(".phucnha");
function drag(e) {
  // src = e.target.src;
  src = haha;
  console.log(src);
}

function drop(event) {
  var img = document.createElement("img");
  img.src = src;
  document.querySelector(".chua").appendChild(img);
  imshaha.remove();
}

function allowdrop(event) {
  event.preventDefault();
}
