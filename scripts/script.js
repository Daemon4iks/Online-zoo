




const buttons = document.querySelectorAll('.donation__inner-button');
const count = document.querySelector('.pick-diets-count');
let selectedButton = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const amount = parseInt(button.getAttribute('data-amount'));
    const diets = amount / 250; 
    count.innerText = diets;
    if (selectedButton) {
      selectedButton.querySelector('.donation__inner-value').classList.remove('clicked');
      selectedButton.classList.remove('active');
    }
    selectedButton = button;
    button.querySelector('.donation__inner-value').classList.add('clicked');
    button.classList.add('active');
  });
});






const dietsAmount = document.querySelector('.pick-diets-count');
const anotherAmount = document.querySelector('.money-input-value');
anotherAmount.addEventListener('input', () => {
  dietsAmount.innerHTML = anotherAmount.value / 250;
});









//swiper scrollbar
let myScrollbar = document.querySelector('.swiper');
let myscrollbarswiper = new Swiper(myScrollbar, {
  slidesPerView: 4,
  breakpoints: {
    1000:{
      slidesPerView: 3
    },
    1600: {
      slidesPerView: 4
    }
  },
  scrollbar: {

    el: ".swiper-scrollbar",
    draggable: true,
    dragSize: 115,


  },
  hide: true,
});
//удаление текста с input email
function clearInput() {
  let inputFields = document.getElementsByClassName("email");
  for (let i = 0; i < inputFields.length; i++) {
    inputFields[i].value = "";
  }
}

//кнопка вверх, анимация появления/листания
const btnUp = document.querySelector('.btn-up');
function showBtnUp() {
  if (btnUp.classList.contains('btn-up_hide') && !btnUp.classList.contains('btn-up_hiding')) {
    btnUp.classList.remove('btn-up_hide');
    btnUp.classList.add('btn-up_hiding');
    setTimeout(() => {
      btnUp.classList.remove('btn-up_hiding');
    }, 300);
  }
}
function hideBtnUp() {
  if (!btnUp.classList.contains('btn-up_hide') && !btnUp.classList.contains('btn-up_hiding')) {
    btnUp.classList.add('btn-up_hiding');
    setTimeout(() => {
      btnUp.classList.add('btn-up_hide');
      btnUp.classList.remove('btn-up_hiding');
    }, 300);
  }
}
function handleScroll() {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  if (scrollY > 400) {
    showBtnUp();
  } else {
    hideBtnUp();
  }
}
function handleClick() {
  btnUp.removeEventListener('click', handleClick);
  hideBtnUp();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
  setTimeout(() => {
    btnUp.addEventListener('click', handleClick);
  }, 1000);
}
window.addEventListener('scroll', handleScroll);
btnUp.addEventListener('click', handleClick);



var gallerySwiper = new Swiper('.swiper-wrapper', {
  // параметры слайдера
  slidesPerView: 3, // количество отображаемых слайдов
  spaceBetween: 30, // расстояние между слайдами
  loop: true, // зацикливание слайдера
  // добавление кнопок навигации
  navigation: {
    nextEl: '.gallery__inner--button2',
    prevEl: '.gallery__inner--button1',
  },
});


// диеты






