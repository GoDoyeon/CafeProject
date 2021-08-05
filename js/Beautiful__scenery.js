//pageFive
let scenery_leftBigSlide = document.querySelector('.scenery__bg__left .scenery__bg__bigBox');
let scenery = document.querySelector('.main__scenery .scenery__bg__left');
let scenery_rightBigSlide = document.querySelector('.scenery__bg__right .scenery__bg__bigBox');
let scenery__right = document.querySelector('.main__scenery .scenery__bg__right');
let scenery__bg__upSlide = document.querySelector('.scenery__bg__up__container .scenery__bg__up');
let scenery__bg__downSlide = document.querySelector('.scenery__bg__down__container .scenery__bg__down');
let scenery__small = document.querySelector('.scenery__bg__up .scenery__bg__smallSlide1');
let scenery__bg__small = document.querySelector('.scenery__bg__down .scenery__bg__small');
let scenery__bg__small2 = document.querySelector('.scenery__bg__down .scenery__bg__small2');
let scenery__bg__smallUp = document.querySelector('.scenery__bg__up .scenery__bg__small');
let scenery__bg__smallUp2 = document.querySelector('.scenery__bg__up .scenery__bg__small2');
let docElement = document.documentElement;
// let scenery__leftBigSlide__width = scenery.clientWidth;
// let scenery_rightBigSlide__width = scenery__right.clientWidth;
// let scenery__bg__upSlide__width = scenery__small.clientWidth;

/* 높이 계산에 필요한 요소*/
mainHomeHeight = document.querySelector('.main .main__home').clientHeight;
mainHoroscopeHeight = document.querySelector('.main__horoscope').clientHeight;
let topNum=mainHomeHeight+mainHoroscopeHeight;
let direction = '';
// console.log(screen.width);
document.addEventListener('scroll',function(){
  let currentPos = document.documentElement.scrollTop;
  // console.log(currentPos);
  if (currentPos>topNum){
    if (direction != 'down'){
      direction = 'down';
      scenery_leftBigSlide.style.left = -100 + "%";
      scenery__bg__upSlide.style.left = -100 + "%";
      scenery_rightBigSlide.style.left = -100 + "%";
      scenery__bg__downSlide.style.left = -100 + "%"; //upSlide와 넓이가 동일함.
      scenery__bg__small.style.opacity = 1;
      scenery__bg__small2.style.opacity = 0;
      scenery__bg__smallUp.style.opacity = 1;
      scenery__bg__smallUp2.style.opacity = 0;

    }
  }else{
    if (direction != 'up'){
      direction = 'up';
      scenery_leftBigSlide.style.left = 0 + "px";
      scenery__bg__upSlide.style.left = 0 + "px";
      scenery_rightBigSlide.style.left = 0 + "px";
      scenery__bg__downSlide.style.left = 0 + "px";
      scenery__bg__small.style.opacity = 0;
      scenery__bg__small2.style.opacity = 1;
      scenery__bg__smallUp.style.opacity = 0;
      scenery__bg__smallUp2.style.opacity = 1;
    }
  }
});

