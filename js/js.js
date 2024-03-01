document.addEventListener('DOMContentLoaded', function () {
  // Get the button and the navbar
  var btnMenu = document.querySelector('.btn-menu');
  var navbar = document.querySelector('.navbar');

  // Add onclick event to the button
  btnMenu.addEventListener('click', function () {
      // Toggle the 'open' class on the navbar
      navbar.classList.toggle('open');
  });
});



var swiper = new Swiper(".mySwiper", {
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
     900: {
      slidesPerView: 4,
    },
  },
});

var $galleryContainer = $('.schedules-row').isotope({
  itemSelector: '.schedules-col',
  layoutMode: 'fitRows',
  resizable: true, // Enable auto height adjustment
});

$('.button-group .button').on('click', function(){
  $('.button-group .button').removeClass('active');
  $(this).addClass('active');

  var value = $(this).attr('data-filter');
  $galleryContainer.isotope({
    filter: value 
  });
});


document.addEventListener('DOMContentLoaded', function () {
  // Get the 'about' section
  const aboutSection = document.querySelector('.about');

  // Get the navigation bar
  const nav = document.getElementById('myNav');

  // Calculate the position of the 'about' section
  const aboutSectionPosition = aboutSection.offsetTop;

  // Function to handle scroll event
  function handleScroll() {
      // Add 'blur' class to nav when scroll position reaches the 'about' section
      if (window.scrollY >= aboutSectionPosition) {
          nav.classList.add('blur');
      } else {
          nav.classList.remove('blur');
      }
  }

  // Attach the scroll event listener
  window.addEventListener('scroll', handleScroll);
});

var ticketPrice = 96.50;
var fee = 50;
var quantity = 0; // Starting quantity is set to 0
var ticketLimit = 6; // Assuming the ticket limit is 6

// Function to update quantity and recalculate total
function updateQuantity(change) {
    var quantityElement = document.getElementById('quantity');
    var totalElement = document.getElementById('total');
    var ticketElement = document.getElementById('ticket');

    var currentQuantity = parseInt(quantityElement.innerText);
    var newQuantity = currentQuantity + change;

    // Ensure new quantity is within the ticket limit
    if (newQuantity >= 0 && newQuantity <= ticketLimit) {
        quantityElement.innerText = newQuantity;
        ticketElement.innerText = newQuantity;

        // Calculate total
        var total = (ticketPrice + fee) * newQuantity;

        // Update displayed total
        totalElement.innerText = total.toFixed(2);
    }
}