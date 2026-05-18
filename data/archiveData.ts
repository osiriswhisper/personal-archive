// data/archiveData.ts

export interface LifeEvent {
  id: string;
  date: string;
  title: string;
  category: "Academic" | "Competition" | "Project" | "Milestone";
  description: string;
  link?: string;
}

export interface Project {
  id: string;
  title: string;
  category: "Machine Learning" | "Deep Learning" | "Embedded Systems" | "Software";
  description: string;
  highlightMetric?: string;
  tags: string[];
  githubUrl?: string;
}

export const recentEvents: LifeEvent[] = [
  {
    id: "1",
    date: "May 2026",
    title: "Competed in DNA Hack For Health",
    category: "Competition",
    description: "Developed ChestVision AI , a prescreening tool for early detection of Tuborculosis and pneumonia from chest-xray images ",
  }
];

export const featuredProjects: Project[] = [
  {
    id: "mri-tumor",
    title: "Tumor Classification System",
    category: "Deep Learning",
    description: "Developed an end-to-end medical imaging pipeline fine-tuning a ResNet-50 architecture on MRI datasets. Implemented Grad-CAM for model explainability and evaluated performance using custom confusion matrices.",
    highlightMetric: "94.2% Val Accuracy",
    tags: ["PyTorch", "Computer Vision", "Python", "Kaggle"],
    githubUrl: "#"
  },
  {
    id: "esp32-health",
    title: "IoT Health Monitoring Node",
    category: "Embedded Systems",
    description: "Designed a continuous vital signs tracking system using an ESP32 micro-controller, transmitting sensor telemetry smoothly via MQTT streams.",
    highlightMetric: "Real-time Telemetry",
    tags: ["ESP32", "C++", "MQTT", "IoT"],
    githubUrl: "#"
  }
];
// Add this at the bottom of data/archiveData.ts

export const skillCategories = [
  {
    title: "Machine Learning & AI",
    skills: ["Python","Deep Learning", "Computer Vision","Image Processing","Natural Language Processing"]
  },
  {
    title: "Embedded Systems & IoT",
    skills: [ "C/C++", "Signal Processing", "Matlab", "Arduino", "ESP32"]
  }
];
// Add this at the bottom of data/archiveData.ts

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export const academicAchievements: Achievement[] = [
  {
    id: "hackathon-2026",
    title: "DNA Hack For Health Participant",
    issuer: "Chittagong Medical College",
    date: "May 2026",
    description: "Collaborated in a fast-paced health-tech innovation hackathon, designing embedded telemetry systems for patient vital tracking."
  },
  {
    id: "chem-lab-excellence",
    title: "Analytical Surface Science Lab Commendation",
    issuer: "Academic Department",
    date: "April 2026",
    description: "Successfully executed precision surface characterization modeling using the Zisman method and Young's equation criteria."
  }
];