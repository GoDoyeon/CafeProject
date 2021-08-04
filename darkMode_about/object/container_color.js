const container = {
  setBgColor: function(color){
    let body=document.querySelector('body');
    body.style.background=color;
  },

  setFontColor: function(color){
    let body=document.querySelector('body');
    body.style.color = color;
  },


}

export default container;