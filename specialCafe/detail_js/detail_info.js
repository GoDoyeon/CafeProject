import rooftop from './rooftop_info.js';

let imgs = document.querySelectorAll('.detailed__container li');
let clickCafe=document.querySelectorAll('.cafeDetailBtn');
let main = document.querySelector('.main');
let main_detail = document.querySelector('.main_detail_info');
let prev = document.querySelector('.detailed__info .prev');

/* 카페 hover시, info*/
let cafeTheme_Info = document.querySelector('.detailed__container .main_tit');
let cafeName_Info = document.querySelector('.detailed__container .cafe_tit');
let cafeAddress_Info = document.querySelector('.detailed__container .cafe_address');
let cafeLink_Info = document.querySelector('.detailed__container .cafe_link a');
let cafeStars_Info = document.querySelector('.detailed__container .stars');

/* 카페 Main info */
let cafeMainTheme_Info = document.querySelector('.detailed__container .cafe_theme');
let cafeMainName_Info = document.querySelector('.detailed__container .cafe_name');

for(let i=0; i<clickCafe.length; i++){
  clickCafe[i].addEventListener('click', function(){
    main.style.display = "none";
    main_detail.style.display = "block";


    /*카페 정보*/
    if (clickCafe[i].name==='rooftop'){
      let cafeTheme = rooftop[`cafeCategory`];
      let cafeName = rooftop[`${clickCafe[i].value}`][`name`];

      cafeTheme_Info.innerHTML = cafeTheme;
      cafeName_Info.innerHTML = cafeName;
      cafeAddress_Info.innerHTML = rooftop[`${clickCafe[i].value}`][`address`];
      cafeLink_Info.innerHTML = rooftop[`${clickCafe[i].value}`][`link`];
      cafeStars_Info.innerHTML = rooftop[`${clickCafe[i].value}`][`star`];

      cafeMainTheme_Info.innerHTML = cafeTheme;
      cafeMainName_Info.innerHTML = cafeName;
    }
    
    // cafeStars_Info.innerHTML = rooftop[`${click}`]
    
    for(let j=0; j<imgs.length; j++){
      if(j===4){
        continue;
      }
      imgs[j].style.background = `url('../../img/detail_img/rooftop/${clickCafe[i].value}/${j}.png')`;
    }
  });
}

prev.addEventListener('click', function(){
    main.style.display = "block";
    main_detail.style.display = "none";
});


// clickCafe[0].addEventListener('click',function(){
//   main.style.display = "none";
//   main_detail.style.display = "block";
//   for(let i=0; i<9; i++){
//     if(i===4){
//       continue;
//     }
//     imgs[i].style.background = `url('../../img/detail_img/rooftop/${clickCafe[0].value}/${i}.png')`;
//   }
  
  // for(let i=0; i<9; i++){
  //   if(i===4){
  //     continue;
  //   }
  //   console.log(i);
  //   console.log(clickCafe[0].value);
  //   imgs[i].style.background = `url('../detail_img/rooftop/regentsky/0.png')`;
  //   // imgs[i].style.background = `url('../detail_img/rooftop/${clickCafe[0].value}/${i}.png')`;
  // }
// });



/* 별점 넣으려면
let link__information = {
  CafeButtonValue1:{link:'link Information', star:'별점 이미지 경로 or 별점 정보:ex 4.3/5'},
  CafeButtonValue2:{link:'link Information', star:'별점 이미지 경로 or 별점 정보:ex 4.3/5'},
  CafeButtonValue3:{link:'link Information', star:'별점 이미지 경로 or 별점 정보:ex 4.3/5'},

}

*/
// clickCafe1.addEventListener('click',function(){
//   console.log(clickCafe1.value);
//   imgs[0].style.background = `url('../img/${clickCafe1.value}/logo.png')`;
// });


/*

방법2: 버튼의 value값으로 주기.
만약 value가 one일때 
img > one파일을 만듬, img안에 value값과 동일한 이름의 파일들 생성
파일안에는 해당 value값을 가지고 있는 카페들의 이미지들을 넣음.

for(let i=0; i<9; i++){
  imgs[i].style.background = `url('../img/${clickCafe.value}/${clickCafe.value}${i}.png')`;
}

위에짠 코드와 같이 버튼 클릭시 해당 value값을 받아와서 해당 파일을 가져오는 형식.



information도 위와 같은 방식으로 집어 넣지만 블로그 링크 같은 경우는,
hashMap을 통해 키와 value값으로 정보를 넣어줘야됨. key에는 버튼읜 value값을,
value에는 링크정보를 넣어준다.


*/ 