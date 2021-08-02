let header = {
  setBgColor: function(color){
    let headerBg = document.querySelector('.header');
    headerBg.style.background = color;

  },
  setFontColor: function(color){
    let menu = document.querySelectorAll(".header li a");
    
    let i = 0;
    while(i < menu.length){
      menu[i].style.color = color;
      i = i+1;
    }
  },

  setBtnBgColor: function(color){
    darkModeBtn.style.background = color;
  },

  setBtnFontColor: function(color){
    darkModeBtn.style.color = color;
  },

  setBtnIcon: function(color){
    let btnIcon = document.querySelector(".header .fa-moon");
    btnIcon.style.color = color;
  },
}

export default header;
