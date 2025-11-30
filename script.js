let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick= () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


const scriptURL = "https://script.google.com/macros/s/AKfycbxc6rLoAK5R6njP2gs_a_0TRKHYuTOaDKcXFtg4Z9x-Z0SmoiCDFFuiKrs9r2P2-S8s/exec";
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.querySelector('input[placeholder="Full Name"]').value.trim();
    const email = document.querySelector('input[placeholder="Email"]').value.trim();
    const phone = document.querySelector('input[placeholder="Phone Number"]').value.trim();
    const subject = document.querySelector('input[placeholder="Subject"]').value.trim();
    const message = document.querySelector('textarea[placeholder="Your Message"]').value.trim();
    if (!name || !email || !message) {
      alert("Please fill in at least your name, email and message.");
      return;
    }
    const formData = { name, email, phone, subject, message };
    try {
      const res = await fetch(scriptURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        alert("Message sent! Thanks — I'll get in touch soon.");
        form.reset();
      } else {
        throw new Error("Non-OK response: " + res.status);
      }
    } catch (err) {
      try {
        await fetch(scriptURL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });
        alert("Message sent! (fallback)");
        form.reset();
      } catch (err2) {
        console.error(err2);
        alert("Unable to send message. Check deployment and try again.");
      }
    }
  });
});
