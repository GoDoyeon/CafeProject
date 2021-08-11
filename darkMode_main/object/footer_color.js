let footer={
  setAtagColor: function(color){
    let a = document.querySelectorAll('.footer a');
    let i=0;
    while(i < a.length){
      a[i].style.color = color;
      i=i+1;
    }
  },
  
}

export default footer;