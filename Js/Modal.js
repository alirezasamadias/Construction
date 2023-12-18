const showModalButtons = document.querySelectorAll('.shadow-btn.icon-search');
const modalEl = document.querySelector('.modal');
const modalChilds = document.querySelectorAll('.modal > :nth-child(n)');
const modalImgEl = document.querySelector('.modal-img');
const closeBtnEl = document.querySelector('.btn-close');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');
const modalTabImages = document.querySelectorAll('.modal .tab-img');

const showImg = (num , interval)=>{
    modalImgEl.style.opacity = 0;
    setTimeout(() => {
        modalImgEl.setAttribute('src',imgTarget[num]);
        modalImgEl.style.opacity = 1;
    }, interval);
};

let images = [];
let imgTarget;
for (const showModalBtn of showModalButtons) {
    images.push(showModalBtn.dataset.target);

    showModalBtn.addEventListener('click' , ()=>{
        modalEl.classList.add('show-modal');

        if (showModalBtn.dataset.target.includes('Project')) {
            imgTarget = images.filter(image => image.includes('Project'));
        } else if (showModalBtn.dataset.target.includes('Blog-Post')) {
            imgTarget = images.filter(image => image.includes('Blog-Post'));
        }

        // set index
        let num;
        num = imgTarget.indexOf(showModalBtn.dataset.target);
        showImg(num,0);

        // tab item
        modalTabImages.forEach((TabImg,index)=>{
            TabImg.setAttribute('src',imgTarget[index]);

            TabImg.addEventListener('click' , ()=>{
                num = index;
                showImg(num,300);
            });
        });

        // perv img
        const prevImg= ()=>{
            num--;
            if (num < 0){
                num = imgTarget.length - 1;
            }

            showImg(num,300);
        };

        // next img
        const nextImg = ()=>{
            num++;
            if (num >= imgTarget.length){
                num = 0;
            }

            showImg(num,300);
        };

        // chang img
        prevBtn.addEventListener('click',()=>{
            prevImg();
        });

        nextBtn.addEventListener('click',()=>{
            nextImg();
        });

        // keyboard
        window.addEventListener('keyup',(e)=>{
            e.key === 'Escape' ? hideModal() : false;
            e.key === 'ArrowRight' ? nextImg() : false;
            e.key === 'ArrowLeft' ? prevImg() : false;
        });
    });
}
// hide modal
const hideModal = ()=>{
    modalEl.classList.remove('show-modal');
    modalImgEl.classList.remove('full');
};
modalEl.addEventListener('click',()=>{
    hideModal();
});
closeBtnEl.addEventListener('click',()=>{
    hideModal();
});
// debug stop hide modal
for (const modalChildEl of modalChilds) {
    modalChildEl.addEventListener('click',(e)=>{
        e.stopPropagation();
    });
}
// modal img
modalImgEl.addEventListener('click' , ()=>{
    modalImgEl.classList.toggle('full');
});
// THE END