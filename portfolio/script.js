/* Specification: External JS File */

document.addEventListener("DOMContentLoaded", () => {
  // --- Common Feature: Live Date & Time in Footer ---
  function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    const footerTimeElement = document.getElementById("live-datetime");
    if (footerTimeElement) {
      footerTimeElement.innerText = dateTimeString;
    }
  }
  // Update every second
  setInterval(updateDateTime, 1000);
  updateDateTime(); // Initial call

  // --- Contact Page: Form Validation ---
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();

      // Simple Validation Logic
      if (name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill in all fields.");
        return;
      }

      if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
      }

      // If valid
      alert("Form submitted successfully! (Simulation)");
      contactForm.reset();
    });
  }
});
