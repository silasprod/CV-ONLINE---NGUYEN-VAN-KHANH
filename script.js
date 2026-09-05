const body = document.body;
const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("cv-theme");
if (savedTheme === "light") {
  body.classList.add("light");
  themeToggle.textContent = "☀";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");
  const light = body.classList.contains("light");
  themeToggle.textContent = light ? "☀" : "☾";
  localStorage.setItem("cv-theme", light ? "light" : "dark");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i * 45, 260)}ms`;
  observer.observe(el);
});
