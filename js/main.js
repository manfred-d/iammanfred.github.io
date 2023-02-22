/*------------nav ---------- */
function navToggle() {
  const open = document.querySelector(".humberger-btn");
  const close = document.querySelector(".close-nav-menu");
  const nav = document.querySelector(".nav-menu");
  const body = document.querySelector("body");

  nav.classList.toggle("active");
  body.classList.toggle("active");
}
/*------about section ---------*/
(() => {
  const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

  tabsContainer.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("tab-item") &&
      !event.target.classList.contains("active")
    ) {
      const target = event.target.getAttribute("data-target");
      // deactivaate existing  active tab
      tabsContainer
        .querySelector(".active")
        .classList.remove("outer-shadow", "active");
      //activate new tab
      event.target.classList.add("active", "outer-shadow");
      // deactivate existing active tab-content
      aboutSection
        .querySelector(".tab-content.active")
        .classList.remove("active");
      //activate new tab-content
      aboutSection.querySelector(target).classList.add("active");
    }
  });
})();
/*--------------end of about section----*/

// -------------portfolio section --------------
(() => {
  const PortfolioSection = document.querySelector(".portfolio-section"),
    filteritem = document.querySelector(".portfolio-filter");

  filteritem.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("filter-item") &&
      !e.target.classList.contains("active")
    ) {
      const target = e.target.getAttribute("data-target");

      // deactivate existing active tab
      PortfolioSection.querySelector(".active").classList.remove(
        "active",
        "outer-shadow"
      );
      // activate new tab
      e.target.classList.add("active", "outer-shadow");
    }
  });
})();

// ===========portfolio popup======//

document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("view-project") ||
    e.target.classList.contains("pp_close") ||
    e.target.classList.contains("pp_inner")
  ) {
    toggleportfoliopopup();
    portfoilioDetails(e.target.parentElement);
    console.log(e.target.parentElement);
  }
});
function toggleportfoliopopup() {
  document.querySelector(".portfolio_popup").classList.toggle("open");
  document.body.classList.toggle("active");
}

function portfoilioDetails(portfolioItem) {
  document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(
    ".portfolio-item-img img"
  ).src;
  document.querySelector(".pp_body h3").innerHTML = portfolioItem.querySelector(
    ".portfolio-item-title h5"
  ).innerHTML;
  document.querySelector(".pp_body .description p").innerHTML =
    portfolioItem.querySelector(
      ".portfolio-item-details .description p"
    ).innerHTML;
  document.querySelector(".pp_body .general_info").innerHTML =
    portfolioItem.querySelector(".portfolio-item-details .info").innerHTML;
}

// ==========portfolio popup end =====//

//  -----------testimonial slider -------
(() => {
  const sliderContainer = document.querySelector(".testi-slider-container"),
    slides = sliderContainer.querySelectorAll(".testi-item"),
    sliderWidth = sliderContainer.offsetWidth,
    prevbtn = document.querySelector(".testi-slider-nav .prev"),
    nextBtn = document.querySelector(".testi-slider-nav .next");
  let slidesIndex = 0;

  // set width of slides
  slides.forEach((slide) => {
    slide.style.width = sliderWidth + "px";
  });
  // set width of container
  sliderContainer.style.width = sliderWidth * slides.length + "px";

  nextBtn.addEventListener("click", () => {
    if (slidesIndex === slides.length - 1) {
      slidesIndex = 0;
    } else {
      slidesIndex++;
    }
    slider();
  });
  prevbtn.addEventListener("click", () => {
    if (slidesIndex === 0) {
      slidesIndex = slides.length - 1;
    } else {
      slidesIndex--;
    }
    slider();
  });
  function slider() {
    sliderContainer.style.marginLeft = -(sliderWidth * slidesIndex) + "px";
    loop: true;
  }
})();

/* =========== change themes ===== */

const dayNight = document.querySelector(".darklight");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-moon");
  dayNight.querySelector("i").classList.toggle("fa-sun");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
