const carousel = document.querySelector("[data-carousel]");
const slides = carousel.querySelector("[data-slides]");

let currentIndex = 0;

function goToNextSlide() {
  const activeSlide = slides.querySelector("[data-active]");
  let newIndex = currentIndex + 1;

  if (newIndex >= slides.children.length) {
    newIndex = 0;
  }

  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;
  currentIndex = newIndex;
}
setInterval(goToNextSlide, 5000);


function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
    if (section) {
      const offset = -50; // Offset in pixels
      const sectionTop = section.offsetTop;
      const adjustedScrollPosition = sectionTop - offset;

      window.scrollTo({
        top: adjustedScrollPosition,
        behavior: 'smooth'
      });
    }
}

const backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});