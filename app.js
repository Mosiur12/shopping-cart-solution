 
 
 function updateValue (isIncreasing){
    const caseInput = document.getElementById('case-number');
    const inputNumber = caseInput.value;
    if (isIncreasing==true){
        caseInput.value = parseInt( inputNumber) + 1;
    }
    else {
        caseInput.value =parseInt(inputNumber) - 1;
    }
 }
 
 
 document.getElementById('plus-button').addEventListener('click', function(){
    updateValue(true);
})
document.getElementById ('minus-button').addEventListener('click',function() {
    updateValue(false);
} )