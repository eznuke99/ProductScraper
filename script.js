// Animate progress bars on load
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelectorAll('.progress-fill').forEach((bar) => {
        const target = parseInt(bar.dataset.width);
        bar.style.width = target + '%';
      });

      // Count up percentages
      document.querySelectorAll('.progress-pct').forEach((el) => {
        const target = parseInt(el.dataset.target);
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = Math.round(current) + '%';
          if (current >= target) clearInterval(timer);
        }, 22);
      });
    }, 300);
  });

  // Email form submission
  function handleSubmit() {
    const name = document.getElementById('nameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const agreed = document.getElementById('agreeCheck').checked;

    if (!name) { alert('Please enter your name.'); return; }
    if (!email || !email.includes('@')) { alert('Please enter a valid email address.'); return; }
    if (!agreed) { alert('Please agree to receive updates.'); return; }

    // Hide form fields, show success
    document.getElementById('emailForm').querySelectorAll('.form-field, .form-check, .submit-btn').forEach(el => {
      el.style.display = 'none';
    });
    document.getElementById('successMsg').style.display = 'block';
  }