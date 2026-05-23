// data/archiveData.ts

// ==========================================
// 1. Structural Interfaces
// ==========================================

export interface LifeEvent {
  id: string;
  slug: string;        // Used for clean URL routes like: /timeline/celestra-hackathon
  date: string;
  title: string;
  category: "Academic" | "Competition" | "Project" | "Milestone";
  description: string;
  link?: string;
  images?: string[];   // Relative paths to your public folder gallery images
}

export interface Project {
  id: string;
  slug: string;        // Used for clean URL routes like: /projects/melanosense
  title: string;
  category: "Machine Learning" | "Deep Learning" | "Embedded Systems" | "Software";
  description: string;
  highlightMetric?: string;
  detailedDocumentation?: string; 
  pdfLink?: string;    // Link to downloadable PDFs in public/documents/
  tags: string[];
  githubUrl?: string;
  image?:string;
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image?: string;
  link?: string;
}

// ==========================================
// 2. Clear Database Arrays
// ==========================================

// THE TIMELINE SECTION: Your chronological story log ("When did it happen?")
export const recentEvents: LifeEvent[] = [
  {
    id: "dna-hackathon",
    slug: "dna-hackathon",
    date: "May 2026",
    title: "Competed in DNA Hack For Health",
    category: "Competition",
    description: "Developed ChestVision AI, a prescreening tool for early detection of Tuberculosis and pneumonia from chest-X-ray images. Joined a brilliant team at Chittagong Medical College to build a health-tech prototype within a 48-hour sprint.",
    images: ["/gallery/dna_hack/IMG-20260507-WA0014.jpg"]
     //
  },
  {
    id: "celestra-2026",
    slug: "celestra-hackathon",
    date: "March 2026",
    title: "Pitched Melanosense at Celestra '26",
    category: "Competition",
    description: "Traveled to the military institute's BME club competition (MIST) to present our custom healthcare web app platform designed to act as an early prescreening interface for skin cancer.",
    images: [
      "/gallery/celestra/motion_photo_1335720972593701001-2.jpg", 
      "/gallery/celestra/motion_photo_2370970523713160144-2.jpg"
    ] //
  }
];

// THE PROJECTS SECTION: Your technical engine codes ("What did you build/how does it work?")
export const featuredProjects: Project[] = [
  {
    id: "chestvision-ai",
    slug: "chestvision-ai",
    title: "ChestVision AI: Screening Tool",
    category: "Deep Learning",
    description: "A machine learning prescreening workflow deployed to detect symptoms of Tuberculosis and pneumonia from digital chest X-ray matrices.",
    highlightMetric: "DNA Hackathon '26",
    detailedDocumentation: "ChestVision AI uses deep learning architectures trained on standard radiological chest inputs. The system evaluates dense feature fields to flag anomalies indicative of pulmonary disease, offering a rapid diagnostic support framework.",
    pdfLink: "/documents/ChestVisionAI_Technical_Documentation.pdf", // 👈 ACTION: Change this to your exact filename inside public/documents/
    tags: ["Python", "Deep Learning", "Computer Vision", "Medical Imaging"],
    githubUrl: "https://github.com/badhon7399/CMC"
    
  },
  {
    id: "melanosense-app",
    slug: "melanosense",
    title: "Melanosense: Skin Cancer Classifier",
    category: "Machine Learning",
    description: "An early screening web application framework designed to identify high-risk malignant melanoma from dermoscopic image inputs.",
    highlightMetric: "Celestra Pitch", //
    detailedDocumentation: "Melanosense was built to bring affordable screening tools to patients. It uses fine-tuned image processing pipelines to segment lesion boundaries, feeding clean arrays to a lightweight classifier backend built for low-latency scoring.",
    //pdfLink: "/documents/melanosense-deck.pdf", //
    tags: ["Python", "Computer Vision", "Image Processing", "Healthcare Tech"], //
    githubUrl: "https://github.com/prayangshuuu/MelanoSense",
    image: "/gallery/celestra/motion_photo_1335720972593701001-2.jpg"
  //
  }
];

// THE SKILLS HUB: Your context tools
export const skillCategories = [
  {
    title: "Machine Learning & AI",
    skills: ["Python", "Deep Learning", "Computer Vision", "Image Processing", "Natural Language Processing"] //
  },
  {
    title: "Embedded Systems",
    skills: ["C/C++", "Signal Processing", "Matlab"] //
  }
];

// THE TROPHY CABINET: Official recognitions and formal placements
export const academicAchievements: Achievement[] = [
  {
    id: "hackathon-2026",
    title: "DNA Hack For Health Participant",
    issuer: "Chittagong Medical College", //
    date: "May 2026", //
    description: "Collaborated in a fast-paced health-tech innovation hackathon, designing embedded telemetry systems for patient vital tracking.",
    
  }
];