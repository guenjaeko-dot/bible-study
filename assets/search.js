(function () {
  var input = document.getElementById('search');
  if (!input) return;
  var cards = document.querySelectorAll('.study-card');
  var bookGroups = document.querySelectorAll('.book-group');
  var testamentGroups = document.querySelectorAll('.testament-group');

  function filter() {
    var q = input.value.trim().toLowerCase();
    cards.forEach(function (card) {
      var haystack = card.getAttribute('data-search') || '';
      card.style.display = haystack.indexOf(q) !== -1 ? '' : 'none';
    });
    bookGroups.forEach(function (group) {
      var anyVisible = Array.prototype.some.call(
        group.querySelectorAll('.study-card'),
        function (c) { return c.style.display !== 'none'; }
      );
      group.style.display = anyVisible ? '' : 'none';
    });
    testamentGroups.forEach(function (group) {
      var anyVisible = Array.prototype.some.call(
        group.querySelectorAll('.book-group'),
        function (g) { return g.style.display !== 'none'; }
      );
      group.style.display = anyVisible ? '' : 'none';
    });
  }

  input.addEventListener('input', filter);
})();
