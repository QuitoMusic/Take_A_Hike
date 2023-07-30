async function editFormHandler(event) {
    event.preventDefault();

    // Get the user name, user id, email, and password from the form
    let username = document.querySelector('input[name="userName"]').value.trim();
    if(username.length) username = '"username": "' + username + '"';
    let email = document.querySelector('input[name="email"]').value.trim();
    if(email.length) email = '"email": "' + email + '"';
    let password = document.querySelector('input[name="password"]').value.trim();
    if (!password.length) {
        alert('Enter your password.');
        return
    } else {
        password = '"password": "' + password + '"';
    }
    const id = document.querySelector('input[name="userId"]').value;

    let userUpdate = '{' + [username, email, password].filter(value => value).join(',') + '}';
    userUpdate = JSON.parse(userUpdate)


    const response = await fetch(`/api/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(userUpdate),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    if (response.ok) {
        document.location.replace('/dashboard');
        // otherwise, display the error
        } else {
        alert(response.statusText);
        }

  }
  
  document.querySelector('.editUserform').addEventListener('submit', editFormHandler);