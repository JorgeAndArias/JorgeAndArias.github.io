const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

// Typing animation

let i = 0;
let txt = 'ull Stack Web Developer      ';
const elementEffect = document.getElementById('typing-effect');

function typeWriter() {
  if (elementEffect) {
    if (i < txt.length) {
      elementEffect.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, 250);
      if (i === txt.length) {
        i = 0;
        elementEffect.innerHTML = 'F';
      }
    }
  }
}

typeWriter();
