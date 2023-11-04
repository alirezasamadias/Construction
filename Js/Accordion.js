const tabItems = document.querySelectorAll('.tab-item');
const tabContents = document.querySelectorAll('.tab-content');

tabItems[0].classList.add('current-item');
tabContents[0].style.opacity = '1';
tabContents[0].style.display = 'block';

for (const tabItemEl of tabItems) {
    tabItemEl.addEventListener('click',()=>{
        tabItemEl.classList.toggle('current-item');

        for (const tabContentEl of tabContents) {
            if (tabItemEl.classList.contains('current-item') && tabItemEl.dataset.target === tabContentEl.dataset.target){
                for (const tabItemEl of tabItems) {
                    tabItemEl.classList.remove('current-item');
                }
                tabItemEl.classList.add('current-item');

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