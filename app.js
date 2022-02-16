 
 
 function updateMobile (increaseNumber){
    const inputName = document.getElementById('input-text') ;
    let inputText = inputName.value ;

    if(increaseNumber == true){
        inputText  =parseInt(inputText) + 1;
    }

    else if (inputText>0){
        inputText  = parseInt(inputText) -1;
     }
      inputName.value = inputText ;
     const mobilePrice = document.getElementById('mobile-price');
      mobilePrice.innerText =  inputText *1219;
      
    
    
 }
 
 document.getElementById('mobile-plus').addEventListener('click',function(){
    
    
    updateMobile(true);
    
     
 })

 document.getElementById('mobile-minus').addEventListener('click',function(){
    
    updateMobile (false);
    
 })
 



//  for mobile case

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
