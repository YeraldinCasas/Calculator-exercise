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

/* Adding events to buttons */
btnNumbers.forEach(function(btn){
    btn.addEventListener('click', function(){
        //alert(btn.innerText) /* Check if it works if the button */
        addNumber(btn.innerText);
    })
});

btnOperation.forEach(function(btn){
    btn.addEventListener('click', function(){
       chooseOperation(btn.innerText)
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