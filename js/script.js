const backBurger = document.querySelector('.nav__item--back');
const burger = document.querySelector('.burger');
const sideMenu = document.querySelector('.nav__burger-menu');
const page = document.querySelector('.page');

burgerHandler = () => {
  sideMenu.classList.toggle('nav__burger-menu--active');
  page.classList.toggle('page--active')
}

changeView = () => {
  console.log(window.innerWidth);

  if (window.innerWidth >= 768) {
    console.log('wincej');
    page.classList.remove('page--active')
  }
  if (sideMenu.classList.contains('nav__burger-menu--active') && window.innerWidth >= 768) {
    sideMenu.classList.remove('nav__burger-menu--active')
  }
}
window.addEventListener('resize', changeView)
burger.addEventListener('click', burgerHandler);
backBurger.addEventListener('click', burgerHandler);



