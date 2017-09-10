var topnav = document.getElementById("topnav");
var menuIcon = document.getElementById("menuIcon-container");
var menuItems = document.querySelectorAll("[href^='#']");

function toggleMenu() {
    if (topnav.className === "topnav") {
        topnav.className += " responsive";
    } else {
        topnav.className = "topnav";
    }
    menuIcon.classList.toggle("menuIcon-change");
}

function closeMenu() {
    if (topnav.classList.contains("responsive")) {
        topnav.className = "topnav";
    }
    menuIcon.classList.remove("menuIcon-change");
}

function activeMenuItem(e) {
    menuItems.forEach(function (el) {
        if (el !== e.target) {
            el.classList.remove("active");
        } else {
            el.classList.add("active");
        }
    })
}

document.getElementById("menuIcon").addEventListener('click', toggleMenu);
menuItems.forEach(function(el) {
    el.addEventListener('click', closeMenu);
    el.addEventListener('click', activeMenuItem, false);
});
