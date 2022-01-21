/* Mobile drop down */
$(document).ready(function () {
  $('#dropDownBtn').click(function () {
    $('.mobileList').toggleClass('dropDownBtnActive')
  })
})

/* Menu scroll animations */
$(window).scroll(function () {
  //console.log('Scroll')
  /* Get scroll position */
  const scrollPosition = $(this).scrollTop()
  const halfWindowheight = $(window).height() / 2

  const page1Top = 0
  const page2Top = $('.page2').offset().top - halfWindowheight
  const page3Top = $('.page3').offset().top - halfWindowheight
  const page4Top = $('.page4').offset().top - halfWindowheight
  const page5Top = $('.page5').offset().top - halfWindowheight
  const page6Top = $('.page6').offset().top - halfWindowheight
  const page7Top = $('.page7').offset().top - halfWindowheight
  const page8Top = $('.page8').offset().top - halfWindowheight
  const page9Top = $('.page9').offset().top - halfWindowheight
  const page10Top = $('.page10').offset().top - halfWindowheight
  const page11Top = $('.page11').offset().top - halfWindowheight
  const page12Top = $('.page12').offset().top - halfWindowheight
  const page13Top = $('.page13').offset().top - halfWindowheight
  const page14Top = $('.page14').offset().top - halfWindowheight
  const page15Top = $('.page15').offset().top - halfWindowheight
  const page16Top = $('.page16').offset().top - halfWindowheight
  const page17Top = $('.page17').offset().top - halfWindowheight

  /* Remove active class from non-active elements */
  $('.page-pack').removeClass('page-back-active')
  $('.page-photo-wrap').removeClass('photo-wrap-active')
  $('.page-photo').removeClass('page-photo-active')
  $('.page-white-desc').removeClass('white-desc-active')
  $('.page1-title').removeClass('page1-title-active')
  $('.page1-desc').removeClass('page1-desc-active')
  $('.chilliWrapper').removeClass('chilliWrapper-active')
  $('.foodLink').removeClass('foodLink-active')
  $('.monkey').removeClass('monkey-active')

  /* Add active class to active page elements */
  if (scrollPosition > page1Top && scrollPosition < page2Top) {
    //$('.page1-title').addClass('page1-title-active')
    //$('.chilliWrapper').addClass('chilliWrapper-active')
    //$('.page1-desc').addClass('page1-desc-active')
    $('.foodLink').addClass('foodLink-active')
    $('.scrollToTopBtn').removeClass('scrollToTopBtn-active')
  } else if (scrollPosition > page2Top && scrollPosition < page3Top) {
    //$('.pg2-back').addClass('page-back-active')
    //$('.pg2-photo-wrap').addClass('photo-wrap-active')
    $('.pg2-photo').addClass('page-photo-active')
    //$('.pg2-white-desc').addClass('white-desc-active')
    $('.scrollToTopBtn').addClass('scrollToTopBtn-active')
  } else if (scrollPosition > page3Top && scrollPosition < page4Top) {
    $('.pg3-back').addClass('page-back-active')
    $('.pg3-photo-wrap').addClass('photo-wrap-active')
    $('.pg3-photo').addClass('page-photo-active')
    $('.pg3-white-desc').addClass('white-desc-active')
  } else if (scrollPosition > page4Top && scrollPosition < page5Top) {
    $('.pg4-back').addClass('page-back-active')
    $('.pg4-photo-wrap').addClass('photo-wrap-active')
    $('.pg4-photo').addClass('page-photo-active')
    $('.pg4-white-desc').addClass('white-desc-active')
  } else if (scrollPosition > page5Top && scrollPosition < page6Top) {
    $('.pg5-back').addClass('page-back-active')
    $('.pg5-photo-wrap').addClass('photo-wrap-active')
    $('.pg5-photo').addClass('page-photo-active')
    $('.pg5-white-desc').addClass('white-desc-active')
  } else if (scrollPosition > page6Top && scrollPosition < page7Top) {
    $('.pg6-back').addClass('page-back-active')
    $('.pg6-photo-wrap').addClass('photo-wrap-active')
    $('.pg6-photo').addClass('page-photo-active')
    $('.pg6-white-desc').addClass('white-desc-active')
    $('.nettle').addClass('nettle-active')
  } else if (scrollPosition > page7Top && scrollPosition < page8Top) {
    $('.pg7-back').addClass('page-back-active')
    $('.pg7-photo-wrap').addClass('photo-wrap-active')
    $('.pg7-photo').addClass('page-photo-active')
    $('.pg7-white-desc').addClass('white-desc-active')
  } else if (scrollPosition > page8Top && scrollPosition < page9Top) {
    $('.pg8-back').addClass('page-back-active')
    $('.pg8-photo-wrap').addClass('photo-wrap-active')
    $('.pg8-photo').addClass('page-photo-active')
    $('.pg8-white-desc').addClass('white-desc-active')
  } else if (scrollPosition > page9Top && scrollPosition < page10Top) {
    $('.pg9-back').addClass('page-back-active')
    $('.pg9-photo-wrap').addClass('photo-wrap-active')
    $('.pg9-photo').addClass('page-photo-active')
    $('.pg9-white-desc').addClass('white-desc-active')
  } else if (scrollPosition > page10Top && scrollPosition < page11Top) {
    $('.pg10-back').addClass('page-back-active')
    $('.pg10-photo-wrap').addClass('photo-wrap-active')
    $('.pg10-photo').addClass('page-photo-active')
    $('.pg10-white-desc').addClass('white-desc-active')
  } else if (scrollPosition > page11Top && scrollPosition < page12Top) {
    $('.pg11-back').addClass('page-back-active')
    $('.pg11-photo-wrap').addClass('photo-wrap-active')
    $('.pg11-photo').addClass('page-photo-active')
    $('.pg11-white-desc').addClass('white-desc-active')
  } else if (scrollPosition > page12Top && scrollPosition < page13Top) {
    $('.pg12-back').addClass('page-back-active')
    $('.pg12-photo-wrap').addClass('photo-wrap-active')
    $('.pg12-photo').addClass('page-photo-active')
    $('.pg12-white-desc').addClass('white-desc-active')
  } else if (scrollPosition > page13Top && scrollPosition < page14Top) {
    $('.pg13-back').addClass('page-back-active')
    $('.pg13-photo-wrap').addClass('photo-wrap-active')
    $('.pg13-photo').addClass('page-photo-active')
    $('.pg13-white-desc').addClass('white-desc-active')
  } else if (scrollPosition > page14Top && scrollPosition < page15Top) {
    $('.pg14-back').addClass('page-back-active')
    $('.pg14-photo-wrap').addClass('photo-wrap-active')
    $('.pg14-photo').addClass('page-photo-active')
    $('.pg14-white-desc').addClass('white-desc-active')
  } else if (scrollPosition > page15Top && scrollPosition < page16Top) {
    $('.pg15-back').addClass('page-back-active')
    $('.pg15-photo-wrap').addClass('photo-wrap-active')
    $('.pg15-photo').addClass('page-photo-active')
    $('.pg15-white-desc').addClass('white-desc-active')
  } else if (scrollPosition > page16Top && scrollPosition < page17Top) {
    $('.pg16-back').addClass('page-back-active')
    $('.pg16-photo-wrap').addClass('photo-wrap-active')
    $('.pg16-photo').addClass('page-photo-active')
    $('.pg16-white-desc').addClass('white-desc-active')
    $('.monkey').addClass('monkey-active')
  } else if (scrollPosition > page17Top) {
    $('.pg17-back').addClass('page-back-active')
    $('.pg17-photo-wrap').addClass('photo-wrap-active')
    $('.pg17-photo').addClass('page-photo-active')
    $('.pg17-white-desc').addClass('white-desc-active')
  }
})
