/* Las Flores Water Co. — Password Gate */
(function() {
  if (sessionStorage.getItem('lfwc-auth') === 'ok') return;

  document.documentElement.classList.add('gated');

  document.addEventListener('DOMContentLoaded', function() {
    var overlay = document.createElement('div');
    overlay.className = 'gate-overlay';
    overlay.innerHTML =
      '<div class="gate-box">' +
        '<div class="gate-title">Las Flores Water Co.</div>' +
        '<div class="gate-sub">Prototype — Password Required</div>' +
        '<form class="gate-form" autocomplete="off">' +
          '<input type="password" class="gate-input" placeholder="Enter password" autofocus>' +
          '<button type="submit" class="gate-btn">Enter</button>' +
        '</form>' +
        '<div class="gate-error" style="display:none">Incorrect password</div>' +
      '</div>';
    document.body.appendChild(overlay);

    var form = overlay.querySelector('.gate-form');
    var input = overlay.querySelector('.gate-input');
    var error = overlay.querySelector('.gate-error');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (input.value === 'lasflores') {
        sessionStorage.setItem('lfwc-auth', 'ok');
        document.documentElement.classList.remove('gated');
        overlay.remove();
      } else {
        error.style.display = 'block';
        input.value = '';
        input.focus();
      }
    });
  });
})();
