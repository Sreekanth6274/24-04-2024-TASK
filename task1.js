
let firstNumber = document.getElementById('style2');

let secondNumber = document.getElementById('style3');

let totalValue = document.getElementById('cal')


let totalResult = document.getElementById('Answer')

totalValue.onclick = () => {

let convertfirstNumber = Number(firstNumber.value);

let convertsecondNumber = Number(secondNumber.value);

let totalValues = convertfirstNumber + convertsecondNumber; 
// ( if you want any math operation you can change only symbol )
    //  + => addition
    //  - => Minus 
    //  / => divison 
    //  * => multiplication 
    //  % => remainder 
    //  ** => Exponential 

totalResult.innerHTML = totalValues;

}

