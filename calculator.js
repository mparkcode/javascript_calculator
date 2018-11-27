let operator;
let currentNum = "0";
let output = document.getElementById('output')
output.innerHTML = "0"
let equationString = "";
let digitClicked = firstDigitClicked;
let ZeroDigitClicked = doNothing;
let operatorClicked = firstOperator;
let dotPressed = dotPressedAsFirstDigit;
let togglePositiveNegative = togglePositiveNegativeBeforeEqual;
let equal = doNothing;

function allClear(){
    console.log("******************")
    console.log("function is allClear")
    operator = undefined;
    currentNum = "0";
    digitClicked = firstDigitClicked;
    ZeroDigitClicked = doNothing;
    operatorClicked = firstOperator;
    dotPressed = dotPressedAsFirstDigit;
    togglePositiveNegative = togglePositiveNegativeBeforeEqual;
    output.innerHTML = "0";
    equationString = "";
    equal = doNothing;
}

function doNothing(num){
    console.log("******************")
    console.log("function is doNothing")
    console.log('Do Nothing');
}

function togglePositiveNegativeBeforeEqual(){
    currentNum = eval(`0-(${currentNum})`)
    output.innerHTML = currentNum
}

function togglePositiveNegativeAfterEqual(){
    equationString = String(eval(`0-(${equationString})`))
    output.innerHTML = equationString
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
    equal = equalPressed;
    togglePositiveNegative = togglePositiveNegativeBeforeEqual;
}

function firstDigitClicked(num){
    console.log("******************")
    console.log(`function is firstDigitClicked`)
    logicForFirstDigits(num);
}

function firstDigitClickedAfterEquals(num){
    equationString = ""
    console.log("******************")
    console.log(`function is firstDigitClickedAfterEquals`)
    logicForFirstDigits(num);
}

function additionalDigitClicked(num){
    currentNum += String(num);
    console.log("******************")
    console.log(`function is secondDigitClicked`)
    console.log(`current number is ${currentNum}`);
    console.log(`equation string is ${equationString}`);
    output.innerHTML=currentNum;
}

//--------------------------------------------------------------Dots


function dotPressedAsFirstDigit(){
    currentNum = "0."
    console.log("******************")
    console.log(`function is dotPressedAsFirstDigit`)
    console.log(`current number is ${currentNum}`);
    output.innerHTML=currentNum;
    dotPressed = doNothing;
    digitClicked = additionalDigitClicked;
    ZeroDigitClicked = additionalDigitClicked;
    operatorClicked = firstOperator;
    equal = equalPressed;
}

function dotPressedAsAdditionalDigit(){
    currentNum += "."
    console.log("******************")
    console.log(`function is dotPressedAsAdditionalDigit`)
    console.log(`current number is ${currentNum}`);
    output.innerHTML=currentNum;
    dotPressed = doNothing;
}

//--------------------------------------------------------------Operators


function firstOperator(str){
    console.log("******************")
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
    equal = equalPressedAfterOperator;
    togglePositiveNegative = togglePositiveNegativeBeforeEqual;
}

function secondOperatorClicked(str){
    console.log("******************")
    console.log(`function is secondOperatorClicked`)
    console.log(`second operator:${str} clicked`);
    operator = str;
    equationString = equationString.slice(0,-1).concat(operator);
    console.log(`equation string is ${equationString}`);
}

//--------------------------------------------------------------Equals

function logicForEqual(){
    console.log("******************")
    console.log(`equation string is ${equationString}`);
    total = eval(equationString);
    output.innerHTML = total;
    equationString = String(total)
    currentNum = "";
    console.log(`total is ${total}`)
    console.log(`equation string is ${equationString}`)
    digitClicked = firstDigitClickedAfterEquals;
    operatorClicked = firstOperator;
    togglePositiveNegative = togglePositiveNegativeAfterEqual;
}


let numberInMemory;
let numberInMemoryForMultipleEquals;
let operatorInMemory;

function equalPressed(){
    console.log("******************")
    console.log("function is equalPressed");
    numberInMemory = equationString.substring(0,equationString.length-1);
    numberInMemoryForMultipleEquals = currentNum;
    operatorInMemory = equationString.substring(equationString.length-1);
    console.log(`current num is ${currentNum}`)
    console.log(`number in memory is ${numberInMemory}`)
    equationString = equationString.concat(`(${currentNum})`);
    
    logicForEqual();
    // equal = equalPressedAfterOperatorMultiple;
    equal = equalPressedAfterEqual
}

function equalPressedAfterEqual(){
    console.log("******************")
    console.log("function is equalPressedAfterEqual");
    console.log(`equation string is ${equationString}`)
    numberInMemory = equationString;
    equationString = equationString.concat(operatorInMemory, `(${numberInMemoryForMultipleEquals})`);
    logicForEqual()
}




function equalPressedAfterOperator(){
    console.log("******************")
    console.log("function is equalPressedAfterOperator");
    console.log(`equation string is ${equationString}`);
    numberInMemory = equationString.substring(0,equationString.length-1);
    operatorInMemory = equationString.substring(equationString.length-1);
    equationString = equationString.concat(`(${numberInMemory})`);
    logicForEqual();
    equal = equalPressedAfterOperatorMultiple;
}

function equalPressedAfterOperatorMultiple(){
    console.log("******************")
    console.log("function is equalPressedAfterOperatorMultiple");
    equationString = equationString.concat(operatorInMemory, `(${numberInMemory})`);
    logicForEqual();

}