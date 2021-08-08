const horoPrevBtn = document.querySelector('.horoscope__prevbtn');
const horoNextBtn = document.querySelector('.horoscope__nextbtn');
const horoscope = document.querySelector('.horoscope__wrapper');

const screen_tablet = window.matchMedia("screen and (max_width: 1023px)");
const screen_desktop = window.matchMedia("screen and (min-width: 1024px)");
let img_size = document.querySelector('.horoscope .horoscope__img').clientWidth;
let margin = 30;


let index = 0;

horoPrevBtn.addEventListener('click', () => {
  if (index <= 6 && index >= 0) {
    index -= 1;
    horoscope.style.transform = `translate3d(-${(img_size+margin) * index}px, 0, 0)`;
    if(index===-1){
      index = 0; 
    }
  }
  
});

horoNextBtn.addEventListener('click', () => {
  if (index >= 0 && index < 6) {//614
    index += 1;
    horoscope.style.transform = `translate3d(-${(img_size+margin) * index}px, 0, 0)`;
  }
  
});

