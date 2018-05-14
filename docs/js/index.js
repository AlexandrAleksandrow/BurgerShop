const hamburger__menu = document.querySelector('.hamburger__menu');
const menu__mob = document.querySelector('.menu__mob');
const mob__close = document.querySelector('.mob__close');

hamburger__menu.addEventListener('click', function(event) {
  event.preventDefault();
  menu__mob.style.display = 'flex';
  hamburger__menu.style.display = 'none';
  document.body.style.overflow = 'hidden';
}) 

mob__close.addEventListener('click', function(event) {
  event.preventDefault();
  menu__mob.style.display = 'none';
  hamburger__menu.style.display = 'flex';
  document.body.style.overflow = 'visible';
})