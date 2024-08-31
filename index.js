let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')


document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector(".slider");
  const items = document.querySelectorAll(".item");
  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");
  let currentIndex = 0;

  function updateSlider() {
      const offset = -currentIndex * items[0].offsetWidth;
      slider.style.transform = `translateX(${offset}px)`;
  }

  function showNextSlide() {
      currentIndex = (currentIndex + 1) % items.length;
      updateSlider();
  }

  function showPrevSlide() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateSlider();
  }

  nextButton.addEventListener("click", showNextSlide);
  prevButton.addEventListener("click", showPrevSlide);

  setInterval(showNextSlide, 3000);

  window.addEventListener("resize", updateSlider);

  updateSlider();
});



const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.list');
hiddenElements.forEach((el) => observer.observe(el));
