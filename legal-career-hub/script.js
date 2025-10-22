// JavaScript for interactive behaviours on the Legal Career Hub site
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Toggle the mobile navigation menu
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close the mobile menu when a navigation link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
});