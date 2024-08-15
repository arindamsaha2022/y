let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () =>{
  let top =window.scrollY;
  let offset = sec.offsetTop - 150;
  let height = sec.offsetHeight;
  let id = sec.getAttribute('id')

  if (top>= offset && top <offset + height){
    navLinks.forEach(links => {
      links.classList.remove('active'); 
      document .querySelector('header nav a [href*=' + id + ']').classList.add('active')
    })
  }
}


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav__link');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('hide');
    });
});




document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector(".slider");
  const items = document.querySelectorAll(".item");
  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");
  let currentIndex = 0;

  function updateSlider() {
      const offset = -currentIndex * 100;
      slider.style.transform = `translateX(${offset}%)`;
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
