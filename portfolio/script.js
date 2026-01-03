document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Active Navigation Logic ---
  // Get current page URL path
  const currentLocation = location.href;
  const menuItems = document.querySelectorAll(".menu a");

  if (menuItems.length > 0) {
    menuItems.forEach((item) => {
      if (item.href === currentLocation) {
        item.classList.add("active"); // DaisyUI/Tailwind active class
        item.classList.add("font-bold");
      }
    });
  }

  // --- 2. Contact Form Validation ---
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      let isValid = true;

      // Elements
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      // Error Spans
      const nameError = document.getElementById("nameError");
      const emailError = document.getElementById("emailError");
      const msgError = document.getElementById("msgError");

      // Reset errors
      [nameError, emailError, msgError].forEach((el) =>
        el.classList.add("hidden")
      );
      [name, email, message].forEach((el) =>
        el.classList.remove("input-error", "textarea-error")
      );

      // Validate Name
      if (name.value.trim() === "") {
        nameError.classList.remove("hidden");
        name.classList.add("input-error");
        isValid = false;
      }

      // Validate Email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value.trim())) {
        emailError.classList.remove("hidden");
        email.classList.add("input-error");
        isValid = false;
      }

      // Validate Message
      if (message.value.trim() === "") {
        msgError.classList.remove("hidden");
        message.classList.add("textarea-error");
        isValid = false;
      }

      if (isValid) {
        // Here you would typically send data to a backend
        alert("Thank you! Your message has been sent successfully.");
        contactForm.reset();
      }
    });
  }
});
