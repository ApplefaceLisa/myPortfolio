function toggleMenu() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function closeMenu() {
    var x = document.getElementById("topnav");
    if (x.classList.contains("responsive")) {
        x.className = "topnav";
    }
}

document.getElementById("menuIcon").addEventListener('click', toggleMenu);
document.querySelectorAll("[href^='#']").forEach(function(el) {
    el.addEventListener('click', closeMenu);
});
