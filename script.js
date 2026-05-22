/* ════════════════════════════════════════════
   KAPIL DEV PUDASAINI — PORTFOLIO v2
   Aesthetic: Editorial Brutalism × Cyberpunk
   Fonts: Bebas Neue (display) + Syne (body) + JetBrains Mono (code)
════════════════════════════════════════════ */

/* ── Variables ── */
:root {
  --ink:       #0a0a0a;
  --ink-2:     #111318;
  --ink-3:     #181d27;
  --paper:     #f4f1eb;
  --paper-2:   #ece9e2;
  --accent:    #e8f526;      /* electric lime */
  --accent-2:  #26f5e8;      /* cyan flash */
  --muted:     #5a6075;
  --muted-2:   #8892a4;
  --border:    rgba(255,255,255,0.07);
  --border-l:  rgba(0,0,0,0.09);
  --mono:      'JetBrains Mono', monospace;
  --display:   'Bebas Neue', 'Impact', sans-serif;
  --body:      'Syne', sans-serif;
  --ease:      cubic-bezier(0.16, 1, 0.3, 1);
}

/* ── Reset ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }
body {
  font-family: var(--body);
  background: var(--ink);
  color: var(--paper);
  line-height: 1.6;
  overflow-x: hidden;
  cursor: none;
}
a { text-decoration: none; color: inherit; }
ul { list-style: none; }
img { max-width: 100%; display: block; }

/* ── Custom cursor ── */
.cursor {
  position: fixed;
  width: 10px; height: 10px;
  background: var(--accent);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: transform 0.1s, width 0.2s, height 0.2s;
  mix-blend-mode: difference;
}
.cursor-trail {
  position: fixed;
  width: 36px; height: 36px;
  border: 1.5px solid rgba(232, 245, 38, 0.5);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  transition: left 0.12s var(--ease), top 0.12s var(--ease), transform 0.2s;
}
body:has(a:hover) .cursor,
body:has(button:hover) .cursor { width: 18px; height: 18px; }

/* ── Noise overlay ── */
.noise {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9997;
  opacity: 0.028;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* ── Container ── */
.container {
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* ── Buttons ── */
.btn-main {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: var(--accent);
  color: var(--ink);
  font-family: var(--body);
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.85rem 1.8rem;
  border: none;
  border-radius: 2px;
  cursor: none;
  transition: all 0.25s var(--ease);
  letter-spacing: 0.01em;
  position: relative;
  overflow: hidden;
}
.btn-main::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.2);
  transform: translateX(-100%);
  transition: transform 0.3s var(--ease);
}
.btn-main:hover::after { transform: translateX(0); }
.btn-main:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(232,245,38,0.3); }

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: transparent;
  color: var(--paper);
  font-family: var(--body);
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.85rem 1.8rem;
  border: 1.5px solid rgba(244,241,235,0.25);
  border-radius: 2px;
  cursor: none;
  transition: all 0.25s var(--ease);
}
.btn-ghost:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }

/* ══════════════════════
   NAVBAR
══════════════════════ */
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 500;
  padding: 1.4rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s var(--ease);
}
.nav.scrolled {
  background: rgba(10,10,10,0.92);
  backdrop-filter: blur(20px);
  padding: 1rem 2.5rem;
  border-bottom: 1px solid var(--border);
}
.nav-mark {
  font-family: var(--display);
  font-size: 1.9rem;
  color: var(--accent);
  letter-spacing: 0.06em;
  line-height: 1;
}
.nav-list {
  display: flex;
  gap: 2.5rem;
}
.nav-a {
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted-2);
  transition: color 0.2s;
  position: relative;
}
.nav-a::after {
  content: '';
  position: absolute;
  bottom: -3px; left: 0;
  width: 0; height: 1.5px;
  background: var(--accent);
  transition: width 0.25s var(--ease);
}
.nav-a:hover { color: var(--paper); }
.nav-a:hover::after, .nav-a.active::after { width: 100%; }
.nav-a.active { color: var(--accent); }

.menu-btn {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: none;
  padding: 4px;
}
.menu-btn span {
  display: block;
  width: 26px; height: 2px;
  background: var(--paper);
  transition: all 0.3s;
}
.menu-btn.open span:first-child { transform: translateY(8px) rotate(45deg); }
.menu-btn.open span:last-child  { transform: translateY(-8px) rotate(-45deg); }

/* Mobile menu */
.mobile-menu {
  position: fixed;
  inset: 0;
  background: var(--ink);
  z-index: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(100%);
  transition: transform 0.45s var(--ease);
}
.mobile-menu.open { transform: translateX(0); }
.mobile-menu ul { display: flex; flex-direction: column; gap: 2rem; text-align: center; }
.mm-link {
  font-family: var(--display);
  font-size: 3.5rem;
  color: var(--paper);
  letter-spacing: 0.08em;
  transition: color 0.2s;
}
.mm-link:hover { color: var(--accent); }

/* ══════════════════════
   HERO
══════════════════════ */
.hero {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  align-items: center;
  padding: 7rem 2rem 4rem;
  max-width: 1160px;
  margin: 0 auto;
  position: relative;
  gap: 3rem;
}

.hero-bg-text {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--display);
  font-size: clamp(12rem, 30vw, 26rem);
  color: rgba(244,241,235,0.025);
  letter-spacing: 0.05em;
  pointer-events: none;
  z-index: 0;
  white-space: nowrap;
  user-select: none;
}

.hero-left, .hero-right { position: relative; z-index: 1; }

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  border: 1px solid rgba(232,245,38,0.35);
  padding: 0.4rem 0.9rem;
  border-radius: 2px;
  margin-bottom: 1.5rem;
}
.badge-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--accent);
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.8)} }

.hero-h1 {
  font-family: var(--display);
  font-size: clamp(5rem, 10vw, 9rem);
  line-height: 0.9;
  letter-spacing: 0.02em;
  margin-bottom: 1.75rem;
  overflow: hidden;
}
.line-wrap {
  display: block;
  overflow: hidden;
}
.line-wrap span {
  display: block;
  transform: translateY(100%);
  animation: lineUp 0.9s var(--ease) forwards;
}
.line-wrap:nth-child(1) span { animation-delay: 0.1s; }
.line-wrap:nth-child(2) span { animation-delay: 0.2s; }
.line-wrap:nth-child(3) span { animation-delay: 0.3s; }
.accent-line span { color: var(--accent); }

@keyframes lineUp {
  to { transform: translateY(0); }
}

.hero-roles {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted-2);
  margin-bottom: 2rem;
}
.sep { color: var(--accent); opacity: 0.7; }

.hero-desc {
  font-size: 1.05rem;
  color: var(--muted-2);
  line-height: 1.85;
  max-width: 440px;
  margin-bottom: 2rem;
}

.hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 3rem; }

.hero-scroll-hint {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--muted);
}
.scroll-line {
  width: 40px; height: 1px;
  background: var(--muted);
  position: relative;
  overflow: hidden;
}
.scroll-line::after {
  content: '';
  position: absolute;
  left: -100%;
  height: 100%;
  width: 100%;
  background: var(--accent);
  animation: scrollSlide 2s ease-in-out infinite;
}
@keyframes scrollSlide { to { left: 100%; } }

/* Floating terminal */
.float-term {
  position: absolute;
  bottom: 6rem; right: 0;
  width: 320px;
  background: var(--ink-3);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(0,0,0,0.5);
  z-index: 2;
}
.ft-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 0.9rem;
  background: rgba(255,255,255,0.04);
  border-bottom: 1px solid var(--border);
}
.ft-dots { display: flex; gap: 5px; }
.fdt {
  width: 10px; height: 10px;
  border-radius: 50%;
}
.fdt.r { background: #ff5f57; }
.fdt.y { background: #ffbd2e; }
.fdt.g { background: #27c93f; }
.ft-title {
  font-family: var(--mono);
  font-size: 0.65rem;
  color: var(--muted);
  margin-left: 0.3rem;
}
.ft-body {
  padding: 1rem 1.1rem;
  font-family: var(--mono);
  font-size: 0.75rem;
  line-height: 1.9;
  min-height: 120px;
}
.ft-line { display: flex; align-items: center; gap: 0.4rem; }
.ft-ps { color: var(--accent); }
.ft-cmd { color: var(--paper); }
.ft-cursor { color: var(--accent); animation: blink 1s step-end infinite; }
@keyframes blink { 50%{opacity:0} }
.ft-output { color: var(--muted-2); padding-left: 1rem; margin-top: 0.2rem; white-space: pre; }

/* Stat floats */
.stat-float {
  position: absolute;
  background: var(--ink-3);
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent);
  padding: 0.75rem 1.1rem;
  border-radius: 4px;
  z-index: 2;
}
.sf-1 { top: 12rem; right: 0; }
.sf-2 { top: 12rem; right: 8rem; }
.sf-num {
  font-family: var(--display);
  font-size: 1.8rem;
  color: var(--accent);
  line-height: 1;
}
.sf-label {
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted-2);
  margin-top: 0.2rem;
}

/* ── Hero entry animations ── */
.slide-up {
  opacity: 0;
  transform: translateY(30px);
  animation: slideUp 0.8s var(--ease) forwards;
}
.delay-1 { animation-delay: 0.15s; }
.delay-2 { animation-delay: 0.3s; }
.delay-3 { animation-delay: 0.45s; }
@keyframes slideUp {
  to { opacity: 1; transform: translateY(0); }
}

/* ══════════════════════
   SECTIONS
══════════════════════ */
.section {
  position: relative;
  padding: 7rem 0;
}
.section-dark { background: var(--ink-2); }

.section-num {
  position: absolute;
  top: 3rem; right: 2rem;
  font-family: var(--display);
  font-size: 8rem;
  color: rgba(244,241,235,0.03);
  pointer-events: none;
  user-select: none;
  line-height: 1;
}

.section-head {
  margin-bottom: 4rem;
}
.section-h2 {
  font-family: var(--display);
  font-size: clamp(3rem, 6vw, 5.5rem);
  letter-spacing: 0.04em;
  line-height: 1;
  margin-bottom: 0.75rem;
}
.section-line {
  width: 60px; height: 3px;
  background: var(--accent);
  border-radius: 1px;
  margin-bottom: 1.5rem;
}
.section-sub {
  font-size: 1rem;
  color: var(--muted-2);
  max-width: 500px;
}

/* ── Reveal ── */
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s var(--ease), transform 0.7s var(--ease);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
.delay-1.reveal.visible { transition-delay: 0.1s; }
.delay-2.reveal.visible { transition-delay: 0.2s; }
.delay-3.reveal.visible { transition-delay: 0.3s; }

/* ══════════════════════
   ABOUT
══════════════════════ */
.about-layout {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 5rem;
  align-items: start;
}
.av-box { text-align: center; }
.av-inner {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.av-icon {
  font-size: 3.5rem;
  color: var(--accent);
  position: relative;
  z-index: 2;
}
.ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid;
}
.r1 { width: 100px; height: 100px; border-color: rgba(232,245,38,0.35); animation: spin 8s linear infinite; }
.r2 { width: 150px; height: 150px; border-color: rgba(232,245,38,0.18); animation: spin 12s linear infinite reverse; }
.r3 { width: 200px; height: 200px; border-color: rgba(232,245,38,0.08); animation: spin 20s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }

.av-tags {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.av-tags span {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--muted-2);
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  padding: 0.5rem;
  border-radius: 3px;
  letter-spacing: 0.06em;
  transition: all 0.2s;
}
.av-tags span i { color: var(--accent); }
.av-tags span:hover { border-color: rgba(232,245,38,0.4); color: var(--paper); }

.about-copy p {
  color: var(--muted-2);
  margin-bottom: 1.1rem;
  font-size: 1.02rem;
  line-height: 1.8;
}
.about-copy strong, .about-copy em { color: var(--paper); font-style: normal; }
.about-lead {
  font-size: 1.18rem !important;
  color: var(--paper) !important;
  margin-bottom: 1.5rem !important;
}

/* ══════════════════════
   SKILLS
══════════════════════ */
.skills-layout {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5px;
  background: var(--border);
  border: 1px solid var(--border);
}
.skill-block {
  background: var(--ink-2);
  padding: 2.5rem 2rem;
  position: relative;
  transition: background 0.3s;
}
.skill-block:hover { background: var(--ink-3); }
.skill-block:hover .sk-title { color: var(--accent); }
.sk-num {
  font-family: var(--display);
  font-size: 4rem;
  color: rgba(244,241,235,0.05);
  position: absolute;
  top: 1rem; right: 1.5rem;
  line-height: 1;
  pointer-events: none;
}
.sk-icon {
  font-size: 1.4rem;
  color: var(--accent);
  margin-bottom: 1.25rem;
  width: 44px; height: 44px;
  background: rgba(232,245,38,0.1);
  border: 1px solid rgba(232,245,38,0.25);
  display: flex; align-items: center; justify-content: center;
  border-radius: 6px;
}
.sk-title {
  font-family: var(--body);
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
  transition: color 0.2s;
}
.sk-list li {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.9rem;
  color: var(--muted-2);
  padding: 0.45rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  transition: color 0.2s, padding-left 0.2s;
}
.sk-list li:last-child { border-bottom: none; }
.sk-list li i { color: var(--accent); font-size: 0.8rem; width: 14px; }
.sk-list li:hover { color: var(--paper); padding-left: 5px; }

/* ══════════════════════
   PROJECTS
══════════════════════ */
.projects-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5px;
  background: var(--border-l);
  border: 1px solid rgba(255,255,255,0.07);
}
.proj-card {
  background: var(--ink);
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: background 0.3s var(--ease);
  min-height: 360px;
  position: relative;
  overflow: hidden;
}
.proj-card::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 0; height: 2px;
  background: var(--accent);
  transition: width 0.4s var(--ease);
}
.proj-card:hover { background: var(--ink-3); }
.proj-card:hover::after { width: 100%; }

.pc-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pc-num {
  font-family: var(--mono);
  font-size: 0.65rem;
  color: var(--muted);
  letter-spacing: 0.1em;
}
.pc-links { display: flex; gap: 0.75rem; }
.pc-links a {
  color: var(--muted);
  font-size: 0.9rem;
  transition: color 0.2s, transform 0.2s;
}
.pc-links a:hover { color: var(--accent); transform: translateY(-2px); }

.pc-icon {
  width: 50px; height: 50px;
  background: rgba(232,245,38,0.08);
  border: 1px solid rgba(232,245,38,0.2);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.2rem;
  color: var(--accent);
  border-radius: 6px;
}
.pc-title {
  font-family: var(--body);
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: -0.01em;
}
.pc-desc {
  font-size: 0.88rem;
  color: var(--muted-2);
  line-height: 1.7;
  flex: 1;
}
.pc-stack { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.pc-stack span {
  font-family: var(--mono);
  font-size: 0.62rem;
  padding: 0.2rem 0.6rem;
  background: rgba(232,245,38,0.08);
  color: var(--accent);
  border-radius: 2px;
  letter-spacing: 0.08em;
  border: 1px solid rgba(232,245,38,0.18);
}

/* Placeholder card */
.proj-more {
  border: 1px dashed rgba(255,255,255,0.12);
  background: transparent !important;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.pm-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}
.pm-plus {
  font-size: 2rem;
  color: rgba(232,245,38,0.3);
}
.pm-inner h3 {
  font-weight: 700;
  font-size: 1rem;
}
.pm-inner p { color: var(--muted); font-size: 0.88rem; }

/* ══════════════════════
   TIMELINE / JOURNEY
══════════════════════ */
.timeline { display: flex; flex-direction: column; gap: 0; }

.tl-item {
  display: grid;
  grid-template-columns: 80px 48px 1fr;
  align-items: stretch;
  min-height: 120px;
}
.tl-year {
  font-family: var(--display);
  font-size: 1.1rem;
  color: var(--muted);
  letter-spacing: 0.05em;
  display: flex;
  align-items: flex-start;
  padding-top: 1.5rem;
  justify-content: flex-end;
  padding-right: 1.2rem;
  transition: color 0.2s;
}
.tl-item:hover .tl-year { color: var(--accent); }

.tl-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.6rem;
}
.tl-dot {
  width: 14px; height: 14px;
  background: var(--accent);
  border-radius: 50%;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  transition: transform 0.2s, box-shadow 0.2s;
}
.tl-item:hover .tl-dot {
  transform: scale(1.4);
  box-shadow: 0 0 16px rgba(232,245,38,0.6);
}
.tl-bar::after {
  content: '';
  flex: 1;
  width: 1px;
  background: rgba(255,255,255,0.1);
  margin-top: 6px;
}
.tl-item:last-child .tl-bar::after { display: none; }

.tl-body {
  padding: 1.25rem 0 2rem 1.5rem;
}
.tl-tag {
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  display: block;
  margin-bottom: 0.5rem;
}
.tl-body h3 {
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
}
.tl-body p { font-size: 0.9rem; color: var(--muted-2); line-height: 1.7; }

/* ══════════════════════
   CONTACT
══════════════════════ */
.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 5rem;
  align-items: start;
}
.contact-intro {
  font-size: 1.05rem;
  color: var(--muted-2);
  line-height: 1.8;
  margin-bottom: 2.5rem;
}
.contact-links { display: flex; flex-direction: column; gap: 1rem; }
.cl-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.1rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  background: rgba(255,255,255,0.02);
  transition: all 0.25s var(--ease);
  overflow: hidden;
}
.cl-item:hover {
  border-color: rgba(232,245,38,0.4);
  background: rgba(232,245,38,0.04);
  transform: translateX(6px);
}
.cl-icon {
  width: 40px; height: 40px;
  background: rgba(232,245,38,0.1);
  border-radius: 4px;
  display: flex; align-items: center; justify-content: center;
  color: var(--accent);
  font-size: 1rem;
  flex-shrink: 0;
}
.cl-item > div {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  flex: 1;
  min-width: 0;
}
.cl-label {
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}
.cl-val {
  font-size: 0.85rem;
  color: var(--paper);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cl-arr {
  color: var(--muted);
  font-size: 0.8rem;
  transition: transform 0.2s, color 0.2s;
}
.cl-item:hover .cl-arr { transform: translateX(4px); color: var(--accent); }

/* Contact form */
.cform { display: flex; flex-direction: column; gap: 1.2rem; }
.cf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.cf-group { display: flex; flex-direction: column; gap: 0.4rem; }
.cf-group label {
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted-2);
}
.cf-group input,
.cf-group textarea {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 3px;
  padding: 0.8rem 1rem;
  color: var(--paper);
  font-family: var(--body);
  font-size: 0.9rem;
  outline: none;
  transition: all 0.2s;
  resize: vertical;
}
.cf-group input::placeholder,
.cf-group textarea::placeholder { color: rgba(255,255,255,0.2); }
.cf-group input:focus,
.cf-group textarea:focus {
  border-color: rgba(232,245,38,0.5);
  background: rgba(232,245,38,0.04);
}
.cf-note {
  font-family: var(--mono);
  font-size: 0.72rem;
  text-align: center;
  color: var(--accent);
  min-height: 1em;
}

/* ══════════════════════
   FOOTER
══════════════════════ */
.footer {
  background: var(--ink-2);
  border-top: 1px solid var(--border);
  padding: 3rem 0;
}
.footer-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
}
.footer-mark {
  font-family: var(--display);
  font-size: 2.5rem;
  color: var(--accent);
  display: block;
  margin-bottom: 0.5rem;
}
.footer p {
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--muted-2);
}
.footer-sub { opacity: 0.6; font-size: 0.68rem !important; }
.acc { color: var(--accent); }

/* Scroll to top */
.stb {
  position: fixed;
  bottom: 2rem; right: 2rem;
  width: 44px; height: 44px;
  background: var(--accent);
  color: var(--ink);
  border: none;
  border-radius: 3px;
  cursor: none;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.85rem;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
  z-index: 300;
}
.stb.visible { opacity: 1; pointer-events: auto; }
.stb:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(232,245,38,0.35); }

/* ══════════════════════
   RESPONSIVE
══════════════════════ */
@media (max-width: 1080px) {
  .skills-layout { grid-template-columns: repeat(2, 1fr); }
  .float-term { display: none; }
  .sf-1, .sf-2 { display: none; }
}

@media (max-width: 860px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-left { order: 1; }
  .hero-right { order: 2; }
  .hero-roles { justify-content: center; }
  .hero-actions { justify-content: center; }
  .hero-scroll-hint { justify-content: center; }
  .hero-badge { margin: 0 auto 1.5rem; }
  .about-layout { grid-template-columns: 1fr; gap: 3rem; }
  .projects-layout { grid-template-columns: 1fr; }
  .contact-layout { grid-template-columns: 1fr; gap: 3rem; }
  .nav-list { display: none; }
  .menu-btn { display: flex; }
  .cf-row { grid-template-columns: 1fr; }
}

@media (max-width: 600px) {
  .hero { padding: 6rem 1.5rem 4rem; }
  .container { padding: 0 1.5rem; }
  .section { padding: 5rem 0; }
  .skills-layout { grid-template-columns: 1fr; }
  .tl-item { grid-template-columns: 60px 36px 1fr; }
}
