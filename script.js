// Hamburger menu function
function hamburger() {
  var menu = document.querySelector(".mobile-nav");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// Desktop navigation function
function desktop_nav() {
  var menu = document.querySelector(".mobile-nav");
  if (window.innerWidth > 768) {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// Toggle menu function
function toggleMenu() {
  var menu = document.querySelector('.nav-links');
  menu.classList.toggle('active');
}
