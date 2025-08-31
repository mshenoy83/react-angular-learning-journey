$.ajax({
  url: 'https://jsonplaceholder.typicode.com/posts/1',
  method: 'GET',
  success: function(data) {
    console.log('Title:', data.title);
  }
});
