var nav = document.getElementById('navbar');

document.querySelector('nav').addEventListener('click', function() {
  if (screen.width < 600) {
    if (nav.style.display === 'none') {
      nav.style.display = 'block';
    }
    else {
      nav.style.display = 'none';
    }
  }
});