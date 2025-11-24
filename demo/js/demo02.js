document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000, // duração da animação em ms
    once: false // anima apenas uma vez ao rolar
  });
});

document.querySelectorAll('div a.nav-item').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Impede o comportamento padrão do link

    const targetId = this.getAttribute('href').substring(1); // Remove o '#' do href
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Define a quantidade de pixels para subir (ajuste conforme necessário)
      const offset = 55; // Por exemplo, sobe 30 pixels

      const targetPosition = targetElement.offsetTop - offset;

      window.scrollTo({
        top: targetPosition > 0 ? targetPosition : 0, // Garante que não role para um valor negativo
        behavior: 'smooth' // Adiciona o scroll suave
      });
    }
  });
});

function handleNavbarBackground() {
  const navbar = document.querySelector('.navbar');
  const isDesktop = window.innerWidth > 768;

  if (isDesktop && window.scrollY > 10) {
    navbar.classList.add('navbar-scrolled');
  } else if (isDesktop && window.scrollY <= 10) {
    navbar.classList.remove('navbar-scrolled');
  } else {
    // Em telas pequenas, sempre usa a navbar com fundo
    navbar.classList.add('navbar-scrolled');
  }
}

// Verifica quando rola a página
window.addEventListener('scroll', handleNavbarBackground);

// Verifica quando a janela é redimensionada (por exemplo, virar o celular ou redimensionar o navegador)
window.addEventListener('resize', handleNavbarBackground);

// Verifica logo ao carregar a página
window.addEventListener('load', handleNavbarBackground);

// interação para mostrar o efeito
document.addEventListener('DOMContentLoaded', function () {
  const inputs = document.querySelectorAll('.input');

  inputs.forEach(input => {
    input.addEventListener('focus', function () {
      this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function () {
      if (!this.value) {
        this.parentElement.classList.remove('focused');
      }
    });
  });
});

const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const menuLinks = document.querySelectorAll('.menu li a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Adicione aqui a lógica de compartilhamento
    // Por enquanto, apenas fecha o menu
    menu.classList.remove('active');
  });
});