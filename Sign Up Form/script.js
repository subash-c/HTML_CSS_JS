const left_side = document.querySelector(".left-side");
const open = document.querySelector(".open");
const submit = document.querySelector(".submit");
open.addEventListener("click", update);

submit.addEventListener("click", update);

function update() {
  let bool = left_side.classList.toggle("active");
  if (bool) open.innerText = "Close";
  else open.innerText = "Sign Up";
}
