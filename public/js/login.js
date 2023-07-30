
async function loginFormHandler(event) {
    event.preventDefault(); 
    
    // Get the values of the email and password input fields and remove leading/trailing whitespace
    const email = document.querySelector('#emailLogin').value.trim();
    const password = document.querySelector('#passwordLogin').value.trim();
  
    // Check if both email and password are provided
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: {'Content-Type': 'application/json'}
      });
  
      // Check if the response from the server is successful 
      if (response.ok) {document.location.replace('/dashboard');
      } else {
        let result = await response.json();
        alert(result.message);
      }
    }
  }
  
  
  document.querySelector('.loginForm').addEventListener('submit', loginFormHandler);
  