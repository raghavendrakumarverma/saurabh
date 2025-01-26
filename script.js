function addToCart(product) {
  alert(`${product} has been added to your cart!`);
}

function openServiceForm() {
  document.getElementById('serviceFormContainer').style.display = 'block';
}

document.getElementById('serviceForm').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Your service booking request has been submitted!');
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Thank you for contacting us! We will get back to you soon.');
});

// Timer Functionality
let countdownTime = 3600; // 1 hour in seconds

function startCountdown() {
  const timer = document.getElementById('countdown');
  const interval = setInterval(() => {
    if (countdownTime <= 0) {
      clearInterval(interval);
      timer.textContent = 'Offer has ended!';
    } else {
      const hours = Math.floor(countdownTime / 3600);
      const minutes = Math.floor((countdownTime % 3600) / 60);
      const seconds = countdownTime % 60;
      timer.textContent = `Offer ends in: ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      countdownTime--;
    }
  }, 1000);
}

startCountdown();


// Array of Products
const products = [
  {
    name: "LED Light",
    price: "₹500",
    image: "image/led.jpg",
    description: "Energy-efficient LED lights for your home.",
  },
  {
    name: "Electric Fan",
    price: "₹1500",
    discount: "10% Off",
    image: "image/fan.webp",
    description: "Stylish and durable electric fans. super air Our stylish and durable electric fans offer super air delivery for maximum comfort."
  },
  {
    name: "Smart Bulb",
    price: "₹800",
    image: "image/smart_bulb.jpeg",
    description: "Smart bulb with app control and voice activation.",
  },
  {
    name: "Extension Board",
    price: "₹400",
    image: "image/exbord.webp",
    description: "Heavy-duty extension boards for safe power usage.",
  },
  {
    name: "Power Bank",
    price: "₹1200",
    image: "image/power_bank.jpg",
    description: "Portable power banks with fast charging.",
  },
  {
    name: "Table Lamp",
    price: "₹700",
    image: "image/table_lamp.avif",
    description: "Modern table lamps for study and work.",
  },
  {
    name: "Electric_Motor",
    price: "₹10,000 - 50,000",
    image: "image/motor-image.jpeg",
    description: "Motor Power: 5 kW Efficiency: 90% Description. With a power output of 5 kW and an impressive 90% efficiency,",
  },
  {
    name: "Starter",
    price: "₹749.00",
    image: "image/starter.jpg",
    description: "DOL Starter Voltage: 415V Current: 10A Description",
  },
  //{
   // name: "New Product Name",
   // price: "₹Price",
    //image: "path/to/image.jpg",
   // description: "Short description of the product.",
  //},
 // {
    //name: "New Product Name",
   // price: "₹Price",
    //image: "path/to/image.jpg",
   // description: "Short description of the product.",
 // }
    
  
        
];

// Function to Display Products
function displayProducts() {
  const productList = document.querySelector(".product-list");
  productList.innerHTML = ""; // Clear previous content
  products.forEach((product) => {
    const productCard = `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>${product.price}</strong></p>
        <button>Add to Cart</button>
      </div>
    `;
    productList.innerHTML += productCard;
  });
}

// Call the function to populate products
displayProducts();

// Array to Store Feedback
const feedbacks = [];

// Feedback Form Submission Handler
document.getElementById("feedbackForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // Get Form Values
  const name = document.getElementById("customerName").value;
  const email = document.getElementById("customerEmail").value;
  const message = document.getElementById("customerMessage").value;

  // Create Feedback Object
  const newFeedback = {
    name,
    email,
    message,
    rating: "⭐⭐⭐⭐⭐", // Default rating (optional, can be updated with stars)
  };

  // Add Feedback to Array
  feedbacks.push(newFeedback);

  // Reset Form
  document.getElementById("feedbackForm").reset();

  // Display Updated Feedback List
  displayFeedbacks();
});

// Function to Display Feedbacks
function displayFeedbacks() {
  const feedbackList = document.querySelector(".feedback-list");
  feedbackList.innerHTML = ""; // Clear previous feedbacks

  feedbacks.forEach((feedback) => {
    const feedbackCard = `
      <div class="feedback-card">
        <h4>${feedback.name}</h4>
        <p>${feedback.message}</p>
        <div class="rating">${feedback.rating}</div>
      </div>
    `;
    feedbackList.innerHTML += feedbackCard;
  });
}

// Initialize Feedback Display
displayFeedbacks();

