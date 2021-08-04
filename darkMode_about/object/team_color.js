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
  },

  teamFontColor: function(color){
    let teamFontColor = document.querySelectorAll('.project-team__address .project-team__address--color');
    for(let i=0;i<teamFontColor.length; i++){
      teamFontColor[i].style.color = color;
    }
  },

  teamLinkColor: function(color){
    let teamLinkColor = document.querySelectorAll('.project-team__address a');
    for(let i=0; i<teamLinkColor.length; i++){
      teamLinkColor[i].style.color = color;
    }
  },
}

export default teamProject;