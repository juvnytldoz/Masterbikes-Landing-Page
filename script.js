// 🌐 Desplazamiento suave a secciones internas
document.querySelectorAll('a[href^="#"]').forEach(ancla => {
  ancla.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// 📩 Simulación de envío del formulario de contacto
document.querySelector('form')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const emailInput = this.querySelector('input[type="email"]');
  const email = emailInput.value.trim();

  if (!email) {
    alert('Por favor, ingresa tu correo electrónico.');
    return;
  }

  // Simulación: podrías reemplazar esto por una petición real
  alert(`Gracias por tu interés. Te contactaremos pronto a ${email}.`);
  this.reset();
});
