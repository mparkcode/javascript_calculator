let firstNum = "0";
let secondNum = "0";
let total;
let operator;
let equationString = false;
let equalPressed = false;
let operatorSet = false;
let output = document.getElementById('output')
output.innerHTML = "0"

function reset(){
    output.innerHTML = "0";
    firstNum = "0";
    secondNum = "0";
    total = undefined;
    operator = undefined;
    equationString = false;
    equalPressed = false;
}


for(let i = 0; i<10; i++){
   document.getElementById('valueButton'+i).addEventListener('click', function(){
        if(operator == undefined && equationString == false || operator == undefined && equalPressed == true){
            if(equalPressed == true){
                reset();
            }
            operatorSet = false;
            firstNum += document.getElementById('valueButton'+i).innerHTML;
            if(firstNum.charAt(0)=="0" && firstNum.charAt(1)!=="."){
                firstNum = firstNum.substring(1)    
            }
            console.log('firstNum is ' + firstNum);
            output.innerHTML = firstNum
        } else {
            operatorSet = false;
            secondNum += document.getElementById('valueButton'+i).innerHTML;
            if(secondNum.charAt(0)=="0" && secondNum.charAt(1)!=="."){
                secondNum = secondNum.substring(1)
            }
            console.log('secondNum is '+ secondNum)
            
            output.innerHTML = secondNum
            
        }
            
    })
}

for(let i = 1; i<5; i++){
    document.getElementById('operator'+i).addEventListener('click', function(){
        if(operatorSet == false){
            getTotal()
        }
        operator = document.getElementById('operator'+i).innerHTML
        operatorSet = true;
        console.log(operator)
    })
}

function getTotal(){
    if(operator == "/"){
        total = Number(firstNum) / Number(secondNum);
    } else if (operator == "*"){
        total = Number(firstNum) * Number(secondNum);
    } else if (operator == "+"){
        total = Number(firstNum) + Number(secondNum);
    } else if (operator == "-"){
        total = Number(firstNum) - Number(secondNum);
    } else {
        total = Number(firstNum)
    }
    console.log("total is" + total)
    firstNum = total;
    operator = undefined;
    secondNum = "0";
    equationString = true;
    output.innerHTML = total;
}

function equalHasBeenPressed(){
    equalPressed = true;
    console.log(equalPressed)
}

function addDecimal(){
    if(equalPressed && operator == undefined){
        reset()
    }
    if(operator == undefined && equationString == false && firstNum.indexOf(".")==-1){
        firstNum += "."
        output.innerHTML = firstNum
    } else if(secondNum.indexOf(".")==-1){
        secondNum += "."
        output.innerHTML = secondNum
    }
}