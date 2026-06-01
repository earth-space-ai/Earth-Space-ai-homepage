const slides = Array.from(document.querySelectorAll(".slide"));
const counter = document.getElementById("slide-counter");
const progressBar = document.getElementById("progress-bar");
let current = 0;

function renderSlide(index) {
  current = Math.max(0, Math.min(index, slides.length - 1));
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === current);
  });
  counter.textContent = `${current + 1} / ${slides.length}`;
  progressBar.style.width = `${((current + 1) / slides.length) * 100}%`;
  document.title = `ESM-bench Slides - ${slides[current].dataset.title}`;
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
}

window.addEventListener("keydown", (event) => {
  if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(event.key)) {
    event.preventDefault();
    renderSlide(current + 1);
  }

  if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
    event.preventDefault();
    renderSlide(current - 1);
  }

  if (event.key === "Home") {
    event.preventDefault();
    renderSlide(0);
  }

  if (event.key === "End") {
    event.preventDefault();
    renderSlide(slides.length - 1);
  }

  if (event.key.toLowerCase() === "f") {
    event.preventDefault();
    toggleFullscreen();
  }
});

window.addEventListener("click", (event) => {
  if (event.target.closest("a, button")) {
    return;
  }
  renderSlide(current + 1);
});

renderSlide(0);
