document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  const themeBtn = document.getElementById("themeBtn");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeBtn.textContent = "Light Mode";
  }
  themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      themeBtn.textContent = "Light Mode";
    } else {
      localStorage.setItem("theme", "light");
      themeBtn.textContent = "Dark Mode";
    }
  });
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      date: new Date().toISOString(),
    };
    const savedContacts = JSON.parse(localStorage.getItem("contacts") || "[]");
    savedContacts.push(formData);
    localStorage.setItem("contacts", JSON.stringify(savedContacts));
    showNotification("Message sent successfully! We'll get back to you soon.");
    this.reset();
    const submitBtn = this.querySelector(".submit-btn");
    submitBtn.textContent = "✓ Sent!";
    submitBtn.style.backgroundColor = "#4CAF50";
    setTimeout(() => {
      submitBtn.textContent = "Send Message";
      submitBtn.style.backgroundColor = "";
    }, 2000);
  });
  function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.classList.add("show");
    setTimeout(() => {
      notification.classList.remove("show");
    }, 3000);
  }
  if (!localStorage.getItem("contactFirstVisit")) {
    showNotification("Got a question? Reach out!");
    localStorage.setItem("contactFirstVisit", "true");
  }
});
