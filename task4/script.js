const textA=document.querySelector('a');

textA.addEventListener('click', function()
{
    this.textContent=prompt('Введите новый текст ссылки');
})

 
