// START
const getMapEl = document.getElementById('get-map');
const mapEl = document.getElementById('map');

getMapEl.addEventListener('click',()=>{
    mapEl.style.display = 'block';
    mapEl.setAttribute('src','https://www.google.com/maps/embed/v1/place?key=AIzaSyDsUcTjt43mTheN9ruCsQVgBE-wgN6_AfY&language=en&q=Notting+Hill,+London&maptype=roadmap&zoom=13');
});
// THE END