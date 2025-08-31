var items = ['Apple', 'Banana', 'Cherry'];
$.each(items, function(index, value) {
  $('#list').append('<li>' + value + '</li>');
});
