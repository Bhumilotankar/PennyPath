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
      // localStorage.setItem("userEmail", email);
      // localStorage.setItem("userPassword", password);
  
      // Redirect to homepage
      window.location.href = "home.html"; // Change to your actual home page URL
    });
  });

  // Add a transaction
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('transactionForm');
    
    // Add an event listener for the form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        addTransaction(); // Call your addTransaction function
    });
});

function addTransaction() {
    const userId = document.getElementById('userId').value;
    const amount = document.getElementById('amount').value;
    const date = document.getElementById('date').value;
    const source = document.getElementById('source').value;

    const transaction = {
        userId: userId,
        amount: parseFloat(amount),
        date: date,
        source: source
    };

    fetch('/addTransaction', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(transaction)
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        document.getElementById('userId').value = '';
        document.getElementById('amount').value = '';
        document.getElementById('date').value = '';
        document.getElementById('source').value = '';
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


// Calculate total revenue
function calculateRevenue() {
  const userId = document.getElementById('userId').value;
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;

  fetch(`/calculateRevenue?userId=${userId}&startDate=${startDate}&endDate=${endDate}`)
      .then(response => response.json())
      .then(totalRevenue => {
          document.getElementById('totalRevenue').textContent = `$${totalRevenue.toFixed(2)}`;
      });
}

// Fetch monthly revenue data and generate chart
function generateChart(data) {
  const ctx = document.getElementById('revenueChart').getContext('2d');
  const chart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: data.months,
          datasets: [{
              label: 'Total Revenue',
              data: data.revenues,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
}

// Fetch and display monthly revenue chart for user
function fetchMonthlyRevenue() {
  const userId = document.getElementById('userId').value;

  fetch(`/monthlyRevenue?userId=${userId}`)
      .then(response => response.json())
      .then(data => {
          generateChart(data);
      });
}

document.addEventListener("DOMContentLoaded", () => {
    const flowSteps = document.querySelectorAll('.flow-step');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when in view
                entry.target.classList.add('timeline-animation');
                // Unobserve the element once it has been animated
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is in view
    });

    // Observe each flow step
    flowSteps.forEach(step => {
        observer.observe(step);
    });
});
