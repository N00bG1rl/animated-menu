const invokeCallback = 0.4
const page1 = document.querySelector('.page1')
const page1Height = page1.offsetHeight
const chilliSkate = document.querySelector('.chilliWrapper')
const headerPageTitle = document.querySelector('.page1-title')
const headerPageBack = document.querySelector('.page1-desc')
const scrollToTop = document.querySelector('.scrollToTopBtn')

const removePage1Anim = () => {
  chilliSkate.classList.remove('chilliWrapper-active')
  headerPageTitle.classList.remove('page1-title-active')
  headerPageBack.classList.remove('page1-desc-active')
  scrollToTop.classList.add('scrollToTopBtn-active')
}
const addPage1Anim = () => {
  chilliSkate.classList.add('chilliWrapper-active')
  headerPageTitle.classList.add('page1-title-active')
  headerPageBack.classList.add('page1-desc-active')
  scrollToTop.classList.remove('scrollToTopBtn-active')
}

let throttleTimer
window.addEventListener('scroll', () => {
  throttle(() => {
    if (window.scrollY >= page1Height || window.scrollY === 0) {
      removePage1Anim()
    } else {
      addPage1Anim()
    }
  }, 250)
})

const throttle = (callback, time) => {
  if (throttleTimer) return
  throttleTimer = true

  setTimeout(() => {
    callback()
    throttleTimer = false
  }, time)
}

const callback = entries => {
  entries.forEach(page => {
    const target = page.target
    //console.log(target.classList)

    const pagePack = target.querySelector('.page-pack')
    const photoWrap = target.querySelector('.page-photo-wrap')
    const pagePhoto = target.querySelector('.page-photo')
    const whiteDesc = target.querySelector('.page-white-desc')
    const monkey = document.querySelector('.monkey')

    if (
      target.classList.contains('page16') ||
      target.classList.contains('page17')
    ) {
      monkey.classList.add('monkey-active')
    }

    const addPageAnim = () => {
      pagePack.classList.add('page-back-active')
      photoWrap.classList.add('photo-wrap-active')
      pagePhoto.classList.add('page-photo-active')
      whiteDesc.classList.add('white-desc-active')
    }
    const removePageAnim = () => {
      pagePack.classList.remove('page-back-active')
      photoWrap.classList.remove('photo-wrap-active')
      pagePhoto.classList.remove('page-photo-active')
      whiteDesc.classList.remove('white-desc-active')
      monkey.classList.remove('monkey-active')
    }

    page.intersectionRatio >= invokeCallback ? addPageAnim() : removePageAnim()
  })
}

const options = {
  rootMargin: '0px',
  threshold: invokeCallback,
}

const observer = new IntersectionObserver(callback, options)

document.querySelectorAll('.page').forEach(page => observer.observe(page))
