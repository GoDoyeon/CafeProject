let header__bg = document.querySelector(".header");
let darkModeBtn_header = document.querySelector(".header .header__btn");
let TopNum_header = 600;
let direction_header = '';
document.addEventListener('scroll',function(){
  let currentPos = document.documentElement.scrollTop;
  if(currentPos > TopNum_header){
    if(direction_header != 'down'){
      direction_header = 'down';
      if(darkModeBtn_header.value==='night'){
        header__bg.style.background = 'white';
        header__bg.style.color = '#333';
      }else{
        header__bg.style.background = '#292a2d';
        header__bg.style.color = '#F1F1F1';
      }

      
    }
  }else{
    if(direction_header != 'up'){
      direction_header = 'up';
      header__bg.style.background = 'none';
    }
  }
});

// darkModeBtn.addEventListener('click', function(){
//   let currentPos = document.documentElement.scrollTop;
//   if(currentPos > TopNum_header){
//     if(darkModeBtn.value==='night'){
//       header__bg.style.background = '#EEDEFF';
//       header__bg.style.color = '#333';
//       console.log('a');
//     }else{
//       header__bg.style.background = 'black';
//       header__bg.style.color = 'powderblue';
//     }
//   }
// });
