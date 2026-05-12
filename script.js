// Prevent placeholder booking form from submitting until a real booking solution is wired up.
// TODO: Remove this block and replace the form with a real booking widget or link.
(function () {
  var form = document.getElementById('booking-form');
  var notice = document.getElementById('booking-notice');
  if (!form || !notice) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    notice.textContent = 'Booking form coming soon — check back shortly or email hello@chaibhai.net to reserve your spot.';
  });
}());
