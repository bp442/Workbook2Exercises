"use strict";

window.onload = init;

function init(){
    const greetBtn = document.getElementById("greetBtn");
    greetBtn.onclick = onGreetUserBtnClicked;
}

function onGreetUserBtnClicked(){
    const userName = document.getElementById("nameField").value;

    const helloString = "Hello " + userName;

    alert(helloString);
}