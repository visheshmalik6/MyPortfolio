let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick= () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


const scriptURL = "https://script.google.com/macros/s/AKfycbxpWTt0M_2M6Rw2EkFEkrTmSPV0V60woPMqePvnaYPSbxYjp1FZt-bPbxceJJu7GCJ6/exec";
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = {
      name: document.querySelector('input[placeholder="Full Name"]').value.trim(),
      email: document.querySelector('input[placeholder="Email"]').value.trim(),
      phone: document.querySelector('input[placeholder="Phone Number"]').value.trim(),
      subject: document.querySelector('input[placeholder="Subject"]').value.trim(),
      message: document.querySelector('textarea[placeholder="Your Message"]').value.trim()
    };
    if (!formData.name || !formData.email || !formData.message) { alert("Please fill in at least your name, email and message."); return; }
    try {
      const res = await fetch(scriptURL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      if (res.ok) { alert("Message sent!"); form.reset(); } else { throw new Error("Non-OK response: " + res.status); }
    } catch (err) {
      try {
        await fetch(scriptURL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
        alert("Message sent (fallback)"); form.reset();
      } catch (err2) { console.error(err2); alert("Unable to send message. Check deployment/console."); }
    }
  });
});


