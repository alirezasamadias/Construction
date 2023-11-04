const informNums = document.querySelectorAll('.inform-number');

for (const informNumEl of informNums) {
    informNumEl.textContent = '0';

    const counter = (endNum , numPlus , interval , index)=>{
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
            counter(3534,8,1,0);
            counter(896,2,1,1);
            counter(172,1,10,2);
            counter(19,1,110,3);
        }
    });
}
// THE END