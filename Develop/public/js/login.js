const loginUser = async (event) => {
  event.preventDefault();

  // user inputs from login form
  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/user/loginNow', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the home page
      document.location.replace('/profile');
      alert('Logged in!')
    } else {
      alert('Unable to log in!');
    }
  }
};

const signUpUser = async (event) => {
  event.preventDefault();

  const state = document.querySelector('#create-state').value.trim();
  const zip = document.querySelector('#create-zip').value.trim();
  const city = document.querySelector('#create-city').value.trim();
  const username = document.querySelector('#create-username').value.trim();
  const email = document.querySelector('#create-email').value.trim();
  const password = document.querySelector('#create-password').value.trim();

  if (state && zip && city && username && email && password) {
    const response = await fetch('/api/user/newUser', {
      method: 'POST',
      body: JSON.stringify({ state, zip, city, username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
      alert("User Created!")
    } else {
      alert(response.statusText);
    }
  }
};
  
document.querySelector('.login-form').addEventListener('submit', loginUser);
document.querySelector('.signup-form').addEventListener('submit', signUpUser);