function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

// Chiudi il menu quando si clicca su un link
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('nav').classList.remove('active');
  });
});

// Chiudi il menu quando si clicca fuori
document.addEventListener('click', (event) => {
  const nav = document.getElementById('nav');
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
    nav.classList.remove('active');
  }
});