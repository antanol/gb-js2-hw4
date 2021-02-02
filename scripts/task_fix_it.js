let btnFix = document.querySelector("#fix-it");

btnFix.addEventListener('click', ()=>{
    let incorrectText = document.querySelector("#incorrect-text").value;
    // Регулярка, которая ищет все вхождения одинарных кавычек
    const regExp = /'/g;
    let correctly = incorrectText.replace(regExp, '"');

    document.querySelector("#correctly").innerHTML = `<h4>Ваш результат:</h4>`;
    document.querySelector("#correctly").innerHTML += `<pre>${correctly}</pre>`;
})