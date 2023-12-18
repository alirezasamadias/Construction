const slideItems = document.querySelectorAll('.slide-item');
const radios = document.querySelectorAll('.radio');

let item = 0;
const setItem = ()=>{
    for (const slideItem of slideItems) {
        slideItem.classList.remove('show-slide');
    }
    setTimeout(()=>{
        slideItems[item].classList.add('show-slide');
    },0);

    for (const radio of radios) {
        radio.style.backgroundColor = 'transparent';
    }
    setTimeout(()=>{
        radios[item].style.backgroundColor = '#fff';
    },0);
};

setInterval(()=>{
    item++;
    if (item >= slideItems.length){
        item = 0;
    }
    setItem();
},7000);

const target = (item)=>{
    for (const slideItem of slideItems) {
        slideItem.classList.remove('show-slide');
    }
    setTimeout(()=>{
        slideItems[item].classList.add('show-slide');
    },0);

    for (const radio of radios) {
        radio.style.backgroundColor = 'transparent';
    }
    setTimeout(()=>{
        radios[item].style.backgroundColor = '#fff';
    },0);
};
// THE END