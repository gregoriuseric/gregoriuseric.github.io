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

  // GSAP
  gsap.from(".home-animate", {
    y: 100,
    duration: 1.2,
    opacity: 0,
    stagger: 0.3,
  });

  gsap.from(".img-home", {
    x: 100,
    duration: 1.2,
    opacity: 0,
  });

  gsap.from(".about-animate", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 100%",
    },
    y: 100,
    duration: 1.2,
    opacity: 0,
    stagger: 0.3,
  });

  gsap.from(".img-about", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 100%",
    },
    x: -100,
    duration: 1.2,
    opacity: 0,
  });

  gsap.from(".skill-header-animate", {
    scrollTrigger: {
      trigger: "#skills",
      start: "top 80%",
    },
    y: -100,
    duration: 1.2,
    opacity: 0,
  });

  gsap.from(".skill-item", {
    scrollTrigger: {
      trigger: "#skills",
      start: "top 80%",
    },
    y: 100,
    duration: 1.2,
    opacity: 0,
    stagger: 0.3,
  });

  gsap.from(".contact-header", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
    },
    y: -100,
    duration: 1.2,
    opacity: 0,
  });

  gsap.from(".contact-info", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
    },
    x: -100,
    duration: 1.2,
    opacity: 0,
  });

  gsap.from(".contact-form", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
    },
    x: 100,
    duration: 1.2,
    opacity: 0,
  });
});
