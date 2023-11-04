const carousel = document.querySelector(".carousel");
const imgs = carousel.querySelectorAll("img");
const firstImg = imgs[0];
const lastImg = imgs[imgs.length - 1];

let isDragStart = false;
let isDragging = false;
let prevClientX;
let prevScrollLeft;
let positionDiff;
let ImgWidth = firstImg.offsetWidth;
let initialDistance;
let finalDistance;

const dragStart = (e)=>{
    carousel.classList.add('dragging');
    isDragStart = true;
    prevClientX = e.clientX || e.touches[0].clientX;
    prevScrollLeft = Math.round(carousel.scrollLeft);
    initialDistance = Math.round(lastImg.getBoundingClientRect().left);
};

const dragging = (e)=>{
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    positionDiff = (e.clientX || e.touches[0].clientX) - prevClientX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    finalDistance = Math.round(lastImg.getBoundingClientRect().left);

    if (carousel.scrollLeft == 0){
        carousel.style.left = '30px';
    }
    if (initialDistance === finalDistance){
        carousel.style.left = '-30px';
    }
};

const autoSlide = ()=>{
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
    
    positionDiff = Math.abs(positionDiff);

    let valDifference = ImgWidth - positionDiff;
    
    // scroll to right
    if(carousel.scrollLeft > prevScrollLeft) {
        carousel.scrollLeft += positionDiff > ImgWidth / 4 ? valDifference : -positionDiff;
    }

    // scroll to left
    if(carousel.scrollLeft < prevScrollLeft) {
        carousel.scrollLeft -= positionDiff > ImgWidth / 4 ? valDifference : -positionDiff;
    }
};

const dragStop = ()=>{
    carousel.classList.remove('dragging');
    isDragStart = false;
    if(!isDragging) return;
    isDragging = false;
    autoSlide();

    if (carousel.offsetLeft > 0){
        carousel.style.left = '0';
    }
    if (initialDistance > finalDistance){
        carousel.style.left = '0';
    }
};

carousel.addEventListener("mousedown",dragStart);
carousel.addEventListener("touchstart",dragStart);
document.addEventListener("mousemove",dragging);
carousel.addEventListener("touchmove",dragging);
document.addEventListener("mouseup",dragStop);
carousel.addEventListener("touchend",dragStop);
// THE END