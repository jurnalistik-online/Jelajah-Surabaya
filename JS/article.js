// Animasi fade-in saat artikel dimuat
document.addEventListener("DOMContentLoaded", () => {
  const article = document.querySelector(".article-content");
  article.style.opacity = 0;
  article.style.transform = "translateY(20px)";
  setTimeout(() => {
    article.style.transition = "all 0.6s ease";
    article.style.opacity = 1;
    article.style.transform = "translateY(0)";
  }, 100);
});
