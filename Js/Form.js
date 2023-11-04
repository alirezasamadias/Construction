const formEl = document.querySelector('form');
const formItems = document.querySelectorAll('.form-item');
const formSubmit = document.querySelector('input[type="submit"]');

formEl.addEventListener('submit',(e)=>{
    e.preventDefault();
});

// form valid
formSubmit.addEventListener('click',()=>{
    for (const formItem of formItems) {
        if(formItem.checkValidity() === false){
            formItem.parentElement.style.color = "#c80303";
            formItem.style.borderColor = "#c80303";
        }

        formItem.addEventListener('keyup',()=>{
            if(formItem.checkValidity()){
                formItem.style.borderColor = "#dddddd";
                formItem.parentElement.style.color = "#747474";
            }
        });
    }
});
// THE END