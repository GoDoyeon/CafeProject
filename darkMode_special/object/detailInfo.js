const mainHome_detail = {
  setBgColor :function(color){
    let main_home = document.querySelector('.main_detail_info .main__home');
    main_home.style.background = color;
  },

  setFontColor :function(color){
    let mainHome_font = document.querySelector('.main_detail_info .main__home .detailed__information');
    mainHome_font.style.color = color;
  },

  setContainerColor : function(color){
    let container = document.querySelector('.detailed__info');
    container.style.background = color;
  },

  setLinkColor: function(color){
    let link = document.querySelector('.caption a');
    link.style.color=color;
  },

  setCenterBgColor: function(color){
    let img5 = document.querySelector('.detailed__container .img5');
    img5.style.background=color;
  },

  setCenterFontColor: function(color){
    let img5 = document.querySelector('.detailed__container .img5');
    img5.style.color=color;
  },
}

export default mainHome_detail;