let btn = document.querySelector(".check-form");

btn.addEventListener('click', ()=>{
    let nameField = document.querySelector('input[name="name"]'),
        phoneField = document.querySelector('input[name="phone"]'),
        mailField = document.querySelector('input[name="mail"]'),
        commentField = document.querySelector('textarea[name="comment"]');

    let onlyLetter = /^[A-Za-zА-Яа-яёЁ ]+$/,
        onlyPhone = /^[\+]?7[\(]?[\d]{3}\)[\d]{3}[\-][\d]{4}$/,
        onlyMail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;

    if (nameField.value.match(onlyLetter)){
        nameField.classList.remove("incorrect-field");
    }else{
        nameField.classList.add("incorrect-field");
    }
    
    if (phoneField.value.match(onlyPhone)){
        phoneField.classList.remove("incorrect-field");
    }else{
        phoneField.classList.add("incorrect-field");
    }
    
    if (mailField.value.match(onlyMail)){
        mailField.classList.remove("incorrect-field");
    }else{
        mailField.classList.add("incorrect-field");
    }
    
    if (commentField.value){
        commentField.classList.remove("incorrect-field");
    }else{
        commentField.classList.add("incorrect-field");
    }
});