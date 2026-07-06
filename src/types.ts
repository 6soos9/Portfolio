export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "mobile" | "web";
  period: string;
  githubUrl?: string;
  techStack: string[];
  descriptionPoints: string[];
  graphicSeed: string; // Used to customize the flat vector illustration per project
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  descriptionPoints: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
