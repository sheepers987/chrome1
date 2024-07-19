// content.js

// Function to handle login form submission
function handleLogin() {
  const loginForm = document.querySelector('#login-form'); // Adjust selector to match your login form

  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;

      // Send message to background script
      chrome.runtime.sendMessage({ action: 'login', email, password }, (response) => {
        if (response.success) {
          alert(response.message);
          // Handle successful login (e.g., redirect or update UI)
        } else {
          alert(response.message);
        }
      });
    });
  }
}

// Run the function when the content script is loaded
handleLogin();
