let value_input = document.querySelector(".input_button");
let button = document.querySelector(".button_add");
let list_todo = document.querySelector(".list_todo");
value_input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addtodo();
  }
});
button.addEventListener("click", addtodo);

function addtodo() {
  const value = value_input.value;
  const li_list = document.createElement("li");
  li_list.innerHTML = `
  <span>${value}</span><i class="fa-solid fa-trash-can"></i>
  `;

  // li_list.addEventListener("click", () => {
  //   li_list.classList.toggle("complete");
  //   console.log(list_todo.innerHTML);
  // });
  list_todo.appendChild(li_list);
  value_input.value = "";
  savedata();
}
list_todo.addEventListener("click", (e) => {
  // if ((e.target.tagName = "i")) {
  //   // e.target.parentElement.remove();
  //   console.log("i");
  // } else
  if (e.target.tagName === "I") {
    {
      e.target.parentElement.remove();
    }
  } else if (e.target.tagName === "LI") {
    console.log("haha");
    e.target.classList.toggle("complete");
  }
  savedata();
});
function savedata() {
  localStorage.setItem("data", list_todo.innerHTML);
}
function setdata() {
  list_todo.innerHTML = localStorage.getItem("data");
}
setdata();
