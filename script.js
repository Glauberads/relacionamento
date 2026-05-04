// script.js – Scroll animations + micro-interactions

// ── Scroll Animation Observer ──────────────────────────────
const animEls = document.querySelectorAll('[data-anim]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

animEls.forEach(el => observer.observe(el));

// ── Urgency countdown (optional) ──────────────────────────
// Se quiser um countdown real, descomente e configure o horário-alvo
/*
function updateCountdown() {
  const target = new Date();
  target.setHours(23, 59, 59, 0);
  const now = new Date();
  const diff = target - now;
  if (diff <= 0) return;
  const h = String(Math.floor(diff / 3600000)).padStart(2,'0');
  const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2,'0');
  const s = String(Math.floor((diff % 60000) / 1000)).padStart(2,'0');
  const el = document.getElementById('countdown');
  if (el) el.textContent = `${h}:${m}:${s}`;
}
setInterval(updateCountdown, 1000);
updateCountdown();
*/

// ── CTA click – Meta Pixel event ──────────────────────────
document.querySelectorAll('.cta-primary').forEach(btn => {
  btn.addEventListener('click', () => {
    // fbq('track', 'InitiateCheckout'); // descomente após instalar o Meta Pixel
    // gtag('event', 'click', { event_category: 'CTA' }); // para GTM
    console.log('[CTA] clicado – evento de conversão disparado');
  });
});

// ── Smooth hover glow no hero ──────────────────────────────
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  document.querySelector('.hero')?.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 8;
    const y = (clientY / innerHeight - 0.5) * 4;
    heroBg.style.transform = `scale(1.06) translate(${x}px, ${y}px)`;
  });
}
