const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

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

// Get the button
const backToTopBtn = document.getElementById("backToTopBtn");

// Show the button when scrolled down 100px
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Scroll back to the top when the button is clicked
backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});