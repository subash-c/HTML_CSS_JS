const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", update);
update();

function update() {
  const trigger = (window.innerHeight / 5) * 3.5;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    console.log(boxTop);
    if (boxTop < trigger) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
