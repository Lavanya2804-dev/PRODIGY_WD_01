
// Change nav background on scroll
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#333'; // Dark background
  } else {
    navbar.style.backgroundColor = 'transparent'; // Transparent when at top
  }
});