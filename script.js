// JavaScript to handle the sparkle effect on hover
document.querySelector('section').addEventListener('mousemove', function (e) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    
    // Set sparkle position based on mouse coordinates
    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;
  
    // Append sparkle to the section
    document.querySelector('section').appendChild(sparkle);
  
    // Remove sparkle after the animation ends
    setTimeout(() => sparkle.remove(), 1000);
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form from submitting the traditional way
  
      // Capture user input values
      const email = document.querySelector('input[type="email"]').value;
      const password = document.querySelector('input[type="password"]').value;
  
      // Save the captured values in variables (you can do anything with these values, e.g., send them to a server)
      console.log("Email: ", email);
      console.log("Password: ", password);
  
      // Optionally, you can store the data in localStorage
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
  
      // Redirect to homepage
      window.location.href = "home.html"; // Change to your actual home page URL
    });
  });
  