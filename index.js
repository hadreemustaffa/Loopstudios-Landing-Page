const menuBtn = document.querySelector('#menuBtn');
const mainMenu = document.querySelector('#mainMenu');
const header = document.querySelector('header');
const main = document.querySelector('main');

const openMenuIcon = 'images/icon-hamburger.svg';
const closeMenuIcon = 'images/icon-close.svg';

menuBtn.addEventListener('click', () => {
  const isExpanded = menuBtn.getAttribute('aria-expanded') == 'true';

  if (isExpanded) {
    mainMenu.removeAttribute('style');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.firstElementChild.src = openMenuIcon;
  } else {
    mainMenu.style.translate = 'none';
    menuBtn.setAttribute('aria-expanded', 'true');
    menuBtn.firstElementChild.src = closeMenuIcon;
  }
});

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const mainContentHeight = main.offsetHeight;
  const windowHeight = window.innerHeight;
  const nearBottom = mainContentHeight - windowHeight - scrollPosition;

  if (nearBottom < 25) {
    header.classList.add('visually-hidden');
  } else {
    header.classList.remove('visually-hidden');
  }

  if (scrollPosition > 100) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});
