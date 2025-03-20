// JavaScript for Popup Form
document.addEventListener("DOMContentLoaded", () => {
  const getInTouchBtns = document.querySelectorAll(".get-in-touch-btn");
  const popupOverlay = document.getElementById("popupOverlay");
  const popupForm = document.getElementById("popupForm");
  const closePopupBtn = document.getElementById("closePopupBtn");

  // Open popup
  getInTouchBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      popupOverlay.style.display = "block";
      popupForm.style.display = "block";
    });
  });

  // Close popup
  const closePopup = () => {
    popupOverlay.style.display = "none";
    popupForm.style.display = "none";
  };

  closePopupBtn.addEventListener("click", closePopup);
  popupOverlay.addEventListener("click", closePopup);

  // Form submission handler
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thank you for reaching out! We will contact you soon.");
    closePopup();
  });
});