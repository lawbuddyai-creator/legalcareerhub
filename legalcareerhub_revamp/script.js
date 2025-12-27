// script.js – interactive behavior for Legal Career Hub

// Scholarship data
const scholarships = [
  {
    name: 'Justice for All Scholarship',
    amount: '$1,000',
    deadline: 'March 18, 2026',
    eligibility: 'Pursuing law, law enforcement or government; GPA ≥ 3.0',
    link: 'https://www.bettersworthlaw.com/scholarship'
  },
  {
    name: 'DRI Law Student Diversity Scholarship',
    amount: 'Up to $10,000',
    deadline: 'June 30, 2025',
    eligibility: 'Rising 2L/3L law students from diverse backgrounds',
    link: 'https://law.uic.edu/events/dri-law-student-scholarship/'
  },
  {
    name: 'ABA Legal Opportunity Scholarship',
    amount: '$15,000 (over 3 years)',
    deadline: 'April 15, 2026',
    eligibility: 'Incoming first‑year law students committed to diversity',
    link: 'https://www.americanbar.org/groups/diversity/diversity_pipeline/projects_initiatives/legal_opportunity_scholarship/'
  },
  {
    name: 'JD‑Next Impact Scholarship',
    amount: 'Up to $25,000',
    deadline: 'May 15, 2026',
    eligibility: 'Applicants beginning law school in Fall 2026',
    link: 'https://jdnext.org/in-the-news/posts/jd-next-announces-25-000-in-impact-scholarships-to-support-future-legal-leaders'
  }
];

// Populate scholarship table
const tableBody = document.querySelector('#scholarshipTable tbody');

function renderTable(data) {
  // Clear table
  tableBody.innerHTML = '';
  data.forEach(s => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${s.name}</td>
      <td>${s.amount}</td>
      <td>${s.deadline}</td>
      <td>${s.eligibility}</td>
      <td><a href="${s.link}" target="_blank" rel="noopener">Apply</a></td>
    `;
    tableBody.appendChild(row);
  });
}

// Initial render
renderTable(scholarships);

// Search functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = scholarships.filter(s => s.name.toLowerCase().includes(query));
  renderTable(filtered);
});

// Sorting functionality
const headers = document.querySelectorAll('#scholarshipTable th[data-column]');
let sortDirection = {};
headers.forEach(header => {
  sortDirection[header.dataset.column] = 'asc';
  header.addEventListener('click', () => {
    const column = header.dataset.column;
    const direction = sortDirection[column] === 'asc' ? 'desc' : 'asc';
    sortDirection[column] = direction;
    const sorted = scholarships.slice().sort((a, b) => {
      let valA = a[column];
      let valB = b[column];
      // For amount, remove non-numeric characters
      if (column === 'amount') {
        const numA = parseFloat(valA.replace(/[^0-9.]/g, ''));
        const numB = parseFloat(valB.replace(/[^0-9.]/g, ''));
        return direction === 'asc' ? numA - numB : numB - numA;
      }
      // For deadline, convert to Date
      if (column === 'deadline') {
        const dateA = new Date(valA);
        const dateB = new Date(valB);
        return direction === 'asc' ? dateA - dateB : dateB - dateA;
      }
      // Default string comparison
      return direction === 'asc'
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    });
    renderTable(sorted);
  });
});

// Mobile navigation toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Fade-in animation using IntersectionObserver
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(element => {
  observer.observe(element);
});