import header from "../darkMode_main/object/header_color.js";
import container from "../darkMode_about/object/container_color.js";
import footer from "../darkMode_main/object/footer_color.js";
import project from "../darkMode_about/object/projectContainer_color.js";
import teamProject from "../darkMode_about/object/team_color.js";

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
  let header_menu = document.querySelector(".header__menu");
  if (darkModeBtn.value === "night") {
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

    /* 전체 바디 */
    container.setBgColor("#464058");
    container.setFontColor("#F1F1F1");

    /* About */
    /* 프로젝트 container&font*/
    project.projectContainer("#292a2d");
    project.projectFontColor("white");

    /* TeamBtn */
    teamProject.teamBtnBgColor("#292a2d");
    teamProject.teamBtnFontColor("white");
    teamProject.teamFontColor("white");
    teamProject.teamLinkColor("white");

    /* footer */
    footer.setAtagColor("#F1F1F1");

    darkModeBtn.value = "day";
  } else {
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

    /* 전체 바디 */
    container.setBgColor("none");
    container.setFontColor("#333");

    /* About */
    /* 프로젝트 container&font*/
    project.projectContainer("#eedeff");
    project.projectFontColor("#5D4B72");

    /* TeamBtn */
    teamProject.teamBtnBgColor("#eedeff");
    teamProject.teamBtnFontColor("#333");
    teamProject.teamFontColor("#5D4B72");
    teamProject.teamLinkColor("#333");

    /* footer */
    footer.setAtagColor("#333");

    darkModeBtn.value = "night";
  }
}
