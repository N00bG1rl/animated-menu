const music = document.getElementById('music')
const musicIcons = document.getElementById('musicIcons')
const musicPlayBtn = document.querySelector('.musicPlay')
const musicMobile = document.getElementById('musicMobile')
const musicPlayMobile = document.querySelector('.musicPlayMobile')
const musicIconsMobile = document.getElementById('musicIconsMobile')
const mobileBurgerBtn = document.getElementById('mobileBurgerBtn')
const burgerBtn = document.getElementById('burgerBtn')
const menuList = document.querySelector('.mobileList')

/* Play background music on desctop */
musicPlayBtn.addEventListener('click', playMusic, false)
function playMusic() {
  if (music.paused) {
    music.play()
    musicIcons.classList.remove('play')
    musicIcons.classList.add('pause')
  } else {
    music.pause()
    musicIcons.classList.remove('pause')
    musicIcons.classList.add('play')
  }
}

/* Play background music on mobile */
musicPlayMobile.addEventListener('click', playMusicMobile, false)
function playMusicMobile() {
  if (musicMobile.paused) {
    musicMobile.play()
    musicIconsMobile.classList.remove('play')
    musicIconsMobile.classList.add('pause')
  } else {
    musicMobile.pause()
    musicIconsMobile.classList.remove('pause')
    musicIconsMobile.classList.add('play')
  }
}

/* Toggle mobile navigation menu */
burgerBtn.addEventListener('click', toggleNavigation, false)
function toggleNavigation() {
  mobileBurgerBtn.classList.toggle('navigation')
}

/* Toggle mobile menu list */
menuList.addEventListener('click', toggleMenuList, false)
function toggleMenuList() {
  menuList.classList.toggle('dropDownBtnActive')
}
