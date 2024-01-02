// JavaScript for changing the background color of the navbar on scroll
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#222';
    } else {
      navbar.style.backgroundColor = '#333';
    }
  });