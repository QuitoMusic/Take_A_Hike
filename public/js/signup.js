async function signupFormHandler(event) {
    event.preventDefault(); 
  
    // Get the values of the username, email, and password input fields and remove leading/trailing whitespace
    const username = document.querySelector('#usernameSignup').value.trim();
    const email = document.querySelector('#emailSignup').value.trim();
    const password = document.querySelector('#passwordSignup').value.trim();
  
    // Check if all the required fields (username, email, and password) are provided
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: {'Content-Type': 'application/json'}
      });
  
      // Check if the response from the server is successful 
      if (response.ok) {
        alert('Account created! Logging you in now.');
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  
  document.querySelector('.signupForm').addEventListener('submit', signupFormHandler);
  