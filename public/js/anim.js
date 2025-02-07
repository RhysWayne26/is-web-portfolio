document.addEventListener("DOMContentLoaded", function () {
  // Создаем анимацию для фото профиля при загрузке страницы
  gsap.timeline({ delay: 1 })//gsap — это глобальный объект, который предоставляет методы для анимации элементов на веб-странице.
    .fromTo(".profile__photo", // Выбираем элемент с фото профиля
      { opacity: 0, y: 30 }, // Начальное состояние: у фото нулевая видимость и сдвинуто вниз на 30px
      { duration: 1, opacity: 1, y: 0, ease: "power2.out" } // Финальное состояние: у фото 100% видимость и начальное положение по CSS файлу;
      // power2.out -тип easing-функции в библиотеке GSAP.
      // Эта функция определяет, как будет изменяться скорость анимации в течение времени. В частности, power2.out используется для создания эффекта замедления в конце анимации.
    )
    .from(".intro__line", { duration: 1.5, y: -50, opacity: 0, ease: "power2.out" }, "-=0.5");
  // параметр "-=0.5" указывает, что анимация для .intro__line начнется на 0.5 секунды раньше, чем будет завершена предыдущая анимация для .profile__photo.

  // Получаем все элементы навигации и текущий активный элемент
  const navItems = document.querySelectorAll(".intro__pages__nav__item");
  const activeItem = document.querySelector(".intro__pages__nav__item.active");

  if (activeItem) {
    // Анимация для активного элемента навигации
    gsap.from(activeItem, {
      duration: 1,
      y: 20,
      opacity: 0,
      ease: "power2.out",
      delay: 0.5, // Задержка начала этой анимации
    });
  }

  // Получаем все остальные элементы навигации, кроме активного
  const otherNavItems = [...navItems].filter((item) => item !== activeItem);
  if (otherNavItems.length > 0) {
    // Анимация для остальных элементов навигации с задержкой
    gsap.from(otherNavItems, {
      duration: 1,
      y: 20,
      opacity: 0,
      stagger: 0.2, // Задержка между анимациями элементов
      ease: "power2.out",
      delay: 0.7,
    });
  }

  // Анимация для контейнера навигации (если он существует)
  const navigationContainer = document.querySelector(".navigation__container");
  if (navigationContainer) {
    gsap.from(navigationContainer, {
      duration: 1.5,
      opacity: 0,
      x: -50, // Начинается с левого края
      ease: "power2.out",
      delay: 0.5,
    });
  }

  // Анимация для формы обратной связи (если она существует)
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

  // Анимация для элементов секции скиллов с задержкой
  gsap.from(".skills__item", {
    duration: 1,
    y: 20,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
    delay: 0.7,
  });

  // Анимация для элементов секции с проектами с эффектом масштабирования и изменения прозрачности
  gsap.from(".projects__item", {
    duration: 1,
    scale: 0.8, // Начинаются с 80% масштаба
    opacity: 0,
    stagger: 0.3,
    ease: "back.out(1.7)", // Используется эффект "back" для подпрыгивающего движения
    delay: 1,
  });

  // Создаем таймлайн для анимации секции с дневной мантрой
  gsap.timeline({ delay: 1.5 })
    .from(".daily__info", { duration: 1.5, y: 30, opacity: 0, ease: "power2.out" }, "-=1");

  // Анимация для секции с таблицей задач
  const taskManager = document.querySelector(".task-manager");
  if (taskManager) {
    gsap.timeline({ delay: 1 })
      .from(".task-manager", { duration: 1.5, y: 50, opacity: 0, ease: "power2.out" }, "-=0.5") // Анимация самого менеджера задач
      .from(".task-manager__input", { duration: 1, x: -30, opacity: 0, ease: "power2.out" }, "-=1") // Поле ввода в менеджере задач
      .from(".task-manager__table", { duration: 1, scale: 0.8, opacity: 0, ease: "back.out(1.7)" }, "-=0.5"); // Таблица задач с эффектом масштабирования
  }
});
