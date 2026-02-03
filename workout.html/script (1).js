window.addEventListener('scroll', function() {
  const navbar = document.getElementById('myNav');
  // Check if the user has scrolled past a certain point (e.g., 50 pixels)
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
