function getPin(){
    const random = Math.random()*10000;
    const pin = (random + '').split('.')[0]
    if(pin.length === 4){
        return pin;
    }else{
        return getPin();
    }
}


// display generated pin
function generatePin(){
    const pinInput = document.getElementById('pin');
pinInput.value = getPin();

}


// handleCalculator button
const buttonContainer = document.getElementById('digits-container');
buttonContainer.addEventListener('click',function(event){
   
   const digit = event.target.innerText;
   if(isNaN(digit)){
       //handle back
       //clear
       if(digit === 'C'){
        const typedInput = document.getElementById('typedPin');
       typedInput.value = '';

       }
   }else{
       const typedInput = document.getElementById('typedPin');
       typedInput.value = typedInput.value + digit;
       
   }

})

// verify pin
function verifyPin(){
    const pin = document.getElementById('pin').value;
    

    const typedPin = document.getElementById('typedPin').value;
  

    if(pin === typedPin){
        displayMatchResult( 'block' ,'none')
       

    }else{
      
        displayMatchResult( 'none' ,'block')

        
    }

   
    

}

function displayMatchResult(correctStatus , incorrectStatus){
    const correct = document.getElementById('correct');
    correct.style.display = correctStatus;

    const incorrect = document.getElementById('incorrect');
    incorrect.style.display = incorrectStatus;
}