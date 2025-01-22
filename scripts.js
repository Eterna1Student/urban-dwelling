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


