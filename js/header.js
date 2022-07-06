let categoriesBurger = document.querySelector('.categories__burger')
categoriesBurger.onclick = function(){
  let categoriesBlock = document.querySelector('.categories__block')
  categoriesBlock.classList.toggle('visible')
  this.classList.toggle("active")
}

let topMenuButton = document.querySelector('.top-menu__button')
topMenuButton.onclick = function(){
  let topMenuNav = document.querySelector('.top-menu__nav')
  topMenuNav.classList.toggle('visible')
}