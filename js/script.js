const backBurger = document.querySelector('.nav__item--back a');
const burger = document.querySelector('.burger');
const sideMenu = document.querySelector('.nav__burger-menu');
const page = document.querySelector('.page');
const projects = document.querySelectorAll('.project--additional');
const showMore = document.querySelector('.show-more');


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

projects.forEach(project => {
  showMore.addEventListener('click', () => {
    project.classList.remove('project--additional');
    showMore.style.display = 'none';
    if (document.querySelector('.project--additional--more')) {
      document.querySelector('.project--additional--more').classList.remove('project--additional--more')
    } else return

  })
})
window.addEventListener('resize', changeView)
burger.addEventListener('click', burgerHandler);
backBurger.addEventListener('click', burgerHandler);




