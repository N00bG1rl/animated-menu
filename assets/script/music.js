/* Play background music on desktop */
const music = document.getElementById('music')
const musicIcons = document.getElementById('musicIcons')
let musicPlayBtn = document
  .querySelector('.musicPlay')
  .addEventListener('click', playMusic, false)

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

const musicMobile = document.getElementById('musicMobile')
const musicIconsMobile = document.getElementById('musicIconsMobile')
const musicPlayMobile = document
  .querySelector('.musicPlayMobile')
  .addEventListener('click', playMusicMobile, false)

/* Play background music on mobile */
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

const mobileBurgerBtn = document.getElementById('mobileBurgerBtn')
const burgerBtn = document
  .getElementById('burgerBtn')
  .addEventListener('click', toggleNavigation, false)

/* Toggle mobile navigation menu */
function toggleNavigation() {
  mobileBurgerBtn.classList.toggle('navigation')
}
