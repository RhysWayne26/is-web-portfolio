document.addEventListener("DOMContentLoaded", function () {
  gsap.timeline({ delay: 1 })
    .fromTo(".profile__photo",
      { opacity: 0, y: 30 },
      { duration: 1, opacity: 1, y: 0, ease: "power2.out" }
    )
    .from(".intro__line", { duration: 1.5, y: -50, opacity: 0, ease: "power2.out" }, "-=0.5");

  const navItems = document.querySelectorAll(".intro__pages__nav__item");
  const activeItem = document.querySelector(".intro__pages__nav__item.active");

  if (activeItem) {
    gsap.from(activeItem, {
      duration: 1,
      y: 20,
      opacity: 0,
      ease: "power2.out",
      delay: 0.5,
    });
  }

  const otherNavItems = [...navItems].filter((item) => item !== activeItem);
  if (otherNavItems.length > 0) {
    gsap.from(otherNavItems, {
      duration: 1,
      y: 20,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
      delay: 0.7,
    });
  }

  const navigationContainer = document.querySelector(".navigation__container");
  if (navigationContainer) {
    gsap.from(navigationContainer, {
      duration: 1.5,
      opacity: 0,
      x: -50,
      ease: "power2.out",
      delay: 0.5,
    });
  }

  const feedbackForm = document.querySelector(".feedback__form");
  if (feedbackForm) {
    gsap.from(feedbackForm, {
      duration: 1.5,
      opacity: 0,
      y: 30,
      ease: "power2.out",
      delay: 0.5,
    });
  }

  gsap.from(".skills__item", {
    duration: 1,
    y: 20,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
    delay: 0.7,
  });

  gsap.from(".projects__item", {
    duration: 1,
    scale: 0.8,
    opacity: 0,
    stagger: 0.3,
    ease: "back.out(1.7)",
    delay: 1,
  });

  gsap.timeline({ delay: 1.5 })
    .from(".daily__info", { duration: 1.5, y: 30, opacity: 0, ease: "power2.out" }, "-=1");

  const taskManager = document.querySelector(".task-manager");
  if (taskManager) {
    gsap.timeline({ delay: 1 })
      .from(".task-manager", { duration: 1.5, y: 50, opacity: 0, ease: "power2.out" }, "-=0.5")
      .from(".task-manager__input", { duration: 1, x: -30, opacity: 0, ease: "power2.out" }, "-=1")
      .from(".task-manager__table", { duration: 1, scale: 0.8, opacity: 0, ease: "back.out(1.7)" }, "-=0.5");
  }
});
