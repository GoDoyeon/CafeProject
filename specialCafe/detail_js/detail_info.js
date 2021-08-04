import rooftop from './rooftop_info.js';
import drawing from './drawing_info.js';
import healing from './healing_info.js';
import theme from './theme_info.js';

let imgs = document.querySelectorAll('.detailed__container li');
let clickCafe=document.querySelectorAll('.cafeDetailBtn');
let main = document.querySelector('.main');
let main_detail = document.querySelector('.main_detail_info');
let prev = document.querySelector('.detailed__info .prev');

/* 카페 info*/
let cafeTheme_Info = document.querySelector('.detailed__wrap .main_tit');
let cafeName_Info = document.querySelector('.detailed__wrap .cafe_tit');
let cafeAddress_Info = document.querySelector('.detailed__wrap .cafe_address');
let cafeLink_Info = document.querySelector('.detailed__wrap .cafe_link a');
let cafeStars_Info = document.querySelector('.detailed__wrap .stars');

/* 카페 Main info */
let cafeMainTheme_Info = document.querySelector('.detailed__container .cafe_theme');
let cafeMainName_Info = document.querySelector('.detailed__container .cafe_name');

for(let i=0; i<clickCafe.length; i++){
  clickCafe[i].addEventListener('click', function(){
    main.style.display = "none";
    main_detail.style.display = "block";

    console.log(clickCafe[i]);
    console.log(i);

    /*카페 정보*/
    if (clickCafe[i].name==='rooftop'){
      let cafeTheme = rooftop[`cafeCategory`];
      let cafeName = rooftop[`${clickCafe[i].value}`][`name`];
      let aTagHref = rooftop[`${clickCafe[i].value}`][`link`];

      cafeTheme_Info.innerHTML = cafeTheme;
      cafeName_Info.innerHTML = cafeName;
      cafeAddress_Info.innerHTML = rooftop[`${clickCafe[i].value}`][`address`];
      cafeLink_Info.innerHTML = rooftop[`${clickCafe[i].value}`][`link`];
      cafeLink_Info.setAttribute('href', aTagHref);
      cafeStars_Info.innerHTML = rooftop[`${clickCafe[i].value}`][`star`];

      cafeMainTheme_Info.innerHTML = cafeTheme;
      cafeMainName_Info.innerHTML = cafeName;
    }else if(clickCafe[i].name==='drawing'){
      let cafeTheme = drawing[`cafeCategory`];
      let cafeName = drawing[`${clickCafe[i].value}`][`name`];
      let aTagHref = drawing[`${clickCafe[i].value}`][`link`];

      cafeTheme_Info.innerHTML = cafeTheme;
      cafeName_Info.innerHTML = cafeName;
      cafeAddress_Info.innerHTML = drawing[`${clickCafe[i].value}`][`address`];
      cafeLink_Info.innerHTML = drawing[`${clickCafe[i].value}`][`link`];
      cafeLink_Info.setAttribute('href', aTagHref);
      cafeStars_Info.innerHTML = drawing[`${clickCafe[i].value}`][`star`];

      cafeMainTheme_Info.innerHTML = cafeTheme;
      cafeMainName_Info.innerHTML = cafeName;
    }else if(clickCafe[i].name==='healing'){
      let cafeTheme = healing[`cafeCategory`];
      let cafeName = healing[`${clickCafe[i].value}`][`name`];
      let aTagHref = healing[`${clickCafe[i].value}`][`link`];

      cafeTheme_Info.innerHTML = cafeTheme;
      cafeName_Info.innerHTML = cafeName;
      cafeAddress_Info.innerHTML = healing[`${clickCafe[i].value}`][`address`];
      cafeLink_Info.innerHTML = healing[`${clickCafe[i].value}`][`link`];
      cafeLink_Info.setAttribute('href', aTagHref);
      cafeStars_Info.innerHTML = healing[`${clickCafe[i].value}`][`star`];

      cafeMainTheme_Info.innerHTML = cafeTheme;
      cafeMainName_Info.innerHTML = cafeName;
    }else if(clickCafe[i].name==='theme'){
      let cafeTheme = theme[`cafeCategory`];
      let cafeName = theme[`${clickCafe[i].value}`][`name`];
      let aTagHref = theme[`${clickCafe[i].value}`][`link`];

      cafeTheme_Info.innerHTML = cafeTheme;
      cafeName_Info.innerHTML = cafeName;
      cafeAddress_Info.innerHTML = theme[`${clickCafe[i].value}`][`address`];
      cafeLink_Info.innerHTML = theme[`${clickCafe[i].value}`][`link`];
      cafeLink_Info.setAttribute('href', aTagHref);
      cafeStars_Info.innerHTML = theme[`${clickCafe[i].value}`][`star`];

      cafeMainTheme_Info.innerHTML = cafeTheme;
      cafeMainName_Info.innerHTML = cafeName;
    }

    
    // cafeStars_Info.innerHTML = rooftop[`${click}`]
    
    for(let j=0; j<imgs.length; j++){
      if(j===4){
        continue;
      }
      imgs[j].style.background = `url('.././img/detail_img/${clickCafe[i].name}/${clickCafe[i].value}/${j}.png')`;
    }
  });
}

/* 뒤로가기 버튼 */

prev.addEventListener('click', function(){
    main.style.display = "block";
    main_detail.style.display = "none";
});
