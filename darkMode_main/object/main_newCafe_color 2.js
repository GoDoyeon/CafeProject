let mainNewCafe = document.querySelector('.main__newCafe');

const main_newCafe = {
  cafeBgColor : function(color){
    mainNewCafe.style.background = color;
  },

  cafeBtnColor: function(color){
    let button = document.querySelectorAll('.swiper_button');
    for(let i=0; i<button.length; i++){
      button[i].style.color = color;
    }
  }
}


export default main_newCafe;