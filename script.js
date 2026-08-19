/* ============================================================
   Abdallah Ahmed — Portfolio Script (data-driven)
   All editable text/projects/experience live in data.json.
   ============================================================ */

/* ─── ICON LIBRARY ───────────────────────────────────────── */
const ICONS = {
  cap:     '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
  brush:   '<path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"/><path d="m5 2 5 5"/><path d="M2 22h20"/>'
};

const SKILL_GROUP_ICONS = {
  video:    '<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>',
  palette:  '<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.5-.68 1.5-1.5 0-.41-.17-.82-.42-1.12-.27-.33-.42-.74-.42-1.18 0-.97.83-1.7 1.8-1.7H16c3.31 0 6-2.69 6-6 0-4.97-4.48-9-10-9z"/>',
  layers:   '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polygon points="2 17 12 22 22 17"/><polygon points="2 12 12 17 22 12"/>'
};

const SOCIAL_SVG = {
  behance: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7V5h7v2zm-1.8 4c-1.3 0-2.4.7-2.9 1.8h5.7c-.3-1.1-1.4-1.8-2.8-1.8zm2.8 4.2c0-2.6-1.8-4.7-4.6-4.7-2.9 0-4.9 2.1-4.9 4.8 0 2.8 2 4.9 5 4.9 2.1 0 3.7-.9 4.3-2.5h-2.1c-.3.7-1.1 1-2 1-1.4 0-2.3-.8-2.5-2.1h6.8c0-.4.1-.9.1-1.4zM3 13.5h3.6c.9 0 1.6-.4 1.6-1.2 0-.8-.6-1.1-1.4-1.1H3v2.3zm0-3.8h3.3c.8 0 1.4-.4 1.4-1 0-.7-.5-1-1.3-1H3v2zm5.7-4.1c1.8.4 2.8 1.6 2.8 3 0 1.2-.6 2.1-1.6 2.6 1.3.5 2 1.6 2 3.1 0 2.1-1.6 3.7-4.3 3.7H0V2h5.7c2.5 0 4 .8 4.4 2.2V5.6z"/></svg>',
  instagram: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
  email: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>'
};

function socialSvg(name, size) {
  return SOCIAL_SVG[name] ? SOCIAL_SVG[name].replace(/\{s\}/g, size) : '';
}

function esc(str = '') {
  return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function iconOutline(pathData, size = 28) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="${size}" height="${size}">${pathData}</svg>`;
}

/* ─── RENDER: HERO ───────────────────────────────────────── */
function renderHero(data) {
  const { hero } = data;
  document.getElementById('hero-badge-text').textContent = hero.badge;
  document.getElementById('hero-name').textContent = hero.name;
  document.getElementById('hero-tagline').textContent = hero.tagline;
  if (hero.profileImage) {
    document.getElementById('hero-profile-img').src = hero.profileImage;
    document.getElementById('hero-profile-img').alt = hero.name;
  }
}

/* ─── RENDER: ABOUT ──────────────────────────────────────── */
function renderAbout(data) {
  const { about } = data;
  document.getElementById('about-title').textContent = about.title;
  document.getElementById('about-paragraphs').innerHTML = about.paragraphs.map(p => `<p>${esc(p)}</p>`).join('');
  if (about.stats) {
    document.getElementById('about-stats').innerHTML = about.stats.map(s => `
      <div class="stat-card">
        <div class="stat-number accent">${esc(s.number)}</div>
        <div class="stat-label">${esc(s.label)}</div>
      </div>
    `).join('');
  }
}

/* ─── RENDER: SKILLS ─────────────────────────────────────── */
function renderSkills(data) {
  const html = data.skills.map(group => `
    <div class="skill-group">
      <div class="skill-group-header">
        <div class="skill-group-icon">${iconOutline(SKILL_GROUP_ICONS[group.icon] || '', 24)}</div>
        <h3>${esc(group.group)}</h3>
      </div>
      <ul class="skill-list">
        ${group.items.map(item => `<li class="skill-item">${esc(item)}</li>`).join('')}
      </ul>
    </div>
  `).join('');
  document.getElementById('skills-grid').innerHTML = html;
}

/* ─── RENDER: PROJECTS (Supports Images & Video) ────────── */
function renderProjects(data) {
  const cards = data.projects.map(p => {
    let mediaHtml = '';
    if (p.isVideo) {
      mediaHtml = `<video controls poster="${esc(p.poster || '')}">
        <source src="${esc(p.mediaSrc)}" type="video/mp4" />
        Your browser does not support the video tag.
      </video>`;
    } else {
      mediaHtml = `<img src="${esc(p.mediaSrc)}" alt="${esc(p.title)}" />`;
    }

    return `
      <article class="project-card">
        <div class="project-media-wrap">
          ${mediaHtml}
        </div>
        <div class="project-content">
          <h3 class="project-title">${esc(p.title)}</h3>
          <p class="project-desc">${esc(p.desc)}</p>
        </div>
      </article>
    `;
  }).join('');

  document.getElementById('projects-grid').innerHTML = cards;
}

/* ─── RENDER: EDUCATION ──────────────────────────────────── */
function renderEducation(data) {
  const html = data.education.map(e => `
    <div class="edu-card">
      <div class="edu-icon">${iconOutline(ICONS[e.icon] || ICONS.cap, 28)}</div>
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

/* ─── RENDER: CONTACT & FOOTER ───────────────────────────── */
function renderContact(data) {
  const { contact, social } = data;
  document.getElementById('contact-intro').textContent = contact.intro;

  const linksHtml = `
    <a href="${social.behance}" target="_blank" rel="noopener noreferrer" class="btn">${socialSvg('behance', 16)} Behance</a>
    <a href="${social.instagram}" target="_blank" rel="noopener noreferrer" class="btn">${socialSvg('instagram', 16)} Instagram</a>
    <a href="mailto:${social.email}" class="btn">${socialSvg('email', 16)} Email</a>
  `;

  document.getElementById('contact-links').innerHTML = linksHtml;
  document.getElementById('footer-links').innerHTML = linksHtml;

  document.getElementById('message-options').innerHTML = `
    <a href="mailto:${social.email}?subject=Motion%20Design%20Project" class="msg-chip" style="display:inline-block; margin:4px; padding:6px 12px; background:rgba(27,46,40,0.1); border-radius:4px;">🎬 Motion Design</a>
    <a href="mailto:${social.email}?subject=Branding%20Inquiry" class="msg-chip" style="display:inline-block; margin:4px; padding:6px 12px; background:rgba(27,46,40,0.1); border-radius:4px;">🎨 Visual Identity</a>
  `;
}

/* ─── INTERACTIVE CONTROLS ───────────────────────────────── */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
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

/* ─── INITIALIZATION ─────────────────────────────────────── */
async function boot() {
  try {
    const res = await fetch('assets/data.json');
    const data = await res.json();

    renderHero(data);
    renderAbout(data);
    renderSkills(data);
    renderProjects(data);
    renderEducation(data);
    renderContact(data);
  } catch (err) {
    console.error('Failed to fetch assets/data.json. Ensure it is hosted on a web server or local host server.', err);
  }

  initMobileMenu();
  initSmoothScroll();
}

boot();