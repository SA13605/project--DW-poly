document.addEventListener('DOMContentLoaded', () => {
  const menuBar = document.querySelector('.menuBar');
  const profileBox = document.querySelector('.profile');

  // Toggle menu bar visibility
  const menuIcon = document.querySelectorAll('nav img')[0]; // first img
  menuIcon.addEventListener('click', () => {
    menuBar.style.display = (menuBar.style.display === 'none' || !menuBar.style.display) ? 'block' : 'none';
  });

  // Toggle profile box visibility
  const profileIcon = document.querySelectorAll('nav img')[1]; // second img
  profileIcon.addEventListener('click', () => {
    profileBox.style.display = (profileBox.style.display === 'none' || !profileBox.style.display) ? 'block' : 'none';
  });

  // Form submit inside profile
  const submitButton = document.querySelector('.profile button');
  submitButton.addEventListener('click', () => {
    const name = document.querySelector('input[name="Name"]').value.trim();
    const email = document.querySelector('input[name="Email Address"]').value.trim();
    const number = document.querySelector('input[name="Number"]').value.trim();

    if (!name || !email || !number) {
      alert('Please fill in all fields.');
    } else {
      alert(`Thank you, ${name}! We'll contact you at ${email}.`);
    }
  });

  console.log("JavaScript loaded ✅");
});

// smayak....//