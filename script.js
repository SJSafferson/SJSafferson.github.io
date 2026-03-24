// CV Website scripts

// Email obfuscation — revealed/hidden on click to reduce spam harvesting
(function () {
  var u = 'simon.safferson';
  var d = 'pm.me';
  var el = document.getElementById('contact-email');
  var shown = false;
  if (!el) return;
  var hide = document.getElementById('hide-email');

  el.addEventListener('click', function (e) {
    if (!shown) {
      e.preventDefault();
      el.href = 'mailto:' + u + '@' + d;
      el.textContent = u + '@' + d;
      if (hide) hide.style.display = '';
      shown = true;
    }
  });

  if (hide) {
    hide.addEventListener('click', function (e) {
      e.preventDefault();
      el.href = '#';
      el.textContent = 'Show email';
      hide.style.display = 'none';
      shown = false;
    });
  }
})();
