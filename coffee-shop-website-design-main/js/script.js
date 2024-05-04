let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("bookingForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting normally
  
      // Get form values
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var phoneNumber = document.getElementById("phoneNumber").value;
      var message = document.getElementById("message").value;
  
      // Construct WhatsApp message
      var whatsappMessage = "Name: " + name + "\nEmail: " + email + "\nPhone Number: " + phoneNumber + "\nMessage: " + message;
  
      // Display success message
      alert("Successfully Sent!");
  
      // Clear the form fields after submission
      document.getElementById("bookingForm").reset();
    });
  });

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});