// Codegineers — main script
(() => {
  // ---------- Mobile menu ----------
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(open));
      mobileMenu.setAttribute('aria-hidden', String(!open));
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---------- Header scroll shadow ----------
  const header = document.querySelector('header');
  if (header) {
    const setHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    setHeader();
    window.addEventListener('scroll', setHeader, { passive: true });
  }

  // ---------- Scroll reveal ----------
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal, .fade-in, .fade-in-stagger').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal, .fade-in, .fade-in-stagger').forEach(el => el.classList.add('is-visible'));
  }

  // ---------- Contact form → WhatsApp ----------
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name    = (data.get('name')    || '').toString().trim();
      const phone   = (data.get('phone')   || '').toString().trim();
      const email   = (data.get('email')   || '').toString().trim();
      const topic   = (data.get('topic')   || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();

      const lines = [
        `*New project inquiry — Codegineers*`,
        ``,
        `*Name:* ${name}`,
        phone ? `*Phone:* ${phone}` : null,
        `*Email:* ${email}`,
        topic ? `*About:* ${topic}` : null,
        ``,
        `*Message:*`,
        message,
      ].filter(Boolean);

      const text = encodeURIComponent(lines.join('\n'));
      const waNumber = '96171050839'; // +961 71 050 839
      window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');
    });
  }
})();
