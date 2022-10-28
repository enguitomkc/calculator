const body = document.querySelector("body");
viewportHeight = window.innerHeight;
body.style.height = `${viewportHeight}px`;


const toSolveDisplay = document.getElementById("toSolve");
const answerDisplay = document.getElementById("answer");

const numberBtns = document.querySelectorAll(".number"); 
const operatorBtns = document.querySelectorAll(".operator");
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const equalBtn = document.getElementById("equals");

numberBtns.forEach(numberBtn => numberBtn.addEventListener("click", selectKeyNumber));
operatorBtns.forEach(operatorBtn => operatorBtn.addEventListener("click", selectKeyOperator));
clearBtn.addEventListener("click",clear);
deleteBtn.addEventListener("click",deleteKey);
equalBtn.addEventListener("click",evaluate);



let toSolve = "";
let answerPrompt = "";
let isnotEvaluating = "true";
let answer = "";

function display(){
    toSolveDisplay.innerHTML = toSolve;
    answerDisplay.innerHTML = answerPrompt;
}

function selectKeyNumber(e) {
    if(isnotEvaluating){
        toSolve += e.target.innerHTML;
        display();
    }
    else{
        clear();
        toSolve += e.target.innerHTML;
        display();
        isnotEvaluating = true;
    }
}

function selectKeyOperator(e) {
    if(isnotEvaluating){
        toSolve += e.target.innerHTML;
        display();
    }
    else{
        clearDisplay();
        toSolve = "Ans" + e.target.innerHTML;
        display();
        isnotEvaluating = true;
    }

}

function clear(){
    clearDisplay();
    answer = "";
}

function clearDisplay(){
    toSolve = "";
    answerPrompt = "";
    display();
}

function deleteKey(){
    if(isnotEvaluating){
        toSolve = toSolve.slice(0,-1);
        display();
    }
}
function evaluate(){
    if(isnotEvaluating){
        let toSolveCopy = toSolve.replace("Ans",answer);
        answer = evalExp(toSolveCopy).toString();
        answerPrompt = answer;
        display();
        isnotEvaluating = false;
    }
}

function evalExp(exp){
    let operator = exp.match(/\D/);
    if(!operator){
        return Number(exp);
    }
    else{
        let operand1 = exp.slice(0,operator.index);
        let operand2 = exp.slice(operator.index+1);
        switch(operator[0]){
            case "+":
                return Number(operand1) + evalExp(operand2);
            case "-":
                return Number(operand1) - evalExp(operand2);
            case "×":
                let operand2opM = operand2.match(/\D/);
                if(!operand2opM){
                    return Number(operand1) * Number(operand2);
                }
                else{
                    let operand2FirstM = operand2.slice(0,operand2opM.index);
                    let product = (Number(operand1)*Number(operand2FirstM)).toString();
                    return evalExp(product + operand2.slice(operand2opM.index));
                }
            case "÷":
                let operand2opD = operand2.match(/\D/);
                if(!operand2opD){
                    return Number(operand1) / Number(operand2);
                }
                else{
                    let operand2FirstD = operand2.slice(0,operand2opD.index);
                    let quotient = (Number(operand1)/Number(operand2FirstD)).toString();
                    return evalExp(quotient + operand2.slice(operand2opD.index));
                }

        
        }
    }

}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


