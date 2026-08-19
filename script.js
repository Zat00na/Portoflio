/* ============================================================
   Abdallah Ahmed — Animator & Graphic Designer
   Portfolio Script (Data-Driven with Direct PNG & Media Support)
   ============================================================ */

/* ─── DEFAULT FALLBACK DATA ─────────────────────────────── */
const DEFAULT_DATA = {
  hero: {
    nameLine1: "Abdallah",
    nameLine2: "Ahmed",
    badge: "Animator & Graphic Designer",
    tagline: "Bringing ideas to life through dynamic 2D/3D animation, kinetic motion design, and distinctive visual brand identities.",
    profileImage: "assets/profile.png"
  },
  social: {
    behance: "https://www.behance.net/abdallahahmed",
    instagram: "https://www.instagram.com/abdallah.designs",
    linkedin: "https://www.linkedin.com/in/abdallah-ahmed-design",
    email: "abdallah.ahmed.anim@gmail.com"
  },
  about: {
    titleHtml: "Designing Worlds in <span class=\"accent\">Motion</span> &amp; Form",
    paragraphs: [
      "I am an Animator and Graphic Designer specializing in character animation, 3D motion design, kinetic typography, and comprehensive brand identity systems.",
      "With over 6 years of experience across commercial campaigns, game cinematics, and brand systems, I bridge the gap between creative visual artistry and strategic communication.",
      "Whether directing a full-length animated explainer or crafting bespoke graphic identity assets, I focus on rhythm, emotion, and aesthetic precision."
    ],
    stats: [
      { number: "60+", label: "Projects Completed" },
      { number: "6+", label: "Years Experience" },
      { number: "30+", label: "Brand Identities" },
      { number: "100%", label: "Creative Focus" }
    ]
  },
  skills: [
    {
      group: "Animation & Motion",
      icon: "film",
      items: [
        { name: "After Effects" },
        { name: "2D Character Animation" },
        { name: "Toon Boom Harmony" },
        { name: "Kinetic Typography" },
        { name: "Lottie / Web Animation" }
      ]
    },
    {
      group: "3D Art & VFX",
      icon: "cube",
      items: [
        { name: "Blender 3D" },
        { name: "Cinema 4D" },
        { name: "Lighting & Shading" },
        { name: "Octane & Cycles" },
        { name: "3D Camera Tracking" }
      ]
    },
    {
      group: "Graphic & Brand Design",
      icon: "palette",
      items: [
        { name: "Adobe Illustrator" },
        { name: "Adobe Photoshop" },
        { name: "Visual Identity Systems" },
        { name: "Poster & Editorial Design" },
        { name: "Packaging & Merch" }
      ]
    },
    {
      group: "Direction & Storytelling",
      icon: "sparkles",
      items: [
        { name: "Storyboarding & Animatic" },
        { name: "Concept & Color Scripting" },
        { name: "Visual Development" },
        { name: "Sound Design & Sync" },
        { name: "Styleframes & Pitching" }
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Chronicles of Aethel — 3D Animation Reel",
      tag: "3D Animation / Reel",
      desc: "A dynamic 3D animation showcase highlighting character rigging, dramatic camera direction, and lighting in Blender.",
      tech: ["Blender 3D", "Cinema 4D", "Octane", "After Effects"],
      video: "https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-devices-99786-large.mp4",
      poster: "assets/project1-thumb.png",
      image: "assets/project1-thumb.png",
      behance: "https://www.behance.net/gallery/190001/Chronicles-of-Aethel",
      instagram: "https://www.instagram.com/p/example1"
    },
    {
      id: "proj-2",
      title: "Veloce Motion Identity & Kinetic Launch",
      tag: "Motion Design",
      desc: "Energetic typography animations and futuristic motion graphics package for a high-performance EV brand.",
      tech: ["After Effects", "Illustrator", "Cinema 4D", "Premiere Pro"],
      video: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-charts-and-data-31913-large.mp4",
      poster: "assets/project2-thumb.png",
      image: "assets/project2-thumb.png",
      behance: "https://www.behance.net/gallery/190002/Veloce-Motors",
      instagram: "https://www.instagram.com/p/example2"
    },
    {
      id: "proj-3",
      title: "Solaris Energy — 2D Character Explainer",
      tag: "2D Animation",
      desc: "Handcrafted character animation and vector motion graphics explaining clean renewable energy systems.",
      tech: ["Toon Boom", "After Effects", "Illustrator", "Audition"],
      video: "https://assets.mixkit.co/videos/preview/mixkit-geometric-animation-with-neon-shapes-and-lines-41584-large.mp4",
      poster: "assets/project3-thumb.png",
      image: "assets/project3-thumb.png",
      behance: "https://www.behance.net/gallery/190003/Solaris-Explainer",
      instagram: "https://www.instagram.com/p/example3"
    },
    {
      id: "proj-4",
      title: "Aura Botanic — Luxury Identity & Packaging",
      tag: "Brand & Graphic Design",
      desc: "Comprehensive visual identity, bespoke serif typography, gold-foil packaging layout, and 3D renders.",
      tech: ["Illustrator", "Photoshop", "Blender", "Brand Strategy"],
      images: [
        "assets/project4-img1.png",
        "assets/project4-img2.png"
      ],
      behance: "https://www.behance.net/gallery/190004/Aura-Botanic",
      instagram: "https://www.instagram.com/p/example4"
    }
  ],
  education: [
    {
      degree: "Bachelor of Fine Arts (B.F.A.) in Digital Arts & Animation",
      school: "Faculty of Fine Arts & Applied Arts",
      year: "2018 — 2022",
      desc: "Graduated with honors. Specialized in 2D/3D character animation, classical animation principles, visual communication, and storyboarding.",
      icon: "cap"
    },
    {
      degree: "Advanced 3D Motion Graphics & Visual Development",
      school: "School of Motion / CG Master Academy",
      year: "2023",
      desc: "Mastery in 3D cinematography, procedural texturing, advanced character rigging, and commercial styleframe direction.",
      icon: "monitor"
    }
  ],
  contact: {
    intro: "Have an animation reel, 3D commercial, or graphic design project in mind? Let's team up to build compelling visual experiences."
  }
};

/* ─── ICON LIBRARY ───────────────────────────────────────── */
const ICONS = {
  cap:     '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
  film:    '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/>',
  cube:    '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
  palette: '<circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z"/>',
  sparkles:'<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>'
};

const SKILL_GROUP_ICONS = {
  film:     ICONS.film,
  cube:     ICONS.cube,
  palette:  ICONS.palette,
  sparkles: ICONS.sparkles
};

const SOCIAL_SVG = {
  behance: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.945 3-3.696 0-5.781-2.457-5.781-6 0-3.699 2.222-6 5.694-6 3.633 0 5.305 2.508 5.305 6 0 .346-.027.868-.047 1.054h-8.083c.121 1.982 1.347 3.097 2.946 3.097 1.285 0 2.213-.679 2.529-1.151h2.386zm-7.85-4.108h5.275c-.097-1.528-.962-2.736-2.585-2.736-1.558 0-2.484 1.107-2.69 2.736zm-10.876 7.108h-5v-14h5.688c2.404 0 4.312 1.037 4.312 3.513 0 1.408-.737 2.502-1.921 3.003 1.547.453 2.421 1.777 2.421 3.447 0 2.49-1.982 4.037-5.5 4.037zm-2.125-8.25h2.825c1.171 0 2.062-.511 2.062-1.688 0-1.04-.781-1.562-1.938-1.562h-2.949v3.25zm0 5.75h3.047c1.391 0 2.303-.594 2.303-1.875 0-1.328-.973-1.875-2.385-1.875h-2.965v3.75z"/></svg>',
  instagram: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
  linkedin: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  email: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>'
};

function socialSvg(name, size) {
  return (SOCIAL_SVG[name] || '').replace(/\{s\}/g, size);
}

const LOGO_SVG = (size) => `<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
  <circle cx="250" cy="250" r="180" fill="none" stroke="#1B2E28" stroke-width="80" stroke-linecap="round" stroke-dasharray="376.99 1130.97" transform="rotate(-90 250 250)"/>
  <circle cx="250" cy="250" r="180" fill="none" stroke="#D9581E" stroke-width="80" stroke-linecap="round" stroke-dasharray="376.99 1130.97" stroke-dashoffset="-376.99" transform="rotate(-90 250 250)"/>
  <circle cx="250" cy="250" r="180" fill="none" stroke="#253F37" stroke-width="80" stroke-linecap="round" stroke-dasharray="376.99 1130.97" stroke-dashoffset="-753.98" transform="rotate(-90 250 250)"/>
  <circle cx="250" cy="250" r="45" fill="#D9581E"/>
</svg>`;

function esc(str = '') {
  return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function iconOutline(pathData, size = 28) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="${size}" height="${size}">${pathData}</svg>`;
}

/* ─── NORMALIZE ANY MEDIA FORMAT IN DATA.JSON ────────────── */
function getProjectMediaList(p) {
  const list = [];

  // 1. If project has a video
  if (p.video || p.videoUrl) {
    list.push({
      type: 'video',
      src: p.video || p.videoUrl,
      poster: p.poster || p.thumbnail || p.image || ''
    });
  }

  // 2. If project has a single image (string)
  if (p.image && typeof p.image === 'string' && (!p.video || p.image !== p.poster)) {
    list.push({
      type: 'image',
      src: p.image,
      alt: p.title || 'Project image'
    });
  }

  // 3. If project has an array of images (strings or objects)
  if (p.images && Array.isArray(p.images)) {
    p.images.forEach(img => {
      if (typeof img === 'string') {
        list.push({ type: 'image', src: img, alt: p.title });
      } else if (img && typeof img === 'object' && img.src) {
        list.push({ type: 'image', src: img.src, alt: img.alt || p.title });
      }
    });
  }

  // 4. If project has explicit media array
  if (p.media && Array.isArray(p.media)) {
    p.media.forEach(m => {
      if (typeof m === 'string') {
        list.push({ type: 'image', src: m, alt: p.title });
      } else if (m && typeof m === 'object') {
        list.push(m);
      }
    });
  }

  // 5. Fallback if empty
  if (!list.length && (p.poster || p.thumbnail)) {
    list.push({
      type: 'image',
      src: p.poster || p.thumbnail,
      alt: p.title
    });
  }

  return list;
}

function renderMediaSlider(mediaList, projectId) {
  if (!mediaList || !mediaList.length) return '';

  const slidesHtml = mediaList.map((item, idx) => {
    const isActive = idx === 0 ? ' active' : '';
    if (item.type === 'video') {
      return `
        <div class="project-slide project-slide-video${isActive}" data-slide-index="${idx}">
          <video class="project-video" poster="${esc(item.poster || '')}" preload="metadata" playsinline loop controls>
            <source src="${esc(item.src || item.video || item.videoUrl)}" type="video/mp4">
            Your browser does not support HTML5 video.
          </video>
          <button class="project-video-btn" aria-label="Play Video" title="Play Video">
            <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </button>
        </div>`;
    }
    return `
      <div class="project-slide project-slide-image${isActive}" data-slide-index="${idx}">
        <img src="${esc(item.src)}" alt="${esc(item.alt || 'Project media')}" class="project-img" />
      </div>`;
  }).join('');

  const hasMultiple = mediaList.length > 1;
  const dotsHtml = hasMultiple ? `
    <div class="img-dots">
      ${mediaList.map((item, i) =>
        `<button class="dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Slide ${i + 1}"></button>`
      ).join('')}
    </div>` : '';

  const navBtns = hasMultiple ? `
    <button class="project-nav-btn project-nav-prev" aria-label="Previous Slide">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18"><path d="M15 18l-6-6 6-6"/></svg>
    </button>
    <button class="project-nav-btn project-nav-next" aria-label="Next Slide">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18"><path d="M9 18l6-6-6-6"/></svg>
    </button>` : '';

  return `
    <div class="project-slides" data-project-id="${esc(projectId)}">
      ${slidesHtml}
      ${dotsHtml}
      ${navBtns}
    </div>`;
}

/* ─── RENDER: HERO ───────────────────────────────────────── */
function renderHero(data) {
  const { hero, social } = data;
  document.getElementById('hero-badge-text').textContent = hero.badge;
  document.getElementById('hero-name').innerHTML = `${esc(hero.nameLine1)}<br /><span class="accent">${esc(hero.nameLine2)}</span>`;
  document.getElementById('hero-tagline').textContent = hero.tagline;
  
  const heroImg = document.getElementById('hero-profile-img');
  if (heroImg) {
    heroImg.src = hero.profileImage || 'assets/profile.png';
    heroImg.alt = `${hero.nameLine1} ${hero.nameLine2}`;
  }

  document.getElementById('hero-cta').innerHTML = `
    <a href="#projects" class="btn btn-primary">View Featured Work</a>
    <a href="${esc(social.behance)}" target="_blank" rel="noopener" class="btn btn-ghost">${socialSvg('behance', 18)}Behance</a>
    <a href="${esc(social.instagram)}" target="_blank" rel="noopener" class="btn btn-ghost">${socialSvg('instagram', 18)}Instagram</a>
    <a href="mailto:${esc(social.email)}" class="btn btn-ghost">${socialSvg('email', 18)}Email</a>
  `;
}

/* ─── RENDER: ABOUT ──────────────────────────────────────── */
function renderAbout(data) {
  const { about } = data;
  document.getElementById('about-title').innerHTML = about.titleHtml;
  document.getElementById('about-paragraphs').innerHTML = about.paragraphs.map(p => `<p>${esc(p)}</p>`).join('');
  document.getElementById('about-stats').innerHTML = about.stats.map(s => `
    <div class="stat-card">
      <div class="stat-number">${esc(s.number)}</div>
      <div class="stat-label">${esc(s.label)}</div>
    </div>
  `).join('');
}

/* ─── RENDER: SKILLS ─────────────────────────────────────── */
function renderSkills(data) {
  const html = data.skills.map(group => `
    <div class="skill-group">
      <div class="skill-group-header">
        <div class="skill-group-icon">
          ${iconOutline(SKILL_GROUP_ICONS[group.icon] || ICONS.sparkles, 20)}
        </div>
        <h3>${esc(group.group)}</h3>
      </div>
      <ul class="skill-list">
        ${group.items.map(item => `
          <li class="skill-item">
            <span class="skill-dot"></span>
            <span>${esc(item.name)}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
  document.getElementById('skills-grid').innerHTML = html;
}

/* ─── RENDER: PROJECTS ───────────────────────────────────── */
function renderProjects(data) {
  const cards = data.projects.map(p => {
    const mediaList = getProjectMediaList(p);
    const mediaSliderHtml = renderMediaSlider(mediaList, p.id || p.title);

    const behanceBtn = p.behance ? `
      <a href="${esc(p.behance)}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
        ${socialSvg('behance', 16)}Behance Project
      </a>` : '';

    const instaBtn = p.instagram ? `
      <a href="${esc(p.instagram)}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm">
        ${socialSvg('instagram', 16)}Instagram Reel
      </a>` : '';

    const techTags = (p.tech || []).map(t => `<span class="tech-tag">${esc(t)}</span>`).join('');

    return `
      <article class="project-card">
        <div class="project-media-container">
          ${mediaSliderHtml}
          <div class="project-overlay"><span class="project-overlay-tag">${esc(p.tag || 'Project')}</span></div>
        </div>
        <div class="project-body">
          <h3 class="project-title">${esc(p.title)}</h3>
          <p class="project-desc">${esc(p.desc || '')}</p>
          <div class="project-tech">${techTags}</div>
          <div class="project-actions">
            ${behanceBtn}
            ${instaBtn}
          </div>
        </div>
      </article>
    `;
  }).join('');

  const placeholder = `
    <article class="project-card project-card-placeholder">
      <div class="placeholder-inner">
        <div class="placeholder-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="32" height="32">
            <path d="M12 5v14M5 12h14"/>
          </svg>
        </div>
        <p>More Animation &amp; Motion Reels in Production</p>
      </div>
    </article>`;

  document.getElementById('projects-grid').innerHTML = cards + placeholder;
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

/* ─── RENDER: CONTACT ────────────────────────────────────── */
function renderContact(data) {
  const { contact, social } = data;
  document.getElementById('contact-intro').textContent = contact.intro;
  document.getElementById('contact-links').innerHTML = `
    <a href="mailto:${esc(social.email)}" class="contact-link">
      <div class="contact-link-icon">${socialSvg('email', 22)}</div>
      <div>
        <div class="contact-link-label">Email</div>
        <div class="contact-link-value">${esc(social.email)}</div>
      </div>
    </a>
    <a href="${esc(social.behance)}" target="_blank" rel="noopener" class="contact-link">
      <div class="contact-link-icon">${socialSvg('behance', 22)}</div>
      <div>
        <div class="contact-link-label">Behance Portfolio</div>
        <div class="contact-link-value">behance.net/abdallahahmed</div>
      </div>
    </a>
    <a href="${esc(social.instagram)}" target="_blank" rel="noopener" class="contact-link">
      <div class="contact-link-icon">${socialSvg('instagram', 22)}</div>
      <div>
        <div class="contact-link-label">Instagram</div>
        <div class="contact-link-value">@abdallah.designs</div>
      </div>
    </a>
  `;

  document.getElementById('message-options').innerHTML = `
    <a href="mailto:${esc(social.email)}?subject=Animation%20Project%20Inquiry" class="msg-chip">🎬 An animation project / reel</a>
    <a href="mailto:${esc(social.email)}?subject=Brand%20Identity%20%26%20Design" class="msg-chip">🎨 Brand identity &amp; visual design</a>
    <a href="mailto:${esc(social.email)}?subject=Creative%20Collaboration" class="msg-chip">🤝 Creative collaboration</a>
  `;
}

/* ─── RENDER: BRAND & FOOTER ─────────────────────────────── */
function renderBrand(data) {
  const navSvg = document.getElementById('nav-logo-svg');
  if (navSvg) navSvg.innerHTML = LOGO_SVG(34);

  const heroSvg = document.getElementById('hero-badge-svg');
  if (heroSvg) heroSvg.innerHTML = LOGO_SVG(16);

  const msgSvg = document.getElementById('message-panel-svg');
  if (msgSvg) msgSvg.innerHTML = LOGO_SVG(24);

  const footerSvg = document.getElementById('footer-logo-svg');
  if (footerSvg) footerSvg.innerHTML = LOGO_SVG(28);

  const { social } = data;
  document.getElementById('footer-links').innerHTML = `
    <a href="${esc(social.behance)}" target="_blank" rel="noopener">${socialSvg('behance', 16)}Behance</a>
    <a href="${esc(social.instagram)}" target="_blank" rel="noopener">${socialSvg('instagram', 16)}Instagram</a>
    <a href="${esc(social.linkedin)}" target="_blank" rel="noopener">${socialSvg('linkedin', 16)}LinkedIn</a>
    <a href="mailto:${esc(social.email)}">${socialSvg('email', 16)}Email</a>
  `;
}

/* ─── INTERACTIVE BEHAVIORS (SLIDER & VIDEO) ──────────────── */
function initMultiMediaSliders() {
  document.querySelectorAll('.project-card').forEach(card => {
    const slides = card.querySelectorAll('.project-slide');
    const dots   = card.querySelectorAll('.dot');
    const prevBtn = card.querySelector('.project-nav-prev');
    const nextBtn = card.querySelector('.project-nav-next');
    if (!slides.length) return;

    let current = 0;

    function pauseCurrentVideo() {
      const activeVideo = slides[current].querySelector('video');
      if (activeVideo && !activeVideo.paused) {
        activeVideo.pause();
      }
    }

    function goToSlide(idx) {
      if (idx === current || idx < 0 || idx >= slides.length) return;
      pauseCurrentVideo();
      slides[current].classList.remove('active');
      if (dots[current]) dots[current].classList.remove('active');

      current = idx;
      slides[current].classList.add('active');
      if (dots[current]) dots[current].classList.add('active');
    }

    if (dots.length) {
      dots.forEach((dot, i) => {
        dot.addEventListener('click', (e) => {
          e.stopPropagation();
          goToSlide(i);
        });
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const nextIdx = (current - 1 + slides.length) % slides.length;
        goToSlide(nextIdx);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const nextIdx = (current + 1) % slides.length;
        goToSlide(nextIdx);
      });
    }

    slides.forEach(slide => {
      const video = slide.querySelector('.project-video');
      const btn   = slide.querySelector('.project-video-btn');
      if (!video || !btn) return;

      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      });

      video.addEventListener('play', () => {
        btn.style.opacity = '0';
        btn.style.pointerEvents = 'none';
      });

      video.addEventListener('pause', () => {
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
      });
    });
  });
}

function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  if (!hamburger || !navLinks) return;

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

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 75,
          behavior: 'smooth'
        });
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

async function boot() {
  let data = DEFAULT_DATA;
  try {
    const res = await fetch('assets/data.json');
    if (res.ok) {
      data = await res.json();
    }
  } catch (err) {
    console.info('Using local embedded data bundle for offline/file preview mode.');
  }

  renderBrand(data);
  renderHero(data);
  renderAbout(data);
  renderSkills(data);
  renderProjects(data);
  renderEducation(data);
  renderContact(data);

  initMobileMenu();
  initActiveNav();
  initMultiMediaSliders();
  initSmoothScroll();
  initParallax();
}

boot();
