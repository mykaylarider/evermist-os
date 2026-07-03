// ===============================
// Evermist OS Theme
// ===============================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    themeButton.textContent =
        document.body.classList.contains("dark")
            ? "☀️ Light Mode"
            : "🌙 Dark Mode";

});

console.log("🎨 Theme Loaded");