import header from '../darkMode_main/object/header_color.js';
import container from '../darkMode_about/object/container_color.js';
import footer from '../darkMode_main/object/footer_color.js';


/* 버튼 이벤트*/
let darkModeBtn = document.querySelector(".header .header__btn");
darkModeBtn.addEventListener('click', nightDayHandler);

darkModeBtn.addEventListener('mouseover', function(){
  let btnIcon = document.querySelector(".header .fa-moon");
  if (darkModeBtn.value === 'night'){
    darkModeBtn.style.background = "#3D4044";
    btnIcon.style.color = "yellow";
    darkModeBtn.style.color = "#f4f4f4"
  }else{
    darkModeBtn.style.background = "#f4f4f4";
    btnIcon.style.color = "black";
    darkModeBtn.style.color = "#333"
  }
});

darkModeBtn.addEventListener('mouseout', function(){
  let btnIcon = document.querySelector(".header .fa-moon");
  if (darkModeBtn.value === 'night'){
    darkModeBtn.style.background = "#f4f4f4";
    btnIcon.style.color = "black";
    darkModeBtn.style.color = "#333"
  }else{
    darkModeBtn.style.background = "#3D4044";
    btnIcon.style.color = "yellow";
    darkModeBtn.style.color = "#f4f4f4"
  }
});

function nightDayHandler(){
  if(darkModeBtn.value === 'night'){
    /* 헤더 */
    header.setFontColor('#F1F1F1');
    header.setBgColor('#292a2d');
    header.setBtnBgColor('#3D4044');
    header.setBtnFontColor('#f4f4f4');
    header.setBtnIcon('yellow');
    
    /* 전체 바디 */
    container.setBgColor('#464058');
    container.setFontColor('#F1F1F1');

    /* footer */
    footer.setAtagColor('#F1F1F1');
    footer.setBgColor('#292a2d');

    darkModeBtn.value = 'day';
  }else{
    /* 헤더 */
    header.setFontColor('#333');
    header.setBgColor('white')
    header.setBtnBgColor('#f4f4f4');
    header.setBtnFontColor('#333');
    header.setBtnIcon('black');

    /* 전체 바디 */
    container.setBgColor('none');
    container.setFontColor('#333');

    /* footer */
    footer.setAtagColor('#333');
    footer.setBgColor('white');

    darkModeBtn.value = 'night';

  }
}