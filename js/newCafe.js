let swiper = new Swiper('.swiper-container', {
  loop: true, // 슬라이드 반복 여부
  centeredSlides: true, // true시 슬라이드가 가운데로 배치
  slidesPerView: '3', // 한 슬라이드에 보여줄 개수
  debugger: true, // 드래그 기능
  mousewheel: true, // 마우스 휠 기능
  navigation: {
    // 버튼 사용자 지정
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'coverflow', // 스와이프 효과 'slide', 'fade', 'cube', 'coverflow', 'flip'
  coverflowEffect: {
    rotate: -20, // 슬라이더 회전 각. 클수록 슬라이딩시 회전이 커짐
    depth: 290, // 슬라이더간 거리. 클수록 슬라이더가 서로 많이 겹침
    slideShadows: true, // 슬라이더 그림자. 3D 효과를 강조하기 위한 회전시 흐릿한 효과
    //depth: 100,
    //stretch: 50,
  },
});
