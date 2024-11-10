(function () {
  window.addEventListener('load', () => {
    const loadTime = (window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart) / 1000;
    const footer = document.querySelector('footer');
    const loadInfo = document.createElement('p');
    loadInfo.textContent = `Page loaded in ${loadTime.toFixed(2)} seconds`;
    footer.appendChild(loadInfo);
  });
})();

(function () {
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('.intro__pages__nav__item').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
})();
