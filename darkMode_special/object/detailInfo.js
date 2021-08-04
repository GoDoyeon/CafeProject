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


  setCenterBgColor: function(color){
    let img5 = document.querySelector('.detailed__container .img5');
    img5.style.background=color;
  },

  setCenterFontColor: function(color){
    let img5 = document.querySelector('.detailed__container .img5');
    img5.style.color=color;
  },

  setDetailInfoBgColor: function(color){
    let caption = document.querySelector('.detailed__wrap .caption');
    caption.style.background = color;
  },

  setDetailInfoFontColor: function(color){
    let caption = document.querySelector('.detailed__wrap .caption');
    caption.style.color = color;
  },

  setDetailInfoLinkColor: function(color){
    let captionLink = document.querySelector('.caption .cafe_link a');
    captionLink.style.color = color;
  },



  setBtnBgColot: function(color){
    let btn = document.querySelector('.detailed__info .prev');
    btn.style.background = color;
  },

  setBtnFontColot: function(color){
    let btn = document.querySelector('.detailed__info .prev');
    btn.style.color = color;
  }
}

export default mainHome_detail;