// scripts.js

// Function to handle navigation bar responsiveness on smaller screens
function navBarHandler() {
    var x = document.getElementById("navBar");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

// Function to handle smooth scrolling when links are clicked
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to handle active navigation link highlighting
let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");

window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;

    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add("current");
        } else {
            link.classList.remove("current");
        }
    });
});
