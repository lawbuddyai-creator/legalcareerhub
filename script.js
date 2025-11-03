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

  // ===== Simple chatbot functionality =====
  const chatForm = document.getElementById('chat-form');
  if (chatForm) {
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');

    function addMessage(type, text) {
      const msgDiv = document.createElement('div');
      msgDiv.className = `chat-message ${type}`;
      msgDiv.textContent = text;
      chatMessages.appendChild(msgDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    chatForm.addEventListener('submit', event => {
      event.preventDefault();
      const userText = chatInput.value.trim();
      if (!userText) return;
      addMessage('user', userText);
      // Determine bot response based on keywords
      const lower = userText.toLowerCase();
      let response = '';
      if (lower.includes('become') && lower.includes('lawyer')) {
        response = 'To become a lawyer you typically earn a bachelor’s degree, take the LSAT, attend law school, complete internships or clerkships, pass the bar exam and meet character and fitness requirements.';
      } else if (lower.includes('major') && (lower.includes('law') || lower.includes('prelaw'))) {
        response = 'Law schools don’t require a specific major. Choose a field you enjoy and excel in—common majors include history, political science, psychology, English and economics.';
      } else if (lower.includes('lsat') && lower.includes('hard')) {
        response = 'The LSAT is challenging because of its complex questions and strict time limits. With preparation, most test takers score between 150 and 159.';
      } else if (lower.includes('work') && lower.includes('law school')) {
        response = 'Law school is demanding. Many schools discourage working during the first year; if you do work, limit it to about 20 hours per week so you can focus on studies.';
      } else if (lower.includes('nextgen')) {
        response = 'The NextGen Uniform Bar Exam launches in July 2026. It uses integrated question sets to test foundational lawyering skills and balances litigation and transactional practice.';
      } else if (lower.includes('apply') && lower.includes('law school')) {
        response = 'Submit your law school applications early in the cycle. Applying by the end of October is strategic, November is still early, and applications submitted by December are usually considered on time.';
      } else if (lower.includes('bar exam') || lower.includes('ube')) {
        response = 'Most states use the Uniform Bar Exam (UBE) consisting of the MBE, MEE and MPT. Scores can be transferred among participating jurisdictions. Non‑UBE states have their own exams and policies.';
      } else {
        response = 'Thanks for your question! Please explore the site’s resources or try rephrasing your question for more specific guidance.';
      }
      // Simulate slight delay before bot responds
      setTimeout(() => {
        addMessage('bot', response);
      }, 500);
      chatInput.value = '';
    });
  }
});