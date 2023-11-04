const tabItems = document.querySelectorAll('.tab-item');
const tabTargets = document.querySelectorAll('.tab-target');
const btnAll = document.querySelector('[data-target=all]');

for (const tabItemEl of tabItems) {
    for (const tabTargetEl of tabTargets) {
        tabTargetEl.style.transitionDuration = '0.25s';

        if (!btnAll) {
            tabTargetEl.style.display = 'none';
            tabTargets[0].style.display = 'block';
        }

        tabItemEl.addEventListener('click',()=>{
            // face
            for (const tabItemEl of tabItems){
                tabItemEl.classList.remove('current-item');
            }
            tabItemEl.classList.add('current-item');

            if (tabItemEl.dataset.target === tabTargetEl.dataset.target || tabItemEl.dataset.target === 'all') {
                tabTargetEl.style.opacity = '0.15';
                setTimeout(()=>{
                    tabTargetEl.style.display = 'block';
                },150);
                setTimeout(()=>{
                    tabTargetEl.style.opacity = '1';
                },200);
            } else {
                tabTargetEl.style.opacity = '0.15';
                setTimeout(()=>{
                    tabTargetEl.style.display = 'none';
                },150);
            }
        });
    }
}
// THE END