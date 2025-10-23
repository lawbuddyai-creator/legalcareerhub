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

  // ===== Quote of the Day =====
  // If a quote container exists on the page, populate it with a random quote and author.
  const quoteContainer = document.getElementById('quote-of-day');
  if (quoteContainer) {
    const quotes = [
      {
        text: 'Where you see wrong or inequality or injustice, speak out, because this is your country. Make it. Protect it. Pass it on.',
        author: 'Thurgood Marshall'
      },
      {
        text: 'Fight for the things that you care about, but do it in a way that will lead others to join you.',
        author: 'Ruth Bader Ginsburg'
      },
      {
        text: 'As women achieve power, the barriers will fall. As society sees what women can do…we’ll all be better off for it.',
        author: 'Sandra Day O’Connor'
      },
      {
        text: 'Until we get equality in education, we won’t have an equal society.',
        author: 'Sonia Sotomayor'
      }
    ];
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    quoteContainer.innerHTML = `<span class="quote-text">“${random.text}”</span><span class="quote-author">— ${random.author}</span>`;
  }

  // ===== Search filtering for career cards =====
  const careerSearch = document.getElementById('career-search');
  if (careerSearch) {
    careerSearch.addEventListener('input', () => {
      const query = careerSearch.value.toLowerCase();
      document.querySelectorAll('.card-grid .card').forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }

  // ===== Search filtering for resources =====
  const resourceSearch = document.getElementById('resource-search');
  if (resourceSearch) {
    resourceSearch.addEventListener('input', () => {
      const query = resourceSearch.value.toLowerCase();
      document.querySelectorAll('.resources-grid .resource-group').forEach(group => {
        const text = group.innerText.toLowerCase();
        group.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }

  // ===== Dark mode toggle =====
  const darkToggle = document.getElementById('dark-toggle');
  if (darkToggle) {
    darkToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      // Update button label/icon based on current state
      if (document.body.classList.contains('dark')) {
        darkToggle.textContent = '☀️';
        darkToggle.setAttribute('aria-label', 'Switch to light mode');
      } else {
        darkToggle.textContent = '🌙';
        darkToggle.setAttribute('aria-label', 'Switch to dark mode');
      }
    });
  }

  // ===== Interactive timeline navigation =====
  const timelineContainer = document.getElementById('timeline-container');
  if (timelineContainer) {
    const prevBtn = document.getElementById('timeline-prev');
    const nextBtn = document.getElementById('timeline-next');
    // Scroll step size equals width of one step plus gap
    function scrollTimeline(direction) {
      const stepWidth = timelineContainer.querySelector('.timeline-step').offsetWidth + 16; // 16px gap
      timelineContainer.scrollBy({ left: direction * stepWidth, behavior: 'smooth' });
    }
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => scrollTimeline(-1));
      nextBtn.addEventListener('click', () => scrollTimeline(1));
    }
  }

  // ===== Search filtering for scholarships page =====
  const scholarshipSearch = document.getElementById('scholarship-search');
  if (scholarshipSearch) {
    scholarshipSearch.addEventListener('input', () => {
      const query = scholarshipSearch.value.toLowerCase();
      document.querySelectorAll('.scholarship-card').forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }
});