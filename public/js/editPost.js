async function editFormHandler(event) {
  event.preventDefault(); 
  // Extract the post ID from the current URL
  const id = window.location.toString().split('/')[ 
    window.location.toString().split('/').length - 1 
  ];

  // Get the values of the updated title and post text input fields
  const title = document.querySelector('input[name="postTitle"]').value;
  const post_text = document.querySelector('textarea[name="postText"]').value;

  // Make a PUT request to the server with the updated post data
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
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


document.querySelector('.editPostform').addEventListener('submit', editFormHandler);
