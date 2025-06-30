// Controls two carousel tracks simultaneously: one for text, one for images

const imageTrack = document.querySelector(".carousel-track.carousel-image");
const textTrack = document.querySelector(".carousel-track.carousel-text");

const imageSlides = Array.from(imageTrack.children);
const textSlides = Array.from(textTrack.children);

const nextButtons = document.querySelectorAll(".carousel-right");
const prevButtons = document.querySelectorAll(".carousel-left");

let currentIndex = 0;

function updateSlidePosition() {
  const imageSlideWidth = imageSlides[0].getBoundingClientRect().width;
  const textSlideWidth = textSlides[0].getBoundingClientRect().width;

  imageTrack.style.transform = `translateX(-${
    currentIndex * imageSlideWidth
  }px)`;
  textTrack.style.transform = `translateX(-${currentIndex * textSlideWidth}px)`;
}

prevButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlidePosition();
    }
  });
});

nextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentIndex < Math.min(imageSlides.length, textSlides.length) - 1) {
      currentIndex++;
      updateSlidePosition();
    }
  });
});

// Optional: maintain correct slide position on window resize
window.addEventListener("resize", updateSlidePosition);
