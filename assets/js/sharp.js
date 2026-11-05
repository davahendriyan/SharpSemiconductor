/* Sharp — tambahan kecil: WhatsApp (link) */
(function () {
  'use strict';
  // Isi nomor WhatsApp tujuan (format internasional tanpa "+" dan spasi), contoh: '6281234567890'.
  // Jika dikosongkan, WhatsApp akan membuka pilihan kontak sendiri.
  var WA_NUMBER = '6281286080823';

  var url = function (t) { return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(t); };
  var decode = function (t) { var d = document.createElement('textarea'); d.innerHTML = t; return d.value; };

  // semua elemen dengan data-wa => buka WhatsApp dengan template tsb
  document.querySelectorAll('[data-wa]').forEach(function (el) {
    el.setAttribute('href', url(decode(el.getAttribute('data-wa'))));
    el.setAttribute('target', '_blank'); el.setAttribute('rel', 'noopener');
  });
})();
