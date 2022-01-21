const page1 = document.querySelector('.page1')
const page1Height = page1.offsetHeight
const chilliSkate = document.querySelector('.chilliWrapper')
const headerPageTitle = document.querySelector('.page1-title')
const headerPageBack = document.querySelector('.page1-desc')
const scrollToTop = document.querySelector('.scrollToTopBtn')
const pages = document.querySelectorAll('.page')
const monkey = document.querySelector('.monkey')

const headerPage = () => {
  const addPage1Anim = () => {
    chilliSkate.classList.remove('chilliWrapper-active')
    headerPageTitle.classList.remove('page1-title-active')
    headerPageBack.classList.remove('page1-desc-active')
    scrollToTop.classList.add('scrollToTopBtn-active')
  }
  const removePage1Anim = () => {
    chilliSkate.classList.add('chilliWrapper-active')
    headerPageTitle.classList.add('page1-title-active')
    headerPageBack.classList.add('page1-desc-active')
    scrollToTop.classList.remove('scrollToTopBtn-active')
    console.log('Scroll')
  }

  let scrollpos = window.scrollY
  window.addEventListener('scroll', () => {
    throttle(() => {
      scrollpos = window.scrollY
      if (scrollpos >= page1Height || scrollpos === 0) {
        addPage1Anim()
      } else {
        removePage1Anim()
      }
    }, 500)
  })
}
headerPage()

let throttleTimer
const throttle = (callback, time) => {
  console.log('Throttle')

  if (throttleTimer) return

  throttleTimer = true

  setTimeout(() => {
    callback()
    throttleTimer = false
  }, time)
}

let options = {
  rootMargin: '0px',
  threshold: 0.4,
}

const callback = entries => {
  entries.forEach(page => {
    const target = page.target

    const pagePack = target.querySelector('.page-pack')
    const photoWrap = target.querySelector('.page-photo-wrap')
    const pagePhoto = target.querySelector('.page-photo')
    const whiteDesc = target.querySelector('.page-white-desc')

    if (page.intersectionRatio >= 0.4) {
      pagePack.classList.add('page-back-active')
      photoWrap.classList.add('photo-wrap-active')
      pagePhoto.classList.add('page-photo-active')
      whiteDesc.classList.add('white-desc-active')
      monkey.classList.add('monkey-active')
    } else {
      pagePack.classList.remove('page-back-active')
      photoWrap.classList.remove('photo-wrap-active')
      pagePhoto.classList.remove('page-photo-active')
      whiteDesc.classList.remove('white-desc-active')
      monkey.classList.remove('monkey-active')
    }
  })
}
let observer = new IntersectionObserver(callback, options)

pages.forEach((page, index) => {
  observer.observe(page)
})
