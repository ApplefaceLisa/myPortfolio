function toggleMenu() {
    var topnav = document.getElementById("topnav");
    if (topnav.className === "topnav") {
        topnav.className += " responsive";
    } else {
        topnav.className = "topnav";
    }

    var menuIcon = document.getElementById("menuIcon-container");
    menuIcon.classList.toggle("menuIcon-change");
}

function closeMenu() {
    var topnav = document.getElementById("topnav");
    if (topnav.classList.contains("responsive")) {
        topnav.className = "topnav";
    }
}

document.getElementById("menuIcon").addEventListener('click', toggleMenu);
document.querySelectorAll("[href^='#']").forEach(function(el) {
    el.addEventListener('click', closeMenu);
});
