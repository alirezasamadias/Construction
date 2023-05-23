// START
const informNums = document.querySelectorAll('.inform-number');

for (const informNumEl of informNums) {
    informNumEl.textContent = '0';

    const contour = (endNum , numPlus , interval , index)=>{
        let number = 0;
    
        const setNumber = setInterval (()=>{
            number += numPlus;
    
            if (number >= endNum){
                number = endNum;
                clearInterval(setNumber);
            }
    
            informNums[index].textContent = number;
        },interval);
    };
    
    window.addEventListener('scroll',()=>{
        if (informNumEl.getBoundingClientRect().bottom <= window.innerHeight && informNumEl.textContent === '0'){
            contour(3534,8,1,0);
            contour(896,2,1,1);
            contour(172,1,10,2);
            contour(19,1,110,3);
        }
    });
}
// THE END