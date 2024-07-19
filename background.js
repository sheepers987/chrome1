// background.js

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'login') {
    // Make API request to login
    fetch('http://localhost:3000/login', { // Update URL to match your Heroku endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: message.email,
        password: message.password,
      }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        sendResponse({ success: true, message: 'Login successful' });
      } else {
        sendResponse({ success: false, message: data.message });
      }
    })
    .catch(error => {
      console.error('Error:', error);
      sendResponse({ success: false, message: 'Login failed' });
    });

    // Indicate that we are using sendResponse asynchronously
    return true;
  }
});
