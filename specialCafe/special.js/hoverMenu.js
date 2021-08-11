let menu_special = document.querySelectorAll('.cafeKinds li a');
let underline = document.querySelector('.content__menu .wrap .underline');
let underline_width = underline.clientWidth;

let cnt = 0;

for (let i=0;i<menu_special.length;i++){
  if(menu_special[i].classList.contains('visited')){
    cnt = i;
    underline.style.left=((cnt*(underline_width/10))+(2*(cnt+1))) + "rem";
    
    
    menu_special[cnt].style.color = "#8d91eb";
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




