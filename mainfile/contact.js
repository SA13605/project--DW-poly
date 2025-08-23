document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents the form from submitting normally

        const name = document.getElementById('yourName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phoneNumber').value.trim();
        const subject = document.getElementById('subject').value.trim();

        if (name === '' || email === '' || phone === '' || subject === '') {
            alert('Please fill in all the required fields marked with an asterisk (*).');
        } else {
           
            alert('Message sent successfully!');
            contactForm.reset(); 
        }
    });
});