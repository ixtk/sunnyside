const menuIcon = document.querySelector('.header-nav-icon')
const menu = document.querySelector('.header-nav')

menuIcon.addEventListener('click', _ => {
  if (getComputedStyle(menu).getPropertyValue('display') == 'none') {
    menu.style.display = 'block'
  } else {
    menu.style.display = 'none'
  }
})

window.addEventListener('resize', _ => {
  if (window.innerWidth >= 768) {
    menu.removeAttribute('style')
  }
})
