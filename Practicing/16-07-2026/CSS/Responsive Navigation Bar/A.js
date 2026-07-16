const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("navlinks");
const dropdown = document.querySelector(".dropdown");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

if (dropdown) {
    dropdown.addEventListener("click", function (e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.classList.toggle("active");
        }
    });
}