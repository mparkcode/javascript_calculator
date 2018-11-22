let firstNum;
let secondNum;
let operator;
let currentNum;
let output = document.getElementById('output')
output.innerHTML = "0"

let digitClicked = firstDigitClicked;
let ZeroDigitClicked = doNothing;
let operatorClicked = FirstOperatorClicked;
let dotPressed = dotPressedAsFirstDigit;

function allClear(){
    firstNum = undefined;
    secondNum =undefined;
    operator = undefined;
    currentNum = undefined;
    digitClicked = firstDigitClicked;
    ZeroDigitClicked = doNothing;
    operatorClicked = FirstOperatorClicked;
    dotPressed = dotPressedAsFirstDigit;
    output.innerHTML = "0"
}

function doNothing(num){
    console.log('Do Nothing');
}

function firstDigitClicked(num){
    currentNum = String(num);
    console.log(`current number is ${currentNum}`);
    output.innerHTML=currentNum;
    digitClicked = additionalDigitClicked;
    ZeroDigitClicked = additionalDigitClicked;
    dotPressed = dotPressedAsAdditionalDigit;
}

function additionalDigitClicked(num){
    currentNum += String(num);
    console.log(`current number is ${currentNum}`);
    output.innerHTML=currentNum;
}

function dotPressedAsFirstDigit(){
    currentNum = "0."
    console.log(`current number is ${currentNum}`);
    output.innerHTML=currentNum;
    dotPressed = doNothing;
    digitClicked = additionalDigitClicked;
    ZeroDigitClicked = additionalDigitClicked;
}

function dotPressedAsAdditionalDigit(){
    currentNum += "."
    console.log(`current number is ${currentNum}`);
    output.innerHTML=currentNum;
    dotPressed = doNothing;
}

function FirstOperatorClicked(str){
    console.log(`first operator:${str} clicked`);
    operator = str;
    firstNum = currentNum;
    currentNum = secondNum;
    digitClicked = firstDigitClicked;
    ZeroDigitClicked = doNothing;
    operatorClicked = secondOperatorClicked;
    dotPressed = dotPressedAsFirstDigit;
}

function secondOperatorClicked(str){
    console.log(`second operator:${str} clicked`);
    operator = str;
}

function equalPressed(){
    secondNum = currentNum;
    total = eval(`${firstNum}${operator}${secondNum}`);
    console.log(total);
    output.innerHTML=total;
}