/* =====================================================================
   Tulsi — galaxy / anime site script (shared by every page)
   1 Settings · 2 Page shell · 3 Space (stars, warp, meteors)
   4 Hero galaxy · 5 Page transitions · 6 UI effects · 7 Page features
   ===================================================================== */

/* 1 ── SETTINGS — edit these and every page updates ─────────────────── */
const SITE = {
  name: 'Tulsi',
  tagline: 'Software & website development unit',
  email: 'tulsi_college@rediffmail.com',
  phone: '+91 9310666651',
  address: 'Adarsh Nagar, DP Road Beed - 431122  Maharashtra',
  hours: 'Mon–Sat, 10:00–19:00',
};
const NAV = [
  ['index.html', 'Home', 'home'],
  ['about.html', 'About', 'about'],
  ['services.html', 'Services', 'services'],
  ['team.html', 'Team', 'team'],
  ['project.html', 'Clients', 'project'],
  ['gallery.html', 'Gallery', 'gallery'],
  ['contact.html', 'Contact', 'contact'],
];
/* Gallery items. To use a real screenshot add:  img: 'images/my-project.jpg'  */
const GALLERY = [
  { title: 'Orbit Retail Storefront', tag: 'Websites', cat: 'websites', ratio: '4/3', img: 'assets/img/pwr-website.jpg', c: ['#2b1a7a', '#7b4dff', '#ff5fa2'], desc: 'A fast online store with a visual product explorer and one-page checkout.' },
  { title: 'NovaMed Booking App', tag: 'Apps', cat: 'apps', ratio: '4/5', c: ['#06335a', '#1a8fe0', '#35e0ff'], px: 48, desc: 'Patients book, reschedule and pay for appointments from their phone.' },
  { title: 'Kite Logistics Dashboard', tag: 'Dashboards', cat: 'dashboards', ratio: '1/1', c: ['#1b0f4a', '#5b3cff', '#35e0ff'], desc: 'Live fleet tracking, delivery status and weekly reports in one screen.' },
  { title: 'Lumen Academy Portal', tag: 'Websites', cat: 'websites', ratio: '4/5', c: ['#4a1260', '#c23b9a', '#ffd36b'], px: 40, desc: 'Course catalogue, student login and progress tracking for an online academy.' },
  { title: 'Pixel Bazaar Marketplace', tag: 'Websites', cat: 'websites', ratio: '16/10', c: ['#10163f', '#3a46d8', '#ff5fa2'], desc: 'A multi-vendor marketplace with seller dashboards and secure payments.' },
  { title: 'SkyNest Realty Listings', tag: 'Websites', cat: 'websites', ratio: '4/3', c: ['#0b3a4a', '#1fa3a3', '#ffd36b'], px: 50, desc: 'Property search with map filters, saved homes and enquiry forms.' },
  { title: 'Harbor & Co Brand Kit', tag: 'Branding', cat: 'branding', ratio: '1/1', c: ['#3a0f3f', '#ff5fa2', '#ffd36b'], desc: 'Logo, colour system and a reusable component library for a trading firm.' },
  { title: 'GreenLeaf Delivery App', tag: 'Apps', cat: 'apps', ratio: '4/5', c: ['#0d3b2e', '#22b07a', '#d4ff8a'], px: 44, desc: 'Order tracking and repeat ordering for a fresh-food delivery service.' },
  { title: 'Aurora Analytics', tag: 'Dashboards', cat: 'dashboards', ratio: '16/10', c: ['#190b4d', '#7b4dff', '#35e0ff'], desc: 'Sales and marketing numbers turned into clear, shareable charts.' },
  { title: 'Comet Café Identity', tag: 'Branding', cat: 'branding', ratio: '4/5', c: ['#4a1d0b', '#e0662a', '#ffd36b'], px: 38, desc: 'Brand identity, menu design and a small ordering website for a local café.' },
  { title: 'Zenith Fitness Tracker', tag: 'Apps', cat: 'apps', ratio: '4/3', c: ['#220b52', '#a53bff', '#ff5fa2'], desc: 'Workout plans, streaks and progress photos in a mobile-first app.' },
  { title: 'Starlight Studio Portfolio', tag: 'Websites', cat: 'websites', ratio: '1/1', c: ['#0b1450', '#2f5bff', '#c9f7ff'], desc: 'An animated portfolio site for a photography and film studio.' },
];

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const page = document.body.dataset.page;

/* 2 ── PAGE SHELL: background layers, header, footer ───────────────── */
(function buildShell() {
  const cosmos = document.createElement('div');
  cosmos.className = 'cosmos';
  cosmos.setAttribute('aria-hidden', 'true');
  cosmos.innerHTML = `
    <div class="nebula"><i></i><i></i><i></i></div>
    <canvas id="space"></canvas>
    <div class="planet-float p1"></div><div class="planet-float p2"></div><div class="planet-float p3"></div>`;
  document.body.prepend(cosmos);

  const extras = document.createElement('div');
  extras.setAttribute('aria-hidden', 'true');
  extras.innerHTML = `<div class="warp-flash"></div><div class="cursor-glow"></div><div id="progress"></div>`;
  document.body.append(extras);

  const links = NAV.map(([href, label, key]) =>
    `<li><a href="${href}"${key === page ? ' class="active" aria-current="page"' : ''}>${label}</a></li>`).join('');

  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `
    <div class="wrap nav">
    
<a class="brand" href="index.html" aria-label="PWR — home">
  <img src="assets/img/logo.png" alt="PWR Logo" class="brand-logo">

  
</a>

      <nav aria-label="Main">
        <ul class="nav-links" id="navLinks">${links}
          <li class="menu-cta"><a class="btn btn-primary" href="contact.html">Start a project</a></li>
        </ul>
      </nav>
      <a class="btn btn-primary nav-cta" href="contact.html">Start a project</a>
      <button class="burger" aria-label="Open menu" aria-expanded="false" aria-controls="navLinks"><span></span><span></span><span></span></button>
    </div>`;
  const skip = document.createElement('a');
  skip.className = 'skip-link'; skip.href = '#main'; skip.textContent = 'Skip to content';
  document.body.prepend(header);
  document.body.prepend(skip);

  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="wrap foot-grid">
      <div>
        <a class="brand" href="index.html"><span>${SITE.name}</span></a>
        <p>${SITE.tagline}. We design and build websites, apps and custom software that launch fast and keep running.</p>
      </div>
      <div><h4>Explore</h4><ul>${NAV.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join('')}</ul></div>
      <div><h4>Services</h4><ul>
        <li><a href="services.html">Website development</a></li><li><a href="services.html">Web applications</a></li>
        <li><a href="services.html">Mobile apps</a></li><li><a href="services.html">UI/UX design</a></li></ul></div>
      <div><h4>Contact</h4><ul>
        <li><a href="mailto:${SITE.email}">${SITE.email}</a></li><li><a href="tel:${SITE.phone.replace(/\s/g, '')}">${SITE.phone}</a></li>
        <li>${SITE.hours}</li></ul></div>
    </div>
    <div class="wrap foot-bottom"><p>© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.</p><button id="toTop" type="button">Back to top ↑</button></div>
    <div class="foot-mark" aria-hidden="true">${SITE.name}</div>`;
  document.body.append(footer);

  const main = $('main');
  if (main && !main.id) main.id = 'main';

  /* header: scroll state + mobile menu */
  const onScroll = () => {
    header.classList.toggle('scrolled', scrollY > 20);
    const max = document.documentElement.scrollHeight - innerHeight;
    $('#progress').style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    document.documentElement.style.setProperty('--sy', Math.round(scrollY));
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  const burger = $('.burger', header);
  const setMenu = open => {
    document.body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  burger.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  $$('.nav-links a', header).forEach(a => a.addEventListener('click', () => setMenu(false)));
  $('#toTop').addEventListener('click', () => scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));
})();

/* 3 ── SPACE: parallax stars that can "warp", plus shooting stars ───── */
const Space = (() => {
  const cv = $('#space'), ctx = cv.getContext('2d');
  const IDLE = 0.00035;                      // calm drifting speed
  const st = { speed: IDLE, target: IDLE };
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  const colors = ['#ffffff', '#cfe6ff', '#bda8ff', '#ffc2e0', '#9ff3ff', '#fff0b8'];
  let W = 0, H = 0, DPR = 1, cx = 0, cy = 0, fov = 0, stars = [], meteors = [], nextMeteor = 0, last = performance.now();

  const spawn = initial => ({
    x: (Math.random() * 2 - 1) * 1.3, y: (Math.random() * 2 - 1) * 1.3,
    z: initial ? Math.random() * 0.95 + 0.05 : 1,
    c: colors[(Math.random() * colors.length) | 0],
    tw: Math.random() * 2 + 0.6, ph: Math.random() * 6.28,
  });

  function resize() {
    const w = innerWidth, h = innerHeight;
    if (W && Math.abs(w - W) < 2 && Math.abs(h - H) < 140) return;   // ignore mobile URL-bar jitter
    W = w; H = h; DPR = Math.min(devicePixelRatio || 1, 2);
    cv.width = W * DPR; cv.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    cx = W / 2; cy = H / 2; fov = Math.max(W, H) * 0.5;
    stars = Array.from({ length: Math.min(850, Math.floor(W * H / 2600)) }, () => spawn(true));
    if (reduceMotion) draw(performance.now(), 0);
  }

  function addMeteor() {
    const a = Math.PI * 0.72 + Math.random() * 0.2, v = 9 + Math.random() * 6;
    meteors.push({
      x: W * (0.25 + Math.random() * 0.85), y: -10 + Math.random() * H * 0.25,
      vx: Math.cos(a) * v, vy: Math.sin(a) * v, v, life: 1, len: 90 + Math.random() * 90
    });
  }

  function draw(now, dt) {
    ctx.clearRect(0, 0, W, H);
    mouse.x += (mouse.tx - mouse.x) * 0.05; mouse.y += (mouse.ty - mouse.y) * 0.05;
    const ox = cx - mouse.x * 28, oy = cy - mouse.y * 18;
    const sp = st.speed * dt / 16.7;
    const streak = st.speed > 0.003;
    ctx.lineCap = 'round';

    for (const s of stars) {
      s.z -= sp;
      if (s.z <= 0.03) { Object.assign(s, spawn(false)); continue; }
      const k = fov / s.z, sx = ox + s.x * k, sy = oy + s.y * k;
      if (sx < -60 || sx > W + 60 || sy < -60 || sy > H + 60) { Object.assign(s, spawn(false)); continue; }
      const depth = 1 - s.z, size = 0.45 + depth * 2.2;
      const tw = reduceMotion ? 1 : 0.65 + 0.35 * Math.sin(now * 0.001 * s.tw + s.ph);
      ctx.globalAlpha = Math.min(1, depth * 6) * (0.35 + depth * 0.65) * tw;
      if (streak) {
        const k2 = fov / (s.z + sp * 6);
        ctx.strokeStyle = s.c; ctx.lineWidth = size;
        ctx.beginPath(); ctx.moveTo(ox + s.x * k2, oy + s.y * k2); ctx.lineTo(sx, sy); ctx.stroke();
      } else {
        ctx.fillStyle = s.c; ctx.beginPath(); ctx.arc(sx, sy, size * 0.55, 0, 6.2832); ctx.fill();
      }
    }
    ctx.globalAlpha = 1;

    if (reduceMotion) return;
    if (now > nextMeteor) { addMeteor(); nextMeteor = now + 2500 + Math.random() * 4500; }
    const f = dt / 16.7;
    meteors = meteors.filter(m => {
      m.x += m.vx * f; m.y += m.vy * f; m.life -= 0.011 * f;
      if (m.life <= 0 || m.x < -200 || m.y > H + 200) return false;
      const tx = m.x - (m.vx / m.v) * m.len, ty = m.y - (m.vy / m.v) * m.len;
      const g = ctx.createLinearGradient(m.x, m.y, tx, ty);
      g.addColorStop(0, `rgba(255,255,255,${m.life})`); g.addColorStop(1, 'rgba(120,180,255,0)');
      ctx.strokeStyle = g; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(m.x, m.y); ctx.lineTo(tx, ty); ctx.stroke();
      return true;
    });
  }

  function loop(now) {
    const dt = Math.min(50, now - last); last = now;
    const tau = st.target > st.speed ? 180 : 650;           // speeds up fast, slows down smoothly
    st.speed += (st.target - st.speed) * (1 - Math.exp(-dt / tau));
    draw(now, dt);
    requestAnimationFrame(loop);
  }

  resize();
  addEventListener('resize', resize);
  if (!reduceMotion) { nextMeteor = performance.now() + 2500; requestAnimationFrame(loop); }

  return {
    warpIn() { if (!reduceMotion) { st.speed = 0.085; st.target = IDLE; } },
    warpOut() { st.target = 0.14; },
    idle() { st.target = IDLE; },
    look(x, y) { mouse.tx = x; mouse.ty = y; },
  };
})();

/* 4 ── HERO GALAXY (spiral made of ~2,600 stars, home page only) ────── */
(function galaxy() {
  const cv = $('#galaxy'); if (!cv) return;
  const ctx = cv.getContext('2d');
  const cols = [[255, 238, 200], [255, 170, 210], [255, 95, 162], [150, 110, 255], [53, 224, 255]];
  const COUNT = innerWidth < 700 ? 1400 : 2600;
  const pts = [];
  for (let i = 0; i < COUNT; i++) {
    const r = Math.pow(Math.random(), 0.72);
    const spread = (Math.random() + Math.random() + Math.random() - 1.5) * (0.35 * (1 - r) + 0.12);
    const ci = r < 0.12 ? 0 : r < 0.3 ? 1 : r < 0.55 ? (Math.random() < 0.5 ? 2 : 3) : (Math.random() < 0.6 ? 3 : 4);
    const [R, G, B] = cols[ci];
    pts.push({
      r, a: (i % 3) * (Math.PI * 2 / 3) + r * 4.2 + spread * 1.6, s: Math.random() * 1.6 + 0.4,
      fill: `rgba(${R},${G},${B},${(0.35 + Math.random() * 0.55).toFixed(2)})`
    });
  }
  let S = 0, DPR = 1, visible = true, tiltX = 0, tiltY = 0;
  const size = () => {
    DPR = Math.min(devicePixelRatio || 1, 2);
    S = cv.clientWidth; cv.width = cv.height = S * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  };
  size(); addEventListener('resize', size);
  new IntersectionObserver(e => { visible = e[0].isIntersecting; }).observe(cv);
  addEventListener('pointermove', e => { tiltX = (e.clientX / innerWidth - 0.5) * 0.25; tiltY = (e.clientY / innerHeight - 0.5) * 0.12; }, { passive: true });

  function draw(t) {
    ctx.clearRect(0, 0, S, S);
    ctx.globalCompositeOperation = 'lighter';
    const c = S / 2, R = S * 0.46, squash = 0.5 + tiltY, rot = -0.35 + tiltX;
    const cr = Math.cos(rot), sr = Math.sin(rot);
    const g = ctx.createRadialGradient(c, c, 0, c, c, R * 0.4);
    g.addColorStop(0, 'rgba(255,232,190,.9)'); g.addColorStop(0.35, 'rgba(255,120,190,.3)'); g.addColorStop(1, 'rgba(123,77,255,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, S, S);
    for (const p of pts) {
      const ang = p.a + t * 0.00018 * (1.6 / (0.25 + p.r));        // inner stars orbit faster
      const x = Math.cos(ang) * p.r * R, y = Math.sin(ang) * p.r * R * squash;
      ctx.fillStyle = p.fill;
      ctx.fillRect(c + x * cr - y * sr, c + x * sr + y * cr, p.s, p.s);
    }
    ctx.globalCompositeOperation = 'source-over';
  }
  (function frame(t) { if (visible || reduceMotion) draw(t); if (!reduceMotion) requestAnimationFrame(frame); })(0);
})();

/* 5 ── PAGE TRANSITIONS: hyperspace jump between pages ──────────────── */
Space.warpIn();
addEventListener('pageshow', e => {
  if (e.persisted) { document.documentElement.classList.remove('warping'); Space.idle(); Space.warpIn(); }
});
document.addEventListener('click', e => {
  const a = e.target.closest('a[href]');
  if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
  const href = a.getAttribute('href');
  if (a.target === '_blank' || a.hasAttribute('download') || /^(#|mailto:|tel:|javascript:)/.test(href)) return;
  if (a.protocol !== location.protocol || a.host !== location.host) return;
  if (!/(\.html?|\/)$/.test(a.pathname)) return;
  if (a.pathname === location.pathname) return;
  e.preventDefault();
  if (reduceMotion) { location.href = a.href; return; }
  document.documentElement.classList.add('warping');
  Space.warpOut();
  setTimeout(() => { location.href = a.href; }, 650);
});

/* 6 ── UI EFFECTS ───────────────────────────────────────────────────── */
(function effects() {
  /* pointer: star parallax, planet parallax, cursor glow */
  const glow = $('.cursor-glow'), fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  let raf = 0;
  addEventListener('pointermove', e => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      const nx = (e.clientX / innerWidth - 0.5) * 2, ny = (e.clientY / innerHeight - 0.5) * 2;
      Space.look(nx, ny);
      document.documentElement.style.setProperty('--mx', nx.toFixed(3));
      document.documentElement.style.setProperty('--my', ny.toFixed(3));
      if (fine && glow) { glow.classList.add('on'); glow.style.transform = `translate(${e.clientX}px,${e.clientY}px)`; }
    });
  }, { passive: true });

  /* click sparkles */
  if (!reduceMotion) addEventListener('pointerdown', e => {
    if (e.target.closest('input,textarea,select')) return;
    const pal = ['#35e0ff', '#ff5fa2', '#ffd36b', '#ffffff', '#b79bff'];
    for (let i = 0; i < 9; i++) {
      const s = document.createElement('span'), a = (i / 9) * 6.283 + Math.random() * 0.5, d = 40 + Math.random() * 50;
      s.className = 'spark';
      s.style.cssText = `left:${e.clientX - 5}px;top:${e.clientY - 5}px;--c:${pal[i % 5]};--dx:${Math.cos(a) * d}px;--dy:${Math.sin(a) * d}px`;
      document.body.append(s); setTimeout(() => s.remove(), 800);
    }
  });

  /* scroll reveal with stagger */
  $$('[data-stagger]').forEach(group => [...group.children].forEach((c, i) => {
    c.style.setProperty('--d', (i * 0.09).toFixed(2) + 's');
    if (!c.hasAttribute('data-reveal')) c.setAttribute('data-reveal', group.dataset.stagger || 'rise');
  }));
  const io = new IntersectionObserver(list => list.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  }), { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
  $$('[data-reveal]').forEach(el => io.observe(el));

  /* animated counters */
  const cio = new IntersectionObserver(list => list.forEach(en => {
    if (!en.isIntersecting) return;
    cio.unobserve(en.target);
    const el = en.target, end = +el.dataset.count, suf = el.dataset.suffix || '', t0 = performance.now(), dur = 1800;
    const tick = t => {
      const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(end * e) + suf;
      if (p < 1 && !reduceMotion) requestAnimationFrame(tick); else el.textContent = end + suf;
    };
    requestAnimationFrame(tick);
  }), { threshold: 0.6 });
  $$('[data-count]').forEach(el => cio.observe(el));

  /* spotlight + 3D tilt on cards */
  $$('.panel,.crew,.shot').forEach(el => {
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      el.style.setProperty('--mx', x + 'px'); el.style.setProperty('--my', y + 'px');
      if (el.hasAttribute('data-tilt') && !reduceMotion)
        el.style.transform = `perspective(800px) rotateX(${((y / r.height) - 0.5) * -9}deg) rotateY(${((x / r.width) - 0.5) * 9}deg) translateY(-4px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });

  /* rotating hero word */
  const rot = $('#rotator');
  if (rot && !reduceMotion) {
    const words = rot.dataset.words.split(','); let i = 0;
    setInterval(() => {
      rot.classList.add('out');
      setTimeout(() => { i = (i + 1) % words.length; rot.textContent = words[i]; rot.classList.remove('out'); }, 350);
    }, 2400);
  }

  /* seamless marquee */
  $$('.marquee-track').forEach(t => { t.innerHTML += t.innerHTML; });
})();

/* 7 ── PAGE FEATURES ────────────────────────────────────────────────── */

/* project: testimonial carousel */
(function quotes() {
  const box = $('.quotes'); if (!box) return;
  const slides = $$('.quote-card', box), dotsBox = $('.dots');
  let i = 0, timer;
  const dots = slides.map((_, n) => {
    const b = document.createElement('button');
    b.type = 'button'; b.setAttribute('aria-label', `Show testimonial ${n + 1}`);
    b.addEventListener('click', () => { go(n); restart(); });
    dotsBox.append(b); return b;
  });
  function go(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => { s.classList.toggle('active', k === i); s.setAttribute('aria-hidden', k !== i); });
    dots.forEach((d, k) => d.classList.toggle('active', k === i));
  }
  const restart = () => { clearInterval(timer); if (!reduceMotion) timer = setInterval(() => go(i + 1), 6500); };
  box.parentElement.addEventListener('pointerenter', () => clearInterval(timer));
  box.parentElement.addEventListener('pointerleave', restart);
  go(0); restart();
})();

/* Gallery: filters + lightbox */
(function gallery() {
  const grid = $('#galleryGrid'); if (!grid) return;
  const art = g => g.img
    ? `<img src="${g.img}" alt="${g.title}" loading="lazy">`
    : `<div class="art" style="--c1:${g.c[0]};--c2:${g.c[1]};--c3:${g.c[2]};--px:${g.px || 55}%;--py:${g.py || 14}%"><div class="ui"><i></i><i></i><i></i><b></b><b></b><b></b></div></div>`;
  grid.innerHTML = GALLERY.map((g, n) => `
    <button class="shot show" type="button" data-cat="${g.cat}" data-i="${n}" aria-label="Open ${g.title}">
      <div class="media" style="aspect-ratio:${g.ratio}">${art(g)}</div>
      <div class="cap"><span class="tag">${g.tag}</span><h3>${g.title}</h3></div>
    </button>`).join('');

  const shots = $$('.shot', grid);
  $$('.filter').forEach(btn => btn.addEventListener('click', () => {
    $$('.filter').forEach(b => { b.classList.toggle('active', b === btn); b.setAttribute('aria-pressed', b === btn); });
    shots.forEach(s => {
      const on = btn.dataset.filter === 'all' || s.dataset.cat === btn.dataset.filter;
      s.hidden = !on; s.classList.remove('show'); if (on) { void s.offsetWidth; s.classList.add('show'); }
    });
  }));

  const lb = document.createElement('div');
  lb.className = 'lightbox'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-label', 'Project preview');
  lb.innerHTML = `<div class="lb-card">
      <button class="lb-btn lb-close" type="button" aria-label="Close">✕</button>
      <div class="lb-art"></div>
      <div class="lb-info"><span class="tag"></span><h3></h3><p></p>
        <div class="lb-nav"><button class="lb-btn lb-prev" type="button" aria-label="Previous">←</button><button class="lb-btn lb-next" type="button" aria-label="Next">→</button></div>
      </div></div>`;
  document.body.append(lb);
  let cur = 0, opener = null;
  const visibleList = () => shots.filter(s => !s.hidden);
  function show(n) {
    const list = visibleList(); cur = (n + list.length) % list.length;
    const g = GALLERY[+list[cur].dataset.i];
    $('.lb-art', lb).innerHTML = art(g);
    $('.tag', lb).textContent = g.tag; $('h3', lb).textContent = g.title; $('p', lb).textContent = g.desc;
  }
  function open(btn) {
    opener = btn; show(visibleList().indexOf(btn));
    lb.classList.add('open'); document.body.style.overflow = 'hidden'; $('.lb-close', lb).focus();
  }
  function close() { lb.classList.remove('open'); document.body.style.overflow = ''; if (opener) opener.focus(); }
  shots.forEach(s => s.addEventListener('click', () => open(s)));
  $('.lb-close', lb).addEventListener('click', close);
  $('.lb-prev', lb).addEventListener('click', () => show(cur - 1));
  $('.lb-next', lb).addEventListener('click', () => show(cur + 1));
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(cur - 1);
    if (e.key === 'ArrowRight') show(cur + 1);
  });
})();

/* Contact: validation + launch animation */

(function contact() {
  const form = $('#contactForm');
  if (!form) return;

  const rules = {
    name: v =>
      v.trim().length >= 2 || 'Please enter your name.',

    email: v =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ||
      'Enter a valid email address, like name@company.com.',

    message: v =>
      v.trim().length >= 10 ||
      'Tell us a little more — at least 10 characters.',
  };

  const check = input => {
    const rule = rules[input.name];
    if (!rule) return true;

    const res = rule(input.value);
    const field = input.closest('.field');
    const ok = res === true;

    field.classList.toggle('error', !ok);
    $('.err', field).textContent = ok ? '' : res;
    input.setAttribute('aria-invalid', String(!ok));

    return ok;
  };

  // Live form validation
  $$('input, textarea', form).forEach(input => {
    input.addEventListener('blur', () => check(input));

    input.addEventListener('input', () => {
      if (input.closest('.field').classList.contains('error')) {
        check(input);
      }
    });
  });

  // EmailJS configuration
  const SERVICE_ID = 'service_gs3jgko';
  const TEMPLATE_ID = 'template_9pp10j9';
  const PUBLIC_KEY = 'p7BUvd_pOoofyg2VD';

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const bad = $$('input, textarea', form).filter(
      input => !check(input)
    );

    if (bad.length) {
      bad[0].focus();
      return;
    }

    // Check whether EmailJS SDK is loaded
    if (typeof emailjs === 'undefined') {
      alert('Email service is not loaded. Please refresh and try again.');
      return;
    }

    const btn = $('button[type="submit"]', form);
    const label = $('.btn-label', btn);

    btn.disabled = true;
    btn.classList.add('sending');
    label.textContent = 'Sending...';

    try {
      // Send form details through EmailJS
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form,
        { publicKey: PUBLIC_KEY }
      );

      // Show success screen only after successful sending
      form.reset();
      $('.form-wrap').classList.add('is-sent');
      $('.sent h3').focus();

    } catch (error) {
      console.error('EmailJS error:', error);
      alert(
        'Message could not be sent. Please check your EmailJS settings and try again.'
      );

    } finally {
      btn.disabled = false;
      btn.classList.remove('sending');
      label.textContent = 'Send message';
    }
  });

  // Send another message
  const again = $('#sendAnother');

  if (again) {
    again.addEventListener('click', () => {
      $('.form-wrap').classList.remove('is-sent');
      form.reset();

      // Clear previous validation errors
      $$('.field', form).forEach(field => {
        field.classList.remove('error');

        const err = $('.err', field);
        if (err) err.textContent = '';

        const input = $('input, textarea', field);
        if (input) input.removeAttribute('aria-invalid');
      });

      $('#name', form)?.focus();
    });
  }
})();
