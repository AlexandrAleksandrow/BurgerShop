/*Полноэкранное меню*/

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
  menu__mob.style.display = '';
  hamburger__menu.style.display = '';
  document.body.style.overflow = '';
})

/*Секция "Меню" аккордеон (доработать функционал)*/

const acco = document.querySelector('.menu');
const accoItem = document.querySelectorAll('.menu__accordion-item');

acco.addEventListener('click', function(e) {
  for (let i = 0; i < accoItem.length; i++) {
    accoItem[i].classList.remove('menu__accordion-item--active');
  }
})

for (let i = 0; i < accoItem.length; i++) {
  accoItem[i].addEventListener('click', function(event) {
    event.stopPropagation();
    event.preventDefault();

    if (accoItem[i].classList.contains('menu__accordion-item--active')) {
      accoItem[i].classList.remove('menu__accordion-item--active');
    } 
    else {      
    for (let i = 0; i < accoItem.length; i++) {
      if (accoItem[i].classList.contains('menu__accordion-item--active')) {
      accoItem[i].classList.remove('menu__accordion-item--active');
      }  
    }  
    accoItem[i].classList.add('menu__accordion-item--active');
    }
  })
}

/*Секция "Команда" аккордеон*/

const team = document.querySelector('.team__block');
const teamItem = document.querySelectorAll('.accordion__item');

for (let i = 0; i < teamItem.length; i++) {
  teamItem[i].addEventListener('click', function(event) {
    event.stopPropagation();
    event.preventDefault();

    if (teamItem[i].classList.contains('accordion__item--active')) {
      teamItem[i].classList.remove('accordion__item--active');
    } 
    else {      
    for (let i = 0; i < teamItem.length; i++) {
      
        teamItem[i].classList.remove('accordion__item--active');
      }  
      
    teamItem[i].classList.add('accordion__item--active');
    }
  })
}