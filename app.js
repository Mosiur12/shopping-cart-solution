 
 
 function updateValue (isIncreasing){
    const caseInput = document.getElementById('case-number');
    let inputNumber = caseInput.value;
    if (isIncreasing==true){
        inputNumber = parseInt( inputNumber) + 1;
    }
    else if(inputNumber >0) {
        inputNumber =parseInt(inputNumber) - 1;
    }
    caseInput.value = inputNumber;
const caseTotal = document.getElementById('case-total');
caseTotal.innerText = inputNumber * 59;

 }
 
 
 document.getElementById('plus-button').addEventListener('click', function(){
    updateValue(true);
})
document.getElementById ('minus-button').addEventListener('click',function() {
    updateValue(false);
} )