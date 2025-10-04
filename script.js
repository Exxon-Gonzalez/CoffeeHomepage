const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav-menu .nav-link");

menuOpenButton.addEventListener("click", ()=>{
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu")
});

// Close the menu when the close button is clicked
menuCloseButton.addEventListener("click", ()=> menuOpenButton.click());

// Close the menu when a navigation link is clicked
navLinks.forEach(link => link.addEventListener("click", ()=> menuOpenButton.click()));