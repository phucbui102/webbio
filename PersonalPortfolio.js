let Circular_Progress = document.querySelector(".Circular_Progress");
let cr_p_value = document.querySelector(".cr_p_value");
let nar_menu = document.querySelector(".nav");
let iconmenu = document.querySelector(".fa-bars");
let dvl = document.querySelector(".dvl::after");
// dvl.style.backgroundcolor = "red";
let starvalue = 0;
let endvalue = 50;
var string = "this is a string";
let autoincreace = setInterval(() => {
  if (starvalue < endvalue) {
    starvalue++;
    console.log(starvalue);
    Circular_Progress.style.background = `conic-gradient(blue ${
      starvalue * 3.6
    }deg, #fff 0deg)`;
    cr_p_value.innerText = `${starvalue}%`;
  }
}, 70);

// butbon menu

let button_menu = document.querySelector(".fa-solid");
button_menu.addEventListener("click", () => {
  nar_menu.classList.toggle("active");
  iconmenu.classList.toggle("fa-xmark");
});

// night theme

let night_theme_button = document.querySelector(".fa-moon");
let contrainer = document.querySelector(".container");
night_theme_button.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
// continue

let textarea = document.querySelector(".content_input_comment textarea");
let from_input_comment = document.querySelector(".form");
// show input from comment
textarea.addEventListener("focus", () => {
  from_input_comment.classList.add("show_inputcomment");
});
// hitden input from comment
let button_from_comment = document.querySelector(".name_input button");
let list_comment = document.querySelector(".list_comment");
let name_input = document.querySelector(".name_input input");
button_from_comment.addEventListener("click", () => {
  from_input_comment.classList.remove("show_inputcomment");
  // add comment to list comment
  var node = document.createElement("li");
  node.classList.add("li_comment");
  node.innerHTML = `<div class="comment_header">
  <img src="image/avtnha.jpg" alt="" />
  <div class="name">${name_input.value}</div>
</div>
<div class="comment_content">
  ${textarea.value}
</div>
<div class="reply_like_and_dislike">
  <p >Trả lời</p>
  <div class="like">
    <p>Thích</p>
    <i class="fa-regular fa-thumbs-up"></i>
  </div>
  <div class="dislike">
    <p>Không thích</p>
    <i class="fa-regular fa-thumbs-down"></i>
  </div>`;
  let button_dislike = node.querySelector(
    ".reply_like_and_dislike .dislike i "
  );
  let button_like = node.querySelector(".reply_like_and_dislike .like i ");
  console.log(button_dislike);
  console.log(button_like);
  button_like.addEventListener("click", () => {
    button_like.classList.toggle("fa-solid");
    button_dislike.classList.remove("fa-solid");
  });
  button_dislike.addEventListener("click", () => {
    button_dislike.classList.toggle("fa-solid");
    button_like.classList.remove("fa-solid");
  });
  list_comment.appendChild(node);
  textarea.value = "";
  name_input.value = "";

  // button_like.addEventListener("click", (e) => {
  //   if (e.target.tagName === "I") {
  //     console.log("clidfdsfck");
  //   }
  // });
});
// effect for like button and dislike button
