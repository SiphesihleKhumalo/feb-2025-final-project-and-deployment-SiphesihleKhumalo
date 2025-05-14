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
  // Logo animation (optional)
  const logo = document.getElementById("logo");
  logo.addEventListener("click", function () {
    this.style.animation = "jiggle 0.5s ease";
    setTimeout(() => {
      this.style.animation = "";
    }, 500);
  });
  function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.classList.add("show");
    setTimeout(() => {
      notification.classList.remove("show");
    }, 3000);
  }
  if (!localStorage.getItem("aboutFirstVisit")) {
    showNotification("Welcome to Luxe Nail Bar's About Page!");
    localStorage.setItem("aboutFirstVisit", "true");
  }
});
