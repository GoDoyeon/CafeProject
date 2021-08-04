const horoscopeBtn = {
  horoscopeBgBtn: function(color){
    let horoscopeBtn = document.querySelectorAll('.horoscope__btn');
    for(let i=0; i<horoscopeBtn.length; i++){
      horoscopeBtn[i].style.background = color;
    }
  },

  horoscopeFontBtn: function(color){
    let horoscopeBtn = document.querySelectorAll('.horoscope__btn');
    for(let i=0; i<horoscopeBtn.length; i++){
      horoscopeBtn[i].style.color = color;
    }
  },
}

export default horoscopeBtn;