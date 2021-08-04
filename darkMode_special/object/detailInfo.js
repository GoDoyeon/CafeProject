const mainHome = {
  setBgColor :function(color){
    let main_home = document.querySelector('.main_detail_info .main__home');
    main_home.style.background = color;
  },

  setFontColor :function(color){
    let mainHome_font = document.querySelector('.main_detail_info .main__home .detailed__information');
    mainHome_font.style.color = color;
  }
}