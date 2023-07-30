async function commentFormHandler(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the value of the comment text input field and remove leading/trailing whitespace
  const comment_text = document.querySelector('textarea[name="commentBody"]').value.trim();

  // Extract the post_id from the current URL
  const post_id = window.location.toString().split('/')[ // Split the URL by '/'
    window.location.toString().split('/').length - 1 // Get the last element, which should be the post_id
  ];

  // Check if the comment_text is not empty
  if (comment_text) {
    // Make a POST request to the server with the comment data
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Check if the response from the server is successful 
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}


document.querySelector('.commentForm').addEventListener('submit', commentFormHandler);
