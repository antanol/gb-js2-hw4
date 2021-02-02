let btnFix = document.querySelector("#fix-it");

btnFix.addEventListener('click', ()=>{
    let incorrectText = document.querySelector("#incorrect-text").value;
    
    // Ищем все вхождения одинарных кавычек
    const regExp = /'/g;
    let temp_result = incorrectText.replace(regExp, '"');

    // Отменим апострофы, ставшие кавычками
    const regExpExcl = /([A-Za-zА-Яа-яёЁ])"([A-Za-zА-Яа-яёЁ])/g;
    let correctly = temp_result.replace(regExpExcl, "$1'$2");

    document.querySelector("#correctly").innerHTML = `<h4>Ваш результат:</h4>`;
    document.querySelector("#correctly").innerHTML += `<pre>${correctly}</pre>`;
})