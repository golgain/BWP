document.addEventListener('DOMContentLoaded', function() {
    // Language Toggle
    const langBtn = document.getElementById('langToggleBtn');
    const contentBn = document.getElementById('content-bn');
    const contentEn = document.getElementById('content-en');

    if (langBtn && contentBn && contentEn) {
        langBtn.addEventListener('click', function() {
            if (contentBn.style.display !== 'none') {
                contentBn.style.display = 'none';
                contentEn.style.display = 'block';
                langBtn.textContent = 'বাংলা';
            } else {
                contentBn.style.display = 'block';
                contentEn.style.display = 'none';
                langBtn.textContent = 'English';
            }
        });
    }

    // Contact Form Alert
    const contactForm = document.getElementById('contactForm');
    const contactAlert = document.getElementById('contactSuccessAlert');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            contactAlert.classList.remove('d-none');
            contactForm.reset();
            setTimeout(() => contactAlert.classList.add('d-none'), 5000);
        });
    }

    // Registration Form Alert
    const regForm = document.getElementById('memberRegisterForm');
    const regAlert = document.getElementById('registerSuccessAlert');
    if (regForm) {
        regForm.addEventListener('submit', function(e) {
            e.preventDefault();
            regAlert.classList.remove('d-none');
            regForm.reset();
            window.scrollTo({ top: regAlert.offsetTop - 100, behavior: 'smooth' });
        });
    }
});

