document.addEventListener('DOMContentLoaded', () => {
  // Fade-in effect using IntersectionObserver
  const faders = document.querySelectorAll('.fade-in');
  const observerOptions = {
    threshold: 0.1
  };
  const fadeObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);
  faders.forEach(el => {
    fadeObserver.observe(el);
  });

  // Scroll progress bar
  const progressBar = document.querySelector('.progress-bar');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = scrollPercent + '%';
    });
  }
});