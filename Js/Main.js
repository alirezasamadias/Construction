// START
// site loader
const bodyEl = document.querySelector('body');
const siteLoaderEl = document.querySelector('.site-loader');
// header slide
const headerEl = document.getElementById('header');
const heroEl = document.querySelector('.hero');
// show menu
const menuEl = document.querySelector('.menu');
const menuHamburgerEl = document.querySelector('.menu-hamburger');
const menuHamburgerIcon = document.querySelector('.icon-menu');
const btnSubMenu = document.querySelector('.sub-menu-btn');
const btnSubMenuIcon = document.querySelector('.icon-down');
const subMenu = document.querySelector('.sub-menu');
// footer iframe
const iframeEl = document.querySelector('#footer iframe');
// static map
const getStaticMap = document.getElementById('get-static-map');
const staticMapEl = document.getElementById('static-map');
const boxEl = document.querySelector('.box');
// show scroll up page
const scrollUpEl = document.querySelector('.scroll-up-page');

// site loader
document.onreadystatechange = ()=>{
    if (document.readyState == "complete") {
        siteLoaderEl.style.opacity = "0";
        siteLoaderEl.style.visibility = "hidden";
    }
};

// header slide
// header set min-width:768
const headerFix = ()=>{
    window.addEventListener('scroll',()=>{
        headerEl.style.top = '0';
    });
};
// header set max-width:768
const headerSlide = ()=>{
    let primaryScroll = window.scrollY;

    window.addEventListener('scroll',()=>{
        const scrollNow = window.scrollY;
    
        if (scrollNow >= heroEl.offsetHeight - headerEl.offsetHeight){
            if (scrollNow >= primaryScroll){
                headerEl.style.top = `-${headerEl.offsetHeight}px`;
            } else {
                headerEl.style.top = '0';
            }

            primaryScroll = scrollNow;
        }

        // debug
        if (menuEl.classList.contains('show-menu')){
            headerEl.style.top = '0';
        }
    });

    // debug
    headerEl.style.top = '0';
    window.addEventListener('scroll',()=>{
        if (heroEl.getBoundingClientRect().top === 0){
            headerEl.style.top = '0';
        }
    });
};
// by responsive
if (window.innerWidth <= 768){
    headerSlide();
} else {
    headerFix();
}
// by resize
window.addEventListener('resize',()=>{
    if (window.innerWidth <= 768){
        headerSlide();
    } else {
        headerFix();
    }
});

// show menu
menuHamburgerEl.addEventListener('click',()=>{
    menuEl.classList.toggle('show-menu');
    // change menu hamburger icon
    menuHamburgerIcon.classList.toggle('icon-close');
});
// btn sub menu
btnSubMenu.addEventListener('click',()=>{
    btnSubMenuIcon.classList.toggle('icon-up');
    subMenu.classList.toggle('show-sub-menu');
});

// footer iframe
window.addEventListener('scroll',()=>{
    if (iframeEl.getBoundingClientRect().top <= window.innerHeight && iframeEl.getAttribute('src') === ''){
        iframeEl.setAttribute('src','https://syndication.twitter.com/srv/timeline-profile/screen-name/Theme_Fusion?dnt=true&embedId=twitter-widget-0&features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfbWl4ZWRfbWVkaWFfMTU4OTciOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd19leHBlcmltZW50c19jb29raWVfZXhwaXJhdGlvbiI6eyJidWNrZXQiOjEyMDk2MDAsInZlcnNpb24iOm51bGx9LCJ0ZndfZHVwbGljYXRlX3NjcmliZXNfdG9fc2V0dGluZ3MiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3ZpZGVvX2hsc19keW5hbWljX21hbmlmZXN0c18xNTA4MiI6eyJidWNrZXQiOiJ0cnVlX2JpdHJhdGUiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2xlZ2FjeV90aW1lbGluZV9zdW5zZXQiOnsiYnVja2V0Ijp0cnVlLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3R3ZWV0X2VkaXRfZnJvbnRlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfX0%3D&frame=false&hideBorder=true&hideFooter=true&hideHeader=true&hideScrollBar=false&lang=en&limit=1&maxHeight=400px&origin=https%3A%2F%2Favada.website%2Fconstruction%2Fwork%2F&sessionId=622af46fe56ecaeb5659138c9262f64d7c41e4df&showHeader=false&showReplies=false&theme=dark&transparent=true&widgetsVersion=aaf4084522e3a%3A1674595607486');
    }
});

// static map
getStaticMap.addEventListener('click',()=>{
    boxEl.innerHTML = '<div class="loader"></div>';
    setTimeout(() => {
        boxEl.style.display = 'none';
        staticMapEl.style.display = 'block';
    },300);
});

// show scroll up page
scrollUpEl.style.display = 'none';
window.addEventListener('scroll',()=>{
    if (heroEl.getBoundingClientRect().bottom - headerEl.offsetHeight >= 0){
        scrollUpEl.style.display = 'block';
        scrollUpEl.classList.add('scroll-up-hide');
    } else {
        scrollUpEl.style.display = 'block';
        scrollUpEl.classList.remove('scroll-up-hide');
    }
});
// THE END