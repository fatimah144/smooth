//  Theme Switcher Logic
const themes = ["theme-1", "theme-2", "theme-3", "theme-4"];
let currentThemeIndex = 0;

const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", () => {
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  document.body.setAttribute("data-theme", themes[currentThemeIndex]);
});

// Hamburger Mobile Toggle & Icon Swap Logic
const hamburger = document.getElementById("hamburger");
const hamburgerIcon = document.getElementById("hamburgerIcon");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  
  if (navLinks.classList.contains("active")) {
    hamburgerIcon.classList.replace("fa-bars", "fa-xmark");
  } else {
    hamburgerIcon.classList.replace("fa-xmark", "fa-bars");
  }
});

// Close mobile menu when any nav link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburgerIcon.classList.replace("fa-xmark", "fa-bars");
  });
});

// Scroll Reveal Animation Logic (Intersection Observer)
const observerOptions = {
  root: null,
  threshold: 0.15 
};

const observer = new IntersectionObserver((entries, observerInstance) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observerInstance.unobserve(entry.target);
    }
  });
}, observerOptions);
document.querySelectorAll(".reveal").forEach(element => {
  observer.observe(element);
});

