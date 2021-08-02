let detailBtn = document.querySelectorAll('.scenery__bg__detail');
let detailBtnFont = document.querySelectorAll('.scenery__bg__detail p');

const detailBtnColor = {
  setBgColor: function(color){
    let i=0;
    while(i<detailBtn.length){
      detailBtn[i].style.background = color;
      i = i+1;
    }
    
  },

  setFontColor: function(color){
    let i=0;
    while(i < detailBtnFont.length){
      detailBtnFont[i].style.color = color;
      i = i + 1;
    }
    
  },
}

export default detailBtnColor;