let operator;
let currentNum;
let output = document.getElementById('output')
output.innerHTML = "0"
let equationString = "";
let digitClicked = firstDigitClicked;
let ZeroDigitClicked = doNothing;
let operatorClicked = firstOperator;
let dotPressed = dotPressedAsFirstDigit;

function allClear(){
    operator = undefined;
    currentNum = undefined;
    digitClicked = firstDigitClicked;
    ZeroDigitClicked = doNothing;
    operatorClicked = firstOperator;
    dotPressed = dotPressedAsFirstDigit;
    output.innerHTML = "0";
    equationString = "";
}

function doNothing(num){
    console.log('Do Nothing');
}

//--------------------------------------------------------------Digits

function logicForFirstDigits(num){
    currentNum = String(num);
    console.log(`current number is ${currentNum}`);
    console.log(`equation string is ${equationString}`);
    output.innerHTML=currentNum;
    digitClicked = additionalDigitClicked;
    ZeroDigitClicked = additionalDigitClicked;
    dotPressed = dotPressedAsAdditionalDigit;
    operatorClicked = firstOperator;
}

function firstDigitClicked(num){
    console.log(`function is firstDigitClicked`)
    logicForFirstDigits(num);
}

function firstDigitClickedAfterEquals(num){
    equationString = ""
    console.log(`function is firstDigitClickedAfterEquals`)
    logicForFirstDigits(num);
}

function additionalDigitClicked(num){
    currentNum += String(num);
    console.log(`function is secondDigitClicked`)
    console.log(`current number is ${currentNum}`);
    console.log(`equation string is ${equationString}`);
    output.innerHTML=currentNum;
}

//--------------------------------------------------------------Dots


function dotPressedAsFirstDigit(){
    currentNum = "0."
    console.log(`function is dotPressedAsFirstDigit`)
    console.log(`current number is ${currentNum}`);
    output.innerHTML=currentNum;
    dotPressed = doNothing;
    digitClicked = additionalDigitClicked;
    ZeroDigitClicked = additionalDigitClicked;
    operatorClicked = firstOperator;
}

function dotPressedAsAdditionalDigit(){
    currentNum += "."
    console.log(`function is dotPressedAsSecondDigit`)
    console.log(`current number is ${currentNum}`);
    output.innerHTML=currentNum;
    dotPressed = doNothing;
}

//--------------------------------------------------------------Operators


function firstOperator(str){
    console.log(`function is firstOperator`)
    console.log(`first operator:${str} clicked`);
    operator = str;


    equationString = equationString.concat(currentNum)
    console.log(`equation string is ${equationString}`);
    total = eval(equationString);
    output.innerHTML = total;


    equationString = String(total) + operator;
    console.log(`equation string is ${equationString}`);
    digitClicked = firstDigitClicked;
    ZeroDigitClicked = doNothing;
    operatorClicked = secondOperatorClicked;
    dotPressed = dotPressedAsFirstDigit;
}

function secondOperatorClicked(str){
    console.log(`function is secondOperatorClicked`)
    console.log(`second operator:${str} clicked`);
    operator = str;
    equationString = equationString.slice(0,-1).concat(operator);
    console.log(`equation string is ${equationString}`);
}

//--------------------------------------------------------------Equals


function equalPressed(){
    console.log("function is equalPressed")
    equationString = equationString.concat(currentNum)
    console.log(`equation string is ${equationString}`);
    total = eval(equationString);
    output.innerHTML = total;
    equationString = String(total)
    currentNum = "";
    console.log(`total is ${total}`)
    console.log(`equation string is ${equationString}`)
    digitClicked = firstDigitClickedAfterEquals;
}