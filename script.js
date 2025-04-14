const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
menubar.onclick = () => {
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active');
}

const section = document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top > offset && top < offset + height) {
            sec.classList.add('start-animation');
            navlink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    var header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active');
}
// WhatsApp form submission handler
document.getElementById('contactForm').onsubmit = function (event) {
    event.preventDefault();

    // Get form field values (optional if you don't want to send a message)
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Construct the WhatsApp message
    const whatsappMessage = encodeURIComponent(`Full Name: ${fullName}\nEmail: ${email}\nMobile: ${mobile}\nSubject: ${subject}\nMessage: ${message}`);

    // Construct WhatsApp URL with your phone number and pre-filled message
    const whatsappUrl = `https://wa.me/9510846022?text=${whatsappMessage}`;

    // Open WhatsApp chat directly without showing "continue to chat" message
    window.open(whatsappUrl, '_blank');
}

function toggleReadMore(btn) {
    const moreText = btn.previousElementSibling;

    if (moreText.classList.contains('hidden')) {
        // Show element and animate in
        moreText.classList.remove('hidden', 'slide-out');
        void moreText.offsetWidth; // Reflow to reset animation
        moreText.classList.add('slide-in');
        btn.textContent = "Read Less";
    } else {
        // Animate out to the left
        moreText.classList.remove('slide-in');
        moreText.classList.add('slide-out');

        // After animation, hide it
        moreText.addEventListener('animationend', function handler() {
            moreText.classList.add('hidden');
            moreText.removeEventListener('animationend', handler);
        });

        btn.textContent = "Read More";
    }
}
