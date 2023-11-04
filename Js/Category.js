const postItems = document.querySelectorAll('.post-item');
const postTargets = document.querySelectorAll('.post-target');
const titleLg = document.querySelector('.title-lg');

let windowUrl = window.location.hash;

// set post-item data-target by post-target
let targets = [];
for (const postItem of postItems) {
    for (const postTarget of postTargets) {
            // edit window.location.hash  
        if (postTarget.getAttribute('href').includes(windowUrl)) {
            windowUrl = postTarget.textContent;
            // set title hero
            titleLg.textContent = windowUrl;
        }

        if (postItem.dataset.match == postTarget.parentElement.dataset.match) {
            targets.push(postTarget.textContent);
            postItem.dataset.target = targets;
        }
    }
    targets = [];
}

// filter post-item
for (const postItem of postItems) {
    const target = postItem.dataset.target;
    if (!target.includes(windowUrl)) {
        postItem.style.display = 'none';
    }
}

// debug by refresh
for (const postTarget of postTargets) {
    postTarget.addEventListener('click',()=>{
        setTimeout(() => {
            location.reload();
        }, 10);
    });
}