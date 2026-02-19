const hamburger =   document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const navLinks = nav.querySelectorAll("a");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    hamburger.classList.toggle("active");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        hamburger.classList.remove("active");
    });
});
