document.addEventListener('DOMContentLoaded', () => {
  const pages = ['home', 'projects', 'about', 'contact'];

  // View transitioning page router
  function showPage(id) {
    pages.forEach(p => {
      const pageEl = document.getElementById('page-' + p);
      const navEl = document.getElementById('nav-' + p);
      if (pageEl) pageEl.classList.remove('active');
      if (navEl) navEl.classList.remove('active');
    });

    const activePage = document.getElementById('page-' + id);
    const activeNav = document.getElementById('nav-' + id);
    if (activePage) activePage.classList.add('active');
    if (activeNav) activeNav.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
    const navLinks = document.getElementById('navLinks');
    if (navLinks) navLinks.classList.remove('open');
  }

  // Bind Navbar links click events
  pages.forEach(p => {
    const navEl = document.getElementById('nav-' + p);
    if (navEl) {
      navEl.addEventListener('click', (e) => {
        e.preventDefault();
        showPage(p);
      });
    }
  });

  // Bind Logo click event
  const navLogo = document.querySelector('.nav-logo');
  if (navLogo) {
    navLogo.addEventListener('click', (e) => {
      e.preventDefault();
      showPage('home');
    });
  }

  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      if (navLinks) navLinks.classList.toggle('open');
    });
  }

  // Hero section "Explore the Concept" button
  const heroExploreBtn = document.getElementById('hero-explore');
  if (heroExploreBtn) {
    heroExploreBtn.addEventListener('click', () => {
      showPage('projects');
    });
  }

  // Accordion card toggle details
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      toggleCard(card);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCard(card);
      }
    });
  });

  // Prevent event propagation for link clicks inside project cards
  const projectCardLinks = document.querySelectorAll('.project-card .btn-secondary');
  projectCardLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });

  function toggleCard(card) {
    const isOpen = card.classList.contains('open');
    projectCards.forEach(c => c.classList.remove('open'));
    if (!isOpen) {
      card.classList.add('open');
    }
  }

  // Feedback Submission handler
  const feedbackBtn = document.getElementById('feedback-btn');
  if (feedbackBtn) {
    feedbackBtn.addEventListener('click', () => {
      sendFeedback();
    });
  }

  function sendFeedback() {
    const feedbackInput = document.getElementById('feedback-input');
    if (!feedbackInput) return;

    const body = feedbackInput.value.trim();
    if (!body) {
      alert('Please enter feedback before submitting.');
      feedbackInput.focus();
      return;
    }
    const subject = encodeURIComponent('Pravaha Path Feedback');
    const encodedBody = encodeURIComponent(body);
    const mailtoLink = `mailto:meesarapud@gmail.com?subject=${subject}&body=${encodedBody}`;
    window.open(mailtoLink, '_blank');
  }
});
