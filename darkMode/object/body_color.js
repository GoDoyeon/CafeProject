let bodyColor = document.querySelector('body');
let body = {
  setBgColor: function(color){
    bodyColor.style.background = color;
  },

  setFontColor: function(color){
    bodyColor.style.color = color;
  },
}

export default body;