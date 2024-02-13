const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

const videoUrl = "https://vk.com/video15536257_456239199";

// Ищем iframe по id
const iframeElement = document.getElementById("vk_player");

// Проверяем, найден ли iframe
if (iframeElement) {
    // Устанавливаем новое значение атрибута src
    iframeElement.src = videoUrl;
} else {
    console.error("Iframe с указанным id не найден.");
}

const mobileMenu = () => {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

const highlightMenu = () => {
  const elem = document.querySelector('.highlight')
  const homeMenu = document.querySelector('#home-page')
  const aboutMenu = document.querySelector('#about-page')
  const servicesMenu = document.querySelector('#services-page')
  let scrollPos = window.scrollY

  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    return
  } else if (window.innerWidth > 960 && scrollPos < 1600) {
    aboutMenu.classList.add('highlight')
    homeMenu.classList.remove('highlight')
    servicesMenu.classList.remove('highlight')
    return
  } else if (window.innerWidth > 960 && scrollPos < 2800) {
    servicesMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    return
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight')
  }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active')
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active')
    menuLinks.classList.remove('active')
  }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)
