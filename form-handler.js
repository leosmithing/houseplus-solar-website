// ===== CONTACT FORM HANDLER =====
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

// Form validation
function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name) {
    alert('Please enter your name');
    return false;
  }

  if (!email || !email.includes('@')) {
    alert('Please enter a valid email address');
    return false;
  }

  if (!message) {
    alert('Please enter your message');
    return false;
  }

  return true;
}

// Handle form submission
contactForm.addEventListener('submit', function(e) {
  // Validate before submission
  if (!validateForm()) {
    e.preventDefault();
    return false;
  }

  const btn = this.querySelector('.btn-submit');
  const originalText = btn.innerHTML;
  btn.textContent = 'Sending...';
  btn.disabled = true;

  // For Formspree, the form will submit naturally
  // But we can add a success handler after submission
  setTimeout(() => {
    formSuccess.classList.add('show');
    contactForm.reset();
    btn.innerHTML = originalText;
    btn.disabled = false;
    
    // Hide success message after 5 seconds
    setTimeout(() => formSuccess.classList.remove('show'), 5000);
  }, 1500);
});

// ===== FORM FIELD INTERACTIONS =====
// Add focus/blur effects
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
formInputs.forEach(input => {
  input.addEventListener('focus', function() {
    this.parentElement.classList.add('focused');
  });

  input.addEventListener('blur', function() {
    this.parentElement.classList.remove('focused');
    // Add filled state if has value
    if (this.value) {
      this.parentElement.classList.add('filled');
    } else {
      this.parentElement.classList.remove('filled');
    }
  });

  // Check initial state
  if (input.value) {
    input.parentElement.classList.add('filled');
  }
});

// ===== FORM FIELD VALIDATION ON CHANGE =====
document.getElementById('email').addEventListener('change', function() {
  const email = this.value.trim();
  if (email && !email.includes('@')) {
    this.classList.add('error');
    this.parentElement.classList.add('error');
  } else {
    this.classList.remove('error');
    this.parentElement.classList.remove('error');
  }
});

document.getElementById('phone').addEventListener('change', function() {
  const phone = this.value.trim();
  if (phone && phone.length < 7) {
    this.classList.add('error');
    this.parentElement.classList.add('error');
  } else {
    this.classList.remove('error');
    this.parentElement.classList.remove('error');
  }
});

// ===== CHARACTER COUNTER FOR MESSAGE =====
const messageField = document.getElementById('message');
let charCounter = document.querySelector('.char-counter');

if (!charCounter) {
  charCounter = document.createElement('div');
  charCounter.className = 'char-counter';
  messageField.parentElement.appendChild(charCounter);
}

messageField.addEventListener('input', function() {
  const count = this.value.length;
  const max = 1000;
  charCounter.textContent = `${count}/${max} characters`;
  charCounter.style.color = count > max * 0.8 ? '#f97316' : '#999';
});

// Initialize counter
if (messageField.value) {
  charCounter.textContent = `${messageField.value.length}/1000 characters`;
}
