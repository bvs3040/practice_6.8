const textA=document.querySelector('a');

textA.addEventListener('click', function(event){
    event.preventDefault();
    this.textContent=prompt('Введите новый текст ссылки', "введите текст");
        while (textA.textContent==('')) {
        this.textContent=prompt('Текст нужно ввести');
    } 
    
})

 
