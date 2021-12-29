const consoleLog=document.querySelector("#consoleLog");
consoleLog.addEventListener("click", ()=>{alert("Вывод сообщений в вэб консоль")});
const metodAlert=document.querySelector("#alert");
metodAlert.addEventListener("click", ()=>{alert("Для отображения информации пользователям. Показывает диалоговое окно с сообщением и кнопкой OK")});
const metodPrompt=document.querySelector("#prompt");
metodPrompt.addEventListener("click", ()=>{alert("Можно использовать для ввода информации. Отображает диалоговое окно с запросом на ввод текста.")});