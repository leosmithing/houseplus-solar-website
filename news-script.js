// ===== NEWS FILTER FUNCTIONALITY =====
const filterBtns = document.querySelectorAll('.filter-btn');
const newsCards = document.querySelectorAll('.news-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterBtns.forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');

    // Get filter value
    const filterValue = btn.getAttribute('data-filter');

    // Filter news cards
    newsCards.forEach(card => {
      const category = card.getAttribute('data-category');
      
      if (filterValue === 'all' || category === filterValue) {
        card.style.display = 'block';
        // Trigger animation
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  });
});

// ===== NEWS CARD ANIMATIONS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, index * 50);
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

newsCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});

// ===== LOAD MORE FUNCTIONALITY =====
const loadMoreBtn = document.querySelector('.btn-load-more');
let displayedCount = 9;
const itemsPerLoad = 3;

if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', () => {
    loadMoreBtn.textContent = 'Loading...';
    loadMoreBtn.disabled = true;

    // Simulate loading delay
    setTimeout(() => {
      // In a real scenario, you would fetch more articles from a server
      // For now, we'll just show a message
      loadMoreBtn.textContent = 'No More Articles';
      loadMoreBtn.disabled = true;
    }, 800);
  });
}

// ===== NEWSLETTER FORM =====
const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const btn = newsletterForm.querySelector('.btn-subscribe');
    const originalText = btn.textContent;

    // Validate email
    const email = emailInput.value.trim();
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    btn.textContent = 'Subscribing...';
    btn.disabled = true;

    // Simulate subscription
    setTimeout(() => {
      btn.textContent = 'Subscribed! ✓';
      btn.style.background = '#16A34A';
      emailInput.value = '';
      
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    }, 1200);
  });
}

// ===== NAVBAR SCROLL EFFECT (from main script) =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== MOBILE NAV TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close nav when link clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ===== READ MORE LINKS =====
const readMoreLinks = document.querySelectorAll('.read-more');
readMoreLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Full article content would load here. This is a demo version.');
  });
});
