"use client";

import { useState } from "react";

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
    { name: "Belajar Dasar Git dengan GitHub", org: "Dicoding Indonesia", xp: "100 XP", icon: "📦" },
    { name: "Belajar Back-End Pemula dengan JavaScript", org: "Dicoding Indonesia", xp: "250 XP", icon: "⚙️" },
    { name: "Belajar Fundamental Front-End Web Dev", org: "Dicoding Indonesia", xp: "250 XP", icon: "🎨" },
    { name: "Belajar Dasar Pemrograman Web", org: "Dicoding Indonesia", xp: "100 XP", icon: "🌐" },
    { name: "Belajar Dasar Pemrograman JavaScript", org: "Dicoding Indonesia", xp: "150 XP", icon: "💻" },
    { name: "Belajar Membuat Front-End Web untuk Pemula", org: "Dicoding Indonesia", xp: "150 XP", icon: "🚀" },
    { name: "Belajar Membuat Aplikasi Web dengan React", org: "Dicoding Indonesia", xp: "250 XP", icon: "⚛️" },
    { name: "Cloud Practitioner Essentials (AWS Cloud)", org: "Dicoding / AWS", xp: "150 XP", icon: "☁️" },
    { name: "Belajar Prinsip Pemrograman SOLID", org: "Dicoding Indonesia", xp: "150 XP", icon: "🛡️" },
    { name: "Belajar Data Analysis / Machine Learning", org: "Dicoding Indonesia", xp: "200 XP", icon: "📊" },
    { name: "Financial Literacy 101", org: "Financial Education", xp: "150 XP", icon: "💎" },
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
  // Exact 4 Projects
  allProjects: [
    {
      id: "medeva",
      category: "Machine Learning",
      title: "Medeva — Clinical Risk Stratification",
      desc: "End-to-end ML pipeline for PROLANIS BPJS: Logistic Regression + TF-IDF NLP (Hypertension) & K-Means clustering (Diabetes Mellitus). Stateless inference with automated data-drift checks.",
      tags: ["Python", "Scikit-Learn", "Streamlit", "K-Means", "NLP"],
      hours: "320.0 hrs",
      achievements: "18 / 18 (100%)",
      link: "https://medeva-demo-jbnnczbvk6ucappppedszeab.streamlit.app/",
      cta: "Launch Live Demo ↗",
      accent: "#90ba3c",
    },
    {
      id: "webgis",
      category: "Geospatial",
      title: "Village Digital Maps (WebGIS) — MMD FILKOM UB",
      desc: "Digital village maps for Ngasem (Ngajum, Malang) built with ArcGIS & QGIS. Interactive Leaflet WebGIS improving administrative territorial planning and public services.",
      tags: ["ArcGIS", "QGIS", "Leaflet.js", "Geospatial", "GeoJSON"],
      hours: "184.2 hrs",
      achievements: "12 / 12 (100%)",
      link: "https://midas79.github.io/Map-Digital-Desa-Ngasem/",
      cta: "Explore Interactive Map ↗",
      accent: "#57cbde",
    },
    {
      id: "anime31",
      category: "Web App",
      title: "Anime31 — Media Streaming & Catalog Platform",
      desc: "Anime streaming and media catalog showcase featuring curated user watchlists, episode release tracking, category filtering, and responsive video player integration.",
      tags: ["React", "REST API", "Tailwind CSS", "Media Player"],
      hours: "112.4 hrs",
      achievements: "8 / 8 (100%)",
      link: "https://anime31.vercel.app/",
      cta: "Launch Web App ↗",
      accent: "#ff79c6",
    },
    {
      id: "moviemate",
      category: "Web App",
      title: "Movie Mate — Social Cinema Watchlist",
      desc: "Social movie tracking web application enabling cinephiles to discover trending films, curate personal watchlists, log ratings, and exchange recommendations in real time.",
      tags: ["Next.js", "Firebase", "Tailwind CSS", "TMDB API"],
      hours: "98.5 hrs",
      achievements: "10 / 10 (100%)",
      link: "https://movie-mate-tan.vercel.app/",
      cta: "Launch Web App ↗",
      accent: "#ff5555",
    },
  ],
  // Work & Leadership Experiences from CV
  experiences: [
    {
      company: "MEDEVA",
      role: "Machine Learning Intern",
      period: "January 2026 - May 2026 (5 months)",
      location: "Malang, Indonesia",
      type: "Internship · Machine Learning & AI",
      hours: "320 hrs on record",
      desc: "Architecting and training machine learning classification pipelines for health diagnostics. Processing clinical registries, engineering features for predictive scoring, and serving real-time model inferences via interactive web demos.",
      skills: ["Python", "Scikit-Learn", "Machine Learning", "Streamlit", "Pandas", "NLP"],
    },
    {
      company: "BPS Kota Malang",
      role: "Data Analyst & Frontend Developer",
      period: "September 2025 - November 2025 (3 months)",
      location: "Malang, Indonesia",
      type: "Contract · Public Sector Analytics",
      hours: "182 hrs on record",
      desc: "Conducted statistical data validation, regional indicator trend analysis, and engineered frontend web dashboards that enable public civil servants to query complex municipal records with ease.",
      skills: ["Data Analysis", "Frontend Development", "JavaScript", "Excel/Stats", "Tailwind CSS"],
    },
    {
      company: "Coding Camp powered by DBS Foundation",
      role: "Web Developer",
      period: "February 2025 - June 2025 (5 months)",
      location: "Malang, Indonesia",
      type: "Intensive Apprenticeship",
      hours: "210 hrs on record",
      desc: "Developed modern, mobile-first responsive web apps in an agile team workflow. Implemented client-side caching, component modularity, and integration with third-party RESTful services.",
      skills: ["React.js", "Next.js", "Front-End Development", "RESTful APIs", "Git"],
    },
    {
      company: "MMD FILKOM UB 2024",
      role: "Backend Developer and IT Support",
      period: "July 2024 - August 2024 (2 months)",
      location: "Ngasem, East Java, Indonesia",
      type: "Community Tech Initiative",
      hours: "110 hrs on record",
      desc: "Maintained and optimized the village official web portal for administrative stability. Developed a comprehensive digital village map using ArcGIS and QGIS, accelerating public service delivery.",
      skills: ["Backend Support", "ArcGIS", "QGIS", "Leaflet.js", "WebGIS", "Data Geospatial"],
    },
    {
      company: "BIOS Filkom UB",
      role: "Head of Division Consumption and Health (ORSEN FILKOM 2024)",
      period: "August 2024 - November 2024 (4 months)",
      location: "Malang, East Java, Indonesia",
      type: "Organizational Leadership",
      hours: "95 hrs on record",
      desc: "Assisted in managing meal distribution and health services, coordinated team operations, liaised with external vendors and medical teams, ensuring all logistics met high hygiene and safety standards.",
      skills: ["Leadership", "Operations Management", "Healthcare Logistics", "Coordination"],
    },
    {
      company: "Artropolis UB",
      role: "Logistics Coordinator",
      period: "September 2023 - November 2024 (1 year 3 months)",
      location: "Malang, East Java, Indonesia",
      type: "Logistics & Event Operations",
      hours: "160 hrs on record",
      desc: "Supported coordination and logistics planning, managed equipment inventory and distribution, and collaborated across cross-functional divisions to ensure smooth high-capacity event execution.",
      skills: ["Inventory Management", "Logistics", "Problem Solving", "Teamwork"],
    },
    {
      company: "MMD FILKOM UB 2024",
      role: "Event Coordinator",
      period: "July 2024 - August 2024 (2 months)",
      location: "Ngasem, East Java, Indonesia",
      type: "Community Engagement",
      hours: "80 hrs on record",
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
  reviews: [
    {
      author: "Dr. ML Research Lead",
      relation: "Direct Supervisor at MEDEVA",
      recommended: true,
      playtime: "320 hrs on record",
      date: "Posted: 14 April",
      review:
        "Dionisius demonstrates remarkable problem-solving initiative in machine learning. His end-to-end NLP data pipeline and K-Means segmentation for the BPJS dataset was implemented with rigorous mathematical clarity and clean code hygiene. Highly recommended for any ML engineering or full-stack software development role.",
      helpful: 48,
    },
    {
      author: "BPS Kota Malang Division Head",
      relation: "Senior Data Officer",
      recommended: true,
      playtime: "182 hrs on record",
      date: "Posted: 28 November",
      review:
        "Handled complex statistical datasets with precision. His frontend dashboards transformed raw municipal spreadsheets into readable, accessible visuals that executive leadership could immediately utilize. Fast turnaround, great communication, and strong attention to detail.",
      helpful: 34,
    },
    {
      author: "DBS Foundation Coding Camp Mentor",
      relation: "Lead Technical Reviewer",
      recommended: true,
      playtime: "210 hrs on record",
      date: "Posted: 22 June",
      review:
        "Outstanding performance throughout our Web Development curriculum. Dionisius mastered React component lifecycles, state management, and semantic styling with top scores. His code reviews are always constructive and his git commit history is textbook perfect.",
      helpful: 29,
    },
    {
      author: "Head of Ngasem Village Administration",
      relation: "MMD FILKOM UB Stakeholder",
      recommended: true,
      playtime: "110 hrs on record",
      date: "Posted: 18 August",
      review:
        "The digital WebGIS maps created by Dionisius for Ngasem village revolutionized our spatial boundaries and public service tracking. He is a humble, dedicated engineer who genuinely listens to user feedback and delivers tangible community value.",
      helpful: 52,
    },
  ],
  comments: [
    {
      user: "medeva_lead",
      date: "3 days ago",
      text: "+rep top-tier Machine Learning engineer! Fast deliverables and production-grade ML code.",
      avatar: "M",
    },
    {
      user: "bps_analyst_26",
      date: "2 weeks ago",
      text: "+rep very clean frontend code and solid statistical insights. Would love to collaborate again!",
      avatar: "B",
    },
    {
      user: "filkom_peer_ub",
      date: "1 month ago",
      text: "+rep dependable teammate on campus and during MMD Ngasem. Solid leadership in logistics and backend!",
      avatar: "F",
    },
    {
      user: "dbs_code_reviewer",
      date: "2 months ago",
      text: "+rep clean commit history, zero lint errors, verified React professional.",
      avatar: "D",
    },
  ],
};

export default function SteamProfile() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"projects" | "experience" | "badges" | "reviews">("projects");
  const [comments, setComments] = useState(PROFILE.comments);
  const [authorName, setAuthorName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [postStatus, setPostStatus] = useState<string | null>(null);

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
          height: "104px",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          zIndex: 10,
          borderBottom: "1px solid rgba(0,0,0,0.5)",
        }}
      >
        <div
          style={{
            width: "940px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
            <a href="https://store.steampowered.com/" target="_blank" rel="noreferrer">
              <img
                src="/assets/images/community.akamai.steamstatic.com/logo_steam-e0e81271bb.svg"
                alt="STEAM"
                style={{ height: "36px" }}
              />
            </a>
            <nav
              style={{
                display: "flex",
                gap: "16px",
                fontSize: "14px",
                fontWeight: 500,
                textTransform: "uppercase",
              }}
            >
              <a href={PROFILE.github} target="_blank" rel="noreferrer" style={{ color: "#b8b6b4" }}>
                Store / GitHub
              </a>
              <a href="#" style={{ color: "#1a9fff" }}>
                Community
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" style={{ color: "#b8b6b4" }}>
                LinkedIn
              </a>
              <a href={`mailto:${PROFILE.email}`} style={{ color: "#b8b6b4" }}>
                Contact
              </a>
            </nav>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              onClick={copyEmail}
              style={{
                backgroundColor: "#5c7e10",
                color: "#e5e4dc",
                padding: "6px 12px",
                fontSize: "11px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                borderRadius: "2px",
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              <span>{copied ? "Email Copied!" : "Install Steam / Contact Me"}</span>
            </button>
            <span style={{ color: "#b8b6b4", fontSize: "12px" }}>login</span>
            <span style={{ color: "#8f98a0" }}>|</span>
            <span style={{ color: "#b8b6b4", fontSize: "12px" }}>language</span>
          </div>
        </div>
      </header>

      {/* Main Steam Profile Container */}
      <main
        style={{
          width: "min(960px, calc(100% - 32px))",
          margin: "0 auto",
          paddingTop: "32px",
          paddingBottom: "60px",
          position: "relative",
        }}
      >
        {/* Profile Header Card */}
        <section
          style={{
            background: "rgba(15, 21, 30, 0.95)",
            backdropFilter: "blur(12px)",
            borderRadius: "6px",
            padding: "28px",
            display: "flex",
            gap: "32px",
            alignItems: "flex-start",
            marginBottom: "20px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
          }}
        >
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
          <div style={{ flexGrow: 1, minWidth: 0 }}>
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
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#90ba3c",
                  display: "inline-block",
                  flexShrink: 0,
                  boxShadow: "0 0 6px #90ba3c",
                }}
              ></span>
              <span>{PROFILE.headline}</span>
            </div>

            <div style={{ color: "#8f98a0", fontSize: "12px", marginBottom: "16px", lineHeight: 1.6 }}>
              <div>📍 {PROFILE.location}</div>
              <div>🎓 Universitas Brawijaya (Informatics) — GPA 3.58 / 4.00</div>
            </div>

            <div
              style={{
                background: "rgba(0, 0, 0, 0.35)",
                border: "1px solid rgba(255, 255, 255, 0.04)",
                borderLeft: "3px solid #66c0f4",
                borderRadius: "3px",
                padding: "12px 16px",
                marginBottom: "16px",
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
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
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

          {/* Level Circle & Featured Badge - Compact right column */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px", flexShrink: 0 }}>
            {/* Level box */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(0, 0, 0, 0.5)",
                padding: "4px 10px",
                borderRadius: "3px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span style={{ color: "#8f98a0", fontSize: "11px", textTransform: "uppercase", fontWeight: 600 }}>Level</span>
              <div
                style={{
                  border: "2px solid #57cbde",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  color: "#ffffff",
                  fontWeight: "bold",
                  background: "rgba(0, 0, 0, 0.6)",
                  boxShadow: "0 0 8px rgba(87, 203, 222, 0.4)",
                }}
              >
                {PROFILE.level}
              </div>
            </div>

            {/* Badge box */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(0, 0, 0, 0.35)",
                padding: "6px 10px",
                borderRadius: "3px",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <img
                src={PROFILE.badgeIcon}
                alt="Badge"
                style={{ width: "28px", height: "28px" }}
              />
              <div style={{ textAlign: "right" }}>
                <div style={{ color: "#ffffff", fontSize: "11px", fontWeight: "bold", lineHeight: 1.2 }}>
                  {PROFILE.badgeTitle}
                </div>
                <div style={{ color: "#8f98a0", fontSize: "10px" }}>{PROFILE.badgeXP}</div>
              </div>
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
            { id: "reviews" as const, label: `ENDORSEMENTS & REVIEWS (${PROFILE.reviews.length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
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

        {/* Content Layout: 1fr left column + 280px right column */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 280px",
            gap: "16px",
          }}
        >
          {/* Left Column Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* TAB 1: PROJECTS (Exact 4 Portfolio Projects) */}
            {activeTab === "projects" && (
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
                  <span>Software Portfolio Projects ({PROFILE.allProjects.length})</span>
                  <span style={{ fontSize: "11px", color: "var(--online-green)", fontWeight: "normal" }}>All Shipped Works</span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {PROFILE.allProjects.map((proj) => (
                    <div
                      key={proj.id}
                      style={{
                        background: "rgba(10, 15, 23, 0.92)",
                        borderRadius: "3px",
                        padding: "16px",
                        border: "1px solid rgba(66, 85, 106, 0.45)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          flexWrap: "wrap",
                          gap: "6px",
                        }}
                      >
                        <div>
                          <div style={{ fontSize: "15px", color: "#ffffff", fontWeight: "bold" }}>
                            {proj.title}
                          </div>
                          <span
                            style={{
                              fontSize: "10px",
                              color: proj.accent,
                              border: `1px solid ${proj.accent}60`,
                              background: `${proj.accent}15`,
                              padding: "2px 6px",
                              borderRadius: "2px",
                              marginTop: "4px",
                              display: "inline-block",
                              fontWeight: 600,
                            }}
                          >
                            {proj.category}
                          </span>
                        </div>

                        <div style={{ textAlign: "right" }}>
                          <div style={{ fontSize: "12px", color: "#90ba3c", fontFamily: "monospace", fontWeight: "bold" }}>
                            {proj.hours} on record
                          </div>
                          <div style={{ fontSize: "10px", color: "#8f98a0" }}>{proj.achievements}</div>
                        </div>
                      </div>

                      <p style={{ fontSize: "13px", color: "#c6d4df", lineHeight: "1.6" }}>{proj.desc}</p>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          flexWrap: "wrap",
                          gap: "8px",
                          marginTop: "4px",
                          paddingTop: "8px",
                          borderTop: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
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
                            fontSize: "12px",
                            color: "#ffffff",
                            backgroundColor: "var(--btn-bg)",
                            padding: "6px 14px",
                            borderRadius: "2px",
                            fontWeight: 600,
                            boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
                          }}
                        >
                          {proj.cta}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* TAB 2: CAREER EXPERIENCES */}
            {activeTab === "experience" && (
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
                  }}
                >
                  <span>Career Experience & Quest Log ({PROFILE.experiences.length})</span>
                  <span style={{ fontSize: "11px", color: "#8f98a0", fontWeight: "normal" }}>Work & Leadership Roles</span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {PROFILE.experiences.map((exp, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "rgba(10, 15, 23, 0.92)",
                        borderRadius: "3px",
                        padding: "16px",
                        border: "1px solid rgba(66, 85, 106, 0.4)",
                      }}
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

                      <div style={{ fontSize: "11px", color: "#90ba3c", marginBottom: "8px", fontWeight: 500 }}>
                        📍 {exp.location} &nbsp;•&nbsp; {exp.type} &nbsp;•&nbsp; {exp.hours}
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
                      style={{
                        background: "rgba(10, 15, 23, 0.92)",
                        borderRadius: "3px",
                        padding: "16px",
                        border: "1px solid rgba(66, 85, 106, 0.4)",
                        display: "flex",
                        gap: "14px",
                        alignItems: "center",
                      }}
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
                          fontSize: "26px",
                          flexShrink: 0,
                          boxShadow: "0 0 10px rgba(102, 192, 244, 0.15)",
                        }}
                      >
                        {b.icon}
                      </div>
                      <div style={{ flexGrow: 1, minWidth: 0 }}>
                        <div style={{ color: "#ffffff", fontSize: "13px", fontWeight: "bold", lineHeight: 1.3 }}>
                          {b.name}
                        </div>
                        <div style={{ color: "#8f98a0", fontSize: "11px", marginTop: "2px" }}>
                          Issuer: {b.org}
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "6px" }}>
                          <span style={{ color: "var(--text-gold)", fontSize: "11px", fontWeight: "bold", background: "rgba(229, 196, 59, 0.1)", padding: "1px 6px", borderRadius: "2px", border: "1px solid rgba(229, 196, 59, 0.25)" }}>
                            ★ {b.xp}
                          </span>
                          <span style={{ color: "#57cbde", fontSize: "10px" }}>Verified Credential</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* TAB 3: REVIEWS & ENDORSEMENTS */}
            {activeTab === "reviews" && (
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
                  <span>Customer Reviews / Professional Endorsements ({PROFILE.reviews.length})</span>
                  <span style={{ fontSize: "11px", color: "#66c0f4", fontWeight: "normal" }}>Overwhelmingly Positive (100%)</span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {PROFILE.reviews.map((rev, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "rgba(10, 15, 23, 0.92)",
                        borderRadius: "3px",
                        padding: "16px",
                        border: "1px solid rgba(66, 85, 106, 0.4)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          marginBottom: "12px",
                          borderBottom: "1px solid rgba(255,255,255,0.08)",
                          paddingBottom: "10px",
                        }}
                      >
                        <div
                          style={{
                            background: "#214b6e",
                            color: "#66c0f4",
                            width: "38px",
                            height: "38px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "18px",
                            borderRadius: "2px",
                            border: "1px solid rgba(102, 192, 244, 0.3)",
                          }}
                        >
                          👍
                        </div>
                        <div>
                          <div style={{ fontSize: "15px", color: "#ffffff", fontWeight: "bold" }}>
                            Recommended
                          </div>
                          <div style={{ fontSize: "11px", color: "#8f98a0" }}>
                            {rev.playtime} &nbsp;|&nbsp; {rev.relation}
                          </div>
                        </div>
                        <div style={{ marginLeft: "auto", fontSize: "11px", color: "#8f98a0" }}>
                          {rev.date}
                        </div>
                      </div>

                      <p style={{ color: "#d2dce6", fontSize: "13px", lineHeight: "1.65", marginBottom: "12px" }}>
                        &ldquo;{rev.review}&rdquo;
                      </p>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          fontSize: "11px",
                          color: "#8f98a0",
                          borderTop: "1px solid rgba(255,255,255,0.06)",
                          paddingTop: "8px",
                        }}
                      >
                        <div>
                          Review by <strong style={{ color: "#ffffff" }}>{rev.author}</strong>
                        </div>
                        <div>{rev.helpful} people found this review helpful</div>
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
                <span>Comments ({comments.length})</span>
                <span style={{ fontSize: "11px", color: "#8f98a0", fontWeight: "normal" }}>Public Steam Wall</span>
              </div>

              {/* Comment Input Form */}
              <form onSubmit={handlePostComment} style={{ marginBottom: "20px" }}>
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
                      }}
                    >
                      Post Comment ↵
                    </button>
                  </div>
                </div>
              </form>

              {/* Comments List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
                      <span style={{ fontSize: "16px" }}>{b.icon}</span>
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
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "flex", justifyContent: "space-between", color: "#c6d4df" }}
                  >
                    <span>LinkedIn Profile</span>
                    <span style={{ color: "#66c0f4" }}>↗</span>
                  </a>
                </li>
                <li style={{ marginBottom: "8px" }}>
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "flex", justifyContent: "space-between", color: "#c6d4df" }}
                  >
                    <span>GitHub Repositories</span>
                    <span style={{ color: "#66c0f4" }}>↗</span>
                  </a>
                </li>
                <li style={{ marginBottom: "8px" }}>
                  <button
                    onClick={copyEmail}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
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
                    <span>Direct Email</span>
                    <span style={{ color: "#66c0f4" }}>{copied ? "Copied!" : "📋"}</span>
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
        <div
          style={{
            width: "940px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
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
