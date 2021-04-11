const btnHamburger = document.querySelector('.nav__hamburger');
const dropdown = document.querySelector('.nav__dropdown-menu');
const navTitle = document.querySelectorAll('.nav__title');
const menu = document.querySelectorAll('menu');

btnHamburger.addEventListener('click', () => {
  if (btnHamburger.classList.contains('nav__hamburger--open')) {
    btnHamburger.classList.remove('nav__hamburger--open');
    dropdown.classList.remove('nav__dropdown-menu--open');
    navTitle.forEach((nav) =>
      nav.parentNode.classList.remove('nav__menu--active')
    );
    dropdown.style.opacity = 0;
  } else {
    btnHamburger.classList.add('nav__hamburger--open');
    dropdown.classList.add('nav__dropdown-menu--open');
    dropdown.style.opacity = 1;
    dropdown.style.pointerEvents = 'all';
  }
});

navTitle.forEach((nav) =>
  nav.addEventListener('click', () => {
    if (nav.parentNode.classList.contains('nav__menu--active')) {
      nav.parentNode.classList.toggle('nav__menu--active');
    } else {
      navTitle.forEach((nav) =>
        nav.parentNode.classList.remove('nav__menu--active')
      );
      nav.parentNode.classList.add('nav__menu--active');
    }
  })
);

menu.forEach((mnu) =>
  mnu.addEventListener('click', (e) => {
    if (mnu.parentNode.classList.contains('active')) {
      mnu.parentNode.classList.toggle('active');
    } else {
      menu.forEach((mnu) => mnu.parentNode.classList.remove('active'));
      mnu.parentNode.classList.add('active');
    }
  })
);
