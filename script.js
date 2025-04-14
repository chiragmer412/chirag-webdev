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
        // RESET & PLAY SLIDE-IN
        moreText.classList.remove('hidden', 'slide-out');
        void moreText.offsetWidth; // Reflow
        moreText.classList.add('slide-in');
        btn.textContent = "Read Less";
    } else {
        // PLAY SLIDE-OUT
        moreText.classList.remove('slide-in');
        moreText.classList.add('slide-out');

        // ADD .hidden AFTER animation ends (mobile-compatible)
        const handleAnimationEnd = () => {
            moreText.classList.add('hidden');
            moreText.removeEventListener('animationend', handleAnimationEnd);
        };

        // Fallback for mobile browsers in case event doesn't fire
        setTimeout(() => {
            if (!moreText.classList.contains('hidden')) {
                moreText.classList.add('hidden');
            }
        }, 600); // slightly more than animation time (0.5s)

        moreText.addEventListener('animationend', handleAnimationEnd);

        btn.textContent = "Read More";
    }
}
