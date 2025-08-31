async function getPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log('Title:', data.title);
  } catch (error) {
    console.error('Error:', error);
  }
}

getPost();
