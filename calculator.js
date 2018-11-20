let firstNum;
let secondNum;
let total;
let operator;
let equationString = false;
let equalPressed = false;
let output = document.getElementById('output')

function reset(){
    output.innerHTML = "";
    firstNum = undefined;
    secondNum = undefined;
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
                firstNum = document.getElementById('valueButton'+i).innerHTML;
                console.log('firstNum is ' + firstNum);
            } else if(firstNum == undefined){
                firstNum = document.getElementById('valueButton'+i).innerHTML;
                equalPressed == false
                console.log('firstNum is ' + firstNum);
            } else{
                firstNum += document.getElementById('valueButton'+i).innerHTML;
                console.log('firstNum is ' + firstNum);
            }
            output.innerHTML = firstNum
        } else {
            if(secondNum == undefined){
                secondNum = document.getElementById('valueButton'+i).innerHTML;
                console.log('secondNum is '+ secondNum)
            } else {
                secondNum += document.getElementById('valueButton'+i).innerHTML;
                console.log('secondNum is '+ secondNum)
            }
            output.innerHTML = secondNum
            
        }
            
    })
}

for(let i = 1; i<5; i++){
    document.getElementById('operator'+i).addEventListener('click', function(){
        if(firstNum !== undefined && secondNum !== undefined){
            getTotal()
        }
        operator = document.getElementById('operator'+i).innerHTML
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
    } else {
        total = Number(firstNum) - Number(secondNum);
    }
    firstNum = total;
    operator = undefined;
    secondNum = undefined;
    equationString = true;
    output.innerHTML = total;
}

function equalHasBeenPressed(){
    equalPressed = true;
    console.log(equalPressed)
}

function addDecimal(){
    output.innerHTML += "."
}