"use client";

import { useState } from "react";
import {
  MapPin,
  GraduationCap,
  ExternalLink,
  FileText,
  Mail,
  Star,
  MessageSquare,
  Copy,
  Check,
  Send,
  GitBranch,
  Server,
  Layout,
  Globe,
  Code2,
  Terminal,
  Cpu,
  Cloud,
  ShieldCheck,
  BarChart2,
  Coins,
  Sparkles,
} from "lucide-react";

interface Badge {
  name: string;
  org: string;
  xp: string;
  iconType: string;
}

const BADGE_ICONS: Record<string, React.ReactNode> = {
  git: <GitBranch size={22} className="text-[#66c0f4]" />,
  backend: <Server size={22} className="text-[#90ba3c]" />,
  frontend: <Layout size={22} className="text-[#57cbde]" />,
  web: <Globe size={22} className="text-[#66c0f4]" />,
  js: <Code2 size={22} className="text-[#ffd700]" />,
  fe_beginner: <Terminal size={22} className="text-[#57cbde]" />,
  react: <Cpu size={22} className="text-[#61dafb]" />,
  cloud: <Cloud size={22} className="text-[#ff9900]" />,
  solid: <ShieldCheck size={22} className="text-[#22c55e]" />,
  ml: <BarChart2 size={22} className="text-[#a855f7]" />,
  finance: <Coins size={22} className="text-[#eab308]" />,
};

const PROJECT_ICONS: Record<string, React.ReactNode> = {
  ml: <BarChart2 size={40} />,
  web: <Globe size={40} />,
  frontend: <Layout size={40} />,
  react: <Cpu size={40} />,
  backend: <Server size={40} />,
  git: <GitBranch size={40} />,
};

const PROFILE = {
  name: "Dionisius Surya Jaya",
  alias: "dionisiussj",
  level: 42,
  badgeTitle: "Community Leader & ML Engineer",
  badgeXP: "1,337 XP",
  avatarUrl: "/assets/images/avatar_full.jpg",
  avatarFrame: "/assets/images/shared.akamai.steamstatic.com/c447714efa9703c4c0007a8316127c12ea0d32f4.png",
  badgeIcon: "/assets/images/shared.akamai.steamstatic.com/2def078bb9d550e4496e9b8ac1f7bca3d4b1ad99-b783dbdb84.png",
  location: "Malang Regency, East Java, Indonesia",
  headline: "In-Game: Visual Studio Code — Full-Stack & Machine Learning Workspace",
  summary:
    "I am an undergraduate Computer Science student at Universitas Brawijaya (Informatics 2022–2026) with a strong passion for programming and software development. My goal is to become a professional programmer who not only writes clean and efficient code but also builds meaningful, impactful solutions. Constantly seeking opportunities to learn new technologies, refine system architectures, and contribute to production-grade real-world projects.",
  email: "dionisius.suryajaya@gmail.com",
  linkedin: "https://www.linkedin.com/in/dionisiussj",
  github: "https://github.com/midas79",
  topSkills: [
    "WebDev",
    "Front-End Development",
    "Machine Learning & NLP",
    "Backend & APIs",
    "Financial Planning",
    "Geospatial WebGIS",
  ],
  badges: [
    { name: "Belajar Dasar Git dengan GitHub", org: "Dicoding Indonesia", xp: "100 XP", iconType: "git" },
    { name: "Belajar Back-End Pemula dengan JavaScript", org: "Dicoding Indonesia", xp: "250 XP", iconType: "backend" },
    { name: "Belajar Fundamental Front-End Web Dev", org: "Dicoding Indonesia", xp: "250 XP", iconType: "frontend" },
    { name: "Belajar Dasar Pemrograman Web", org: "Dicoding Indonesia", xp: "100 XP", iconType: "web" },
    { name: "Belajar Dasar Pemrograman JavaScript", org: "Dicoding Indonesia", xp: "150 XP", iconType: "js" },
    { name: "Belajar Membuat Front-End Web untuk Pemula", org: "Dicoding Indonesia", xp: "150 XP", iconType: "fe_beginner" },
    { name: "Belajar Membuat Aplikasi Web dengan React", org: "Dicoding Indonesia", xp: "250 XP", iconType: "react" },
    { name: "Cloud Practitioner Essentials (AWS Cloud)", org: "Dicoding / AWS", xp: "150 XP", iconType: "cloud" },
    { name: "Belajar Prinsip Pemrograman SOLID", org: "Dicoding Indonesia", xp: "150 XP", iconType: "solid" },
    { name: "Belajar Data Analysis / Machine Learning", org: "Dicoding Indonesia", xp: "200 XP", iconType: "ml" },
    { name: "Financial Literacy 101", org: "Financial Education", xp: "150 XP", iconType: "finance" },
  ],
  leadShowcase: {
    title: "MEDEVA — Health Risk Stratification System",
    genre: "Machine Learning / Clinical Predictive Diagnostics",
    developer: "MEDEVA & Dionisius Surya Jaya",
    publisher: "Healthcare Analytics Solutions",
    status: "Active Research & Production Pipeline",
    hoursPlayed: "320 hrs",
    achievements: "18 / 18 Unlocked (100%)",
    liveDemo: "https://medeva-demo-jbnnczbvk6ucappppedszeab.streamlit.app/",
    githubRepo: "https://github.com/midas79",
    description:
      "End-to-end Machine Learning pipeline tailored for BPJS patient clinical data. Features automated data cleaning, exploratory data analysis, Natural Language Processing (Logistic Regression) for Hypertension symptom stratification, and unsupervised K-Means clustering for Diabetes Mellitus risk groups.",
    tags: ["Python", "Scikit-Learn", "Streamlit", "Pandas", "NLP", "K-Means", "BPJS HealthTech"],
  },
  // Portfolio Projects
  allProjects: [
    {
      id: "medeva",
      category: "Machine Learning",
      featured: true,
      title: "Medeva — Clinical Risk Stratification",
      desc: "End-to-end ML pipeline for PROLANIS BPJS: Logistic Regression + TF-IDF NLP (Hypertension) & K-Means clustering (Diabetes Mellitus). Stateless inference with automated data-drift checks.",
      tags: ["Python", "Scikit-Learn", "Streamlit", "K-Means", "NLP"],
      metric: "Stateless ML Pipeline",
      impact: "Clinical Decision Support",
      link: "https://medeva-demo-jbnnczbvk6ucappppedszeab.streamlit.app/",
      cta: "Launch Live Demo",
      accent: "#90ba3c",
      icon: "ml",
    },
    {
      id: "webgis",
      category: "Geospatial",
      title: "Village Digital Maps (WebGIS) — MMD FILKOM UB",
      desc: "Digital village maps for Ngasem (Ngajum, Malang) built with ArcGIS & QGIS. Interactive Leaflet WebGIS improving administrative territorial planning and public services.",
      tags: ["ArcGIS", "QGIS", "Leaflet.js", "Geospatial", "GeoJSON"],
      metric: "ArcGIS & QGIS Vector Layer",
      impact: "Public Spatial Planning",
      link: "https://midas79.github.io/Map-Digital-Desa-Ngasem/",
      cta: "Explore Interactive Map",
      accent: "#57cbde",
      icon: "web",
    },
    {
      id: "edenerde",
      category: "Full-Stack",
      title: "EdenErde — Sustainable Furniture E-Commerce",
      desc: "High-performance e-commerce platform for home furniture. Features real-time content management via Sanity v6, secure Stripe payment processing, and a persistent shopping cart system. Built with Next.js 15 and React 19.",
      tags: ["Next.js 15", "React 19", "Sanity CMS", "Stripe", "Tailwind CSS"],
      metric: "Next.js 15 & React 19",
      impact: "E-Commerce & Sanity CMS",
      link: "https://eden-erde.vercel.app/",
      cta: "Launch E-Commerce",
      accent: "#bd93f9",
      icon: "frontend",
    },
    {
      id: "anime31",
      category: "Web App",
      featured: true,
      title: "Anime31 — Media Streaming & Catalog Platform",
      desc: "Anime streaming and media catalog showcase featuring curated user watchlists, episode release tracking, category filtering, and responsive video player integration.",
      tags: ["React", "REST API", "Tailwind CSS", "Media Player"],
      metric: "Full-Featured Web App",
      impact: "User Watchlist & Filtering",
      link: "https://anime31.vercel.app/",
      cta: "Launch Web App",
      accent: "#ff79c6",
      icon: "react",
    },
    {
      id: "moviemate",
      category: "Web App",
      featured: true,
      title: "Movie Mate — Social Cinema Watchlist",
      desc: "Social movie tracking web application enabling cinephiles to discover trending films, curate personal watchlists, log ratings, and exchange recommendations in real time.",
      tags: ["Next.js", "Firebase", "Tailwind CSS", "TMDB API"],
      metric: "Realtime Firebase Store",
      impact: "Social Film Recommendations",
      link: "https://movie-mate-tan.vercel.app/",
      cta: "Launch Web App",
      accent: "#ff5555",
      icon: "web",
    },
    {
      id: "aqi-elm",
      category: "Machine Learning",
      featured: true,
      title: "AQI Prediction — Extreme Learning Machine",
      desc: "Custom Extreme Learning Machine (ELM) classifier built from scratch to predict air quality categories from PM10, SO2, CO, O3, and NO2 pollutant levels in Yogyakarta. Single-pass learning with Moore-Penrose pseudoinverse.",
      tags: ["Python", "ELM", "NumPy", "Scikit-Learn", "Environmental ML"],
      metric: "ELM from Scratch",
      impact: "Air Quality Monitoring",
      link: "https://github.com/midas79/Mini-Projects",
      cta: "View Repository",
      accent: "#4fc3f7",
      icon: "ml",
    },
    {
      id: "imdb-sentiment",
      category: "Machine Learning",
      title: "IMDB Sentiment Analysis — NLP",
      desc: "Binary sentiment classification on 50,000 IMDB movie reviews using TF-IDF n-grams and Logistic Regression. Automated text cleaning, tokenization, stemming, and stopword removal achieve 87.2% accuracy.",
      tags: ["NLP", "TF-IDF", "Logistic Regression", "NLTK", "Python"],
      metric: "87.2% Accuracy",
      impact: "Review Classification",
      link: "https://github.com/midas79/Mini-Projects",
      cta: "View Repository",
      accent: "#a855f7",
      icon: "ml",
    },
    {
      id: "ecommerce-analysis",
      category: "Data Analytics",
      title: "E-Commerce Sales Analysis",
      desc: "Exploratory data analysis of 397,884 transactions (4,338 customers, 3,665 products). Uncovered $8.9M revenue, top-10 customer concentration, seasonal November peaks, and Thursday performance patterns for business optimization.",
      tags: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA"],
      metric: "397K Transactions",
      impact: "Business Intelligence",
      link: "https://github.com/midas79/Mini-Projects",
      cta: "View Repository",
      accent: "#f4bf4f",
      icon: "ml",
    },
  ],
  // Work & Leadership Experiences from CV
  experiences: [
    {
      company: "MEDEVA",
      role: "Machine Learning Intern",
      period: "January 2026 - May 2026 (5 months)",
      location: "Malang, Indonesia",
      type: "Machine Learning & AI",
      desc: "Architecting and training machine learning classification pipelines for health diagnostics. Processing clinical registries, engineering features for predictive scoring, and serving real-time model inferences via interactive web demos.",
      skills: ["Python", "Scikit-Learn", "Machine Learning", "Streamlit", "Pandas", "NLP"],
    },
    {
      company: "BPS Kota Malang",
      role: "Data Analyst & Frontend Developer",
      period: "September 2025 - November 2025 (3 months)",
      location: "Malang, Indonesia",
      type: "Public Sector Data Analytics",
      desc: "Conducted statistical data validation, regional indicator trend analysis, and engineered frontend web dashboards that enable public civil servants to query complex municipal records with ease.",
      skills: ["Data Analysis", "Frontend Development", "JavaScript", "Excel/Stats", "Tailwind CSS"],
    },
    {
      company: "Coding Camp powered by DBS Foundation",
      role: "Web Developer",
      period: "February 2025 - June 2025 (5 months)",
      location: "Malang, Indonesia",
      type: "Full-Stack Web Apprenticeship",
      desc: "Developed modern, mobile-first responsive web apps in an agile team workflow. Implemented client-side caching, component modularity, and integration with third-party RESTful services.",
      skills: ["React.js", "Next.js", "Front-End Development", "RESTful APIs", "Git"],
    },
    {
      company: "MMD FILKOM UB 2024",
      role: "Backend Developer and IT Support",
      period: "July 2024 - August 2024 (2 months)",
      location: "Ngasem, East Java, Indonesia",
      type: "WebGIS & Infrastructure Support",
      desc: "Maintained and optimized the village official web portal for administrative stability. Developed a comprehensive digital village map using ArcGIS and QGIS, accelerating public service delivery.",
      skills: ["Backend Support", "ArcGIS", "QGIS", "Leaflet.js", "WebGIS", "Data Geospatial"],
    },
    {
      company: "BIOS Filkom UB",
      role: "Head of Division Consumption and Health (ORSEN FILKOM 2024)",
      period: "August 2024 - November 2024 (4 months)",
      location: "Malang, East Java, Indonesia",
      type: "Leadership & Healthcare Operations",
      desc: "Assisted in managing meal distribution and health services, coordinated team operations, liaised with external vendors and medical teams, ensuring all logistics met high hygiene and safety standards.",
      skills: ["Leadership", "Operations Management", "Healthcare Logistics", "Coordination"],
    },
    {
      company: "Artropolis UB",
      role: "Logistics Coordinator",
      period: "September 2023 - November 2024 (1 year 3 months)",
      location: "Malang, East Java, Indonesia",
      type: "Logistics & Operational Planning",
      desc: "Supported coordination and logistics planning, managed equipment inventory and distribution, and collaborated across cross-functional divisions to ensure smooth high-capacity event execution.",
      skills: ["Inventory Management", "Logistics", "Problem Solving", "Teamwork"],
    },
    {
      company: "MMD FILKOM UB 2024",
      role: "Event Coordinator",
      period: "July 2024 - August 2024 (2 months)",
      location: "Ngasem, East Java, Indonesia",
      type: "Project Planning & Stakeholder Relations",
      desc: "Planned and organized local community programs, coordinated with village leadership and municipal authorities, and drove active community engagement.",
      skills: ["Event Planning", "Community Relations", "Public Speaking"],
    },
  ],
  education: [
    {
      school: "University of Brawijaya (Universitas Brawijaya)",
      degree: "Bachelor of Computer Science, Informatics",
      period: "July 2022 - July 2026 (Expected Graduation)",
      details:
        "Focus on Software Engineering, Machine Learning, Data Structures & Algorithms, Distributed Databases, and Geospatial Systems. GPA 3.58 / 4.00.",
    },
    {
      school: "SMA Negeri 1 Temanggung",
      degree: "Natural Sciences (MIPA)",
      period: "2019 - 2022",
      details: "Strong academic grounding in mathematics, logical reasoning, and computing fundamentals.",
    },
  ],
  comments: [] as { user: string; date: string; text: string; avatar: string }[],
};

export default function SteamProfile() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"projects" | "experience" | "badges">("projects");
  const [comments, setComments] = useState<{ user: string; date: string; text: string; avatar: string }[]>([]);
  const [authorName, setAuthorName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [postStatus, setPostStatus] = useState<string | null>(null);
  const [projectFilter, setProjectFilter] = useState<string>("Featured");
  const [visibleCount, setVisibleCount] = useState(6);

  const projectCategories = ["Featured", ...Array.from(new Set(PROFILE.allProjects.map((p) => p.category)))];

  const filteredProjects = PROFILE.allProjects.filter((p) => {
    if (projectFilter === "Featured") return p.featured === true;
    return p.category === projectFilter;
  });

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const workExp = PROFILE.experiences.filter((e) =>
    ["Machine Learning", "Data Analyst", "Frontend Developer", "Backend Developer"].some((t) =>
      e.type.includes(t) || e.role.includes("Developer") || e.role.includes("Analyst"),
    ),
  );
  const orgExp = PROFILE.experiences.filter((e) =>
    !["Machine Learning", "Data Analyst", "Frontend Developer", "Backend Developer"].some((t) =>
      e.type.includes(t) || e.role.includes("Developer") || e.role.includes("Analyst"),
    ),
  );

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    const newComment = {
      user: authorName.trim() || "Steam Visitor",
      date: "Just now",
      text: commentText.trim(),
      avatar: (authorName.trim() || "V")[0].toUpperCase(),
    };
    setComments([newComment, ...comments]);
    setCommentText("");
    setAuthorName("");
    setPostStatus("Comment posted successfully!");
    setTimeout(() => setPostStatus(null), 3000);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Steam Top Header Nav */}
      <header
        style={{
          background: "var(--bg-header)",
          minHeight: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 10,
          borderBottom: "1px solid rgba(0,0,0,0.5)",
          padding: "10px 0",
        }}
      >
        <div className="steam-header-inner">
          <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap", justifyContent: "center" }}>
            <a href="https://store.steampowered.com/" target="_blank" rel="noreferrer">
              <img
                src="/assets/images/community.akamai.steamstatic.com/logo_steam-e0e81271bb.svg"
                alt="STEAM"
                style={{ height: "32px" }}
              />
            </a>
            <nav
              style={{
                display: "flex",
                gap: "16px",
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <a href={PROFILE.github} target="_blank" rel="noreferrer" style={{ color: "#c6d4df" }}>
                GitHub
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" style={{ color: "#c6d4df" }}>
                LinkedIn
              </a>
              <a
                href="/Dionisius_Surya_Jaya_CV.pdf"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#66c0f4", display: "inline-flex", alignItems: "center", gap: "4px" }}
              >
                <span>Resume / CV</span>
                <ExternalLink size={12} />
              </a>
              <a href={`mailto:${PROFILE.email}`} style={{ color: "#c6d4df" }}>
                Contact
              </a>
            </nav>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href="/Dionisius_Surya_Jaya_CV.pdf"
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundColor: "rgba(102, 192, 244, 0.15)",
                color: "#66c0f4",
                padding: "6px 12px",
                fontSize: "11px",
                fontWeight: 700,
                borderRadius: "2px",
                border: "1px solid rgba(102, 192, 244, 0.35)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <FileText size={13} />
              <span>VIEW CV</span>
            </a>
            <button
              onClick={copyEmail}
              style={{
                backgroundColor: "#5c7e10",
                color: "#e5e4dc",
                padding: "6px 14px",
                fontSize: "11px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                borderRadius: "2px",
                border: "none",
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              {copied ? <Check size={13} /> : <Mail size={13} />}
              <span>{copied ? "Email Copied!" : "CONTACT / HIRE"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Steam Profile Container */}
      <main className="steam-main-container">
        {/* Profile Header Card */}
        <section className="steam-profile-card rise-in">
          {/* Avatar + Animated Frame */}
          <div
            style={{
              position: "relative",
              width: "166px",
              height: "166px",
              flexShrink: 0,
            }}
          >
            <img
              src={PROFILE.avatarUrl}
              alt={PROFILE.name}
              style={{
                width: "166px",
                height: "166px",
                objectFit: "cover",
                display: "block",
              }}
            />
            <img
              src={PROFILE.avatarFrame}
              alt="Avatar Frame"
              style={{
                position: "absolute",
                top: "-18px",
                left: "-18px",
                width: "202px",
                height: "202px",
                pointerEvents: "none",
                zIndex: 2,
              }}
            />
          </div>

          {/* Profile Main Information */}
          <div style={{ flexGrow: 1, minWidth: 0, width: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px", flexWrap: "wrap" }}>
              <h1
                style={{
                  fontSize: "26px",
                  color: "#ffffff",
                  fontWeight: 400,
                  letterSpacing: "0.3px",
                  lineHeight: 1.2,
                }}
              >
                {PROFILE.name}
              </h1>
              <span
                style={{
                  fontSize: "11px",
                  color: "#66c0f4",
                  background: "rgba(102, 192, 244, 0.15)",
                  padding: "3px 8px",
                  borderRadius: "2px",
                  fontWeight: 500,
                }}
              >
                /{PROFILE.alias}
              </span>
            </div>

            {/* In-Game Status Strip */}
            <div
              className="status-strip"
              style={{
                color: "#90ba3c",
                fontSize: "12px",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "10px",
                lineHeight: 1.4,
              }}
            >
              <span
                className="status-dot"
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#90ba3c",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              ></span>
              <span>{PROFILE.headline}</span>
            </div>

            <div className="meta-lines" style={{ color: "#8f98a0", fontSize: "12px", marginBottom: "16px", lineHeight: 1.6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <MapPin size={13} className="text-[#66c0f4]" />
                <span>{PROFILE.location}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "2px" }}>
                <GraduationCap size={13} className="text-[#66c0f4]" />
                <span>Universitas Brawijaya (Informatics) — GPA 3.58 / 4.00</span>
              </div>
            </div>

            <div
              style={{
                background: "rgba(0, 0, 0, 0.35)",
                border: "1px solid rgba(255, 255, 255, 0.04)",
                borderLeft: "3px solid #66c0f4",
                borderRadius: "3px",
                padding: "12px 16px",
                marginBottom: "16px",
                textAlign: "left",
              }}
            >
              <p
                style={{
                  color: "#c6d4df",
                  fontSize: "13px",
                  lineHeight: 1.65,
                  margin: 0,
                  letterSpacing: "0.01em",
                }}
              >
                {PROFILE.summary}
              </p>
            </div>

            {/* Specialization Tags */}
            <div className="tag-wrap" style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {PROFILE.topSkills.map((sk) => (
                <span
                  key={sk}
                  style={{
                    fontSize: "11px",
                    background: "rgba(102, 192, 244, 0.12)",
                    color: "#a8d8f8",
                    padding: "4px 10px",
                    borderRadius: "2px",
                    border: "1px solid rgba(102, 192, 244, 0.3)",
                    fontWeight: 500,
                  }}
                >
                  {sk}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation Tabs to Switch Main View */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginBottom: "18px",
            borderBottom: "1px solid rgba(102, 192, 244, 0.25)",
            paddingBottom: "10px",
            overflowX: "auto",
          }}
        >
          {[
            { id: "projects" as const, label: `FEATURED PROJECTS (${PROFILE.allProjects.length})` },
            { id: "experience" as const, label: `CAREER EXPERIENCE (${PROFILE.experiences.length})` },
            { id: "badges" as const, label: `BADGES & CERTS (${PROFILE.badges.length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="tab-btn"
              style={{
                padding: "10px 18px",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                background:
                  activeTab === tab.id
                    ? "linear-gradient(180deg, #2a475e 0%, #192837 100%)"
                    : "rgba(18, 26, 36, 0.95)",
                color: activeTab === tab.id ? "#ffffff" : "#8f98a0",
                border:
                  activeTab === tab.id
                    ? "1px solid #66c0f4"
                    : "1px solid rgba(255, 255, 255, 0.08)",
                borderBottom: activeTab === tab.id ? "3px solid #66c0f4" : "3px solid transparent",
                cursor: "pointer",
                borderRadius: "3px 3px 0 0",
                boxShadow:
                  activeTab === tab.id
                    ? "0 4px 12px rgba(0, 0, 0, 0.4), 0 0 10px rgba(102, 192, 244, 0.25)"
                    : "none",
                whiteSpace: "nowrap",
                transition: "all 0.15s ease",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Layout: Responsive Main Grid (1fr 280px on desktop, 1fr on mobile) */}
        <div className="steam-main-grid">
          {/* Left Column Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* TAB 1: PROJECTS (Exact 4 Portfolio Projects) */}
            {activeTab === "projects" && (
              <section
                className="rise-in"
                style={{
                  background: "rgba(20, 27, 38, 0.96)",
                  borderRadius: "4px",
                  padding: "20px",
                  border: "1px solid rgba(102, 192, 244, 0.2)",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.55)",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    color: "#66c0f4",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    fontWeight: 700,
                    marginBottom: "16px",
                    paddingBottom: "8px",
                    borderBottom: "1px solid rgba(102, 192, 244, 0.2)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  <span>Software Portfolio Projects ({filteredProjects.length})</span>
                  <span style={{ fontSize: "11px", color: "var(--online-green)", fontWeight: "normal" }}>
                    {projectFilter === "Featured" ? "Featured / Recent Works" : `${projectFilter} Projects`}
                  </span>
                </div>

                {/* Category Filter Bar */}
                <div
                  style={{
                    display: "flex",
                    gap: "6px",
                    flexWrap: "wrap",
                    marginBottom: "16px",
                    paddingBottom: "12px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {projectCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setProjectFilter(cat);
                        setVisibleCount(6);
                      }}
                      style={{
                        padding: "6px 14px",
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.3px",
                        borderRadius: "2px",
                        cursor: "pointer",
                        border: projectFilter === cat
                          ? "1px solid #66c0f4"
                          : "1px solid rgba(255,255,255,0.08)",
                        background: projectFilter === cat
                          ? "linear-gradient(180deg, #2a475e 0%, #192837 100%)"
                          : "rgba(18, 26, 36, 0.95)",
                        color: projectFilter === cat ? "#ffffff" : "#8f98a0",
                        boxShadow: projectFilter === cat
                          ? "0 0 8px rgba(102, 192, 244, 0.25)"
                          : "none",
                        transition: "all 0.15s ease",
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                    gap: "14px",
                  }}
                >
                  {visibleProjects.map((proj, idx) => (
                    <div
                      key={proj.id}
                      className="stagger-item card-lift"
                      style={
                        {
                          "--i": idx,
                          background: "rgba(10, 15, 23, 0.92)",
                          borderRadius: "3px",
                          padding: "0",
                          border: "1px solid rgba(66, 85, 106, 0.45)",
                          display: "flex",
                          flexDirection: "column",
                          overflow: "hidden",
                        } as React.CSSProperties
                      }
                    >
                      {/* Thumbnail / UI Preview */}
                      <div
                        style={{
                          height: "160px",
                          background: `linear-gradient(135deg, ${proj.accent}30 0%, ${proj.accent}0a 60%, rgba(10,15,23,0.9) 100%)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: proj.accent,
                          borderBottom: `1px solid ${proj.accent}30`,
                          position: "relative",
                        }}
                      >
                        {PROJECT_ICONS[proj.icon] || <Sparkles size={40} />}
                        <span
                          style={{
                            position: "absolute",
                            top: "10px",
                            left: "10px",
                            fontSize: "10px",
                            color: proj.accent,
                            border: `1px solid ${proj.accent}60`,
                            background: `${proj.accent}20`,
                            padding: "2px 8px",
                            borderRadius: "2px",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {proj.category}
                        </span>
                      </div>

                      {/* Body */}
                      <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "10px", flexGrow: 1 }}>
                        <div style={{ fontSize: "15px", color: "#ffffff", fontWeight: "bold", lineHeight: 1.35 }}>
                          {proj.title}
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "6px" }}>
                          <div style={{ fontSize: "12px", color: "#90ba3c", fontFamily: "monospace", fontWeight: "bold" }}>
                            {proj.metric}
                          </div>
                          <div style={{ fontSize: "11px", color: "#8f98a0" }}>{proj.impact}</div>
                        </div>

                        <p style={{ fontSize: "13px", color: "#c6d4df", lineHeight: "1.6" }}>{proj.desc}</p>

                        <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                          {proj.tags.map((t) => (
                            <span
                              key={t}
                              style={{
                                fontSize: "10px",
                                background: "rgba(0,0,0,0.6)",
                                color: "#8f98a0",
                                padding: "2px 8px",
                                borderRadius: "2px",
                                border: "1px solid rgba(255,255,255,0.06)",
                              }}
                            >
                              #{t}
                            </span>
                          ))}
                        </div>

                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            marginTop: "auto",
                            paddingTop: "10px",
                            borderTop: "1px solid rgba(255,255,255,0.06)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "6px",
                            fontSize: "12px",
                            color: "#ffffff",
                            backgroundColor: "var(--btn-bg)",
                            padding: "8px 14px",
                            borderRadius: "2px",
                            fontWeight: 600,
                            boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
                            textDecoration: "none",
                          }}
                        >
                          <span>{proj.cta}</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Load More Button */}
                {visibleCount < filteredProjects.length && (
                  <div style={{ display: "flex", justifyContent: "center", marginTop: "18px" }}>
                    <button
                      onClick={() => setVisibleCount((c) => c + 6)}
                      style={{
                        padding: "10px 24px",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                        cursor: "pointer",
                        borderRadius: "2px",
                        border: "1px solid #66c0f4",
                        background: "linear-gradient(180deg, #2a475e 0%, #192837 100%)",
                        color: "#ffffff",
                        boxShadow: "0 0 10px rgba(102, 192, 244, 0.25)",
                        transition: "all 0.15s ease",
                      }}
                    >
                      Load More ({filteredProjects.length - visibleCount} remaining)
                    </button>
                  </div>
                )}
              </section>
            )}

            {/* TAB 2: CAREER EXPERIENCES */}
            {activeTab === "experience" && (
              <section
                className="rise-in"
                style={{
                  background: "rgba(20, 27, 38, 0.96)",
                  borderRadius: "4px",
                  padding: "20px",
                  border: "1px solid rgba(102, 192, 244, 0.2)",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.55)",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    color: "#66c0f4",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    fontWeight: 700,
                    marginBottom: "16px",
                    paddingBottom: "8px",
                    borderBottom: "1px solid rgba(102, 192, 244, 0.2)",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>💼 Work Experience ({workExp.length})</span>
                  <span style={{ fontSize: "11px", color: "#8f98a0", fontWeight: "normal" }}>Professional & Internships</span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {workExp.map((exp, idx) => (
                    <div
                      key={idx}
                      className="stagger-item card-lift"
                      style={
                        {
                          "--i": idx,
                          background: "rgba(10, 15, 23, 0.92)",
                          borderRadius: "3px",
                          padding: "16px",
                          border: "1px solid rgba(66, 85, 106, 0.4)",
                        } as React.CSSProperties
                      }
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          marginBottom: "6px",
                        }}
                      >
                        <div>
                          <span style={{ fontSize: "15px", color: "#ffffff", fontWeight: "bold" }}>
                            {exp.role}
                          </span>{" "}
                          <span style={{ color: "#66c0f4", fontSize: "13px", fontWeight: 600 }}>@ {exp.company}</span>
                        </div>
                        <span style={{ fontSize: "12px", color: "#8f98a0", fontFamily: "monospace" }}>
                          {exp.period}
                        </span>
                      </div>

                      <div style={{ fontSize: "11px", color: "#90ba3c", marginBottom: "8px", fontWeight: 500, display: "flex", alignItems: "center", gap: "4px" }}>
                        <MapPin size={11} />
                        <span>{exp.location} &nbsp;•&nbsp; {exp.type}</span>
                      </div>

                      <p style={{ fontSize: "13px", color: "#c6d4df", lineHeight: "1.6", marginBottom: "10px" }}>
                        {exp.desc}
                      </p>

                      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                        {exp.skills.map((s) => (
                          <span
                            key={s}
                            style={{
                              fontSize: "11px",
                              background: "rgba(102, 192, 244, 0.12)",
                              color: "#66c0f4",
                              padding: "3px 8px",
                              borderRadius: "2px",
                              border: "1px solid rgba(102, 192, 244, 0.25)",
                              fontWeight: 500,
                            }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Volunteer & Organization Experience */}
                <div
                  style={{
                    marginTop: "20px",
                    fontSize: "14px",
                    color: "#66c0f4",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    fontWeight: 700,
                    marginBottom: "16px",
                    paddingBottom: "8px",
                    borderBottom: "1px solid rgba(102, 192, 244, 0.2)",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>🤝 Volunteer & Organization ({orgExp.length})</span>
                  <span style={{ fontSize: "11px", color: "#8f98a0", fontWeight: "normal" }}>Community & Leadership</span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {orgExp.map((exp, idx) => (
                    <div
                      key={`${exp.company}-${exp.role}`}
                      className="stagger-item card-lift"
                      style={
                        {
                          "--i": idx,
                          background: "rgba(10, 15, 23, 0.92)",
                          borderRadius: "3px",
                          padding: "16px",
                          border: "1px solid rgba(66, 85, 106, 0.4)",
                        } as React.CSSProperties
                      }
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          marginBottom: "6px",
                        }}
                      >
                        <div>
                          <span style={{ fontSize: "15px", color: "#ffffff", fontWeight: "bold" }}>
                            {exp.role}
                          </span>{" "}
                          <span style={{ color: "#66c0f4", fontSize: "13px", fontWeight: 600 }}>@ {exp.company}</span>
                        </div>
                        <span style={{ fontSize: "12px", color: "#8f98a0", fontFamily: "monospace" }}>
                          {exp.period}
                        </span>
                      </div>

                      <div style={{ fontSize: "11px", color: "#90ba3c", marginBottom: "8px", fontWeight: 500, display: "flex", alignItems: "center", gap: "4px" }}>
                        <MapPin size={11} />
                        <span>{exp.location} &nbsp;•&nbsp; {exp.type}</span>
                      </div>

                      <p style={{ fontSize: "13px", color: "#c6d4df", lineHeight: "1.6", marginBottom: "10px" }}>
                        {exp.desc}
                      </p>

                      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                        {exp.skills.map((s) => (
                          <span
                            key={s}
                            style={{
                              fontSize: "11px",
                              background: "rgba(102, 192, 244, 0.12)",
                              color: "#66c0f4",
                              padding: "3px 8px",
                              borderRadius: "2px",
                              border: "1px solid rgba(102, 192, 244, 0.25)",
                              fontWeight: 500,
                            }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* TAB: BADGES & CERTIFICATIONS */}
            {activeTab === "badges" && (
              <section
                className="rise-in"
                style={{
                  background: "rgba(20, 27, 38, 0.96)",
                  borderRadius: "4px",
                  padding: "20px",
                  border: "1px solid rgba(102, 192, 244, 0.2)",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.55)",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    color: "#66c0f4",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    fontWeight: 700,
                    marginBottom: "16px",
                    paddingBottom: "8px",
                    borderBottom: "1px solid rgba(102, 192, 244, 0.2)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>Badges & Industry Certifications ({PROFILE.badges.length})</span>
                  <span style={{ fontSize: "11px", color: "var(--online-green)", fontWeight: "normal" }}>All Verified Badges</span>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "14px" }}>
                  {PROFILE.badges.map((b, i) => (
                    <div
                      key={i}
                      className="stagger-item card-lift"
                      style={
                        {
                          "--i": i,
                          background: "rgba(10, 15, 23, 0.92)",
                          borderRadius: "3px",
                          padding: "16px",
                          border: "1px solid rgba(66, 85, 106, 0.4)",
                          display: "flex",
                          gap: "14px",
                          alignItems: "center",
                        } as React.CSSProperties
                      }
                    >
                      <div
                        style={{
                          width: "52px",
                          height: "52px",
                          background: "rgba(33, 75, 110, 0.35)",
                          border: "1px solid rgba(102, 192, 244, 0.3)",
                          borderRadius: "4px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          boxShadow: "0 0 10px rgba(102, 192, 244, 0.15)",
                        }}
                      >
                        {BADGE_ICONS[b.iconType] || <Sparkles size={22} className="text-[#66c0f4]" />}
                      </div>
                      <div style={{ flexGrow: 1, minWidth: 0 }}>
                        <div style={{ color: "#ffffff", fontSize: "13px", fontWeight: "bold", lineHeight: 1.3 }}>
                          {b.name}
                        </div>
                        <div style={{ color: "#8f98a0", fontSize: "11px", marginTop: "2px" }}>
                          Issuer: {b.org}
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "6px" }}>
                          <span style={{ color: "var(--text-gold)", fontSize: "11px", fontWeight: "bold", background: "rgba(229, 196, 59, 0.1)", padding: "2px 6px", borderRadius: "2px", border: "1px solid rgba(229, 196, 59, 0.25)", display: "inline-flex", alignItems: "center", gap: "3px" }}>
                            <Star size={10} fill="currentColor" />
                            <span>{b.xp}</span>
                          </span>
                          <span style={{ color: "#57cbde", fontSize: "10px" }}>Verified Credential</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Steam Comments Section (Interactive User Commenting) */}
            <section
              style={{
                background: "rgba(20, 27, 38, 0.96)",
                borderRadius: "4px",
                padding: "20px",
                border: "1px solid rgba(102, 192, 244, 0.2)",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.55)",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  color: "#66c0f4",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontWeight: 700,
                  marginBottom: "16px",
                  paddingBottom: "8px",
                  borderBottom: "1px solid rgba(102, 192, 244, 0.2)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <MessageSquare size={14} />
                  <span>Comments ({comments.length})</span>
                </span>
                <span style={{ fontSize: "11px", color: "#8f98a0", fontWeight: "normal" }}>Public Steam Wall</span>
              </div>

              {/* Comment Input Form */}
              <form onSubmit={handlePostComment} style={{ marginBottom: comments.length > 0 ? "20px" : "0" }}>
                <div
                  style={{
                    background: "rgba(10, 15, 23, 0.92)",
                    padding: "16px",
                    borderRadius: "3px",
                    border: "1px solid rgba(66, 85, 106, 0.45)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Your Name / Steam Handle (e.g. John Doe)"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    style={{
                      width: "100%",
                      maxWidth: "320px",
                      background: "rgba(0, 0, 0, 0.6)",
                      border: "1px solid rgba(102, 192, 244, 0.25)",
                      borderRadius: "2px",
                      padding: "8px 12px",
                      color: "#ffffff",
                      fontSize: "12px",
                      outline: "none",
                    }}
                  />
                  <textarea
                    placeholder="Write a comment (+rep, message, recommendation)..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    rows={3}
                    required
                    style={{
                      width: "100%",
                      background: "rgba(0, 0, 0, 0.6)",
                      border: "1px solid rgba(102, 192, 244, 0.25)",
                      borderRadius: "2px",
                      padding: "10px 12px",
                      color: "#ffffff",
                      fontSize: "12px",
                      resize: "vertical",
                      outline: "none",
                      fontFamily: "inherit",
                    }}
                  />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                    {postStatus ? (
                      <span style={{ color: "#90ba3c", fontSize: "12px", fontWeight: 600 }}>{postStatus}</span>
                    ) : (
                      <span style={{ color: "#8f98a0", fontSize: "11px" }}>Comments appear instantly on profile wall</span>
                    )}
                    <button
                      type="submit"
                      style={{
                        backgroundColor: "var(--btn-bg)",
                        color: "#ffffff",
                        padding: "8px 20px",
                        borderRadius: "2px",
                        border: "none",
                        fontSize: "12px",
                        fontWeight: 600,
                        cursor: "pointer",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <Send size={12} />
                      <span>Post Comment</span>
                    </button>
                  </div>
                </div>
              </form>

              {/* Empty state or comments list */}
              {comments.length === 0 ? (
                <div
                  style={{
                    padding: "24px",
                    textAlign: "center",
                    color: "#8f98a0",
                    fontSize: "13px",
                    fontStyle: "italic",
                  }}
                >
                  No comments yet. Be the first to leave a message or recommendation above!
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "16px" }}>
                  {comments.map((cm, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        gap: "12px",
                        background: "rgba(10, 15, 23, 0.9)",
                        padding: "12px 14px",
                        borderRadius: "2px",
                        border: "1px solid rgba(66, 85, 106, 0.3)",
                      }}
                    >
                      <div
                        style={{
                          width: "34px",
                          height: "34px",
                          background: "#2a475e",
                          borderRadius: "2px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#ffffff",
                          fontWeight: "bold",
                          fontSize: "13px",
                          flexShrink: 0,
                          border: "1px solid rgba(102, 192, 244, 0.3)",
                        }}
                      >
                        {cm.avatar}
                      </div>
                      <div style={{ flexGrow: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#ffffff", fontWeight: "bold", fontSize: "12px" }}>
                            {cm.user}
                          </span>
                          <span style={{ color: "#8f98a0", fontSize: "10px" }}>{cm.date}</span>
                        </div>
                        <p style={{ color: "#c6d4df", fontSize: "12px", marginTop: "4px", fontFamily: "monospace", wordBreak: "break-word" }}>
                          {cm.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>

          {/* Right Column / Sidebar */}
          <aside style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Online Status Widget */}
            <div
              style={{
                background: "rgba(20, 27, 38, 0.96)",
                borderRadius: "4px",
                padding: "16px",
                border: "1px solid rgba(102, 192, 244, 0.2)",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div
                style={{
                  fontSize: "16px",
                  color: "var(--online-green)",
                  fontWeight: 600,
                  marginBottom: "4px",
                }}
              >
                Currently Online
              </div>
              <div style={{ fontSize: "12px", color: "#c6d4df", marginBottom: "8px" }}>
                Open to Full-Time / Internship Roles
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "#66c0f4",
                  background: "rgba(10, 15, 23, 0.9)",
                  padding: "8px 10px",
                  borderRadius: "2px",
                  fontFamily: "monospace",
                  wordBreak: "break-all",
                  border: "1px solid rgba(102, 192, 244, 0.2)",
                }}
              >
                {PROFILE.email}
              </div>
            </div>

            {/* Badges & Certifications Showcase */}
            <div
              style={{
                background: "rgba(20, 27, 38, 0.96)",
                borderRadius: "4px",
                padding: "16px",
                border: "1px solid rgba(102, 192, 244, 0.2)",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  color: "#66c0f4",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontWeight: 700,
                  marginBottom: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>Badges & Certs</span>
                <span style={{ color: "#ffffff" }}>{PROFILE.badges.length}</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {PROFILE.badges.map((b, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: "12px",
                      background: "rgba(10, 15, 23, 0.9)",
                      padding: "8px 10px",
                      borderRadius: "2px",
                      border: "1px solid rgba(66, 85, 106, 0.35)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", overflow: "hidden" }}>
                      <div style={{ width: "18px", height: "18px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        {BADGE_ICONS[b.iconType] || <Sparkles size={14} className="text-[#66c0f4]" />}
                      </div>
                      <div style={{ overflow: "hidden" }}>
                        <div style={{ color: "#ffffff", fontSize: "11px", fontWeight: "bold", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {b.name}
                        </div>
                        <div style={{ color: "#8f98a0", fontSize: "10px" }}>{b.org}</div>
                      </div>
                    </div>
                    <span style={{ color: "var(--text-gold)", fontSize: "10px", fontWeight: "bold", marginLeft: "6px" }}>
                      {b.xp}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Inventory Widget */}
            <div
              style={{
                background: "rgba(20, 27, 38, 0.96)",
                borderRadius: "4px",
                padding: "16px",
                border: "1px solid rgba(102, 192, 244, 0.2)",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  color: "#66c0f4",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontWeight: 700,
                  marginBottom: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>Tech Inventory</span>
                <span style={{ color: "#ffffff" }}>18 Items</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                {[
                  "React.js",
                  "Next.js",
                  "Tailwind CSS",
                  "TypeScript",
                  "Python",
                  "Scikit-Learn",
                  "Pandas",
                  "Node.js",
                  "Express.js",
                  "Laravel",
                  "PostgreSQL",
                  "MySQL",
                  "SQLite",
                  "Docker",
                  "ArcGIS",
                  "QGIS",
                  "Leaflet.js",
                  "Git & GitHub",
                ].map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: "11px",
                      background: "rgba(10, 15, 23, 0.9)",
                      color: "#c6d4df",
                      padding: "3px 8px",
                      borderRadius: "2px",
                      border: "1px solid rgba(102, 192, 244, 0.2)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Education Lore */}
            <div
              style={{
                background: "rgba(20, 27, 38, 0.96)",
                borderRadius: "4px",
                padding: "16px",
                border: "1px solid rgba(102, 192, 244, 0.2)",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  color: "#66c0f4",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontWeight: 700,
                  marginBottom: "10px",
                }}
              >
                Education Lore
              </div>
              {PROFILE.education.map((edu, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "8px 0",
                    borderBottom: idx < PROFILE.education.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  }}
                >
                  <div style={{ color: "#ffffff", fontWeight: "bold", fontSize: "12px" }}>
                    {edu.school}
                  </div>
                  <div style={{ color: "#66c0f4", fontSize: "11px" }}>{edu.degree}</div>
                  <div style={{ color: "#8f98a0", fontSize: "10px", marginTop: "2px" }}>
                    {edu.period}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div
              style={{
                background: "rgba(20, 27, 38, 0.96)",
                borderRadius: "4px",
                padding: "16px",
                border: "1px solid rgba(102, 192, 244, 0.2)",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  color: "#66c0f4",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontWeight: 700,
                  marginBottom: "10px",
                }}
              >
                Quick Links
              </div>
              <ul style={{ listStyle: "none", fontSize: "12px" }}>
                <li style={{ marginBottom: "8px" }}>
                  <a
                    href="/Dionisius_Surya_Jaya_CV.pdf"
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#66c0f4", fontWeight: 600 }}
                  >
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                      <FileText size={13} />
                      <span>Download / View CV</span>
                    </span>
                    <ExternalLink size={12} />
                  </a>
                </li>
                <li style={{ marginBottom: "8px" }}>
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#c6d4df" }}
                  >
                    <span>LinkedIn Profile</span>
                    <ExternalLink size={12} className="text-[#66c0f4]" />
                  </a>
                </li>
                <li style={{ marginBottom: "8px" }}>
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#c6d4df" }}
                  >
                    <span>GitHub Repositories</span>
                    <ExternalLink size={12} className="text-[#66c0f4]" />
                  </a>
                </li>
                <li style={{ marginBottom: "8px" }}>
                  <button
                    onClick={copyEmail}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      color: "#c6d4df",
                      background: "none",
                      border: "none",
                      padding: 0,
                      width: "100%",
                      cursor: "pointer",
                      fontSize: "12px",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                      <Mail size={13} />
                      <span>Direct Email</span>
                    </span>
                    <span style={{ color: "#66c0f4" }}>
                      {copied ? <Check size={13} /> : <Copy size={13} />}
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      {/* Steam Footer */}
      <footer
        style={{
          background: "#000000",
          color: "#8b929a",
          padding: "32px 0",
          fontSize: "12px",
          borderTop: "1px solid #363c44",
        }}
      >
        <div className="steam-footer-inner">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #363c44",
              paddingBottom: "16px",
            }}
          >
            <img
              src="/assets/images/community.akamai.steamstatic.com/footerLogo_valve_new-58413ab1ee.png"
              alt="Valve Logo"
              style={{ height: "26px" }}
            />
            <img
              src="/assets/images/community.akamai.steamstatic.com/header_logo-6f7393813c.png"
              alt="Steam Logo"
              style={{ height: "26px" }}
            />
          </div>
          <div>
            &copy; 2026 Dionisius Surya Jaya. All rights reserved. Powered by Next.js & Motiva Sans. Authentic Steam
            Community Profile architecture.
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" style={{ color: "#c6d4df" }}>
              LinkedIn
            </a>{" "}
            |
            <a href={PROFILE.github} target="_blank" rel="noreferrer" style={{ color: "#c6d4df" }}>
              GitHub
            </a>{" "}
            |
            <a href={`mailto:${PROFILE.email}`} style={{ color: "#c6d4df" }}>
              Contact Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
