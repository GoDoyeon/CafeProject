let category = {
  setMainCategory: function(color){
    let mainCate = document.querySelectorAll('.cafeKinds li a');
    for(let i=0;i<mainCate.length; i++){
      if(mainCate[i].classList.contains('visited')){
        continue;
      }
      mainCate[i].style.color = color;
    }
  },
}

export default category;