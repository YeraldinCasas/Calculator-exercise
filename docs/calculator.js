/* Selecting the DOM elements */
const btnNumbers = document.getElementsByName('data-number');
//console.log(btnNumbers)
const btnOperation = document.getElementsByName('data-opera');
//console.log(btnOperation)
const btnResult = document.getElementsByName('data-result')[0];
//console.log(btnResult)
const btnDelete = document.getElementsByName('data-delete')[0];
//console.log(btnDelete)
let result = document.getElementById('result');
//console.log(result)
let currentOperation = '';
let previousOperation = '';
var operation= undefined;

/* Adding events to buttons */
btnNumbers.forEach(function(btn){
    btn.addEventListener('click', function(){
        //alert(btn.innerText) /* Check if it works if the button */
        addNumber(btn.innerText);
    })
});

btnOperation.forEach(function(btn){
    btn.addEventListener('click', function(){
       selectOperation(btn.innerText)
        //alert(btn.innerText)  /* Check if it works if the button */
    })
});

btnResult.addEventListener('click', function(){
    calculate();
    updateDisplay ();
});

btnDelete.addEventListener('click', function (){
    cleanDisplay();
    updateDisplay();
});

/* Program calculator methods */
function selectOperation (op){
    if(currentOperation ==='') return;
    if(previousOperation !==''){
        calculate();
    }

   operation = op.toString();
   previousOperation = currentOperation;
   currentOperation = '';
}

function calculate(){
   let calculate;
   let previous = parseFloat(previousOperation);
   let current = parseFloat(currentOperation);
   if(isNaN(previous) || isNaN(current)) return;
   switch(operation){
       case '+' :
           calculate = previous + current;
           break;
           case '-':
               calculate = previous - current;
               break;
               case '/':
                   calculate = previous / current;
                   break;
                   case 'x':
                       calculate = previous * current;
                       break;
                       default:
                           return;
   }
   currentOperation = calculate;
   operation = undefined;
   previousOperation = '';
}

function addNumber(num){
    currentOperation = currentOperation.toString() + num.toString();
    updateDisplay();
}

function cleanDisplay (){
    currentOperation='';
    previousOperation='';
    operation = undefined;
}

function updateDisplay(){
    result.value = currentOperation;
}