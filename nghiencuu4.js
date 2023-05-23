// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   slideIndex += n;
//   showDivs(slideIndex);
//   //   console.log(slideIndex);
// }

// function showDivs(nslideIndex) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (nslideIndex > x.length) {
//     slideIndex = 1;
//   }
//   if (nslideIndex < 1) {
//     slideIndex = x.length;
//   }
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex - 1].style.display = "block";
// }

// let images = document.querySelectorAll(".mySlides");
// let index = 0;
// console.log(images);
// show(index);
// function show(index) {
//   for (let i = 0; i < images.length; i++) {
//     images[i].style.display = "none";
//   }
//   images[index].style.display = "block";
// }
// function plusDivs() {
//   index++;

//   if (index >= images.length) {
//     index = 0;
//   }
//   console.log(index);
//   show(index);
// }

let listimg = document.querySelectorAll(".container_img .mySlides");
let listdot = document.querySelectorAll(".hienthi .mySlides");
let buttonleft = document.querySelector(".left");
let buttonright = document.querySelector(".right");
let index = 0;
let length = listdot.length - 1;
console.log(listdot);
function show() {
  for (let index = 0; index < listdot.length; index++) {
    listdot[index].style.display = "none";
  }
  listdot[index].style.display = "block";
}
// show();
// buttonright.addEventListener("click", () => {
//   index++;
//   if (index > length) {
//     index = 0;
//   }
//   show();
// });
// buttonleft.addEventListener("click", () => {
//   index--;
//   if (index < 0) {
//     index = length;
//   }
//   show();
// });

listimg.forEach((element, indexs) => {
  element.addEventListener("click", () => {
    index = indexs;
    show();
  });
});

show();
function increase() {
  index++;
  if (index > length) {
    index = 0;
  }
  show();
  // setTimeout(increase, 2000);
}

function autoslideshow() {
  console.log(index);
  show();
  console.log(index);
  if (index < length) index++;
  else {
    index = 0;
  }
  console.log(index);

  // show();
  // setTimeout(autoslideshow, 2000);
}
// autos = sessionStorage(increase.)
function reduce() {
  console.log(index);
  index--;
  console.log(index);
  console.log(index);
  if (index < 0) {
    index = length;
  }
  show();
}

// autoslideshow();
// function autoslideshow() {
//   show();
//   if (index < length) index++;
//   else {
//     index = 0;
//   }
//   // show();
//   setTimeout(autoslideshow, 2000);
// }
// let length = listimg.length - 1;
// let srcimg;
// buttonright.addEventListener("click", () => {
//   //xóa class
//   listimg.forEach((element) => {
//     element.classList.remove("active");
//   });
//   listdot.forEach((element) => {
//     element.classList.remove("active");
//   });

//   //them class
//   index++;
//   if (index > length) {
//     index = 0;
//   }
//   listimg[index].classList.add("active");
//   listdot[index].classList.add("active");
// });

// listimg.forEach((haha, indexs) => {
//   haha.addEventListener("click", () => {
//     index = indexs;
//     listimg.forEach((element) => {
//       element.classList.remove("active");
//     });
//     listdot.forEach((element) => {
//       element.classList.remove("active");
//     });
//     listimg[indexs].classList.add("active");
//     listdot[index].classList.add("active");
//   });
//   //xóa class
// });

// cách 2  ;

// buttonright.addEventListener("click", () => {
//   index++;
//   if (index > length) {
//     index = 0;
//   }
//   listimg[index].classList.add("active");
// });
// buttonright.addEventListener("click", () => {
//   listimg.forEach((element) => {
//     element.classList.remove("active");
//   });
// });
// nghịch nút bấm
let link = document.querySelector(".img1");
let button_bam = document.querySelector(".button_bam");
button_bam.addEventListener("click", () => {
  var imgs = document.createElement("img");
  imgs.src = link;
  document.querySelector(".container").appendChild(link);
});
