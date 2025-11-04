// JavaScript for interactive behaviours on the Legal Career Hub site
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Toggle the navigation dropdown on click. Also animate the hamburger into a cross by toggling `active` on the button.
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('active');
  });

  // Close the dropdown and reset the hamburger when any nav link is clicked.
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
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

  // ===== Dark mode toggle with persistence =====
  const darkToggle = document.getElementById('dark-toggle');
  if (darkToggle) {
    // Apply saved theme on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
      darkToggle.textContent = '☀️';
      darkToggle.setAttribute('aria-label', 'Switch to light mode');
    }
    darkToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const isDark = document.body.classList.contains('dark');
      // Update button label/icon
      darkToggle.textContent = isDark ? '☀️' : '🌙';
      darkToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      // Save preference
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
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

  // ===== Search filtering for reading list page =====
  const readingSearch = document.getElementById('reading-search');
  if (readingSearch) {
    readingSearch.addEventListener('input', () => {
      const query = readingSearch.value.toLowerCase();
      document.querySelectorAll('.reading-item').forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }

  // ===== Search filtering for glossary page =====
  const glossarySearch = document.getElementById('glossary-search');
  if (glossarySearch) {
    glossarySearch.addEventListener('input', () => {
      const query = glossarySearch.value.toLowerCase();
      document.querySelectorAll('.glossary-term').forEach(term => {
        const text = term.innerText.toLowerCase();
        term.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }

  // ===== Career quiz evaluation =====
  const quizForm = document.getElementById('quiz-form');
  if (quizForm) {
    quizForm.addEventListener('submit', event => {
      event.preventDefault();
      const formData = new FormData(quizForm);
      const scores = { attorney: 0, paralegal: 0, policy: 0, judge: 0 };
      for (const value of formData.values()) {
        if (Object.prototype.hasOwnProperty.call(scores, value)) {
          scores[value]++;
        }
      }
      // Determine highest score
      let topChoice = 'attorney';
      for (const key in scores) {
        if (scores[key] > scores[topChoice]) {
          topChoice = key;
        }
      }
      let message = '';
      switch (topChoice) {
        case 'attorney':
          message = 'You might thrive as a trial attorney or prosecutor — roles that combine public speaking, strategy and persuasive advocacy.';
          break;
        case 'paralegal':
          message = 'You could excel as a paralegal or law clerk — these roles focus on research, organisation and supporting the legal process.';
          break;
        case 'policy':
          message = 'A career in policy analysis or legislation may suit you — this field involves research, writing and shaping public policy.';
          break;
        case 'judge':
          message = 'You have qualities suited to the judiciary — judges rely on impartiality, deliberation and a deep understanding of the law.';
          break;
        default:
          message = 'Explore different legal paths to see what resonates most with you!';
      }
      const resultContainer = document.getElementById('quiz-result');
      if (resultContainer) {
        resultContainer.textContent = message;
        resultContainer.style.display = 'block';
      }
    });
  }

  // ===== Chatbot functionality removed. =====
});