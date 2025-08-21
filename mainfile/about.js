document.getElementById('subscribe-form').addEventListener('submit', function(val) {
  val.preventDefault();
  const email = this.querySelector('input').value;
  alert('Subscribed with:`${email}`');
});