import header from '../darkMode_main/object/header_color.js';
import body from '../darkMode_main/object/body_color.js';
import mainHome from '../darkMode_main/object/mainHome_color.js';
import category from '../darkMode_special/object/categoryColor.js';
import content from '../darkMode_special/object/content_color.js';
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

    /* 메인 홈 */
    mainHome.setMainBgColor('#464058');
    mainHome.setMainFontColor('#F1F1F1');

    /* 전체 바디 */
    body.setBgColor('#292a2d');
    body.setFontColor('#F1F1F1');
    body.setHighLightColor('white');

    /* 카테고리 */
    category.setMainCategory('white');

    /* content */
    content.setBgColor('#464058');
    content.setFontColor('#F1F1F1');
    content.setImgTextBox('#292a2d');

    /* footer */
    footer.setAtagColor('#F1F1F1');

    darkModeBtn.value = 'day';
  }else{
    /* 헤더 */
    header.setFontColor('#333');
    header.setBgColor('white')
    header.setBtnBgColor('#f4f4f4');
    header.setBtnFontColor('#333');
    header.setBtnIcon('black');

    /* 메인 홈 */
    mainHome.setMainBgColor('#eedeff');
    mainHome.setMainFontColor('#333');

    /* 전체 바디 */
    body.setBgColor('none');
    body.setFontColor('#333');
    body.setHighLightColor('#8d91eb');

    /* 카테고리 */
    category.setMainCategory('#333');

    /* content */
    content.setBgColor('#f4f4f4');
    content.setFontColor('#333');
    content.setImgTextBox('#47405a');


    /* footer */
    footer.setAtagColor('#333');

    darkModeBtn.value = 'night';

  }
}