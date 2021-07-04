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
  /*
    remove inline styles added with menu.style.display
    so that external stylesheet has priority
  */
  if (window.innerWidth >= 768 && menu.hasAttribute('style')) {
    menu.removeAttribute('style')
  }
})
