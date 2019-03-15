"use strict";

function Person(ad, soyad, yas){
    this.name = ad;
    this.surname = soyad;
    this.age = yas;
}

function Style(reng, arxaReng){
    this.color = reng;
    this.backgroundColor = arxaReng;
}



function change() {
    let inputPos = document.querySelector('#inputPosition').value;
    let inputReng = document.querySelector('#inputColor').value;
    let inputBack = document.querySelector('#background').value;
    let adlarSiyahisi = document.querySelectorAll('.my-list-item');

    let myStyle = new Style(inputReng, inputBack);

    if (isNaN(inputPos)) {
        alert("Please, enter number");
        return;
    } else if (inputPos < 1 || inputPos > adlarSiyahisi.length) {
        alert("Invalid number. Please enter number between 1 and " + adlarSiyahisi.length);
    } else {
        let selectedItem = adlarSiyahisi[inputPos - 1];
        // console.log(inputPos);
        // console.log(inputReng);
        // console.log(inputBack);
        // console.log(selectedItem);
        selectedItem.style.color = inputReng;
        selectedItem.style.backgroundColor = inputBack;
    }

    console.log("TEST");

}
    


function disableInputs(){
    let inputPosElement = document.querySelector('#inputPosition');
    let colorElement = document.querySelector('#inputColor');
    let bgElement = document.querySelector('#background');
    let adlarSiyahisi = document.querySelectorAll('.my-list-item');

    let inputPos = inputPosElement.value;

    if (isNaN(inputPos)) {
        alert("Please, enter number");
        inputPosElement.value = "";
        return;
    } else if (inputPos < 1 || inputPos > adlarSiyahisi.length) {
        colorElement.disabled = true;  
        bgElement.disabled = true; 
    } else {
        colorElement.disabled = false;
        bgElement.disabled = false;
    }
}


