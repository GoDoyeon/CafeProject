let menu = document.querySelectorAll('.cafeKinds li a');
let underline = document.querySelector('.content__menu .wrap .underline');
let cnt = 0;

for (let i=0;i<menu.length;i++){
  if(menu[i].classList.contains('visited')){
    cnt = i;
    console.log(cnt);
    underline.style.left=(cnt*22) + "rem";
    menu[cnt].style.color = "#8d91eb";
    break;
  }
}

// for (let i=0;i<menu.length;i++){
//   menu[i].addEventListener('mouseover', function(){
//     underline.style.left = (i*22) + "rem";
//   });
//   menu[i].addEventListener('mouseout', function(){
//     underline.style.left = (cnt*22) + "rem";
//   });
// }




