const searchInputEl = document.querySelector('#search-input');
const searchBoxEl = document.querySelector('.search-box');

let searchText;
let url = searchBoxEl.action;
searchInputEl.addEventListener('keyup',()=>{
    searchText = searchInputEl.value.trim().toLowerCase();
    searchBoxEl.action = url + '#' + searchText;
});