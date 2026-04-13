/* ========================================
   LUMINARY BLOG — main.js
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ── SCROLL REVEAL ── */
  const reveals = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
  });

  reveals.forEach(el => revealObserver.observe(el));


  /* ── NEWSLETTER FORM ── */
  const newsletterBtn   = document.querySelector('.newsletter-btn');
  const newsletterInput = document.querySelector('.newsletter-input');

  if (newsletterBtn && newsletterInput) {
    newsletterBtn.addEventListener('click', () => {
      const email = newsletterInput.value.trim();

      if (email && email.includes('@')) {
        newsletterInput.value       = '';
        newsletterInput.placeholder = '✓ 구독해주셔서 감사합니다!';
        newsletterInput.style.borderColor = 'var(--gold)';
      } else {
        newsletterInput.style.borderColor = '#b85c38';
        newsletterInput.placeholder = '올바른 이메일 주소를 입력해주세요';

        // Reset after 2.5s
        setTimeout(() => {
          newsletterInput.style.borderColor = '';
          newsletterInput.placeholder = '이메일 주소를 입력하세요';
        }, 2500);
      }
    });

    // Enter key support
    newsletterInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') newsletterBtn.click();
    });
  }


  /* ── SMOOTH SCROLL (hero CTAs) ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  /* ── NAV SEARCH ── */
  const navSearch = document.querySelector('.nav-search');
  if (navSearch) {
    navSearch.addEventListener('click', () => {
      alert('검색 기능');
    });
  }

});
