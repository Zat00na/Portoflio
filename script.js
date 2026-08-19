/* ============================================================
   Taha Mohammed — Portfolio Script (data-driven)
   All editable text/projects/experience live in data.json.
   ============================================================ */

/* ─── ICON LIBRARY (small, rarely-changed set) ──────────── */
const ICONS = {
  building: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><path d="M3 12h18"/>',
  clock:    '<path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 2v10l7 7"/>',
  cap:      '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  monitor:  '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>'
};

const SKILL_GROUP_ICONS = {
  code:     '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  chart:    '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>',
  grid:     '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
  language: '<path d="M5 8l6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>',
  cpu:      '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>',
  shield:   '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  brain: '<path d="M9.5 2a3.5 3.5 0 0 0-3.5 3.5v.5a3 3 0 0 0-1.5 5.5 3 3 0 0 0 1 5.7 3.5 3.5 0 0 0 3.5 3.3 3.5 3.5 0 0 0 3.5-3.5V5.5A3.5 3.5 0 0 0 9.5 2z"/><path d="M14.5 2a3.5 3.5 0 0 1 3.5 3.5v.5a3 3 0 0 1 1.5 5.5 3 3 0 0 1-1 5.7 3.5 3.5 0 0 1-3.5 3.3 3.5 3.5 0 0 1-3.5-3.5V5.5A3.5 3.5 0 0 1 14.5 2z"/>'
};

// Skill-item icons: some are outlined (stroke), the python logo is filled/colored.
const SKILL_ITEM_ICONS = {
  python: { fill: true,  svg: '<path fill="#3776AB" d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.031v-2.867s-.109-3.402 3.35-3.402h5.769s3.24.052 3.24-3.13V3.147S18.326 0 11.914 0zm-3.21 1.818a1.046 1.046 0 1 1 0 2.092 1.046 1.046 0 0 1 0-2.092z"/><path fill="#FFD43B" d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.121S24 18.211 24 12.031c0-6.18-3.403-5.96-3.403-5.96h-2.031v2.867s.109 3.402-3.35 3.402H9.447s-3.24-.052-3.24 3.13v5.383S5.674 24 12.086 24zm3.21-1.818a1.046 1.046 0 1 1 0-2.092 1.046 1.046 0 0 1 0 2.092z"/>' },
  bars:   { fill: false, svg: '<path d="M18 20V10M12 20V4M6 20v-6"/>' },
  clean:  { fill: false, svg: '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M4.93 4.93 19.07 19.07"/>' },
  search: { fill: false, svg: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>' }
};

const SOCIAL_SVG = {
  github: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg>',
  linkedin: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  email: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>'
};
function socialSvg(name, size) { return SOCIAL_SVG[name].replace(/\{s\}/g, size); }

const LOGO_SVG = (size) => `<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
  <circle cx="250" cy="250" r="180" fill="none" stroke="#2a1f42" stroke-width="90" stroke-linecap="round" stroke-dasharray="376.99 1130.97" transform="rotate(-90 250 250)"/>
  <circle cx="250" cy="250" r="180" fill="none" stroke="#9333ea" stroke-width="90" stroke-linecap="round" stroke-dasharray="376.99 1130.97" stroke-dashoffset="-376.99" transform="rotate(-90 250 250)"/>
  <circle cx="250" cy="250" r="180" fill="none" stroke="#c084fc" stroke-width="90" stroke-linecap="round" stroke-dasharray="376.99 1130.97" stroke-dashoffset="-753.98" transform="rotate(-90 250 250)"/>
</svg>`;

function esc(str = '') {
  return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function iconOutline(pathData, size = 28) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="${size}" height="${size}">${pathData}</svg>`;
}

/* ─── IMAGE GALLERY MARKUP (shared by experience + projects) ─ */
function galleryImagesHtml(images) {
  return images.map((img, i) =>
    `<img src="${esc(img.src)}" alt="${esc(img.alt)}" class="project-img${i === 0 ? ' active' : ''}" />`
  ).join('') +
  `<div class="img-dots">${images.map((_, i) =>
    `<button class="dot${i === 0 ? ' active' : ''}" data-index="${i}"></button>`
  ).join('')}</div>`;
}

/* ─── RENDER: HERO ───────────────────────────────────────── */
function renderHero(data) {
  const { hero, social } = data;
  document.getElementById('hero-badge-text').textContent = hero.badge;
  document.getElementById('hero-name').innerHTML = `${esc(hero.nameLine1)}<br /><span class="accent">${esc(hero.nameLine2)}</span>`;
  document.getElementById('hero-tagline').textContent = hero.tagline;
  document.getElementById('hero-profile-img').src = hero.profileImage;
  document.getElementById('hero-profile-img').alt = `${hero.nameLine1} ${hero.nameLine2}`;

  document.getElementById('hero-cta').innerHTML = `
    <a href="#projects" class="btn btn-primary">View Projects</a>
    <a href="${social.github}" target="_blank" rel="noopener" class="btn btn-ghost">${socialSvg('github', 17)}GitHub</a>
    <a href="${social.linkedin}" target="_blank" rel="noopener" class="btn btn-ghost">${socialSvg('linkedin', 17)}LinkedIn</a>
    <a href="mailto:${social.email}" class="btn btn-ghost">${socialSvg('email', 17)}Email</a>
  `;
}

/* ─── RENDER: ABOUT ──────────────────────────────────────── */
function renderAbout(data) {
  const { about } = data;
  document.getElementById('about-title').innerHTML = about.titleHtml;
  document.getElementById('about-paragraphs').innerHTML = about.paragraphs.map(p => `<p>${esc(p)}</p>`).join('');
  document.getElementById('about-stats').innerHTML = about.stats.map(s => `
    <div class="stat-card"><div class="stat-number accent">${esc(s.number)}</div><div class="stat-label">${esc(s.label)}</div></div>
  `).join('');
}

/* ─── RENDER: EXPERIENCE ─────────────────────────────────── */
function renderExperience(data) {
  const html = data.experience.map(item => {
    if (item.images && item.images.length) {
      return `
        <div class="edu-card project-card voltra-card">
          <div class="project-images">${galleryImagesHtml(item.images)}</div>
          <div class="edu-body">
            <div class="edu-degree">${esc(item.title)}</div>
            <div class="edu-school">${esc(item.org)}</div>
            <div class="edu-year">${esc(item.period)}</div>
            <p class="edu-desc">${esc(item.desc)}</p>
          </div>
        </div>`;
    }
    return `
      <div class="edu-card">
        <div class="edu-icon">${iconOutline(ICONS[item.icon] || '', 28)}</div>
        <div class="edu-body">
          <div class="edu-degree">${esc(item.title)}</div>
          <div class="edu-school">${esc(item.org)}</div>
          <div class="edu-year">${esc(item.period)}</div>
          <p class="edu-desc">${esc(item.desc)}</p>
        </div>
      </div>`;
  }).join('');
  document.getElementById('experience-grid').innerHTML = html;
}

/* ─── RENDER: SKILLS ─────────────────────────────────────── */
function renderSkills(data) {
  const html = data.skills.map(group => `
    <div class="skill-group">
      <div class="skill-group-header">
        <div class="skill-group-icon">${iconOutline(SKILL_GROUP_ICONS[group.icon] || '', 24).replace('width="24" height="24"', '')}</div>
        <h3>${esc(group.group)}</h3>
      </div>
      <ul class="skill-list">
        ${group.items.map(item => {
          const iconDef = item.icon && SKILL_ITEM_ICONS[item.icon];
          let iconHtml = '';
          if (iconDef) {
            iconHtml = iconDef.fill
              ? `<svg viewBox="0 0 24 24" width="20" height="20">${iconDef.svg}</svg>`
              : `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#9333ea" stroke-width="2">${iconDef.svg}</svg>`;
          }
          return `<li class="skill-item">${iconHtml}${esc(item.name)}</li>`;
        }).join('')}
      </ul>
    </div>
  `).join('');
  document.getElementById('skills-grid').innerHTML = html;
}

/* ─── RENDER: PROJECTS ───────────────────────────────────── */
function renderProjects(data) {
  const cards = data.projects.map(p => `
    <article class="project-card">
      <div class="project-images">
        ${galleryImagesHtml(p.images)}
        <div class="project-overlay"><span class="project-overlay-tag">${esc(p.tag)}</span></div>
      </div>
      <div class="project-body">
        <h3 class="project-title">${esc(p.title)}</h3>
        <p class="project-desc">${esc(p.desc)}</p>
        <div class="project-tech">${p.tech.map(t => `<span class="tech-tag">${esc(t)}</span>`).join('')}</div>
        <div class="project-actions">
          <a href="${p.github}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
            ${socialSvg('github', 15)}View on GitHub
          </a>
        </div>
      </div>
    </article>
  `).join('');

  const placeholder = `
    <article class="project-card project-card-placeholder">
      <div class="placeholder-inner">
        <div class="placeholder-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="36" height="36"><path d="M12 5v14M5 12h14"/></svg></div>
        <p>More projects coming soon</p>
      </div>
    </article>`;

  document.getElementById('projects-grid').innerHTML = cards + placeholder;
}

/* ─── RENDER: EDUCATION ──────────────────────────────────── */
function renderEducation(data) {
  const html = data.education.map(e => `
    <div class="edu-card">
      <div class="edu-icon">${iconOutline(ICONS[e.icon] || '', 28)}</div>
      <div class="edu-body">
        <div class="edu-degree">${esc(e.degree)}</div>
        <div class="edu-school">${esc(e.school)}</div>
        <div class="edu-year">${esc(e.year)}</div>
        <p class="edu-desc">${esc(e.desc)}</p>
      </div>
    </div>
  `).join('');
  document.getElementById('edu-grid').innerHTML = html;
}

/* ─── RENDER: CONTACT ────────────────────────────────────── */
function renderContact(data) {
  const { contact, social } = data;
  document.getElementById('contact-intro').textContent = contact.intro;
  document.getElementById('contact-links').innerHTML = `
    <a href="mailto:${social.email}" class="contact-link">
      <div class="contact-link-icon">${socialSvg('email', 20)}</div>
      <div><div class="contact-link-label">Email</div><div class="contact-link-value">${esc(social.email)}</div></div>
    </a>
    <a href="${social.github}" target="_blank" rel="noopener" class="contact-link">
      <div class="contact-link-icon">${socialSvg('github', 20)}</div>
      <div><div class="contact-link-label">GitHub</div><div class="contact-link-value">${social.github.replace('https://', '')}</div></div>
    </a>
    <a href="${social.linkedin}" target="_blank" rel="noopener" class="contact-link">
      <div class="contact-link-icon">${socialSvg('linkedin', 20)}</div>
      <div><div class="contact-link-label">LinkedIn</div><div class="contact-link-value">${social.linkedin.split('/in/')[1]}</div></div>
    </a>
  `;
  document.getElementById('message-options').innerHTML = `
    <a href="mailto:${social.email}?subject=Project%20Opportunity" class="msg-chip">💼 A project opportunity</a>
    <a href="mailto:${social.email}?subject=Job%20Opportunity" class="msg-chip">🚀 A job opportunity</a>
    <a href="mailto:${social.email}?subject=Collaboration" class="msg-chip">🤝 Collaboration</a>
  `;
}

/* ─── RENDER: LOGO + FOOTER (shared) ─────────────────────── */
function renderBrand(data) {
  document.getElementById('nav-logo-svg').innerHTML = LOGO_SVG(36);
  document.getElementById('hero-badge-svg').innerHTML = LOGO_SVG(16);
  document.getElementById('message-panel-svg').innerHTML = LOGO_SVG(26);
  document.getElementById('footer-logo-svg').innerHTML = LOGO_SVG(30);

  const { social } = data;
  document.getElementById('footer-links').innerHTML = `
    <a href="${social.github}" target="_blank" rel="noopener">${socialSvg('github', 16)}GitHub</a>
    <a href="${social.linkedin}" target="_blank" rel="noopener">${socialSvg('linkedin', 16)}LinkedIn</a>
    <a href="mailto:${social.email}">${socialSvg('email', 16)}Email</a>
  `;
}

/* ─── INTERACTIVE BEHAVIOR (runs after render) ───────────── */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  function updateActiveNav() {
    const scrollY = window.scrollY + 120;
    sections.forEach(section => {
      const id   = section.getAttribute('id');
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (!link) return;
      if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();
}

function initGalleries() {
  document.querySelectorAll('.project-card').forEach(card => {
    const imgs = card.querySelectorAll('.project-img');
    const dots = card.querySelectorAll('.dot');
    if (!imgs.length || !dots.length) return;

    let current = 0, timer = null;
    function show(i) {
      imgs[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = i;
      imgs[current].classList.add('active');
      dots[current].classList.add('active');
    }
    function start() { timer = setInterval(() => show((current + 1) % imgs.length), 3500); }
    function stop()  { clearInterval(timer); }

    start();
    dots.forEach((d, i) => d.addEventListener('click', () => { stop(); show(i); start(); }));
    card.addEventListener('mouseenter', stop);
    card.addEventListener('mouseleave', start);
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
      }
    });
  });
}

function initParallax() {
  const blob1 = document.querySelector('.blob-1');
  const blob2 = document.querySelector('.blob-2');
  if (blob1 && blob2) {
    window.addEventListener('mousemove', e => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 22;
      const y = (e.clientY / window.innerHeight - 0.5) * 16;
      blob1.style.transform = `translate(${x}px, ${y}px)`;
      blob2.style.transform = `translate(${-x * 0.6}px, ${-y * 0.6}px)`;
    }, { passive: true });
  }
}

/* ─── BOOT ────────────────────────────────────────────────── */
async function boot() {
  try {
    const res = await fetch('assets/data.json');
    const data = await res.json();

    renderBrand(data);
    renderHero(data);
    renderAbout(data);
    renderExperience(data);
    renderSkills(data);
    renderProjects(data);
    renderEducation(data);
    renderContact(data);
  } catch (err) {
    console.error('Failed to load data.json — is this served over http(s)? file:// blocks fetch.', err);
  }

  initMobileMenu();
  initActiveNav();
  initGalleries();
  initSmoothScroll();
  initParallax();
}

boot();
