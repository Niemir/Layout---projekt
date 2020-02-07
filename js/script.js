const backBurger = document.querySelector('.nav__item--back');
const burger = document.querySelector('.burger');
const sideMenu = document.querySelector('.nav__burger-menu');
const page = document.querySelector('.page');
const projects = document.querySelectorAll('.project--additional');
const showMore = document.querySelector('.show-more');
const arrows = document.querySelectorAll('.header__arrow');
const header = document.querySelector('.header');

//navigation
const arrowUp = document.querySelector('.map__up');
const servicesBtn = document.querySelector('.nav__services');
const realizationsBtn = document.querySelector('.nav__realizations');
const contactBtn = document.querySelector('.nav__contact');

burgerHandler = () => {
  sideMenu.classList.toggle('nav__burger-menu--active');
  page.classList.toggle('page--active')
}

changeView = () => {


  if (window.innerWidth >= 768) {

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

//bakcground change 
arrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    const style = window.getComputedStyle(header);
    const bgImage = style.getPropertyValue('background-image');
    let index = bgImage.indexOf('/assets/');
    let oldUrl = bgImage.slice(index);
    if (oldUrl == '/assets/header-background.png")') {
      header.style.backgroundImage = "url('../../assets/header-background2.png')";
      return
    }
    let newIndex = window.getComputedStyle(header).backgroundImage.indexOf('/assets/');
    let newUrl = window.getComputedStyle(header).backgroundImage.slice(newIndex)
    if (newUrl == '/assets/header-background2.png")') {
      header.style.backgroundImage = "url('../../assets/header-background.png')"
    }

  })
}
)


//navigation
arrowUp.addEventListener('click', () => {
  document.querySelector('.nav').scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
})
servicesBtn.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('dziala');
  document.querySelector('.actions').scrollIntoView({ behavior: "smooth", block: "start" })
})
realizationsBtn.addEventListener('click', (e) => {
  e.preventDefault()
  document.querySelector('.projects').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
})

contactBtn.addEventListener('click', (e) => {
  e.preventDefault()
  document.querySelector('.footer').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
})

document.querySelector('.header__show-services').addEventListener('click', (e) => {
  e.preventDefault()
  document.querySelector('.actions').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
});
document.querySelector('.header__show-btn').addEventListener('click', (e) => {
  e.preventDefault()
  document.querySelector('.actions').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
})

