// Codegineers — site script

(() => {
  // ---------- Shared header & footer ----------
  const here = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();

  const isActive = (file) => here === file ? ' aria-current="page"' : '';

  const headerHTML = `
    <header class="site-header">
      <div class="wrap header-row">
        <a href="index.html" class="brand-link" aria-label="Codegineers home">
          <img src="assets/logo.png" alt="" />
          <span class="brand-word"><span class="a">CODE</span><span class="b">GINEERS</span></span>
        </a>
        <nav class="nav" aria-label="Primary">
          <a href="services.html"${isActive('services.html')}>Services</a>
          <a href="work.html"${isActive('work.html')}>Work</a>
          <a href="about.html"${isActive('about.html')}>Studio</a>
          <a href="contact.html"${isActive('contact.html')}>Contact</a>
          <a href="contact.html" class="nav-cta">Start a project</a>
        </nav>
        <button class="menu-btn" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>`;

  const footerHTML = `
    <footer class="site-footer">
      <div class="wrap">
        <div class="footer-top">
          <div class="footer-brand">
            <a href="index.html" class="brand-link">
              <img src="assets/logo.png" alt="" />
              <span class="brand-word"><span class="a">CODE</span><span class="b">GINEERS</span></span>
            </a>
            <p>A software engineering studio designing and building digital products for ambitious teams.</p>
          </div>
          <div class="footer-col">
            <h4>Studio</h4>
            <a href="services.html">Services</a>
            <a href="work.html">Work</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <a href="mailto:hello@codegineers.codes">hello@codegineers.codes</a>
            <a href="contact.html">Start a project</a>
          </div>
          <div class="footer-col">
            <h4>Elsewhere</h4>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Dribbble</a>
            <a href="#">Twitter / X</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© <span id="year"></span> Codegineers. All rights reserved.</span>
          <span>codegineers.codes</span>
        </div>
      </div>
    </footer>`;

  const headerSlot = document.getElementById('site-header');
  const footerSlot = document.getElementById('site-footer');
  if (headerSlot) headerSlot.outerHTML = headerHTML;
  if (footerSlot) footerSlot.outerHTML = footerHTML;

  // ---------- Year ----------
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // ---------- Mobile menu ----------
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menuBtn.classList.toggle('is-open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuBtn.classList.remove('is-open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }));
  }

  // ---------- Header scroll shadow ----------
  const header = document.querySelector('.site-header');
  if (header) {
    const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
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

    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }

  // ---------- Contact form (demo) ----------
  const cf = document.querySelector('.contact-form');
  if (cf) {
    cf.addEventListener('submit', (e) => {
      e.preventDefault();
      const ok = cf.querySelector('.success');
      if (ok) ok.hidden = false;
      cf.reset();
    });
  }
})();
