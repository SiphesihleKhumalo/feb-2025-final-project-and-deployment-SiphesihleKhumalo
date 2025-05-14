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
  const bookNowBtn = document.getElementById("bookNowBtn");
  bookNowBtn &&
    bookNowBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");
      this.appendChild(ripple);
      const x = e.clientX - e.target.getBoundingClientRect().left;
      const y = e.clientY - e.target.getBoundingClientRect().top;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      setTimeout(() => {
        ripple.remove();
      }, 600);
      showNotification("Booking system coming soon!");
      localStorage.setItem("lastBookClick", new Date().toISOString());
    });
  function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.classList.add("show");
    setTimeout(() => {
      notification.classList.remove("show");
    }, 3000);
  }
  if (!localStorage.getItem("firstVisit")) {
    showNotification("Welcome to Luxe Nail Bar! Enjoy your visit.");
    localStorage.setItem("firstVisit", "true");
  }
});
