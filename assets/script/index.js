// Animations for header/first page
const callbackForHeader = entries => {
  const chilliSkate = document.querySelector('.chilliWrapper')
  const headerPageTitle = document.querySelector('.page1-title')
  const headerPageBack = document.querySelector('.page1-desc')
  const scrollToTop = document.querySelector('.scrollToTopBtn')

  entries.forEach(elem => {
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

    elem.intersectionRatio >= invokeHeaderCallback
      ? addPage1Anim()
      : removePage1Anim()
  })
}

const invokeHeaderCallback = 1.0
const optionsForHeader = {
  rootMargin: '0px',
  threshold: invokeHeaderCallback,
}

const observerForHeader = new IntersectionObserver(
  callbackForHeader,
  optionsForHeader
)

const headerTarget = document.querySelector('.page1')
observerForHeader.observe(headerTarget)

// Animations for all other pages
const callbackForPages = entries => {
  entries.forEach(page => {
    const target = page.target

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

const invokeCallback = 0.4
const pagesOptions = {
  rootMargin: '0px',
  threshold: invokeCallback,
}

const pagesObserver = new IntersectionObserver(callbackForPages, pagesOptions)
document.querySelectorAll('.page').forEach(page => pagesObserver.observe(page))
