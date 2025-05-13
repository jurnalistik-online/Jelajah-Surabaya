// STICKY NAVBAR
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 50);
});

// BACK TO TOP BUTTON
// Buat tombolnya di HTML (nanti saya bantu), fungsinya di bawah ini
const backToTopBtn = document.createElement("button");
backToTopBtn.textContent = "↑";
backToTopBtn.id = "backToTop";
document.body.appendChild(backToTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
