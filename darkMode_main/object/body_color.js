let bodyColor = document.querySelector('body');
let body = {
  setBgColor: function(color){
    bodyColor.style.background = color;
  },

  setFontColor: function(color){
    bodyColor.style.color = color;
  },

  setHighLightColor: function(color){
    let highLight = document.querySelectorAll('.highLight');
    let i=0;
    while(i<highLight.length){
      highLight[i].style.color = color;
      i=i+1;
    }
    
  }
}

export default body;