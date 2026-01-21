/* =========================
   CHATBOT CORE (v2.1)
========================= */

const Chatbot = {
  intents: [],

  addIntent({ name, triggers, response, examples = [] }) {
    this.intents.push({ name, triggers, response, examples });
  },

  normalize(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  },

  getResponse(input) {
    if (!input || !input.trim()) {
      return "Please type something 🙂";
    }

    const message = this.normalize(input);

    // COMMANDS
    if (["/commands", "commands", "help"].includes(message)) {
      return this.listCommands();
    }

    // INTENT MATCHING (word-safe)
    for (const intent of this.intents) {
      for (const trigger of intent.triggers) {
        const pattern = new RegExp(`\\b${trigger}\\b`, "i");
        if (pattern.test(message)) {
          return intent.response;
        }
      }
    }

    // FALLBACK
    return (
      "I’m not sure about that 🤔\n\n" +
      "Type **/commands** to see what you can ask me."
    );
  },

  listCommands() {
    return (
      "Here’s what you can ask me 👇\n\n" +
      this.intents
        .map(i => `• ${i.name}${i.examples.length ? ` → ${i.examples.join(" / ")}` : ""}`)
        .join("\n") +
      "\n\nYou can also ask naturally."
    );
  }
};
/* =========================
   PORTFOLIO INTENTS
========================= */

// GREETING
Chatbot.addIntent({
  name: "Greeting",
  triggers: ["hi", "hello", "hey"],
  examples: ["hi", "hello", "hey there"],
  response:
    "Hey! 👋 I’m Vishesh Malik’s portfolio assistant.\n" +
    "Ask me about skills, projects, education, or career."
});

// ABOUT
Chatbot.addIntent({
  name: "About Me",
  triggers: ["who", "yourself", "about you"],
  examples: ["who are you", "tell me about yourself"],
  response:
    "I’m Vishesh Malik, a Computer Science & Engineering student at IIMT University.\n" +
    "I specialize in Full-Stack Development with strong DSA fundamentals."
});

// SKILLS
Chatbot.addIntent({
  name: "Skills",
  triggers: ["skills", "technologies", "tech stack"],
  examples: ["skills", "tech stack"],
  response:
    "Technical Skills:\n" +
    "• Java, Python, JavaScript, C/C++\n" +
    "• React.js, Firebase, MySQL\n" +
    "• DSA (Java)\n" +
    "• UI/UX (Figma)"
});

// FRONTEND
Chatbot.addIntent({
  name: "Frontend",
  triggers: ["frontend", "react", "ui"],
  examples: ["frontend", "react skills"],
  response:
    "I build fast, responsive frontends using React.js with clean component architecture and mobile-first design."
});

// BACKEND
Chatbot.addIntent({
  name: "Backend",
  triggers: ["backend", "api", "server"],
  examples: ["backend", "api work"],
  response:
    "Backend experience includes Python logic, REST APIs, MySQL databases, and OCI cloud deployment."
});

// EDUCATION
Chatbot.addIntent({
  name: "Education",
  triggers: ["education", "college", "degree"],
  examples: ["education", "college"],
  response:
    "B.Tech in Computer Science & Engineering (2023–2027)\n" +
    "IIMT University, Meerut\n" +
    "Core: DSA, OOP, DBMS"
});

// PROJECTS
Chatbot.addIntent({
  name: "Projects",
  triggers: ["projects", "portfolio", "work"],
  examples: ["projects", "your work"],
  response:
    "Major Projects:\n" +
    "• React E-commerce Platform\n" +
    "• Face Recognition System (Python)\n" +
    "• IoT Smart Aquarium (80% automation)"
});

// CHATBOT
Chatbot.addIntent({
  name: "Chatbot Project",
  triggers: ["chatbot"],
  examples: ["chatbot"],
  response:
    "This chatbot is part of my portfolio 😄\n" +
    "It demonstrates clean intent logic and scalable architecture."
});

// CERTIFICATIONS
Chatbot.addIntent({
  name: "Certifications",
  triggers: ["certifications", "certificates"],
  examples: ["certifications"],
  response:
    "Certifications:\n" +
    "• Oracle Cloud Infrastructure Foundations\n" +
    "• UI/UX Design – Simplilearn\n" +
    "• McKinsey Forward Program\n" +
    "• Face Recognition – GUVI"
});

// CAREER
Chatbot.addIntent({
  name: "Career",
  triggers: ["career", "internship", "job", "hire"],
  examples: ["internship", "hire you"],
  response:
    "I’m actively seeking Software Engineering Internships and enjoy working in Agile teams."
});

// CONTACT
Chatbot.addIntent({
  name: "Contact",
  triggers: ["contact", "email"],
  examples: ["contact", "email"],
  response:
    "Email: visheshmalik.dev@gmail.com\n" +
    "LinkedIn and GitHub are available on the portfolio."
});

// THANKS
Chatbot.addIntent({
  name: "Thanks",
  triggers: ["thanks", "thank"],
  examples: ["thanks"],
  response: "You’re welcome! 😊"
});
