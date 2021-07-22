const horoPrevBtn = document.querySelector('.horoscope__prevbtn');
const horoNextBtn = document.querySelector('.horoscope__nextbtn');
const horoscope = document.querySelector('.horoscope__wrapper');

let index = 0;

horoPrevBtn.addEventListener('click', () => {
  console.log('prev');
  if (index === 0) {
    console.log('prev끝');
    return;
  }
  index -= 1;
  horoscope.style.transform = `translate3d(-${1228 * index}px, 0, 0)`;
});

horoNextBtn.addEventListener('click', () => {
  console.log('next');
  if (index === 2) {
    console.log('next끝');
    return;
  }
  index += 1;
  horoscope.style.transform = `translate3d(-${1228 * index}px, 0, 0)`;
});
