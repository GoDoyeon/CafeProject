const prevButton = document.querySelector('.prev__btn');
const nextButton = document.querySelector('.next__btn');
const horoscope = document.querySelector('.horoscope');

let index = 0;

prevButton.addEventListener('click', () => {
  console.log('prev');
  if (index === 0) {
    console.log('prev끝');
    return;
  }
  index -= 1;
  horoscope.style.transform = `translate3d(-${1228 * index}px, 0, 0)`;
});

nextButton.addEventListener('click', () => {
  console.log('next');
  if (index === 2) {
    console.log('next끝');
    return;
  }
  index += 1;
  horoscope.style.transform = `translate3d(-${1228 * index}px, 0, 0)`;
});
