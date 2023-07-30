async function deleteFormHandler(event) {
  event.preventDefault(); 

  // Extract the post ID from the current URL
  const id = window.location.toString().split('/')[ 
    window.location.toString().split('/').length - 1
  ];

  // Make a DELETE request to the server to delete the post with the given ID
  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE'
  });

  // Check if the response from the server is successful 
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}


document.querySelector('.deletePostbtn').addEventListener('click', deleteFormHandler);
