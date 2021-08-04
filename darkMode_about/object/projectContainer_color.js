const project = {
  projectContainer: function (color){
    let projectContainer = document.querySelector('.project .project-content');
    projectContainer.style.background = color;
  },

  projectFontColor: function(color){
    let projectFt = document.querySelectorAll('.box__txt .box__txt--color');
    for (let i=0; i<projectFt.length; i++){
      projectFt[i].style.color = color;
    }
    
  },

  

}

export default project;