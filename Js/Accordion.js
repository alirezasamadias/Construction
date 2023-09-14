// START
const tabItems = document.querySelectorAll('.tabitem');
const tabContents = document.querySelectorAll('.tab-content');

tabItems[0].classList.add('tabitem-current');
tabContents[0].style.opacity = '1';
tabContents[0].style.display = 'block';

for (const tabItemEl of tabItems) {
    tabItemEl.addEventListener('click',()=>{
        for (const tabItemEl of tabItems) {
            tabItemEl.classList.remove('tabitem-current');
        }
        tabItemEl.classList.add('tabitem-current');

        for (const tabContentEl of tabContents) {
            if (tabItemEl.dataset.target === tabContentEl.dataset.target){
                setTimeout(()=>{
                    tabContentEl.style.display = 'block';
                },200);
                setTimeout(() => {
                    tabContentEl.style.opacity = '1';
                },250);
            } else {
                tabContentEl.style.opacity = '0';
                setTimeout(()=>{
                    tabContentEl.style.display = 'none';
                },200);
            }
        }
    });
}
// THE END