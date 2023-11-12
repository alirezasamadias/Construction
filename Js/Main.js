// site loader
const siteLoaderEl = document.querySelector('.site-loader');
const heroContainer = document.querySelector('.hero .container');
// header active
const headerEl = document.getElementById('header');
const heroEl = document.querySelector('.hero');
// show menu
const menuEl = document.querySelector('.menu');
const menuHamburgerEl = document.querySelector('.menu-hamburger');
const btnSubMenuEl = document.querySelector('.submenu-btn');
const subMenuEl = document.querySelector('.submenu');
// footer iframe
const iframeEl = document.querySelector('#footer iframe');
// static map
const parentMapEl = document.querySelector('#footer .parent-map');
const getStaticMapEl = document.getElementById('get-static-map');
const staticMapEl = document.getElementById('static-map');
// show scroll up page
const scrollUpEl = document.querySelector('.scroll-up-page');

// site loader
document.onreadystatechange = ()=>{
    if (document.readyState == "complete") {
        siteLoaderEl.style.opacity = "0";
        siteLoaderEl.style.visibility = "hidden";
        heroContainer.style.display = 'flex';
    } else {
        heroContainer.style.display = 'none';
    }
};

// header active
// header set min-width:1024
const headerFix = ()=>{
    window.addEventListener('scroll',()=>{
        headerEl.style.top = '0';
        if (window.scrollY - heroEl.offsetHeight >= 0) {
            headerEl.classList.add('header-secondary');
        } else {
            headerEl.classList.remove('header-secondary');
        }
    });
};
// header set max-width:1024
const headerSlide = ()=>{
    let primaryScroll = window.scrollY;

    window.addEventListener('scroll',()=>{
        headerEl.classList.remove('header-secondary');

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
};
// by responsive
if (window.innerWidth <= 1024){
    headerSlide();
} else {
    headerFix();
}
// by resize
window.addEventListener('resize',()=>{
    if (window.innerWidth <= 1024){
        headerSlide();
    } else {
        headerFix();
    }
});

// show/hide menu
menuHamburgerEl.addEventListener('click',()=>{
    menuEl.classList.toggle('show-menu');
    // change menu hamburger icon
    menuHamburgerEl.classList.toggle('icon-close');
});
// btn sub menu
btnSubMenuEl.addEventListener('click',()=>{
    subMenuEl.classList.toggle('show-submenu');
    btnSubMenuEl.classList.toggle('icon-up');
});
// hide menu
window.addEventListener('click',(e)=>{
    if (e.target.parentElement.classList.contains('header-nav') || e.target.parentElement.classList.contains('menu-item')) {
        true;
    } else {
        menuEl.classList.remove('show-menu');
        menuHamburgerEl.classList.remove('icon-close');
    }
});

// footer iframe
window.addEventListener('scroll',()=>{
    if (iframeEl.getBoundingClientRect().top <= window.innerHeight && iframeEl.getAttribute('src') === ''){
        iframeEl.setAttribute('src','https://syndication.twitter.com/srv/timeline-profile/screen-name/Theme_Fusion?dnt=true&embedId=twitter-widget-0&features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&frame=false&hideBorder=true&hideFooter=true&hideHeader=true&hideScrollBar=false&lang=en&limit=1&maxHeight=400px&origin=https%3A%2F%2Favada.website%2Fconstruction%2Fget-quote%2F&sessionId=2cc9c9227d59c29ba31c09fa7e417b4c44d4650c&showHeader=false&showReplies=false&theme=dark&transparent=true&widgetsVersion=aaf4084522e3a%3A1674595607486');
    }
});

// static map
getStaticMapEl.addEventListener('click',()=>{
    parentMapEl.innerHTML = '<div class="loader"></div>';
    setTimeout(() => {
        parentMapEl.style.display = 'none';
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