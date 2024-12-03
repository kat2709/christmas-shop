const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".slider-container");
let position = 0;
let sliderMoved = 0;
const gap = 3;
const smallGap = 6;
let currentGap;
let sliderWidth;

function checksliderWidth() {
  if (sliderContainer.clientWidth > 1300) {
    sliderWidth = 2130;
  } else {
    sliderWidth = 2030;
  }
  checkWindowSize();
}

function checkWindowSize() {
  if (sliderContainer.clientWidth > 768) {
    currentGap = gap;
  }
  if (sliderContainer.clientWidth <= 768) {
    currentGap = smallGap;
  }
  sliderMoved = Math.round(
    (sliderWidth - sliderContainer.clientWidth) / currentGap
  );
}

checksliderWidth();
slider.style.left = `${position}px`;
let lastPosition = -Math.round(sliderMoved * currentGap);

arrowRight.addEventListener("click", () => {
  arrowLeft.classList.remove("inactive-btn");
  position -= sliderMoved;
  slider.style.left = `${position}px`;

  if (position <= lastPosition) {
    arrowRight.classList.add("inactive-btn");
  }
});

arrowLeft.addEventListener("click", () => {
  arrowRight.classList.remove("inactive-btn");
  position += sliderMoved;
  slider.style.left = `${position}px`;

  if (slider.style.left === "0px") {
    arrowLeft.classList.add("inactive-btn");
  }
});

window.addEventListener("resize", () => {
  position = 0;
  slider.style.left = `${position}px`;
  arrowLeft.classList.add("inactive-btn");
  arrowRight.classList.remove("inactive-btn");
  checksliderWidth();
  lastPosition = -Math.round(sliderMoved * currentGap);
});
