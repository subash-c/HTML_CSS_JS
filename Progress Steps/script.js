let currentActive = 1;
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive >= circles.length) {
    currentActive = circles.length;
    next.disabled = true;
  }
  update();
  prev.disabled = false;
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive === 1) {
    currentActive = 1;
    prev.disabled = true;
  }
  next.disabled = false;
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const active = document.querySelectorAll(".active");
  progress.style.width =
    ((active.length - 1) / (circles.length - 1)) * 100 + "%";
}
