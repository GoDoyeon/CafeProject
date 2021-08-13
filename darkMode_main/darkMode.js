import header from "./object/header_color.js";
import mainHome from "./object/mainHome_color.js";
import body from "./object/body_color.js";
import main_newCafe from "./object/main_newCafe_color.js";
import detailBtnColor from "./object/mainDetailBtn_color.js";
import horoscopeBtn from "./object/horoscopeBtn_color.js";
import footer from "./object/footer_color.js";

/* 버튼 아이콘 */
let moon = document.querySelector(".header .fa-moon");
let sun = document.querySelector(".header .fa-sun");

/* 버튼 이벤트*/
let darkModeBtn = document.querySelector(".header .header__btn");
darkModeBtn.addEventListener("click", nightDayHandler);

darkModeBtn.addEventListener("mouseover", function () {
  if (darkModeBtn.value === "night") {
    darkModeBtn.style.background = "#3D4044";
    moon.style.color = "yellow";
    darkModeBtn.style.color = "#f4f4f4";
  } else {
    darkModeBtn.style.background = "#f4f4f4";
    sun.style.color = "green";
    darkModeBtn.style.color = "#333";
  }
});

darkModeBtn.addEventListener("mouseout", function () {
  let btnIcon = document.querySelector(".header .fa-moon");
  if (darkModeBtn.value === "night") {
    darkModeBtn.style.background = "#f4f4f4";
    btnIcon.style.color = "black";
    darkModeBtn.style.color = "#333";
  } else {
    darkModeBtn.style.background = "#3D4044";
    btnIcon.style.color = "yellow";
    darkModeBtn.style.color = "#f4f4f4";
  }
});

function nightDayHandler() {
  let currentPos = document.documentElement.scrollTop;
  let mainHomeHeight = document.querySelector(".main__home").clientHeight;
  let button_value = document.querySelector(".header__btn .header__btn--right");

  if (darkModeBtn.value === "night") {
    button_value.innerHTML = "라이트모드";
    moon.style.display = "none";
    sun.style.display = "block";
    /* 헤더 */
    if (currentPos > mainHomeHeight) {
      header.setBgColor("#292a2d");
    }
    if (matchMedia("screen and (max-width: 1024px)").matches) {
      header.setMenuBg("#46405860"); //헤더 mobile, tablet 메뉴
    }

    header.setFontColor("#F1F1F1");
    header.setBtnBgColor("#3D4044");
    header.setBtnFontColor("#f4f4f4");
    header.setBtnIcon("yellow");

    /* 메인 홈 */
    mainHome.setMainBgColor("#464058");
    mainHome.setMainFontColor("#F1F1F1");

    /* 전체 바디 */
    body.setBgColor("#292a2d");
    body.setFontColor("#F1F1F1");
    body.setHighLightColor("white");

    /* horoscopeBtn */
    horoscopeBtn.horoscopeBgBtn("#7160BB");

    /* 메인 뉴카페 */
    main_newCafe.cafeBgColor("#464058");
    main_newCafe.cafeBtnColor("#F1F1F1");

    /* 상세보기 버튼 */
    detailBtnColor.setBgColor("#292a2d");
    detailBtnColor.setFontColor("#F1F1F1");

    /* footer */
    footer.setAtagColor("#F1F1F1");

    darkModeBtn.value = "day";
  } else {
    sun.style.display = "none";
    moon.style.display = "block";
    button_value.innerHTML = "다크모드";
    /* 헤더 */
    if (currentPos > mainHomeHeight) {
      header.setBgColor("white");
    }
    if (matchMedia("screen and (max-width: 1024px)").matches) {
      header.setMenuBg("#ffffffcc"); //헤더 mobile, tablet 메뉴
    }

    header.setFontColor("#333");
    header.setBtnBgColor("#f4f4f4");
    header.setBtnFontColor("#333");
    header.setBtnIcon("black");

    /* 메인 홈 */
    mainHome.setMainBgColor("#eedeff");
    mainHome.setMainFontColor("#333");

    /* 전체 바디 */
    body.setBgColor("none");
    body.setFontColor("#333");
    body.setHighLightColor("#8d91eb");

    /* horoscopeBtn */
    horoscopeBtn.horoscopeBgBtn("#979797");

    /* 메인 뉴카페 */
    main_newCafe.cafeBgColor("#f8f2ff");
    main_newCafe.cafeBtnColor("#ccb7ff");

    /* 상세보기 버튼 */
    detailBtnColor.setBgColor("#eedeff");
    detailBtnColor.setFontColor("#333");

    /* footer */
    footer.setAtagColor("#333");

    darkModeBtn.value = "night";
  }
}
