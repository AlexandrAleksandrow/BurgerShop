//Полноэкранное меню//

const hamburger__menu = document.querySelector('.hamburger__menu');
const menu__mob = document.querySelector('.menu__mob');
const mob__close = document.querySelector('.mob__close');
const mobItem = document.querySelectorAll('.menu__mob-item');

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

//Секция "Бургер" Иконка - состав бургера//

const burgerComposition = document.querySelector('.burger__composition');
const burgerPopup = document.querySelector('.burger__popup');
const popupExit = document.querySelector('.popup__exit');

burgerComposition.addEventListener('click', function(event) {
  event.preventDefault();
  burgerPopup.style.display = 'flex';
})

popupExit.addEventListener('click', function(event) {
  event.preventDefault();
  burgerPopup.style.display = '';
})


//Секция "Бургер" Слайдер//

const left = document.querySelector(".slider__arrow-letf");
const right = document.querySelector(".slider__arrow-right");
const items = document.querySelector(".slider__content");

const minRight = 0;
const maxRight = 80;
const step = 20;
let currentRight = 0;

items.style.right = currentRight;

right.addEventListener("click", function() {
  if (currentRight < maxRight) {
    currentRight += step;
    items.style.right = currentRight + "%";
  }
});

left.addEventListener("click", function() {
  if (currentRight > minRight) {
    currentRight -= step;
    items.style.right = currentRight + "%";
  }
});


//Секция "Меню" аккордеон//

const acco = document.querySelector('.menu');
const accoItem = document.querySelectorAll('.menu__accordion-item');
const trigger = document.querySelector('.menu__accordion-caption');
const triggerWidth = parseInt(getComputedStyle(trigger).width);
const accoContent = document.querySelectorAll('menu__accordion-content');

function widhtCalculate (n, opened) {
  let screenWidth = document.documentElement.clientWidth;
  
  if (screenWidth <= 768 && screenWidth > 480) {
      if (!opened) {
         accoContent[n].style.width = screenWidth - triggerWidth * accoItem.length + 'px';
      } else {
          accoContent[n].style.width = '';
      };
  } else if (screenWidth <= 480) {
      if (!opened) {
          accoContent[n].style.width = screenWidth - triggerWidth + 'px';
      } else {
          accoContent[n].style.width = '';
      };
  };
};

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
    }else { 
           
    for (let i = 0; i < accoItem.length; i++) {
      if (accoItem[i].classList.contains('menu__accordion-item--active')) {
      accoItem[i].classList.remove('menu__accordion-item--active');
      }  
    }  
    accoItem[i].classList.add('menu__accordion-item--active');
    }
  })
}

//Секция "Команда" аккордеон//

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


//Секция "Отзывы" Модальное окно//

const reviewsList = document.querySelector('.reviews__list');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const modalCaption = document.querySelector('.modal__caption');
const modalText = document.querySelector('.modal__text');

reviewsList.addEventListener('click', e=> {
  e.preventDefault();
  let element = e.target; // ловим кликнутый эелмент
  
  if(element.tagName === 'A') { // если у кликнутого элемента класс А - ссылка, то выполняем код ниже
    
    let popupText = element.previousElementSibling.innerHTML; // получаем текст отзыва
    let popupCaption = element.previousElementSibling.previousElementSibling.innerHTML; // получаем имя

    modalText.innerHTML = popupText; // вставляем текст отзыва
    modalCaption.innerHTML = popupCaption; // вставляем имя
    modal.style.display = 'flex'; // показываем модальное окно со вставленным содержимым
    document.body.style.overflow = 'hidden';
  }
})  

reviewsList.addEventListener('keyup', e => { //закрытие по отпусканию кнопки esc
  const keyName = e.keyCode;
  console.log(keyName);

  if (keyName === 27) {
    modal.style.display = '';
    document.body.style.overflow = '';
  }
});

modalClose.addEventListener('click', e => { //закрытие по клику на красный крестик
  e.preventDefault();
  modal.style.display = '';
  document.body.style.overflow = '';
})

modal.addEventListener('click', e => { //закрытие по клику на фон
  if(e.target === modal) { // если клик выполнен по серому фону, то ->
    e.preventDefault();
    modal.style.display = '';
    document.body.style.overflow = '';
  }  
})


//Секция "Ordering" отправка данных из формы//


//Contacts - Map//

ymaps.ready(init);

var myMap;


function init() {
  myMap = new ymaps.Map("YMapsID", {
      center: [59.92, 30.33],
      zoom: 12,           
  });

  myMap.controls
  .add('zoomControl')  
  .add('mapTools')

  var placemark = new ymaps.Placemark([59.96, 30.3289], {
    hintContent: 'БургерШоп',
    balloonContent: 'ул. Б.Посадская, 11<br> Пн-Вс 10:00-22:00 <br> 8(812)313-24-88',
  },
  {
    iconLayout: 'default#image',
    iconImageHref: './ifc/mapmarker.png',
    iconImageSize: [46, 57],
    iconImageOffset: [-23, -57]
  });

  var placemark1 = new ymaps.Placemark([59.94, 30.36], {
    hintContent: 'БургерШоп',
    balloonContent: 'ул. Восстания, 30/7 <br> Пн-Вс 10:00-22:00 <br> 8(812)313-24-88',
  },
  {
    iconLayout: 'default#image',
    iconImageHref: './ifc/mapmarker.png',
    iconImageSize: [46, 57],
    iconImageOffset: [-23, -57]
  });

  var placemark2 = new ymaps.Placemark([59.92, 30.35], {
    hintContent: 'БургерШоп',
    balloonContent: 'ул. К.Заслонова, 11 <br> Пн-Вс 10:00-22:00 <br> 8(812)313-24-88',
  },
  {
    iconLayout: 'default#image',
    iconImageHref: './ifc/mapmarker.png',
    iconImageSize: [46, 57],
    iconImageOffset: [-23, -57]
  });

  myMap.geoObjects.add(placemark);
  myMap.geoObjects.add(placemark1);
  myMap.geoObjects.add(placemark2);  
}


//OnePageScroll//

const section = document.querySelectorAll('.section');
const maincontent = document.querySelector('.maincontent');
const homeScroll = document.querySelector('.home_scroll'); 
const navLink = document.querySelector('.nav').querySelectorAll('.nav__link');
const sidebarLink = document.querySelector('.sidebar__link');
const navList = document.querySelector('.nav__list');

const minTop = 0;
const stepTop = 100;
const maxTop = -700;
let currentTop = 0;

maincontent.style.top = currentTop;

function moveTop(position) {
  currentTop = position;
  mainContent.style.top = currentTop + '%';
  sidebarActive();
}


function scrollUp() {
  if (currentTop < minTop) {
    currentTop += stepTop;
    maincontent.style.top = currentTop + '%';            
  }
}

function scrollDown() {
  if (currentTop > maxTop) {
    currentTop -= stepTop;
    maincontent.style.top = currentTop + '%';      
  }
}

document.addEventListener('wheel', (e) => {//в зависимости от того куда крутим колесо, применяем функции
  console.log(e);
  
  const delta = e.wheelDelta;  

  if (delta > 0) {
    console.log('up');
    scrollUp();
  }

  if(delta < 0) {
    console.log('down');
    scrollDown();
  }
})

document.addEventListener('keyup', e => { //скролл по отпусканию стрелки вверх-вниз
  const keyName = e.keyCode;
  console.log(keyName);

  if (keyName === 38) {
    scrollUp();
  }

  if (keyName === 40) {
    scrollDown();
  }
});

homeScroll.addEventListener('click', e => {//стрелка вниз на 1-й секции
  scrollDown();
})


//Header - menu
//navList.addEventListener('click', e=> {
 // e.preventDefault();
 // let element = e.target; // ловим кликнутый эелмент
  
 // if(element.tagName === 'A') { // если у кликнутого элемента тег А - ссылка, то выполняем код ниже
    
//    var scrollTo = element.dataset.scrollTo(); //получаем дата атрибут кликнутой ссылки
 //   currentTop = - scrollTo * 100%;
 // }
//})   