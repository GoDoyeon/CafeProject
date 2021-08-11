const main_newCafe = {
  cafeBgColor : function(color){
    let mainNewCafe = document.querySelector('.main__newCafe');
    mainNewCafe.style.background = color;
  },

  cafeBtnColor : function(color){
    let swiper_btn = document.querySelectorAll('.newCafe__block .swiper_button');
    for(let i=0; i<swiper_btn.length; i++){
      swiper_btn[i].style.color = color;
    }
  }
}

export default main_newCafe;