const passwordDisplay = document.getElementById("passwordDisplay");
const includeLowercase = document.getElementById("includeLowercase");
const includeUppercase = document.getElementById("includeUppercase");
const includeSymbols = document.getElementById("includeSymbols");
const includeNumbers = document.getElementById("includeNumbers");
const generateButton = document.getElementById("generateBtn");


generateButton.addEventListener("click", ()=>{

    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "!§$%&/()=";


    let sumString = "";

    if(includeLowercase.checked){
        sumString+=lower;
    }

    if(includeUppercase.checked){
        sumString+=upper;
    }

    if(includeNumbers.checked){
        sumString+=numbers;
    }

    if(includeSymbols.checked){
        sumString+=symbols;
    }

    let password = "";

    for(let i=0; i<15; i++){
        let random =Math.floor(Math.random()*sumString.length);
        password+=sumString[random];
    }

    passwordDisplay.innerHTML = password;
});