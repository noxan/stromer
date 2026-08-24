import './style.css';

const main = document.querySelector<HTMLElement>('main')!;
const card = document.querySelector<HTMLElement>('.card')!;
const figure = document.querySelector<HTMLElement>('.spread > figure')!;
const spread = document.querySelector<HTMLElement>('.spread')!;
const spreadLinks = [...spread.querySelectorAll<HTMLAnchorElement>('nav a')];
const socialNavs = document.querySelectorAll<HTMLElement>('nav');
let socialHover = false;

function setOpen(open: boolean): void {
  main.classList.toggle('open', open);
  spread.setAttribute('aria-hidden', String(!open));
  spreadLinks.forEach((link) => (link.tabIndex = open ? 0 : -1));
}

function resetTilt(): void {
  card.style.setProperty('--rx', '0deg');
  card.style.setProperty('--ry', '0deg');
  figure.style.setProperty('--rx', '0deg');
  figure.style.setProperty('--ry', '0deg');
}

function tilt(event: PointerEvent): void {
  if (socialHover || event.pointerType === 'touch' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const rx = `${(event.clientY / innerHeight - 0.5) * 2}deg`;
  const ry = `${-(event.clientX / innerWidth - 0.5) * 2}deg`;
  card.style.setProperty('--rx', rx);
  card.style.setProperty('--ry', ry);
  figure.style.setProperty('--rx', rx);
  figure.style.setProperty('--ry', ry);
}

document.querySelector<HTMLButtonElement>('.expand')!.addEventListener('click', () => setOpen(true));
document.querySelector<HTMLButtonElement>('.close')!.addEventListener('click', () => setOpen(false));
socialNavs.forEach((nav) => {
  nav.addEventListener('pointerenter', () => (socialHover = true));
  nav.addEventListener('pointerleave', () => (socialHover = false));
});
window.addEventListener('pointermove', tilt, { passive: true });
window.addEventListener('blur', resetTilt);
