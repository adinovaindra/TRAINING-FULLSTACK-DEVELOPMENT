// Form validation & dummy success message
document
  .getElementById("subscribeForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const message = document.getElementById("formMessage");

    if (validateEmail(email)) {
      message.style.color = "green";
      message.textContent = "Thanks for subscribing!";
      this.reset();
    } else {
      message.style.color = "red";
      message.textContent = "Please enter a valid email address.";
    }
  });

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
