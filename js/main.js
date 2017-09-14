particlesJS("particle", {
  "particles":{
    "number":{
      "value":400
    },
    "color":{
      "value":"#8D99AE"
    },
    "shape":{
      "type":"circle"
    },
    "opacity":{
      "value":0.8,
      "random":false,
      "anim":{
        "enable":false,
        "speed":1
      }
    },
    "size":{
      "value":3,
      "random":true,
      "anim":{
        "enable": true,
        "speed":30
      }
    },
    "line_linked":{
      "enable": true,
      "distance": 120,
      "color":"#8D99AE",
      "width":1
    },
    "move":{
      "enable":true,
      "speed":2,
      "direction":"none",
      "straight":false
    }
  },
  "interactivity":{
    "events":{
      "onhover":{
        "enable":true,
        "mode":"repulse"
      },
      "onclick":{
        "enable": true,
        "mode":"push"
      }
    },
    "modes":{
      "repulse":{
        "distance":40,
        "duration":0.4
      }
    }
  }
});

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

function toggleActiveItem(elem) {
    menuItems.forEach(function (el) {
        if (el !== elem) {
            el.classList.remove("active");
        } else {
            el.classList.add("active");
        }
    })
}

function activeMenuItem(e) {
    toggleActiveItem(e.target);
}

document.getElementById("menuIcon").addEventListener('click', toggleMenu);
menuItems.forEach(function(el) {
    el.addEventListener('click', closeMenu);
    el.addEventListener('click', activeMenuItem, false);
});

var el_home = document.getElementById("home");
var el_summary = document.getElementById("summary");
var el_projects = document.getElementById("projects");
var el_work = document.getElementById("work");
var el_education = document.getElementById("education");
var el_contact = document.getElementById("contact");
var els_bottom = {};
var prevId = "home";

function calcElmBottom() {
    let navHeight = document.getElementById("topnav").offsetHeight;

    let bottom = el_home.offsetHeight;
    els_bottom["home"] = bottom - navHeight;

    bottom += el_summary.offsetHeight;
    els_bottom["summary"] = bottom - navHeight;

    bottom += el_projects.offsetHeight;
    els_bottom["projects"] = bottom - navHeight;

    bottom += el_work.offsetHeight;
    els_bottom["work"] = bottom - navHeight;

    bottom += el_education.offsetHeight;
    els_bottom["education"] = bottom - navHeight;

    bottom += el_contact.offsetHeight;
    els_bottom["contact"] = bottom - navHeight;
}

function calcWindowOffset() {
    let offset = 0;
    if (window.pageXOffset !== undefined) {
        // All browsers, except IE9 and earlier
        offset = window.pageYOffset;
    } else {   // IE9 and earlier
        offset = document.documentElement.scrollTop;
    }
    return Math.ceil(offset);
}

function calcActiveItem() {
    let offset = calcWindowOffset();
    let id = "";
    if (offset >= els_bottom["education"])     id = "contact";
    else if (offset >= els_bottom["work"])     id = "education";
    else if (offset >= els_bottom["projects"]) id = "work";
    else if (offset >= els_bottom["summary"])  id = "projects";
    else if (offset >= els_bottom["home"])     id = "summary";
    else                                       id = "home";

    if (prevId !== id) {
        // change active item
        let curr = document.querySelector(`a[href="#${id}"]`);
        toggleActiveItem(curr);

        prevId = id;
        console.log(id, curr);
    }
}

calcElmBottom();
window.onresize = calcElmBottom;
window.onscroll = calcActiveItem;