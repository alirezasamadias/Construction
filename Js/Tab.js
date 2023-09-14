// START
const tabItems = document.querySelectorAll('.tab-item');
const tabTargets = document.querySelectorAll('.tab-target');

for (const tabItemEl of tabItems) {
    for (const tabTargetEl of tabTargets) {
        tabItemEl.addEventListener('click',()=>{
            // face
            for (const tabItemEl of tabItems){
                tabItemEl.classList.remove('current-item');
            }
            tabItemEl.classList.add('current-item');

            if (tabItemEl.dataset.target === tabTargetEl.dataset.target || tabItemEl.dataset.target === 'all') {
                tabTargetEl.style.opacity = '0';
                setTimeout(()=>{
                    tabTargetEl.style.display = 'block';
                    tabTargetEl.style.opacity = '1';
                },300);
            } else {
                tabTargetEl.style.opacity = '0';
                setTimeout(()=>{
                    tabTargetEl.style.display = 'none';
                },300);
            }
        });
    }
}
// THE END