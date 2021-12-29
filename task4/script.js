const textA=document.querySelector('a');

textA.addEventListener('click', function(){
    this.textContent=prompt('Введите новый текст ссылки');
    while (textA.textContent=="") {
        this.textContent=prompt('Текст нужно ввести');
    }    
})

 
