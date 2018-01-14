$(function(){
  if (localStorage.getItem('fe-curriculum-lessons') === null) {
    localStorage.setItem('fe-curriculum-lessons', JSON.stringify({showModule: 0}))
  }

  
}());