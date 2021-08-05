const horoPrevBtn = document.querySelector('.horoscope__prevbtn');
const horoNextBtn = document.querySelector('.horoscope__nextbtn');
const horoscope = document.querySelector('.horoscope__wrapper');

let index = 0;

horoPrevBtn.addEventListener('click', () => {
  index -= 1;
  if (index < 4 && index >= 0) {
    horoscope.style.transform = `translate3d(-${950 * index}px, 0, 0)`;
  }
});

horoNextBtn.addEventListener('click', () => {
  index += 1;
  if (index >= 0 && index < 4) {
    horoscope.style.transform = `translate3d(-${950 * index}px, 0, 0)`;
  }
});
