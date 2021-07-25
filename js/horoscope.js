const horoPrevBtn = document.querySelector('.horoscope__prevbtn');
const horoNextBtn = document.querySelector('.horoscope__nextbtn');
const horoscope = document.querySelector('.horoscope__wrapper');

let index = 0;

horoPrevBtn.addEventListener('click', () => {
  console.log('index : ' + index);
  if (index === 0) {
    console.log('prev끝');
    return;
  }
  index -= 1;
  horoscope.style.transform = `translate3d(-${1228 * index}px, 0, 0)`;
});

horoNextBtn.addEventListener('click', () => {
  console.log('index : ' + index);
  console.log('next');
  if (index === 2) {
    horoNextBtn.style = 'visibility:hidden;';

    console.log('next끝');
    return;
  }
  index += 1;
  horoscope.style.transform = `translate3d(-${1228 * index}px, 0, 0)`;
});

// if (index === 0) {
//   horoPrevBtn.style = 'visibility:hidden;';
//   horoNextBtn.style = 'visibility:visible;';
// } else if (index === 1) {
//   horoNextBtn.style = 'visibility:hidden;';
//   horoPrevBtn.style = 'visibility:visible;';
// }
