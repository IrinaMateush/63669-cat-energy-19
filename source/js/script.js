var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var menuList = document.querySelector('.site-list');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (menuList.classList.contains('site-list--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    menuList.classList.remove('site-list--closed');
    menuList.classList.add('site-list--opened');
  } else {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
    menuList.classList.remove('site-list--opened');
    menuList.classList.add('site-list--closed');
  }
});
