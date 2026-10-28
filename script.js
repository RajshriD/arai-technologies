(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const recipient = 'YOUR_EMAIL@example.com'; // Replace with your business email before launch.
    const subject = encodeURIComponent(`Website enquiry: ${data.get('service')}`);
    const body = encodeURIComponent(`Name: ${data.get('name')}\nWork email: ${data.get('email')}\nService: ${data.get('service')}\n\nProject details:\n${data.get('message')}`);
    if (recipient === 'YOUR_EMAIL@example.com') {
      if (note) note.textContent = 'Demo form validated. Replace YOUR_EMAIL@example.com in script.js with your business email to open an enquiry email.';
      return;
    }
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
})();
