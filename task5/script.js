const form=document.querySelector('form');
let duplicateField=document.querySelector('#duplicateField');

form.addEventListener('keyup', (event) => {
    duplicateField.textContent=event.target.value;
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(form.elements.userText.value);
    form.reset();
    duplicateField.textContent="";
});





    


    

    






