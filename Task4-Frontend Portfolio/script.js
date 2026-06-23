/* ================= MOBILE MENU ================= */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* ================= DARK MODE ================= */
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

/* ================= SCROLL REVEAL ================= */
const sections = document.querySelectorAll(".section");

function reveal() {
    const trigger = window.innerHeight * 0.85;
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < trigger) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();