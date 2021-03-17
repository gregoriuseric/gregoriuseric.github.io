document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY >= 80) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  $(".skill-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
