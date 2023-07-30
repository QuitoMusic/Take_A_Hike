async function newFormHandler(event) {
  event.preventDefault(); 

  // Get the values of the title and post text input fields
  const title = document.querySelector('input[name="postTitle"]').value;
  const post_text = document.querySelector('textarea[name="postText"]').value;
  // Make a POST request to the server with the form data
  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_text
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // Check if the response from the server is successful 
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}


document.querySelector('.newPostform').addEventListener('submit', newFormHandler);
