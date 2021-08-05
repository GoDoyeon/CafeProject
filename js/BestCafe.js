let best__inner__bg = document.querySelector('.best__bg .best__inner__bg');
let best__inner__bg__height = best__inner__bg.clientHeight;
let best__header = document.querySelector('.best__box .best__header');
let best__header__height = best__header.clientHeight - 550;
let TopNum_pageSix = 2700;
let direction_pageSix = '';
console.log(best__inner__bg.clientWidth);
document.addEventListener('scroll',function(){
  let currentPos = document.documentElement.scrollTop;
  if(currentPos > TopNum_pageSix){
    if(direction_pageSix != 'down'){
      direction_pageSix = 'down';
      best__inner__bg.style.top = 0 + "rem";
      best__header.style.top = 0+"rem";
    }
  }else{
    if(direction_pageSix != 'up'){
      direction_pageSix = 'up';
      best__inner__bg.style.top = (best__inner__bg__height/10) + 'rem';
      best__header.style.top = (best__header__height/10) + 'rem';
    }
  }
});

