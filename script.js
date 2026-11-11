const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#main-nav');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.setAttribute('aria-label', open ? 'Abrir menú' : 'Cerrar menú');
  menu.classList.toggle('is-open', !open);
});

menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

document.querySelector('#quote-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const message = [
    `Hola Nico, soy ${form.get('name')}.`,
    `Me interesa: ${form.get('type')}.`,
    form.get('details') ? `Te cuento: ${form.get('details')}` : ''
  ].filter(Boolean).join('\n');
  // Número de contacto en formato internacional, sin +, espacios ni guiones.
  const phone = '59898842097';
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});
