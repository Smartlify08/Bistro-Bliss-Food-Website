const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
console.log(navbar);
console.log(burger);
burger.addEventListener("click", () => {
  navbar.classList.toggle("active");

  burger.classList.toggle("rotate");
});
document.body.addEventListener("resize", () => {
  console.log("resized");
});

if (
  document.title === "Bistro Bliss | Home" ||
  document.title === "Bistro Bliss | About"
) {
  if (document.body.clientWidth < 767) {
    const testimonials = document.querySelectorAll(".testimonial");
    const arrowUp = document.querySelector(".fa-arrow-up");
    const arrowDown = document.querySelector(".fa-arrow-down");
    console.log(arrowUp);
    console.log(testimonials);
    let currentSlide = 0;
    let maxSlide = testimonials.length - 1;
    arrowDown.addEventListener("click", () => {
      if (currentSlide === maxSlide) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }
      testimonials.forEach((testimonial, index) => {
        testimonial.style.transform = `translateY(-${
          index + currentSlide * 100
        }%)`;
      });
    });

    arrowUp.addEventListener("click", () => {
      if (currentSlide === 0) {
        currentSlide = maxSlide;
      } else {
        currentSlide--;
      }
      testimonials.forEach((testimonial, index) => {
        testimonial.style.transform = `translateY(-${
          index + currentSlide * 100
        }%)`;
      });
    });
  } else {
    const testimonials = document.querySelectorAll(".testimonial");
    const arrowLeft = document.querySelector(".fa-arrow-left");
    const arrowRight = document.querySelector(".fa-arrow-right");
    console.log(arrowLeft);
    console.log(testimonials);
    let currentSlide = 0;
    let maxSlide = testimonials.length - 1;
    arrowRight.addEventListener("click", () => {
      if (currentSlide === maxSlide) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }
      testimonials.forEach((testimonial, index) => {
        testimonial.style.transform = `translateX(-${
          index + currentSlide * 100
        }%)`;
      });
    });

    arrowLeft.addEventListener("click", () => {
      if (currentSlide === 0) {
        currentSlide = maxSlide;
      } else {
        currentSlide--;
      }
      testimonials.forEach((testimonial, index) => {
        testimonial.style.transform = `translateX(-${
          index + currentSlide * 100
        }%)`;
      });
    });
  }
}
