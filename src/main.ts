import './style.css';

const main = document.querySelector<HTMLElement>('main')!;
const spread = document.querySelector<HTMLElement>('.spread')!;
const spreadLinks = [...spread.querySelectorAll<HTMLAnchorElement>('nav a')];
const socialNavs = document.querySelectorAll<HTMLElement>('nav');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let socialHover = false;
let tiltFrame = 0;
let pointerX = 0;
let pointerY = 0;

function setOpen(open: boolean): void {
  main.classList.toggle('open', open);
  spread.setAttribute('aria-hidden', String(!open));
  spreadLinks.forEach((link) => (link.tabIndex = open ? 0 : -1));
}

function resetTilt(): void {
  cancelAnimationFrame(tiltFrame);
  tiltFrame = 0;
  main.style.setProperty('--rx', '0deg');
  main.style.setProperty('--ry', '0deg');
}

function renderTilt(): void {
  tiltFrame = 0;
  main.style.setProperty('--rx', `${(pointerY / innerHeight - 0.5) * 2}deg`);
  main.style.setProperty('--ry', `${-(pointerX / innerWidth - 0.5) * 2}deg`);
}

function tilt(event: PointerEvent): void {
  if (socialHover || event.pointerType === 'touch' || reducedMotion.matches) return;
  pointerX = event.clientX;
  pointerY = event.clientY;
  if (!tiltFrame) tiltFrame = requestAnimationFrame(renderTilt);
}

document.querySelector<HTMLButtonElement>('.expand')!.addEventListener('click', () => setOpen(true));
document.querySelector<HTMLButtonElement>('.close')!.addEventListener('click', () => setOpen(false));
socialNavs.forEach((nav) => {
  nav.addEventListener('pointerenter', () => (socialHover = true));
  nav.addEventListener('pointerleave', () => (socialHover = false));
});
window.addEventListener('pointermove', tilt, { passive: true });
window.addEventListener('blur', resetTilt);
