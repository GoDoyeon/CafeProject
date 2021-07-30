let menu = document.querySelectorAll('.cafeKinds li a');
let underline = document.querySelector('.content__menu .wrap .underline');
let cnt = 0;

menu[0].addEventListener('mouseover',function(){
  underline.style.left=0;
});

menu[1].addEventListener('mouseover',function(){
  underline.style.left=22 + "rem";
});

menu[2].addEventListener('mouseover',function(){
  underline.style.left=44+"rem";
});

menu[3].addEventListener('mouseover',function(){
  underline.style.left=66+"rem";
});

// for (let i=0;i<menu.length;i++){
//   if(menu[i].classList.contains('visited'));
//   cnt = i;
//   break;
// }

// underline.style.left=(cnt*22) + "rem";
// document.querySelector(`${menu[cnt]} a`).style.color = "#8d91eb";
