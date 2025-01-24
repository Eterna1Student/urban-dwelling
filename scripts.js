const searchBtn = document.querySelector('#search-btn')
const search = document.querySelector('#search')

searchBtn.addEventListener('click', function(){
    search.classList.add('header__search_active')
})

document.addEventListener('click', function(event) {
  if (!search.contains(event.target)) {
    search.classList.remove('header__search_active')
  }
});



const burgerBtn = document.querySelector('#burger-btn')
const burgerMenu = document.querySelector('#burger')
const burgerList = document.querySelector('.burger__list')
const body = document.querySelector('body')
const burgerClose = document.querySelector('#burger__close')

burgerBtn.addEventListener('click', function(){
  body.style.overflow = 'hidden'
  burgerMenu.classList.add('burger__active')
  burgerList.classList.add('burger__list_active')
})

burgerClose.addEventListener('click', function(){
  burgerMenu.classList.remove('burger__active')
  body.style.overflow = 'auto'
})


// burgerMenu.addEventListener('click', function(){
//   burgerMenu.classList.remove('burger__active')
//   body.style.overflow = 'auto'
// })



