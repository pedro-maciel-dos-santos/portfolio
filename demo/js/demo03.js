const heartContainer = document.getElementById('heartContainer');
const messageBox = document.getElementById('messageBox');
let isOpen = false;

function toggle(e) {
  e.stopPropagation();
  isOpen = !isOpen;

  if (isOpen) {
    heartContainer.classList.add('hidden');
    setTimeout(() => {
      messageBox.classList.add('visible');
    }, 300);
  } else {
    messageBox.classList.remove('visible');
    setTimeout(() => {
      heartContainer.classList.remove('hidden');
    }, 600);
  }

  createSparkles(e.clientX, e.clientY);
}

heartContainer.addEventListener('click', toggle);
messageBox.addEventListener('click', toggle);

function createSparkles(x, y) {
  for (let i = 0; i < 15; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';

    const angle = (Math.PI * 2 * i) / 15;
    const distance = 60 + Math.random() * 40;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;

    sparkle.style.setProperty('--tx', tx + 'px');
    sparkle.style.setProperty('--ty', ty + 'px');

    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 1500);
  }
}

// Efeito de rastro do cursor
let lastTime = 0;
document.addEventListener('mousemove', function (e) {
  const now = Date.now();
  if (now - lastTime < 50) return;
  lastTime = now;

  const trail = document.createElement('div');
  trail.style.position = 'fixed';
  trail.style.width = '3px';
  trail.style.height = '3px';
  trail.style.background = '#667eea';
  trail.style.borderRadius = '50%';
  trail.style.left = e.clientX + 'px';
  trail.style.top = e.clientY + 'px';
  trail.style.pointerEvents = 'none';
  trail.style.opacity = '0.5';
  trail.style.transition = 'all 0.8s ease-out';
  trail.style.zIndex = '999';

  document.body.appendChild(trail);

  setTimeout(() => {
    trail.style.opacity = '0';
    trail.style.transform = 'scale(4)';
  }, 10);

  setTimeout(() => {
    trail.remove();
  }, 800);
});