document.addEventListener("DOMContentLoaded", function() {
    const contactBtn = document.getElementById('contactBtn');
    const heroContactBtn = document.getElementById('heroContactBtn');
    const getInTouchButtons = document.querySelectorAll('.get-in-touch-btn');
    const popupForm = document.getElementById('popupForm');
    const popupOverlay = document.getElementById('popupOverlay');
    const closePopupBtn = document.getElementById('closePopupBtn');
  
    function openPopup() {
      popupForm.style.display = 'block';
      popupOverlay.style.display = 'block';
    }
  
    function closePopup() {
      popupForm.style.display = 'none';
      popupOverlay.style.display = 'none';
    }
  
    // Open popup on button clicks
    contactBtn.addEventListener('click', function(e) {
      e.preventDefault();
      openPopup();
    });
    heroContactBtn.addEventListener('click', function(e) {
      e.preventDefault();
      openPopup();
    });
    getInTouchButtons.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        openPopup();
      });
    });
  
    // Close popup events
    closePopupBtn.addEventListener('click', function(e) {
      e.preventDefault();
      closePopup();
    });
    popupOverlay.addEventListener('click', function(e) {
      e.preventDefault();
      closePopup();
    });
  
    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Process the form data here
      alert("Thank you for your submission. We will get back to you soon!");
      closePopup();
      contactForm.reset();
    });
  });