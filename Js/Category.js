const titleEl = document.querySelector('.title-lg');
const undefinedEl = document.querySelector('.undefined');
const categoryItemsEl = document.querySelector('.category-items');
const postItems = document.querySelectorAll('.post-item');
const postTargets = document.querySelectorAll('.post-target');

let windowHash = window.location.hash;

// set post-item data-target by post-target
let targets = [];
for (const postItem of postItems) {
    for (const postTarget of postTargets) {
        if (postTarget.getAttribute('href').includes(windowHash)) {
            // hide undefined 
            undefinedEl.style.display = 'none';
            // edit window.location.hash  
            windowHash = postTarget.textContent;
            // set title hero
            titleEl.textContent = windowHash;
        }

        if (postItem.dataset.match == postTarget.parentElement.dataset.match) {
            targets.push(postTarget.textContent);
            postItem.dataset.target = targets;
        }

        // debug by refresh
        postTarget.addEventListener('click',()=>{
            setTimeout(() => {
                location.reload();
            }, 10);
        });
    }
    targets = [];
}

// filter post-item
for (const postItem of postItems) {
    const target = postItem.dataset.target;
    if (!target.includes(windowHash)) {
        postItem.style.display = 'none';
    }
}

// undefined search
if (undefinedEl.style.display != 'none') {
    categoryItemsEl.style.display = 'none';
    titleEl.textContent = 'search: ' + windowHash.replace('#','');
}

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('submit',()=>{
    setTimeout(() => {
        location.reload();
    }, 10);
});
// THE END