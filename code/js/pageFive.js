//pageFive
let scenery_leftBigSlide = document.querySelector('.scenery__bg__left .scenery__bg__bigBox');
let scenery = document.querySelector('.main__scenery .scenery__bg__left');
let scenery_rightBigSlide = document.querySelector('.scenery__bg__right .scenery__bg__bigBox');
let scenery__right = document.querySelector('.main__scenery .scenery__bg__right');
let scenery__bg__upSlide = document.querySelector('.scenery__bg__up__container .scenery__bg__up');
let scenery__bg__downSlide = document.querySelector('.scenery__bg__down__container .scenery__bg__down');
let scenery__small = document.querySelector('.scenery__bg__up .scenery__bg__smallSlide1');
let docElement = document.documentElement;
let scenery__leftBigSlide__width = scenery.clientWidth;
let scenery_rightBigSlide__width = scenery__right.clientWidth;
let scenery__bg__upSlide__width = scenery__small.clientWidth;
let topNum=2300;
let direction = '';

document.addEventListener('scroll',function(){
  // let currentScrollValue = document.documentElement.scrollTop;
  // console.log(currentScrollValue);
  let currentPos = document.documentElement.scrollTop;
  if (currentPos>topNum){
    if (direction != 'down'){
      direction = 'down';
      scenery_leftBigSlide.style.left = -scenery__leftBigSlide__width+ "px";
      scenery__bg__upSlide.style.left = -scenery__bg__upSlide__width + "px";
      scenery_rightBigSlide.style.left = -scenery_rightBigSlide__width + "px";
      scenery__bg__downSlide.style.left = -scenery__bg__upSlide__width + "px"; //upSlide와 넓이가 동일함.
    }
  }else{
    if (direction != 'up'){
      direction = 'up';
      scenery_leftBigSlide.style.left = 0 + "px";
      scenery__bg__upSlide.style.left = 0 + "px";
      scenery_rightBigSlide.style.left = 0 + "px";
      scenery__bg__downSlide.style.left = 0 + "px";
    }
  }
});

