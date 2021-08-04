const teamProject = {
  teamBtnBgColor: function(color){
    let teamBtnBgColor = document.querySelectorAll('.name__part');
    for(let i=0;i<teamBtnBgColor.length; i++){
      teamBtnBgColor[i].style.background=color;
    }
  },

  teamBtnFontColor: function(color){
    let teamBtnBgColor = document.querySelectorAll('.name__part');
    for(let i=0;i<teamBtnBgColor.length; i++){
      teamBtnBgColor[i].style.color = color;
    }
    
  }
}

export default teamProject;