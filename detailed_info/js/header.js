let header__bg = document.querySelector(".header");
let TopNum_header = 600;
let direction_header = '';
document.addEventListener('scroll',function(){
  let currentPos = document.documentElement.scrollTop;
  if(currentPos > TopNum_header){
    if(direction_header != 'down'){
      direction_header = 'down';
      header__bg.style.background = '#EEDEFF';
    }
  }else{
    if(direction_header != 'up'){
      direction_header = 'up';
      header__bg.style.background = 'none';
    }
  }
});

