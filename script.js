'use strict';

/* ── Custom Cursor ── */
const cursor = document.getElementById('cursor');
const cursorTrail = document.getElementById('cursorTrail');
let mx = 0, my = 0, tx = 0, ty = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

function animateTrail() {
  tx += (mx - tx) * 0.15;
  ty += (my - ty) * 0.15;
  cursorTrail.style.left = tx + 'px';
  cursorTrail.style.top  = ty + 'px';
  requestAnimationFrame(animateTrail);
}
animateTrail();

/* ── Navbar scroll ── */
const nav = document.getElementById('nav');
const stb = document.getElementById('stb');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
  stb.classList.toggle('visible', window.scrollY > 400);
  highlightNav();
}, { passive: true });

/* ── Active nav highlight ── */
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-a');

function highlightNav() {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 140) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}

/* ── Mobile menu ── */
const menuBtn    = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

document.querySelectorAll('.mm-link').forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ── Scroll to top ── */
stb.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── Reveal on scroll ── */
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => revealObs.observe(el));

/* ── Terminal Typewriter ── */
const typeTarget = document.getElementById('typeTarget');
const ftOutput   = document.getElementById('ftOutput');

const commands = [
  { cmd: 'whoami',           out: 'kapil_dev_pudasaini' },
  { cmd: 'cat skills.txt',   out: 'cybersec | webdev | gamedev' },
  { cmd: 'ping opportunities', out: '64 bytes — open_to_work' },
  { cmd: 'ls projects/',     out: 'kawpeel-protects  cybersafehub' },
];

let ci = 0, ci2 = 0, typing = false;

function typeCommand(cmd, cb) {
  typeTarget.textContent = '';
  let i = 0;
  const t = setInterval(() => {
    typeTarget.textContent += cmd[i++];
    if (i === cmd.length) { clearInterval(t); cb && setTimeout(cb, 300); }
  }, 65);
}

function showOutput(out, cb) {
  ftOutput.textContent = out;
  cb && setTimeout(cb, 1400);
}

function runCycle() {
  const pair = commands[ci % commands.length];
  ci++;
  ftOutput.textContent = '';
  typeCommand(pair.cmd, () => {
    showOutput(pair.out, () => {
      setTimeout(runCycle, 500);
    });
  });
}

// Start after 1.8s
setTimeout(runCycle, 1800);

/* ── Smooth scroll for anchors ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

/* ── Contact form ── */
const cForm  = document.getElementById('cForm');
const cfNote = document.getElementById('cfNote');

cForm.addEventListener('submit', e => {
  e.preventDefault();
  const name    = document.getElementById('cf-name').value.trim();
  const email   = document.getElementById('cf-email').value.trim();
  const message = document.getElementById('cf-msg').value.trim();
  if (!name || !email || !message) {
    showNote('Please fill in all fields.', 'error');
    return;
  }
  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
  const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:kapilpudasaini1@gmail.com?subject=${subject}&body=${body}`;
  showNote('Opening your email client — thanks for reaching out!', 'success');
  cForm.reset();
});

function showNote(msg, type) {
  cfNote.textContent = msg;
  cfNote.style.color = type === 'error' ? '#ff5f57' : '#e8f526';
  setTimeout(() => { cfNote.textContent = ''; }, 5000);
}

/* ── Initial call ── */
highlightNav();
