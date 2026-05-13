// Codegineers — main script

(() => {
  // ---------- Footer year ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Mobile menu toggle ----------
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu on link click
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---------- Scroll reveal ----------
  if ('IntersectionObserver' in window) {
    const reveal = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(reveal, {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px'
    });

    document
      .querySelectorAll('.service-card, .work-item, .process-list li, .section-head, .about-body, .contact-card')
      .forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.04}s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.04}s`;
        observer.observe(el);
      });
  }

  // ---------- Header shadow on scroll ----------
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 8) {
        header.style.boxShadow = '0 1px 0 rgba(10,22,40,0.04), 0 10px 30px -10px rgba(10,22,40,0.08)';
      } else {
        header.style.boxShadow = 'none';
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
})();
