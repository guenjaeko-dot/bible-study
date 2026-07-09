(function () {
  var input = document.getElementById('search');
  if (!input) return;
  var items = document.querySelectorAll('#study-list .study-card');
  input.addEventListener('input', function () {
    var q = input.value.trim().toLowerCase();
    items.forEach(function (item) {
      var haystack = item.getAttribute('data-search') || '';
      item.style.display = haystack.indexOf(q) !== -1 ? '' : 'none';
    });
  });
})();
