// =====================================
// PROJECT DATA (ONLY FROM RESUME + PORTFOLIO)
// =====================================
const projectsData = {
  ecommerce: {
    title: "E-commerce Platform",
    icon: "bx-shopping-bag",
    description: "High-performance e-commerce frontend built using React.js with modern UI and scalable architecture.",
    fullDescription: "A collaborative e-commerce project where I served as the Frontend Lead. The application focuses on component reusability, efficient state management, and seamless API integration to deliver a smooth shopping experience across devices.",
    features: [
      "Dynamic product catalog with search and filtering",
      "Persistent shopping cart using browser storage",
      "Reusable and scalable React component architecture",
      "Responsive UI optimized for all screen sizes",
      "REST API integration for real-time data",
      "Optimized rendering and performance tuning"
    ],
    technologies: ["React.js", "JavaScript (ES6+)", "CSS3", "REST API", "Git"],
    challenges: "Managing shared state across multiple components while maintaining performance.",
    outcome: "Strengthened React.js architecture skills and collaborative development experience.",
    links: {
      github: "https://github.com/visheshmalik6",
      liveDemo: null
    }
  },

  webclones: {
    title: "Interactive Web Application Clones",
    icon: "bx-desktop",
    description: "Pixel-perfect recreations of popular websites to master DOM manipulation and responsive layouts.",
    fullDescription: "A personal project focused on building web clones from scratch to deeply understand JavaScript behavior, layout systems, and event-driven programming.",
    features: [
      "Pixel-perfect UI recreation",
      "Advanced DOM manipulation",
      "Mobile-first responsive design",
      "CSS Grid and Flexbox layouts",
      "Performance optimization (30% faster load)"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    challenges: "Maintaining UI accuracy while keeping code semantic and responsive.",
    outcome: "Built strong frontend fundamentals without heavy framework reliance.",
    links: {
      github: "https://github.com/visheshmalik6",
      liveDemo: "https://visheshmalik6.github.io/MyPortfolio/"
    }
  },

  facerecognition: {
    title: "Face Recognition Application",
    icon: "bx-face",
    description: "Real-time facial detection system using Python and computer vision.",
    fullDescription: "An end-to-end computer vision project implementing facial detection from real-time video streams using Python-based ML libraries.",
    features: [
      "Real-time face detection",
      "Facial landmark identification",
      "Optimized image processing pipeline",
      "High detection accuracy"
    ],
    technologies: ["Python", "OpenCV", "dlib", "NumPy"],
    challenges: "Balancing real-time performance with detection accuracy.",
    outcome: "Earned GUVI certification and hands-on ML experience.",
    links: {
      github: "https://github.com/visheshmalik6",
      liveDemo: null
    }
  },

  iotaquarium: {
    title: "IoT-Based Smart Aquarium",
    icon: "bx-chip",
    description: "Automated aquarium monitoring system using IoT sensors and Python.",
    fullDescription: "An embedded systems project integrating hardware sensors with Python automation to monitor and maintain aquarium conditions.",
    features: [
      "Temperature and pH monitoring",
      "Automated maintenance cycles",
      "Sensor data processing",
      "Reduced manual effort by 80%"
    ],
    technologies: ["Python", "Raspberry Pi", "IoT Sensors"],
    challenges: "Ensuring reliable sensor readings and fault tolerance.",
    outcome: "Practical experience in hardware-software integration.",
    links: {
      github: "https://github.com/visheshmalik6",
      liveDemo: null
    }
  }
};

// =====================================
// CERTIFICATE DATA (FROM RESUME)
// =====================================
const certificatesData = {
  oracle: {
    title: "Oracle Cloud Infrastructure Foundations",
    issuer: "Oracle",
    year: "2025",
    icon: "bx-certification",
    credentialId: "Oracle-OCI-2025",
    skills: ["Cloud Computing", "OCI Services", "Cloud Security"],
    description: "Certification validating foundational knowledge of Oracle Cloud Infrastructure.",
    links: {
      verify: "https://drive.google.com/file/d/1_kAzOt8tHQ6M5zDCECAQ0dYepNDM1wG6/view?usp=sharing"
    }
  },

  mckinsey: {
    title: "McKinsey Forward Program",
    issuer: "McKinsey & Company",
    year: "Ongoing ",
    icon: "bx-briefcase",
    credentialId: "McKinsey-FWD-2025",
    skills: ["Problem Solving", "Strategic Thinking", "Communication"],
    description: "Business readiness program focused on structured problem solving.",
    links: {
      verify: ""
    }
  },

  facerecog: {
    title: "Face Recognition Using Python",
    issuer: "GUVI",
    year: "2021",
    icon: "bx-code-block",
    credentialId: "6qzRO956068012811t",
    skills: ["Python", "OpenCV", "Computer Vision"],
    description: "Hands-on certification in building face recognition systems.",
    links: {
      verify: "https://drive.google.com/file/d/1zUBIoTgrxygeXM_Z-k3c7cGsNPQ8qGLC/view?usp=sharing"
    }
  },

  uiux: {
    title: "UI/UX Design Certification",
    issuer: "Simplilearn",
    year: "2025",
    icon: "bx-palette",
    credentialId: "Simplilearn-UIUX-2023",
    skills: ["UI Design", "UX Research", "Figma"],
    description: "Certification covering UI/UX principles and design workflows.",
    links: {
      verify: "https://drive.google.com/file/d/1MrHmdKodKr1RFbNk4tFcBHWcJcoecEuT/view?usp=sharing"
    }
  }
};


// =====================================
// MODAL FUNCTIONS
// =====================================
function openProjectModal(projectId) {
  const project = projectsData[projectId];
  const modal = document.getElementById("projectModal");
  const titleSection = document.getElementById("modalTitleSection");
  const body = document.getElementById("modalBody");
  const footer = document.getElementById("modalFooter");

  titleSection.innerHTML = `
    <div class="modal-icon"><i class="bx ${project.icon}"></i></div>
    <h2>${project.title}</h2>
    <div class="modal-meta">
      ${project.technologies.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join("")}
    </div>
  `;

  body.innerHTML = `
    <div class="modal-section">
      <h3>Project Overview</h3>
      <p>${project.fullDescription}</p>
    </div>

    <div class="modal-section">
      <h3>Key Features</h3>
      <ul>${project.features.map(f => `<li>${f}</li>`).join("")}</ul>
    </div>

    <div class="modal-section">
      <h3>Challenges</h3>
      <p>${project.challenges}</p>
    </div>

    <div class="modal-section">
      <h3>Outcome</h3>
      <p>${project.outcome}</p>
    </div>
  `;

  footer.innerHTML = `
    <button class="modal-btn modal-btn-primary" onclick="${
      project.links.github
        ? `window.open('${project.links.github}', '_blank')`
        : `alert('GitHub repository not available')`
    }">
      <i class="bx bxl-github"></i> View on GitHub
    </button>

    <button class="modal-btn modal-btn-secondary" onclick="${
      project.links.liveDemo
        ? `window.open('${project.links.liveDemo}', '_blank')`
        : `alert('No Live Demo / Under Development')`
    }">
      <i class="bx bx-laptop"></i> Live Demo
    </button>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// =====================================
// CLOSE MODAL EVENTS
// =====================================
function openCertModal(certId) {
  const cert = certificatesData[certId];
  const modal = document.getElementById("certModal");
  const title = document.getElementById("certModalTitle");
  const body = document.getElementById("certModalBody");
  const footer = document.getElementById("certModalFooter");

  title.innerHTML = `
    <div class="modal-icon"><i class="bx ${cert.icon}"></i></div>
    <h2>${cert.title}</h2>
    <div class="modal-meta">
      <span class="tag">${cert.issuer}</span>
      <span class="tag">${cert.year}</span>
    </div>
  `;

  body.innerHTML = `
    <div class="modal-section">
      <h3>About</h3>
      <p>${cert.description}</p>
      <p><strong>Credential ID:</strong> ${cert.credentialId}</p>
    </div>

    <div class="modal-section">
      <h3>Skills Acquired</h3>
      <div class="modal-tech-stack">
        ${cert.skills.map(s => `<div class="modal-tech-item">${s}</div>`).join("")}
      </div>
    </div>
  `;

  footer.innerHTML = `
    <button class="modal-btn modal-btn-primary" onclick="${
      cert.links.verify
        ? `window.open('${cert.links.verify}', '_blank')`
        : `alert('Verification not available')`
    }">
      <i class="bx bx-certification"></i> Verify Certificate
    </button>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}


// Close modal on outside click
window.onclick = function(event) {
  const projectModal = document.getElementById('projectModal');
  const certModal = document.getElementById('certModal');
  if (event.target == projectModal) {
    closeModal('projectModal');
  }
  if (event.target == certModal) {
    closeModal('certModal');
  }
}

// Close modal on ESC key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal('projectModal');
    closeModal('certModal');
  }
});

// =====================================
// LOADING SCREEN
// =====================================
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loadingOverlay').classList.add('hidden');
  }, 1200);
});

// =====================================
// HEADER SCROLL & ACTIVE LINK
// =====================================
const header = document.getElementById('header');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  // Header scroll effect
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  // Active section highlighting
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href').slice(1);
    if (href === current) {
      link.classList.add('active');
    }
  });
});

// =====================================
// MOBILE MENU
// =====================================
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle('bx-x');
};

// Close menu on link click
document.querySelectorAll(".navbar a").forEach(a => {
  a.onclick = () => {
    navbar.classList.remove("active");
    menuIcon.classList.remove('bx-x');
  };
});

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
    navbar.classList.remove("active");
    menuIcon.classList.remove('bx-x');
  }
});

// =====================================
// SECTION TOGGLES
// =====================================
document.querySelectorAll(".toggle-btn").forEach(btn => {
  btn.onclick = () => {
    const parent = btn.closest('.section-toggles');
    const targetId = btn.dataset.toggle;
    
    console.log('Button clicked:', btn);
    console.log('Target ID:', targetId);
    console.log('Parent:', parent);
    
    // Remove active from all buttons in this group
    parent.querySelectorAll(".toggle-btn").forEach(b => {
      console.log('Removing active from button:', b);
      b.classList.remove("active");
    });
    
    // Remove active from ALL toggle-content in this section
    parent.querySelectorAll(".toggle-content").forEach(c => {
      console.log('Removing active from content:', c);
      c.classList.remove("active");
    });
    
    // Add active to clicked button
    btn.classList.add("active");
    console.log('Added active to button');
    
    // Add active to the target content
    const targetContent = document.getElementById(targetId);
    console.log('Target content element:', targetContent);
    
    if (targetContent) {
      targetContent.classList.add("active");
      console.log('Added active to target content');
    } else {
      console.error('Target content not found!');
    }
  };
});
// =====================================
// TYPING ANIMATION
// =====================================
const typedTextSpan = document.querySelector(".typed-text");
const textArray = ["Full Stack Developer", "React.js Specialist", "Python Developer", "Problem Solver", "CS Undergraduate"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1000);
  }
}

// Start typing animation
if (typedTextSpan) {
  setTimeout(type, newTextDelay + 250);
}

// =====================================
// SCROLL TO TOP BUTTON
// =====================================
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// =====================================
// SCROLL REVEAL ANIMATION
// =====================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all reveal elements
document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});

// =====================================
// FORM SUBMISSION
// =====================================

// =====================================
// EMAIL JS INITIALIZATION - Wait for EmailJS to load
// =====================================
window.addEventListener('load', function() {
  // Check if EmailJS is loaded
  if (typeof emailjs === 'undefined') {
    console.error('EmailJS not loaded! Make sure the script tag is in your HTML.');
    return;
  }
  
  // Initialize EmailJS with your Public Key
  emailjs.init("1m7Idf9JhQiXNVqBe");
  console.log('EmailJS initialized successfully!');
});

// =====================================
// FORM SUBMISSION
// =====================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Check if EmailJS is available
    if (typeof emailjs === 'undefined') {
      showNotification('Email service is not loaded. Please refresh the page and try again.', 'error');
      console.error('EmailJS is not loaded!');
      return;
    }
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject')?.value.trim() || 'No Subject';
    const message = document.getElementById('message').value.trim();
    
    // Basic validation
    if (!name || !email || !message) {
      showNotification('Please fill in all required fields.', 'error');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showNotification('Please enter a valid email address.', 'error');
      return;
    }
    
    // Get submit button
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    try {
      // Get current date and time
      const now = new Date();
      const formattedTime = now.toLocaleString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      
      // Send email using EmailJS
      const response = await emailjs.send(
        'service_3fk1kom',      // Your EmailJS service ID
        'template_o818gy6',     // Your CORRECT EmailJS template ID
        {
          name: name,
          email: email,
          message: message,
          time: formattedTime
        }
      );
      
      console.log('Email sent successfully:', response);
      
      // Show success message
      showNotification(
        `Thank you ${name}! Your message has been received. I'll get back to you soon at ${email}.`,
        'success'
      );
      
      // Reset form
      contactForm.reset();
      
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Show error message
      showNotification(
        'Oops! Something went wrong. Please try emailing me directly at mrvisheshmalik8@gmail.com',
        'error'
      );
    } finally {
      // Reset button
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  });
}

// =====================================
// NOTIFICATION FUNCTION
// =====================================
function showNotification(message, type = 'success') {
  // Remove existing notifications
  const existingNotif = document.querySelector('.custom-notification');
  if (existingNotif) existingNotif.remove();
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `custom-notification ${type}`;
  notification.innerHTML = `
    <i class="bx ${type === 'success' ? 'bx-check-circle' : 'bx-error-circle'}"></i>
    <span>${message}</span>
    <button class="notif-close"><i class="bx bx-x"></i></button>
  `;
  
  // Add to body
  document.body.appendChild(notification);
  
  // Show notification
  setTimeout(() => notification.classList.add('show'), 100);
  
  // Auto hide after 5 seconds
  const autoHideTimer = setTimeout(() => {
    hideNotification(notification);
  }, 5000);
  
  // Close button
  notification.querySelector('.notif-close').addEventListener('click', () => {
    clearTimeout(autoHideTimer);
    hideNotification(notification);
  });
}

function hideNotification(notification) {
  notification.classList.remove('show');
  setTimeout(() => notification.remove(), 300);
}

// =====================================
// SMOOTH SCROLLING
// =====================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});


// CONSOLE MESSAGE

console.log('%c Developed by Vishesh Malik ', 'background: linear-gradient(135deg, #00d4ff, #7b2cbf); color: white; font-size: 16px; padding: 10px 20px; border-radius: 5px;');
console.log('%c Looking for opportunities! Contact: mrvisheshmalik8@gmail.com ', 'background: #111; color: #00d4ff; font-size: 14px; padding: 5px 10px;');





// Particle Canvas Animation
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouseX = 0;
    let mouseY = 0;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 100) {
          this.x -= dx * 0.02;
          this.y -= dy * 0.02;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(138, 43, 226, ${this.opacity})`;
        ctx.fill();
      }
    }

    function createParticles() {
      const particleCount = window.innerWidth < 768 ? 50 : 100;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(138, 43, 226, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      connectParticles();
      requestAnimationFrame(animate);
    }

    createParticles();
    animate();

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Loading percentage counter
    const percentageEl = document.querySelector('.loading-percentage');
    let count = 0;
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 8) + 3;
      if (count >= 100) {
        count = 100;
        clearInterval(interval);
      }
      percentageEl.textContent = count + '%';
    }, 120);

    // Cover page transition
    window.addEventListener("load", () => {
      const cover = document.getElementById("coverPage");

      setTimeout(() => {
        cover.classList.add("hidden");
        setTimeout(() => {
          cover.style.display = "none";
        }, 1000);
      }, 5000); // Increased from 3000ms to 5000ms
    });







/* =====================
   CHATBOT OPEN / CLOSE
===================== */

document.addEventListener("DOMContentLoaded", () => {
  const openChatBtn = document.getElementById("open-chat-btn");
  const closeChatBtn = document.getElementById("close-chat-btn");
  const chatbotWidget = document.getElementById("chatbot-widget");

  if (openChatBtn && chatbotWidget) {
    openChatBtn.addEventListener("click", () => {
      chatbotWidget.classList.remove("hidden");
    });
  }

  if (closeChatBtn && chatbotWidget) {
    closeChatBtn.addEventListener("click", () => {
      chatbotWidget.classList.add("hidden");
    });
  }











  /* =====================
     CHATBOT MESSAGES
  ===================== */

  const input = document.getElementById("chatbot-input");
  const sendBtn = document.getElementById("chatbot-send");
  const messages = document.getElementById("chatbot-messages");

  if (!input || !sendBtn || !messages) return;

  let typingIndicator = null;

  function addMessage(text, type) {
    const div = document.createElement("div");
    div.className = `chatbot-msg ${type}`;

    const label = document.createElement("strong");
    label.textContent = type === "user" ? "You: " : "Vishesh Bot: ";

    const span = document.createElement("span");
    span.textContent = text;

    div.appendChild(label);
    div.appendChild(span);

    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function showTypingIndicator() {
    if (typingIndicator) return;

    typingIndicator = document.createElement("div");
    typingIndicator.className = "chatbot-msg bot typing";
    typingIndicator.textContent = "Vishesh Bot is typing…";

    messages.appendChild(typingIndicator);
    messages.scrollTop = messages.scrollHeight;
  }

  function removeTypingIndicator() {
    if (typingIndicator) {
      typingIndicator.remove();
      typingIndicator = null;
    }
  }

  function sendMessage() {
    const msg = input.value.trim();
    if (!msg) return;

    addMessage(msg, "user");
    input.value = "";
    input.focus();

    showTypingIndicator();

    setTimeout(() => {
      const reply = Chatbot.getResponse(msg);
      removeTypingIndicator();
      addMessage(reply, "bot");
    }, 600);
  }

  sendBtn.addEventListener("click", sendMessage);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });
});


