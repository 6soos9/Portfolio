import { Project, Experience, Education, Certification } from "./types";

export const PERSONAL_INFO = {
  name: "SUJAN A JAIN",
  title: "Full-Stack & Cross-Platform Mobile Developer",
  location: "Bengaluru, India",
  email: "ajainsujan@gmail.com",
  phone: "+91 8310183747",
  linkedin: "https://linkedin.com/in/sujan-a-jain",
  github: "https://github.com/ajainsujan",
  portfolio: "https://ajainsujan.dev",
  summary: "Full-stack and cross-platform mobile developer with hands-on experience building AI-powered web applications and offline-first Flutter apps. Skilled in React, Node.js, Python, Flask, Flutter, and Dart. Strong grasp of REST API design, NLP pipelines, SQLite-based local architecture, and modern UI development. Pursuing MCA at BMSIT. Seeking full-stack or mobile developer roles to build and ship production-ready products."
};

export const SKILL_CATEGORIES = [
  {
    name: "Languages",
    skills: ["Dart", "JavaScript (ES6+)", "Python", "C/C++", "SQL"]
  },
  {
    name: "Mobile Development",
    skills: ["Flutter", "Dart", "sqflite (SQLite)", "Provider", "GoRouter", "flutter_local_notifications"]
  },
  {
    name: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "Flask", "REST APIs", "Flask-SQL Alchemy", "Flask-Login"]
  },
  {
    name: "Databases",
    skills: ["SQLite", "MySQL"]
  },
  {
    name: "AI / ML",
    skills: ["NLP", "TF-IDF", "scikit-learn", "NLTK", "pandas", "NumPy", "LLM Prompt Engineering"]
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Android Studio", "Flutter DevTools", "Postman", "Tableau"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "grit-gym-tracker",
    title: "GRIT – Gym Progress Tracker",
    subtitle: "Cross-Platform Mobile App | Flutter · Dart · SQLite · Provider · GoRouter",
    category: "mobile",
    period: "2026 – Present",
    githubUrl: "https://github.com/ajainsujan/GRIT",
    techStack: ["Flutter", "Dart", "SQLite", "Provider", "GoRouter", "Local Storage"],
    descriptionPoints: [
      "Building a cross-platform Flutter app for gym-goers to log workouts, track lifting progress, and monitor personal records over time.",
      "Fully offline and local-first — all workout data stored on-device using SQLite via sqflite with a clean normalised schema for exercises, sets, reps, and weight history.",
      "State managed with Provider; follows a repository pattern for clean separation between UI, business logic, and data layers.",
      "Custom Flutter UI components including progress charts, PR trackers, and per-exercise history views built with smooth 60fps rendering.",
      "Targets both Android and iOS from a single codebase with no external dependencies or network requirements."
    ],
    graphicSeed: "gym-grit"
  },
  {
    id: "movie-recommendation",
    title: "Movie Recommendation System",
    subtitle: "Full-Stack Web App | Python · Flask · scikit-learn · NLTK · TMDB API",
    category: "web",
    period: "2024",
    githubUrl: "https://github.com/ajainsujan/Movie-Recommendation",
    techStack: ["Python", "Flask", "scikit-learn", "NLTK", "TMDB API", "HTML/CSS/JS", "SQLite"],
    descriptionPoints: [
      "Built an end-to-end web app that recommends movies using content-based filtering and real-time sentiment analysis.",
      "Implemented TF-IDF vectorisation for plot similarity; trained a Naive Bayes sentiment classifier on TMDB user reviews.",
      "REST backend with Flask and SQLite; TMDB API integration for live metadata, posters, and review data.",
      "Precomputed similarity matrices cut recommendation response time to under one second."
    ],
    graphicSeed: "movie-rec"
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "deloitte-simulation",
    role: "Data Analytics Job Simulation",
    company: "Deloitte Australia × Forage",
    period: "Jun 2025",
    descriptionPoints: [
      "Completed a simulated data analytics engagement covering forensic data review and business intelligence reporting.",
      "Built an interactive Tableau dashboard to visualise transaction trends and surface anomalies for stakeholder review.",
      "Used Excel for data classification, pivot analysis, and translating raw data into actionable business conclusions."
    ]
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    institution: "BMS Institute of Technology & Management (BMSIT&M), Bengaluru",
    period: "2025 – 2027",
    details: "Pursuing"
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "REVA University, Bengaluru",
    period: "2025",
    details: "CGPA: 6.77"
  },
  {
    id: "pu",
    degree: "2nd PU",
    institution: "M.E.S B.R. S PU College, Bengaluru",
    period: "2022",
    details: "Score: 81.33%"
  },
  {
    id: "sslc",
    degree: "SSLC",
    institution: "Poorna Prajna Education Centre, Bengaluru",
    period: "2020",
    details: "Score: 87.52%"
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: "cert-1",
    name: "Deloitte Australia Data Analytics Job Simulation",
    issuer: "Forage",
    date: "Jun 2025"
  },
  {
    id: "cert-2",
    name: "Marketing Analytics: Data Predictions & Dashboards",
    issuer: "Coursera",
    date: "Feb 2025"
  },
  {
    id: "cert-3",
    name: "Cloud Computing",
    issuer: "Infosys Springboard",
    date: "Oct 2024"
  },
  {
    id: "cert-4",
    name: "Prompt Engineering for ChatGPT",
    issuer: "Coursera / Vanderbilt University",
    date: "Feb 2024"
  },
  {
    id: "cert-5",
    name: "Burp Suite Deep Dive",
    issuer: "Udemy",
    date: "May 2023"
  },
  {
    id: "cert-6",
    name: "Programming Using C++",
    issuer: "Infosys Springboard",
    date: "May 2023"
  }
];
