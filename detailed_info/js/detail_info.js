let imgs = document.querySelectorAll('.detailed__container li');
let clickCafe=document.querySelector('.cafeDetailBtn');
let link__information = {
  CafeButtonValue1:'link Information1',
  CafeButtonValue2:'link Information2',
  CafeButtonValue3:'link Information3',

}

/* 별점 넣으려면
let link__information = {
  CafeButtonValue1:{link:'link Information', star:'별점 이미지 경로 or 별점 정보:ex 4.3/5'},
  CafeButtonValue2:{link:'link Information', star:'별점 이미지 경로 or 별점 정보:ex 4.3/5'},
  CafeButtonValue3:{link:'link Information', star:'별점 이미지 경로 or 별점 정보:ex 4.3/5'},

}

*/

let param = {}
param.cafe = clickCafe.value;

clickCafe.addEventListener('click',function(){
  console.log(clickCafe.value);
  imgs[0].style.background = `url('../img/${clickCafe.value}/logo.png')`;
});




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