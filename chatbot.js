/* =========================
   CHATBOT CORE (v3.0)
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

    // INTENT MATCHING
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
      "Try asking about:\n" +
      "• Devlog\n• Projects\n• Skills\n• Experience"
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
   INTENTS
========================= */

// GREETING
Chatbot.addIntent({
  name: "Greeting",
  triggers: ["hi", "hello", "hey"],
  examples: ["hi", "hello", "hey there"],
  response:
    "Hey! 👋 I’m Vishesh Malik’s portfolio assistant.\n\n" +
    "You can ask me about Devlog, projects, skills, or experience.\n\n" +
    "Try typing 'devlog' 👀"
});

// ABOUT
Chatbot.addIntent({
  name: "About Me",
  triggers: ["who", "yourself", "about you"],
  examples: ["who are you", "tell me about yourself"],
  response:
    "I’m Vishesh Malik, a full-stack developer and builder focused on creating real-world products.\n\n" +
    "I’m currently building Devlog, a platform for developers, and serve as Vice President of Avishkaar, leading tech initiatives and student projects."
});

// DEVLOG (MAIN PROJECT)
Chatbot.addIntent({
  name: "Devlog",
  triggers: ["devlog", "platform", "developer platform"],
  examples: ["what is devlog", "tell me about devlog"],
  response:
    "Devlog is a platform I’m building for developers to share, explore, and showcase projects and ideas.\n\n" +
    "It focuses on creating a clean and engaging space for developers to discover work and express their own.\n\n" +
    "Check it out here:\nhttps://devlog-sand.vercel.app/"
});

// PROJECTS
Chatbot.addIntent({
  name: "Projects",
  triggers: ["projects", "portfolio", "work"],
  examples: ["projects", "your work"],
  response:
    "Here are some of my key projects:\n\n" +
    "• Devlog – Developer platform (ongoing)\n" +
    "• CineScope – Full-stack movie app\n" +
    "• E-commerce Platform (React)\n" +
    "• Face Recognition System (Python)\n\n" +
    "Type 'devlog' to learn more about my main project."
});

// SKILLS
Chatbot.addIntent({
  name: "Skills",
  triggers: ["skills", "technologies", "tech stack"],
  examples: ["skills", "tech stack"],
  response:
    "Technical Skills:\n" +
    "• JavaScript, Python, Java\n" +
    "• Next.js, React, Firebase\n" +
    "• MySQL, REST APIs\n" +
    "• UI/UX (Figma)\n\n" +
    "Strong focus on building scalable web applications."
});

// FRONTEND
Chatbot.addIntent({
  name: "Frontend",
  triggers: ["frontend", "react", "ui"],
  examples: ["frontend", "react skills"],
  response:
    "I build fast, responsive frontends using React and Next.js with clean architecture and modern UI practices."
});

// BACKEND
Chatbot.addIntent({
  name: "Backend",
  triggers: ["backend", "api", "server"],
  examples: ["backend", "api work"],
  response:
    "Backend experience includes REST APIs, database management (MySQL), and building scalable application logic."
});

// LEADERSHIP
Chatbot.addIntent({
  name: "Leadership",
  triggers: ["avishkaar", "club", "leadership"],
  examples: ["what is avishkaar", "your role"],
  response:
    "I serve as the Vice President of Avishkaar, the innovation club at my university.\n\n" +
    "I lead technical initiatives, organize hackathons, and mentor students in building real-world projects."
});

// EDUCATION
Chatbot.addIntent({
  name: "Education",
  triggers: ["education", "college", "degree"],
  examples: ["education", "college"],
  response:
    "B.Tech in Computer Science & Engineering\n" +
    "IIMT University, Meerut\n\n" +
    "Focused on DSA, OOP, and real-world project development."
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
    "I’m open to software engineering opportunities, collaborations, and building impactful products.\n\n" +
    "I enjoy working on real-world projects and developer-focused platforms."
});

// CONTACT
Chatbot.addIntent({
  name: "Contact",
  triggers: ["contact", "email"],
  examples: ["contact", "email"],
  response:
    "Email: visheshmalik.dev@gmail.com\n" +
    "You can also connect via LinkedIn and GitHub from the portfolio."
});

// CHATBOT
Chatbot.addIntent({
  name: "Chatbot",
  triggers: ["chatbot"],
  examples: ["chatbot"],
  response:
    "This chatbot is a custom-built feature in my portfolio.\n\n" +
    "It uses structured intent matching and is designed to be scalable and user-friendly."
});

// THANKS
Chatbot.addIntent({
  name: "Thanks",
  triggers: ["thanks", "thank"],
  examples: ["thanks"],
  response: "You’re welcome! 😊"
});
