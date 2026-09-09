export interface ProjectItem {
  id: string;
  title: string;
  category: "Machine Learning" | "Full-Stack" | "Geospatial" | "Data Analytics" | "Systems";
  year: string;
  description: string;
  architecture: string;
  tags: string[];
  links: {
    live?: string;
    github?: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  skills: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  credentialId?: string;
  category: string;
  year?: string;
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export const PROFILE = {
  name: "Dionisius Surya Jaya",
  title: "Software Engineer & Machine Learning Developer",
  status: "Available for Software Engineering & ML roles",
  location: "Malang Regency, East Java, Indonesia",
  university: "Universitas Brawijaya",
  major: "Computer Science (Teknik Informatika)",
  gpa: "3.58 / 4.00",
  graduation: "2022 — 2026",
  email: "dionisius.suryajaya@gmail.com",
  linkedin: "https://www.linkedin.com/in/dionisiussj",
  github: "https://github.com/midas79",
  resumeUrl: "/Dionisius_Surya_Jaya_CV.pdf",
  bio: "Undergraduate Computer Science student at Universitas Brawijaya with a focus on building clean, high-performance web products, data processing pipelines, and applied machine learning models. Experienced in leading full-stack implementations, geospatial mapping, and clinical predictive modeling.",
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "medeva",
    title: "Medeva — Clinical Risk Stratification Engine",
    category: "Machine Learning",
    year: "2026",
    description:
      "End-to-end Machine Learning pipeline tailored for BPJS patient clinical health records. Implemented TF-IDF Natural Language Processing classification (Logistic Regression) for Hypertension and unsupervised K-Means clustering for Diabetes Mellitus risk groups.",
    architecture: "Python · Scikit-Learn · Streamlit · NLP Pipeline · K-Means",
    tags: ["Machine Learning", "Python", "Scikit-Learn", "Streamlit", "Pandas", "NLP"],
    links: {
      live: "https://medeva-demo-jbnnczbvk6ucappppedszeab.streamlit.app/",
      github: "https://github.com/midas79",
    },
  },
  {
    id: "webgis",
    title: "Ngasem Village Digital Maps (WebGIS)",
    category: "Geospatial",
    year: "2024",
    description:
      "Interactive digital spatial map platform developed for Ngasem Village administration during MMD FILKOM UB 2024. Designed with ArcGIS and QGIS, delivered via Leaflet.js to streamline public service boundaries and geospatial infrastructure planning.",
    architecture: "Leaflet.js · ArcGIS · QGIS · GeoJSON Vector Layer",
    tags: ["Geospatial", "ArcGIS", "QGIS", "Leaflet.js", "JavaScript"],
    links: {
      live: "https://midas79.github.io/Map-Digital-Desa-Ngasem/",
      github: "https://github.com/midas79",
    },
  },
  {
    id: "anime31",
    title: "Anime31 — Streaming & Catalog Platform",
    category: "Full-Stack",
    year: "2025",
    description:
      "Media catalog and video streaming web platform featuring user-curated watchlists, real-time episode updates, category filtering, and responsive media players.",
    architecture: "React.js · REST API · Tailwind CSS · State Management",
    tags: ["React", "JavaScript", "Tailwind CSS", "REST API"],
    links: {
      live: "https://anime31.vercel.app/",
      github: "https://github.com/midas79",
    },
  },
  {
    id: "moviemate",
    title: "Movie Mate — Social Film Watchlist",
    category: "Full-Stack",
    year: "2025",
    description:
      "Social cinema tracker allowing users to discover trending films, maintain personal ratings and watchlists, and share reviews in real time using TMDB API and Firebase backend.",
    architecture: "Next.js · Firebase Firestore · Tailwind CSS · TMDB API",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "API Integration"],
    links: {
      live: "https://movie-mate-tan.vercel.app/",
      github: "https://github.com/midas79",
    },
  },
  {
    id: "edenerde",
    title: "EdenErde — Sustainable Furniture E-Commerce",
    category: "Full-Stack",
    year: "2025",
    description:
      "High-performance e-commerce platform for home furniture. Features real-time content management via Sanity v6, secure Stripe payment processing, and a persistent shopping cart system. Optimized with Next.js 15 and React 19 for maximum speed and SEO.",
    architecture: "Next.js 15 · Sanity v6 · Stripe · Tailwind CSS · use-shopping-cart",
    tags: ["Next.js", "React 19", "Sanity CMS", "Stripe", "TypeScript", "Tailwind CSS"],
    links: {
      live: "https://eden-erde.vercel.app/",
      github: "https://github.com/midas79/eden-erde",
    },
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "medeva",
    role: "Machine Learning Intern",
    company: "MEDEVA",
    period: "Jan 2026 — May 2026",
    location: "Malang, Indonesia",
    type: "Internship",
    description: [
      "Engineered machine learning risk stratification pipelines for healthcare data registries.",
      "Trained and evaluated NLP classification models for Hypertension and unsupervised clustering for Diabetes Mellitus.",
      "Deployed automated diagnostic web demonstrations on Streamlit for clinical assessment and presentation.",
    ],
    skills: ["Python", "Scikit-Learn", "Machine Learning", "Streamlit", "Pandas", "NLP"],
  },
  {
    id: "bps",
    role: "Data Analyst & Frontend Developer",
    company: "BPS Kota Malang",
    period: "Sep 2025 — Nov 2025",
    location: "Malang, Indonesia",
    type: "Contract",
    description: [
      "Validated, cleaned, and processed municipal statistical datasets across regional agencies.",
      "Engineered responsive web analytics dashboard modules for public civil servants and researchers.",
      "Transformed complex consumer index spreadsheets into readable interactive charts.",
    ],
    skills: ["Data Analysis", "Frontend Development", "JavaScript", "Excel/Stats", "Tailwind CSS"],
  },
  {
    id: "dbs",
    role: "Web Developer",
    company: "Coding Camp powered by DBS Foundation",
    period: "Feb 2025 — Jun 2025",
    location: "Malang, Indonesia",
    type: "Apprenticeship",
    description: [
      "Built responsive, mobile-first web applications in collaborative agile sprint cycles.",
      "Implemented client-side state caching, modular component architectures, and RESTful API integrations.",
      "Adhered to modern web accessibility, code hygiene, and strict Git versioning workflows.",
    ],
    skills: ["React.js", "Next.js", "Front-End Development", "RESTful APIs", "Git"],
  },
  {
    id: "mmd-dev",
    role: "Backend Developer & IT Support",
    company: "MMD FILKOM UB 2024",
    period: "Jul 2024 — Aug 2024",
    location: "Ngasem, East Java, Indonesia",
    type: "Community Tech Initiative",
    description: [
      "Maintained and optimized village administration portal for operational stability.",
      "Digitized village boundary maps using ArcGIS and QGIS to accelerate administrative public service delivery.",
    ],
    skills: ["Backend Support", "ArcGIS", "QGIS", "Leaflet.js", "WebGIS", "GeoJSON"],
  },
  {
    id: "orsen",
    role: "Head of Division Consumption and Health",
    company: "BIOS Filkom UB (ORSEN FILKOM 2024)",
    period: "Aug 2024 — Nov 2024",
    location: "Malang, East Java, Indonesia",
    type: "Organizational Leadership",
    description: [
      "Directed team operations in meal logistics, hygiene monitoring, and emergency health readiness.",
      "Liaised between institutional management, medical volunteers, and external catering vendors.",
    ],
    skills: ["Team Leadership", "Operations Management", "Healthcare Logistics"],
  },
  {
    id: "artropolis",
    role: "Logistics Coordinator",
    company: "Artropolis UB",
    period: "Sep 2023 — Nov 2024",
    location: "Malang, East Java, Indonesia",
    type: "Logistics & Operations",
    description: [
      "Supervised equipment inventories, stage hardware allocation, and sound gear deployment.",
      "Collaborated across event divisions to guarantee smooth technical execution during live exhibitions.",
    ],
    skills: ["Inventory Management", "Logistics", "Cross-Division Teamwork"],
  },
  {
    id: "mmd-event",
    role: "Event Coordinator",
    company: "MMD FILKOM UB 2024",
    period: "Jul 2024 — Aug 2024",
    location: "Ngasem, East Java, Indonesia",
    type: "Community Engagement",
    description: [
      "Organized community workshops and engagement initiatives in cooperation with local village leadership.",
      "Structured event schedules and supervised cross-functional field implementation.",
    ],
    skills: ["Event Planning", "Community Relations", "Public Speaking"],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "git",
    title: "Belajar Dasar Git dengan GitHub",
    issuer: "Dicoding Indonesia",
    category: "DevOps & Tools",
    year: "2024",
  },
  {
    id: "backend-js",
    title: "Belajar Back-End Pemula dengan JavaScript",
    issuer: "Dicoding Indonesia",
    category: "Backend",
    year: "2024",
  },
  {
    id: "frontend-fund",
    title: "Belajar Fundamental Front-End Web Development",
    issuer: "Dicoding Indonesia",
    category: "Frontend",
    year: "2024",
  },
  {
    id: "pemweb-dasar",
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    category: "Web Development",
    year: "2023",
  },
  {
    id: "js-dasar",
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    category: "Languages",
    year: "2024",
  },
  {
    id: "frontend-pemula",
    title: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding Indonesia",
    category: "Frontend",
    year: "2024",
  },
  {
    id: "react",
    title: "Belajar Membuat Aplikasi Web dengan React",
    issuer: "Dicoding Indonesia",
    category: "Frontend",
    year: "2024",
  },
  {
    id: "aws-cloud",
    title: "Cloud Practitioner Essentials (AWS Cloud)",
    issuer: "Dicoding / AWS",
    category: "Cloud",
    year: "2024",
  },
  {
    id: "solid",
    title: "Belajar Prinsip Pemrograman SOLID",
    issuer: "Dicoding Indonesia",
    category: "Software Engineering",
    year: "2024",
  },
  {
    id: "data-ml",
    title: "Belajar Data Analysis & Machine Learning",
    issuer: "Dicoding Indonesia",
    category: "Data & ML",
    year: "2025",
  },
  {
    id: "fin-literacy",
    title: "Financial Literacy 101",
    issuer: "Financial Education",
    category: "Economics",
    year: "2024",
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    group: "Languages & Frameworks",
    items: ["TypeScript", "JavaScript", "Python", "React.js", "Next.js", "Tailwind CSS", "HTML5/CSS3"],
  },
  {
    group: "Backend & Systems",
    items: ["Node.js", "Express.js", "RESTful APIs", "Laravel", "Firebase"],
  },
  {
    group: "Data Science & Machine Learning",
    items: ["Scikit-Learn", "Pandas", "NLP", "K-Means Clustering", "Data Preprocessing", "Streamlit"],
  },
  {
    group: "Geospatial & Tools",
    items: ["ArcGIS", "QGIS", "Leaflet.js", "GeoJSON", "Git / GitHub", "Docker"],
  },
];
