let content = {
  setBgColor : function(color) {
    let contentBg = document.querySelector('.content__imgs');
    contentBg.style.background = color;
  },

  setFontColor: function(color){
    let selectCafe = document.querySelectorAll('.select__cafe span a');
    for (let i=0; i<selectCafe.length;i++){
      selectCafe[i].style.color = color;
    }
  },

  setImgTextBox: function(color){
    let textBox = document.querySelectorAll('.cafe__imgs .img__text');
    for(let i=0; i<textBox.length; i++){
      textBox[i].style.background = color;
    }
  }
}

export default content;