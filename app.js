// Fetch data from data.json and display  in the html
const Menu = () => {
  if (document.title === "Bistro Bliss | Menu") {
    const cards_grid = document.querySelector(".cards-grid");

    const categories = document.querySelectorAll(".category");

    const fetchFoodItems = () => {
      fetch("data.json")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          categories.forEach((category) => {
            category.addEventListener("click", () => {
              const filteredData = data.filter((food) => {
                return category.innerText.toLowerCase() === food.category;
              });

              const filteredCards = filteredData
                .map(
                  (food) =>
                    `
            <div class="card">
            <img src =${food.image} alt=""/>
            <p class="price">$ ${food.price}</p>
            <p class="foodName">${food.foodName}</p>
            <p class="food-description">${food.foodDescription}</p>
            </div>
             `
                )
                .join("");
              cards_grid.innerHTML = filteredCards;

              if (category.innerText === "All") {
                data.forEach((food) => {
                  const allCards = data
                    .map(
                      (food) => `
        <div class="card">
          <img src =${food.image} alt=""/>
          <p class="price">$ ${food.price}</p>
          <p class="foodName">${food.foodName}</p>
          <p class="food-description">${food.foodDescription}</p>
        </div>
        `
                    )
                    .join("");
                  cards_grid.innerHTML = allCards;
                });
              }

              category.classList.add("active-category");
              toggleBtn(category);
            });
          });

          data.forEach((food) => {
            const card = `
        <div class="card">
          <img src =${food.image} alt=""/>
          <p class="price">$ ${food.price}</p>
          <p class="foodName">${food.foodName}</p>
          <p class="food-description">${food.foodDescription}</p>
        </div>
        `;
            cards_grid.innerHTML += card;
          });

          function toggleBtn(btn) {
            categories.forEach((category) => {
              if (category === btn) {
                category.classList.add("active-category");
              } else {
                category.classList.remove("active-category");
              }
            });
          }
        });
    };

    fetchFoodItems();
  }
};

// Validate form on submit

// Booking form
const BookingForm = () => {
  if (document.title === "Bistro Bliss | Book a table") {
    const form = document.querySelector("#booking-form");
    const submit_btn = document.querySelector("#booking_btn");
    const persons = document.querySelector("#persons");
    const inputs = document.querySelectorAll("input");

    submit_btn.addEventListener("click", (e) => {
      e.preventDefault();
      inputs.forEach((input) => {
        if (input.value === "") {
          input.style.border = "1.5px solid var(--red)";
          setTimeout(() => {
            input.style.border = "1px solid #dbdfd0";
          }, 3000);
        } else {
          input.style.border = "1px solid #dbdfd0";
          input.value = "";
        }
      });
    });
  }
};

//Contact Form
const ContactForm = () => {
  if (document.title === "Bistro Bliss | Contact") {
    const form = document.querySelector("#contact-form");
    const submit_btn = document.querySelector("#contact_btn");
    const inputs = document.querySelectorAll("input");

    submit_btn.addEventListener("click", (e) => {
      e.preventDefault();
      inputs.forEach((input) => {
        if (input.value === "") {
          input.style.border = "1.5px solid var(--red)";
          setTimeout(() => {
            input.style.border = "1px solid #dbdfd0";
          }, 3000);
        } else {
          input.style.border = "1px solid #dbdfd0";
          input.value = "";
        }
      });
    });
  }
};

const Blog = () => {
  if (document.title === "Bistro Bliss | Blogs") {
    // Get blogs grid
    const blogs_grid = document.querySelector(".blogs-grid");
    // Fetch data for articles an display
    const fetchArticles = () => {
      fetch("articles.json")
        .then((res) => res.json())
        .then((data) => {
          data.forEach((article) => {
            // Create article-card template
            const article_card = `
            <article class="article">
              <img src=${article.articleImage} alt=${article.articleTitle}>
              <div>
              <p class="date-published">${article.dateAdded}</p>
              <h3 class="article-title">${article.articleTitle}</h3>
              </div>

            </article>
          `;
            blogs_grid.innerHTML += article_card;
          });
        });
    };

    fetchArticles();
  }
};

// Todo: Refactor code and clean code
//Todo: create functions for each component and render in a a seperate app function

// Render every thing in the app
const app = () => {
  // Mobile Navbar
  const burger = document.querySelector(".burger");
  const navbar = document.querySelector(".navbar");
  burger.addEventListener("click", () => {
    navbar.classList.toggle("active");

    burger.classList.toggle("rotate");
  });

  // Testimonials
  if (
    document.title === "Bistro Bliss | Home" ||
    document.title === "Bistro Bliss | About"
  ) {
    if (document.body.clientWidth < 767) {
      const testimonials = document.querySelectorAll(".testimonial");
      const arrowUp = document.querySelector(".fa-arrow-up");
      const arrowDown = document.querySelector(".fa-arrow-down");
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

  // Food Items
  Menu();

  // Booking form

  BookingForm();

  // contact form
  ContactForm();

  // Blog

  Blog();
};

// Call app

app();
